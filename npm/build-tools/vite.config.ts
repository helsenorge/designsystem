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
      input: {
        index: './src/index.ts',
        copy: './src/vite/copy.ts',
      },
      // Externalize Node.js built-ins for copy.ts
      external: [/^node:/],
      output: {
        format: 'es',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
      plugins: [peerDepsExternal()],
    },
  },
});
