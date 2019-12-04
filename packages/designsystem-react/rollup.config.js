import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';
import sizes from 'rollup-plugin-sizes';
import execute from 'rollup-plugin-execute';

import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

// import postcss from 'rollup-plugin-postcss';
// import autoprefixer from 'autoprefixer';

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
  external: ['classnames', 'styled-components'],
  plugins: [
    progress({
      clearLine: false, // default: true
    }),
    resolve({extensions}),
    commonjs({
      namedExports: {
        cx: ['classNames'],
        '../../node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
      },
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: '/node_modules/',
    }),
    // scss({
    //   output: './dist/css/helsenorge.min.css',
    //   outputStyle: 'compressed',
    // }),
    // copy({
    //   targets: [{src: 'dist/*', dest: '../designsystem-react/dist'}],
    //   copyOnce: true,
    // }),
    execute(["cd ./src/components/ ;find . -name '*.scss' | cpio -pdm  ../../dist/components/"]),
    buble(),
    sizes(),
  ],
  external: Object.keys(globals),
};
