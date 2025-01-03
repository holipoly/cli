import { spawn } from 'child_process';
import chalk from 'chalk';
import Enquirer from 'enquirer';
import fs, { access } from 'fs-extra';
import got from 'got';
import { print } from 'graphql';
import { Arguments } from 'yargs';

import {
  AppDelete,
  AppInstall,
  AppsInstallations,
  GetApps,
} from '../generated/graphql.js';
import { Config } from './config.js';
import { isPortAvailable } from './detectPort.js';
import {
  canOpen,
  delay,
  NotHolipolyAppDirectoryError,
  openURL,
  printlnSuccess,
  HolipolyAppInstallError,
} from './util.js';

export interface Manifest {
  name: string;
  permissions: string[];
}

export const doHolipolyAppDelete = async (argv: any) => {
  const headers = await Config.getBearerHeader();

  const { instance, appId: app } = argv;

  const { data }: any = await got
    .post(instance, {
      headers,
      json: {
        query: print(AppDelete),
        variables: { app },
      },
    })
    .json();

  if (data.appDelete.errors.length > 0) {
    return data.appDelete.errors;
  }

  return [];
};

export const doHolipolyAppInstall = async (argv: any) => {
  const { instance } = argv;
  const headers = await Config.getBearerHeader();

  if (!argv.manifestURL) {
    console.log(chalk.green('  Configure your Holipoly App'));
  }

  const { cache } = await Config.get();
  const cachedManifest = cache?.apps?.reverse().shift();

  const { manifestURL } = await Enquirer.prompt<{ manifestURL: string }>({
    type: 'input',
    name: 'manifestURL',
    message: 'Manifest URL',
    skip: !!argv.manifestURL,
    initial: argv.manifestURL || cachedManifest,
  });

  let manifest: Manifest;
  try {
    manifest = await got.get(manifestURL).json();
  } catch {
    console.log(
      chalk.red(
        '\n There was a problem while fetching provided manifest URL\n',
      ),
    );
    process.exit(1);
  }

  const name = argv.appName ?? manifest.name;

  if (!argv.viaDashboard) {
    const { data, errors }: any = await got
      .post(instance, {
        headers,
        json: {
          query: print(AppInstall),
          variables: {
            manifestURL,
            name,
            permissions: manifest.permissions,
          },
        },
      })
      .json();

    // TODO
    if (errors || data.appInstall.errors.length > 0) {
      throw new HolipolyAppInstallError();
    }

    const {
      appInstall: {
        appInstallation: { id },
      },
    } = data;

    let installed = await waitForAppInstallation(argv, id);
    while (!installed) {
      await delay(1000);
      installed = await waitForAppInstallation(argv, id);
    }

    return;
  }

  printlnSuccess(chalk(chalk.bold('Name'), '·', chalk.green(name)));

  // open browser
  console.log('\nOpening the browser...');
  const { instance: domain } = argv;
  const QueryParams = new URLSearchParams({ manifestUrl: manifestURL });
  const url = `https://${domain}/dashboard/apps/install?${QueryParams}`;

  if (!(await canOpen())) {
    console.log('Open the following link in the browser:');
    console.log(chalk.blue(url));
    return;
  }

  console.log(url);
  await openURL(url);
};

const waitForAppInstallation = async (argv: any, id: string) => {
  const headers = await Config.getBearerHeader();

  const { data, errors }: any = await got
    .post(argv.instance, {
      headers,
      json: {
        query: print(AppsInstallations),
      },
    })
    .json();

  // TODO
  if (errors) {
    console.log(errors);
  }

  const { appsInstallations } = data;
  const [app] = appsInstallations.filter((a: any) => a.id === id);

  if (app && app.status === 'PENDING') {
    return false;
  }

  if (app && app.status === 'FAILED') {
    throw new HolipolyAppInstallError(
      `App installation failed - ${app.message}`,
    );
  }

  return true;
};

export const buildManifestURL = (path: string, origin: string) => {
  try {
    const manifestURL = new URL(path, origin);
    return manifestURL.toString();
  } catch {
    throw new Error('The provided manifest URL is invalid');
  }
};

export const fetchHolipolyAppList = async (argv: any) => {
  const headers = await Config.getBearerHeader();

  const { data, errors }: any = await got
    .post(argv.instance, {
      headers,
      json: {
        query: print(GetApps),
      },
    })
    .json();

  // TODO
  if (errors) {
    console.log(errors);
  }

  return data;
};

export const run = async (
  cmd: string,
  params: string[],
  options: Record<string, unknown>,
  log = false,
) => {
  const winSuffix = process.platform === 'win32' ? '.cmd' : '';
  const child = spawn(`${cmd}${winSuffix}`, params, options);
  for await (const data of child.stdout || []) {
    if (log) {
      console.log(data.toString());
    }
  }
  for await (const data of child.stderr || []) {
    console.error(data.toString());
  }
};

export const verifyIsHolipolyAppDirectory = async (argv: any) => {
  const isTunnel = ['tunnel', 'generate', 'deploy'].includes(argv._[1]);

  // check if this is a Next.js app
  const isNodeApp = await fs.pathExists('package.json');
  const isNextApp =
    (await fs.pathExists('next.config.js')) ||
    (await fs.pathExists('next.config.mjs'));

  if (!isTunnel) {
    return {};
  }

  if (!isNextApp || !isNodeApp) {
    throw new NotHolipolyAppDirectoryError(
      `'app ${argv._[1]}' must be run from the directory of your Holipoly app`,
    );
  }

  return {};
};

export const verifyIfHolipolyAppRunning = async (argv: any) => {
  const { port } = argv;

  const isFree = await isPortAvailable(Number(port));
  if (isFree) {
    throw new Error(`No Holipoly App running on port ${port}`);
  }

  return {};
};

export const findHolipolyAppByName = async (
  appName: string,
  argv: Arguments,
) => {
  const {
    apps: { edges: apps },
  } = await fetchHolipolyAppList(argv);

  const byName =
    (name: string) =>
    ({ node }: any) =>
      name === node.name;

  const result = apps.filter(byName(appName)).shift();

  if (result) {
    const {
      node: { id: app },
    } = result;
    return app as string;
  }

  // not found
  return null;
};

export const getFolderName = async (name: string): Promise<string> => {
  let folderName = name;
  while (await dirExists(folderName)) {
    folderName = folderName.concat('-0');
  }
  return folderName;
};

export const dirExists = async (name: string): Promise<boolean> => {
  try {
    await access(name);
    return true;
  } catch (error) {
    return false;
  }
};
