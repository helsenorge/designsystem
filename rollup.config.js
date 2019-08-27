import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';
import sizes from 'rollup-plugin-sizes';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'workingConfig',
      globals,
      sourcemap: true,
    },
    {file: pkg.module, format: 'es', globals, sourcemap: true},
  ],
  plugins: [
    progress({
      clearLine: false, // default: true
    }),
    resolve({extensions}),
    commonjs({
      include: '**/node_modules/**',
      namedExports: {},
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
    postcss({
      // preprocessor: (content, id) =>
      //   new Promise((resolve, reject) => {
      //     const result = sass.renderSync({file: id});
      //     resolve({code: result.css.toString()});
      //   }),
      minimize: true,
      plugins: [autoprefixer],
      sourceMap: true,
      extract: './dist/css/helsenorge.min.css',
      extensions: ['.scss'],
    }),
    copy({
      targets: [{src: 'src/styling/*', dest: './dist/scss'}],
    }),
    buble(),
    sizes(),
  ],
  external: Object.keys(globals),
};
