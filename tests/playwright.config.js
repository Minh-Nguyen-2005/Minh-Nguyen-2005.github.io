import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

// Your landing page is plain HTML and CSS, so there's nothing to run — we just
// open the files straight off disk. No server, no ports, no npm run dev.
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default defineConfig({
  testDir: './e2e',
  reporter: 'list',
  use: {
    ...devices['Desktop Chrome'],
    baseURL: `${pathToFileURL(repoRoot).href}/`,
  },
});
