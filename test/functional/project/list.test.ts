import { describe, expect, it } from 'vitest';

import { command, testOrganization, trigger } from '../../helper';

describe('project list', async () => {
  it('returns project list', async () => {
    const params = ['project', 'list', `--organization=${testOrganization}`];

    const { exitCode } = await trigger(command, params, {});
    expect(exitCode).toBe(0);
  });
});
