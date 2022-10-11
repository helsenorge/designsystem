import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';

import { entries } from './scripts/entries';

const OUTPUT_DIRECTORY = 'lib';

export default defineConfig({
  build: {
    outDir: OUTPUT_DIRECTORY,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: entries,
      external: [/.module.scss/],
      output: {
        format: 'es',
        sourcemap: true,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
      plugins: [
        peerDepsExternal(),
        copy({
          targets: [
            { src: '.npmrc', dest: OUTPUT_DIRECTORY },
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
          preventAssignment: true,
        }),
      ],
    },
  },
});
