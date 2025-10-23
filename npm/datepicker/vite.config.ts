import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { entries } from './__scripts__/entries';

const OUTPUT_DIRECTORY = 'lib';

export default defineConfig({
  plugins: [
    dts({
      outDir: 'lib',
      entryRoot: 'src',
      insertTypesEntry: true,
      include: ['src/index.ts', 'src/components/**/index.{ts,tsx}'],
      exclude: ['**/__mocks__/**', '**/__snapshots__/**', '**/*.stories.*', '**/*.test.*'],
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
      external: [/.module.scss/, /react-day-picker\/dist\/style(\.module)?\.css/],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
      plugins: [
        peerDepsExternal(),
        copy({
          targets: [
            { src: '*.md', dest: OUTPUT_DIRECTORY },
            { src: '../../CHANGELOG.md', dest: OUTPUT_DIRECTORY },
          ],
          hook: 'writeBundle',
        }),
        copy({
          targets: [{ src: 'src/components/**/*.module.scss*', dest: OUTPUT_DIRECTORY }],
          hook: 'writeBundle',
          flatten: false,
        }),
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
