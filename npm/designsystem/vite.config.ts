import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { entries } from './__scripts__/entries';

const OUTPUT_DIRECTORY = 'lib';

function buildExportsFromEntries(entryMap: Record<string, string>): Record<string, unknown> {
  const exp: Record<string, unknown> = {
    '.': { types: './index.d.ts', import: './index.js', require: './index.cjs' },
    './package.json': './package.json',
    './scss/*': './scss/*',
    './fonts/*': './fonts/*',
  };
  for (const [chunkName] of Object.entries(entryMap)) {
    // skip the root entry if it's named "index"
    if (chunkName === 'index') continue;
    exp[`./${chunkName}`] = {
      types: `./${chunkName}.d.ts`,
      import: `./${chunkName}.js`,
    };
  }
  return exp;
}

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
        {
          format: 'cjs',
          entryFileNames: chunk => (chunk.name === 'index' ? 'index.cjs' : '[name].cjs'),
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
        generatePackageJson({
          outputFolder: OUTPUT_DIRECTORY,
          baseContents: ({
            name,
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
            // keep your metadata
            name,
            version,
            description,
            repository,
            homepage,
            author,
            license,
            type: 'module',
            sideEffects,
            dependencies,
            peerDependencies,
            main: './index.cjs',
            module: './index.js',
            types: './index.d.ts',
            exports: buildExportsFromEntries(entries),
          }),
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
