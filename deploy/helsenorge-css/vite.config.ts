import { resolve } from 'node:path';

import { defineConfig } from 'vite';

/**
 * Bygger helsenorge.css som et selvstendig, hashet asset som deployes til static-domenet.
 * Samme layout som Core-frontend: static/css/helsenorge.[hash].css og fonter i static/media.
 * Kjøres med `vite build --base /core` (se package.json).
 */
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: 'vite-manifest.json',
    sourcemap: false,
    rolldownOptions: {
      input: { 'helsenorge.css': resolve(__dirname, '../../npm/designsystem/src/scss/helsenorge.scss') },
      output: {
        entryFileNames: 'static/js/[name].[hash].js',
        chunkFileNames: 'static/js/[hash].js',
        assetFileNames: ({ name = '' }): string =>
          name.endsWith('.css') ? 'static/css/[name].[hash].[ext]' : 'static/media/[name].[hash].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['if-function', 'import', 'global-builtin'],
      },
    },
  },
});
