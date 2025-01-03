import Enquirer from 'enquirer';
import got from 'got';
import { Ora } from 'ora';
import { simpleGit } from 'simple-git';

import { Config } from './config.js';

interface RepositoryContent {
  name: string;
  sha: string;
  path: string;
  git_url: string;
  url: string;
  html_url: string;
}

export const getRepositoryContent = async (repoPath: string) => {
  const { github_token: GitHubToken } = await Config.get();

  const data: RepositoryContent[] = await got
    .get(repoPath, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: GitHubToken,
      },
    })
    .json();

  return data;
};

export const getExampleSHA = async (example: string) => {
  const examples = await getRepositoryContent(
    'https://api.github.com/repos/holipoly/app-examples/contents/examples',
  );
  const filtered = examples.filter((e) => e.name === example);

  if (filtered.length === 0) {
    const choices = examples.map((e) => ({
      name: e.sha,
      message: e.name.split('-').join(' '),
    }));

    const { sha } = await Enquirer.prompt<{ sha: string }>({
      type: 'select',
      name: 'sha',
      required: true,
      choices,
      message: 'Choose the app example',
    });

    return sha;
  }

  const { sha } = filtered[0];

  return sha;
};

export const setupGitRepository = async (
  spinner: Ora | undefined = undefined,
): Promise<void> => {
  if (spinner) {
    spinner.text = 'Setting up the Git repository...'; // eslint-disable-line no-param-reassign
  }

  const git = simpleGit();

  // For compatibility with older versions of Git where init --initial-branch is not supported
  // await git.init(['--initial-branch', 'main']);
  await git.init();
  const refCmd = process.platform === 'win32' ? 'update-ref' : 'symbolic-ref';
  await git.raw(refCmd, 'HEAD', 'refs/heads/main');

  await git.add('.');
  await git.commit('Initial commit from Holipoly CLI');
};
