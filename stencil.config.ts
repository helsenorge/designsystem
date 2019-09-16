import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'helsenorge',
  plugins: [sass()],
  srcDir: 'src/components',
  hashFileNames: false,
  globalStyle: 'src/styling/helsenorge.scss',
  excludeSrc: [
    'src/icons/**/*'
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
