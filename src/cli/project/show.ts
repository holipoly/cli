import Debug from 'debug';
import type { Arguments, CommandBuilder } from 'yargs';

import { API, GET } from '../../lib/index.js';
import { obfuscateArgv, showResult } from '../../lib/util.js';
import { interactiveProject } from '../../middleware/index.js';
import { Options } from '../../types.js';

const debug = Debug('holipoly-cli:project:show');

export const command = 'show [project]';
export const desc = 'Show a specific project';

export const builder: CommandBuilder = (_) =>
  _.positional('project', { type: 'string', demandOption: false });

export const handler = async (argv: Arguments<Options>) => {
  debug('command arguments: %O', obfuscateArgv(argv));
  const result = (await GET(API.Project, argv)) as any;
  showResult(result, argv);
};

export const middlewares = [interactiveProject];
