import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';
import sizes from 'rollup-plugin-sizes';
// import sass from 'rollup-plugin-sass';
import sass from 'node-sass';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/js/index.js',
      format: 'umd',
      name: 'workingConfig',
      globals,
      sourcemap: true,
    },
    {file: './dist/js/index.es.js', format: 'es', globals, sourcemap: true},
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
      preprocessor: (content, id) =>
        new Promise((resolve, reject) => {
          const result = sass.renderSync({file: id});
          resolve({code: result.css.toString()});
        }),
      minimize: true,
      plugins: [autoprefixer],
      sourceMap: true,
      extract: './dist/css/helsenorge.min.css',
      extensions: ['.scss'],
    }),
    copy({
      targets: [{src: 'src/styling/**/*.scss', dest: './dist/scss'}],
    }),
    buble(),
    sizes(),
  ],
  external: Object.keys(globals),
};
