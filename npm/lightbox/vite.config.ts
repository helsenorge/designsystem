import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { entries } from './__scripts__/entries';

const OUTPUT_DIRECTORY = 'lib';

export default defineConfig({
  plugins: [dts()],
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
        generatePackageJson({
          baseContents: ({
            name,
            type,
            description,
            repository,
            homepage,
            version,
            author,
            license,
            dependencies = {},
            peerDependencies = {},
            sideEffects,
          }) => ({
            name,
            type,
            description,
            repository,
            homepage,
            version,
            author,
            license,
            dependencies,
            peerDependencies,
            sideEffects,
          }),
        }),
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
