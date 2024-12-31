import Debug from 'debug';

import { Config } from '../lib/config.js';

const debug = Debug('holipoly-cli:logout');

export const command = 'logout';
export const desc = 'Log out from the Holipoly Cloud';

export const handler = (): void => {
  debug('resetting the config at `~/.config/holipoly.json`');
  Config.reset();
};
