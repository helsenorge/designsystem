import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Use built version if USE_BUILT env var is set
const useBuiltVersion = process.env.USE_BUILT === 'true';

export default defineConfig({
  plugins: [react()],
  resolve: useBuiltVersion
    ? {
        alias: {
          '@helsenorge/designsystem-react': path.resolve(__dirname, '../npm/designsystem/lib'),
        },
      }
    : undefined,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'vitest.setup.ts', '**/*.stories.tsx', '**/*.stories.mdx'],
    },
  },
});
