import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

import { entries } from './__scripts__/entries';

const OUTPUT_DIRECTORY = 'lib';

export default defineConfig({
  build: {
    outDir: OUTPUT_DIRECTORY,
    sourcemap: true,
    lib: {
      entry: 'index.js',
      formats: ['es'],
    },
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: entries,
      external: [/.module.scss/, /react-day-picker\/dist\/style\.module\.css/],
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
          targets: [
            { src: 'src/components/**/*.module.scss*', dest: OUTPUT_DIRECTORY },
            { src: 'types/**/*.d.ts*', dest: OUTPUT_DIRECTORY },
          ],
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
