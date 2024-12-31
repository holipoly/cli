/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { Arguments } from 'yargs';

import { Options } from '../types.js';
import { getEnvironment } from './environment.js';

const environment = {
  name: 'Test environment',
  slug: 'test-environment',
  domain: 'test-environment.test.holipoly.cloud',
};

const argv = {
  _: ['test'],
  $0: 'holipoly',
  token: 'XYZ',
  organization: 'test_org',
  environment: 'test',
  instance: 'https://test-environment.test.holipoly.cloud/graphql/',
} as Arguments<Options>;

const handlers = [
  rest.get('https://rest.example/path/to/posts', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(environment)),
  ),
  rest.get(
    `https://cloud.holipoly.io/platform/api/organizations/${argv.organization}/environments/${argv.environment}`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(environment)),
  ),
];

const server = setupServer(...handlers);
server.printHandlers();

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('getEnvironment', () => {
  it('should return the environment object from the Cloud API', async () => {
    const response = await getEnvironment(argv);

    expect(response).toEqual(environment);
  });
});

describe('get Holipoly API instance', () => {
  it('should return the environment\'s graphql instance', async () => {
    const { instance } = argv;

    expect(instance).toEqual(
      'https://test-environment.test.holipoly.cloud/graphql/',
    );
  });
});
