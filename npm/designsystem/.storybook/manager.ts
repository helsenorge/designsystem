import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

import { palette } from '../src/theme/palette';

const theme = create({
  base: 'light',
  colorSecondary: palette.blueberry500,
  appBg: palette.blueberry50,
  brandTitle: 'Komponenter',
});

addons.setConfig({
  theme,
});
