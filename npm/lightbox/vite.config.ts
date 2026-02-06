import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { entries } from './__scripts__/entries';

const OUTPUT_DIRECTORY = 'lib';

export default defineConfig({
  plugins: [
    dts({
      outDir: OUTPUT_DIRECTORY,
      entryRoot: 'src',
      insertTypesEntry: false,
      rollupTypes: false,
      include: ['src/components/**/*.{ts,tsx}', 'src/__mocks__/**/*.{ts,tsx}'],
      exclude: ['**/__snapshots__/**', '**/*.stories.*', '**/*.test.*'],
      aliasesExclude: [/@helsenorge\/designsystem-react/],
    }),
  ],
  build: {
    outDir: OUTPUT_DIRECTORY,
    minify: false,
    sourcemap: true,
    lib: {
      entry: 'index.js',
      formats: ['es'],
    },
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: entries,
      external: [/.module.scss/],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
      plugins: [
        peerDepsExternal(),
        // rollup har begynt å legge til ?used på slutten av styles.module.scss når vi behandler
        // dem som external.
        replace({
          '.module.scss?used': '.module.scss',
          '.module.css?used': '.module.css',
          preventAssignment: true,
        }),
        visualizer({ gzipSize: true, filename: 'report.html' }),
      ],
    },
  },
});
