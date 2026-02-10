import replace from '@rollup/plugin-replace';
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
      entryRoot: 'src',
      insertTypesEntry: false,
      rollupTypes: false,
      include: [
        'src/components/**/*.{ts,tsx}',
        'src/hooks/**/*.{ts,tsx}',
        'src/hoc/**/*.{ts,tsx}',
        'src/theme/**/*.{ts,tsx}',
        'src/utils/**/*.{ts,tsx}',
        'src/__mocks__/**/*.{ts,tsx}',
        'src/*.{ts,tsx}',
      ],
      exclude: ['**/__snapshots__/**', '**/*.stories.*', '**/*.test.*'],
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
      external: [/.module.scss/, 'react-hook-form', 'vitest', /^motion(\/.*)?$/],
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
      },
    },
  },
});
