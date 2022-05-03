import { theme } from '../src/theme';

function createBackgroundColors() {
  const placeholder = '#4A412A';
  let backgroundColors = [];
  Object.keys(theme.palette)
    .filter((palette) => theme.palette[palette] !== placeholder)
    .map((palette) => backgroundColors.push({ name: palette, value: theme.palette[palette] }));
  return backgroundColors;
}

export const parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'white',
    values: createBackgroundColors(),
  },
};
