import { theme } from '../src/theme';
import { breakpoints } from '../src/theme/grid';

import '../src/scss/helsenorge.scss';

function createBackgroundColors() {
  const placeholder = '#4A412A';
  let backgroundColors = [];
  Object.keys(theme.palette)
    .filter(palette => theme.palette[palette] !== placeholder)
    .map(palette => backgroundColors.push({ name: palette, value: theme.palette[palette] }));
  return backgroundColors;
}

function createCustomViewPorts() {
  let viewPorts = [];
  Object.keys(breakpoints).map(bp => {
    const breakpointPixels = breakpoints[bp];
    let type = 'mobile';
    if (breakpointPixels >= breakpoints['lg']) {
      type = 'desktop';
    } else if (breakpointPixels >= breakpoints['md']) {
      type = 'tablet';
    }

    viewPorts.push({
      name: bp,
      styles: {
        width: `${bp === 'xxs' ? 320 : breakpointPixels}px`,
        height: '100%',
        type,
      },
    });
  });

  return viewPorts;
}

export const parameters = {
  backgrounds: {
    default: 'white',
    values: createBackgroundColors(),
  },
  layout: 'centered',
  viewport: {
    viewports: createCustomViewPorts(),
  },
};
