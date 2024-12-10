import generatePackageJson from 'rollup-plugin-generate-package-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
      input: './src/index.ts',
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
      plugins: [
        peerDepsExternal(),
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
      ],
    },
  },
});
