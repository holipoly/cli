import { spawn } from 'child_process';
import path from 'path';
import chalk from 'chalk';
import Debug from 'debug';
import fs from 'fs-extra';
import ora from 'ora';
import { Arguments, CommandBuilder } from 'yargs';

import {
  buildManifestURL,
  doHolipolyAppInstall,
  findHolipolyAppByName,
  verifyIfHolipolyAppRunning,
  verifyIsHolipolyAppDirectory,
} from '../../lib/common.js';
import {
  contentBox,
  delay,
  obfuscateArgv,
  print,
  println,
} from '../../lib/util.js';
import {
  useAppConfig,
  useAvailabilityChecker,
  useInstanceConnector,
  useNgrokBinary,
} from '../../middleware/index.js';
import { AppTunnel } from '../../types.js';

const debug = Debug('holipoly-cli:app:tunnel');

export const command = 'tunnel [port]';
export const desc = 'Expose your Holipoly app remotely with ngrok tunnel';

export const builder: CommandBuilder = (_) =>
  _.positional('port', { type: 'number', default: 3000 })
    .option('name', {
      type: 'string',
      demandOption: false,
      desc: 'The application name for installation in the Dashboard',
    })
    .option('force-install', {
      type: 'boolean',
      default: false,
      desc: 'Force the Holipoly App Install',
    })
    .option('manifest-path', {
      type: 'string',
      default: '/api/manifest',
      desc: 'The application\'s manifest path',
    })
    .example('holipoly app tunnel --name="Custom name"', '')
    .example('holipoly app tunnel --force-install', '')
    .example('holipoly app tunnel --manifest-path="/app/manifest"', '')
    .example(
      'holipoly app tunnel --organization="organization-slug" --environment="env-id-or-name"',
      '',
    );

export const handler = async (argv: Arguments<AppTunnel>): Promise<void> => {
  debug('command arguments: %O', obfuscateArgv(argv));

  const { port } = argv;
  const baseURL = argv.instance!;

  debug('Extracting the Holipoly app name');
  let appName: string;
  if (argv.name) {
    appName = argv.name;
  } else {
    const packagePath = path.join(process.cwd(), 'package.json');
    const content = await fs.readFile(packagePath, 'utf-8');
    appName = JSON.parse(content).name;
  }

  debug(`Starting the tunnel with the port: ${port}`);
  const p = spawn(
    'ngrok',
    ['http', port.toString() || '3000', '--log', 'stderr', '--log', 'stdout'],
    {
      cwd: process.cwd(),
    },
  );

  debug('Get tunnelURL');
  const tunnelURL: string = await new Promise((resolve, _reject) => {
    const err: string[] = [];
    p.stderr.on('data', (chunk: string) => {
      err.push(chunk.toString());
    });

    p.on('close', (exitCode) => {
      if (exitCode !== 0) {
        print(err.join());
        process.exit(1);
      }
    });

    let output = '';
    p.stdout.setEncoding('utf-8');
    p.stdout.on('data', (chunk: string) => {
      output += chunk;

      const result = output.match(/url=(https?:\/\/.*$)/m);
      if (result) resolve(result[1]);
    });
  });

  // General

  const holipolyAppName = `    Holipoly App Name: ${chalk.yellow(appName)}`;
  const holipolyAppURLMessage = `     Holipoly App URL: ${chalk.blue(
    tunnelURL,
  )}`;
  const dashboardMsg = `   Holipoly Dashboard: ${chalk.blue(
    `${baseURL}/dashboard/`,
  )}`;
  const gqlMsg = ` GraphQL Playground: ${chalk.blue(`${baseURL}/graphql/`)}`;

  contentBox(
    `${holipolyAppName}\n${holipolyAppURLMessage}\n\n${dashboardMsg}\n${gqlMsg}`,
    { borderBottom: false },
  );

  await delay(1000);

  const _argv = argv;
  _argv.manifestURL = buildManifestURL(argv.manifestPath, tunnelURL);
  _argv.appName = appName;

  // Find the App ID
  debug('Searching for a Holipoly app named:', appName);
  let app = await findHolipolyAppByName(appName, _argv);
  debug('Holipoly App found?', !app);

  if (!app || argv.forceInstall) {
    const spinner = ora('Installing... \n').start();
    await doHolipolyAppInstall(_argv);
    spinner.stop();

    app = await findHolipolyAppByName(appName, _argv);
  }

  const appDashboardURL = `${baseURL}/dashboard/apps/${encodeURIComponent(
    app || '',
  )}/app`;
  contentBox(`Open app in Dashboard: ${chalk.blue(appDashboardURL)}`);

  println(
    `Tunnel is listening to your local machine on port: ${chalk.blue(port)}\n`,
  );
  print('Press CTRL-C to stop the tunnel');
};

export const middlewares = [
  verifyIsHolipolyAppDirectory,
  verifyIfHolipolyAppRunning,
  useAppConfig,
  useNgrokBinary,
  useInstanceConnector,
  useAvailabilityChecker,
];
