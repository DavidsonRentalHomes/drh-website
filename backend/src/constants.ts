import { join } from 'path';

export const PATH_TO_FRONTEND = join(
  __dirname.split('backend')[0],
  'frontend',
  'dist',
  'frontend',
  'browser',
);
