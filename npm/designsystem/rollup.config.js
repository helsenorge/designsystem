import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import progress from 'rollup-plugin-progress';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const componentsEntries = require('./scripts/componentsEntries');
const inputEntries = Object.assign({ index: pkg.source }, componentsEntries);

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
  {
    input: inputEntries,
    output: [
      {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
      },
    ],

    plugins: [
      terser(),
      progress({
        clearLine: false,
      }),
      peerDepsExternal(),
      typescript(),
      resolve({ extensions }),
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
          { src: 'src/fonts/**/*', dest: 'lib/fonts' },
          { src: 'src/scss/*', dest: 'lib/scss' },
        ],
      }),

      buble({
        transforms: {
          asyncAwait: false,
          dangerousForOf: true,
        },
      }),
    ],
    external: [...Object.keys(globals), './styles.module.scss'],
  },
];
