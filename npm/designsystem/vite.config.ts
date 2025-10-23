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
    // Ensure .d.ts for all entries land in lib/
    dts({
      outDir: OUTPUT_DIRECTORY,
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: OUTPUT_DIRECTORY,
    minify: false,
    sourcemap: true,
    lib: {
      entry: 'index.js',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: entries,
      external: [/.module.scss/, 'react-hook-form', 'vitest'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
        },
      ],
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
          targets: [
            { src: 'src/scss', dest: OUTPUT_DIRECTORY },
            { src: 'src/fonts', dest: OUTPUT_DIRECTORY },
            { src: 'src/components/**/*.module.scss*', dest: OUTPUT_DIRECTORY },
            { src: 'src/components/**/componentdata.json*', dest: OUTPUT_DIRECTORY },
            { src: 'src/components/Icons/AdditionalIconInformation.js', dest: OUTPUT_DIRECTORY },
          ],
          hook: 'writeBundle',
          flatten: false,
        }),
        replace({
          '../npm/designsystem/src/components/': '',
          delimiters: ['', ''],
          preventAssignment: true,
        }),
        visualizer({ gzipSize: true, filename: 'report.html' }),
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
