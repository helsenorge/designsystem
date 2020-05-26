import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';
import sizes from 'rollup-plugin-sizes';
import copy from 'rollup-plugin-copy';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const componentsEntries = require('./scripts/componentsEntries');
const inputEntries = Object.assign({index: pkg.source}, componentsEntries);

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
  {
    input: pkg.source,
    plugins: [
      terser(),
      progress({
        clearLine: false,
      }),
      peerDepsExternal(),
      resolve({extensions}),
      commonjs({
        namedExports: {
          '../../node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
        },
      }),
      babel({
        extensions,
        include: ['src/**/*'],
        exclude: '/node_modules/',
      }),
      copy({
        targets: [
          {src: 'src/fonts/**/*', dest: 'dist/fonts'},
          {src: 'src/scss/*', dest: 'dist/scss'},
        ],
      }),
      buble(),
      sizes(),
    ],
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'mlptest',
        globals,
        sourcemap: true,
      },
      {file: pkg.module, format: 'es', globals, sourcemap: true},
    ],
  },
  {
    input: inputEntries,
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
      },
    ],

    plugins: [
      progress({
        clearLine: false,
      }),
      peerDepsExternal(),
      resolve({extensions}),
      commonjs({
        namedExports: {
          '../../node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef'],
        },
      }),
      babel({
        extensions,
        include: ['src/**/*'],
        exclude: '/node_modules/',
      }),

      buble(),
      //sizes(),
    ],
    external: Object.keys(globals),
  },
];
