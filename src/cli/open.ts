import Enquirer from 'enquirer';
import { Arguments, CommandBuilder } from 'yargs';

import { openURL } from '../lib/util.js';
import { useInstanceConnector } from '../middleware/index.js';
import { Options } from '../types.js';

export const command = 'open [resource]';
export const desc = 'Open resource in a browser';

const resources: Record<string, string> = {
  dashboard: '/dashboard',
  api: '/graphql/',
  docs: 'https://docs.holipoly.io/docs/3.x/',
  'docs/api': 'https://docs.holipoly.io/docs/3.x/developer',
  'docs/apps':
    'https://docs.holipoly.io/docs/3.x/developer/extending/apps/quickstart',
  'docs/webhooks':
    'https://docs.holipoly.io/docs/3.x/developer/extending/webhooks/overview',
  'docs/storefront': 'https://github.com/holipoly/storefront',
  'docs/cli': 'https://docs.holipoly.io/docs/3.x/cli',
};

export const builder: CommandBuilder = (_) =>
  _.positional('resource', {
    type: 'string',
    demandOption: true,
    choices: Object.keys(resources),
  })
    .example('holipoly open dashboard', 'Open instance dashboard')
    .example('holipoly open api', 'Open instance GraphQL endpoint')
    .example('holipoly open docs', 'Open Holipoly documentation page');

export const handler = async (argv: Arguments<Options>) => {
  const choices = Object.keys(resources);

  const { resource } = await Enquirer.prompt<{ resource: string }>({
    type: 'select',
    name: 'resource',
    choices,
    message: 'Choose the resource',
    skip: choices.includes(argv.resource as string),
  });

  const path = resources[resource || (argv.resource as string)];

  if (!path.startsWith('https')) {
    const url = await getURL(path, argv);
    await openURL(url);
    return;
  }

  await openURL(path);
};

const getURL = async (path: string, argv: Arguments<Options>) => {
  const _argv = await useInstanceConnector(argv);
  const { instance } = _argv;
  return `${instance}${path}`;
};
