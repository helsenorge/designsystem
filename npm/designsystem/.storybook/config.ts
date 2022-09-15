import { configure, addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { theme } from '../src/theme';
import './global.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

function createBackgroundColors() {
  const placeholder = '#4A412A';
  let backgroundColors = [
    { name: 'white', value: 'white', default: true },
    { name: 'black', value: 'black' },
  ];
  Object.keys(theme.palette)
    .filter(palette => theme.palette[palette] !== placeholder)
    .map(palette => backgroundColors.push({ name: palette, value: theme.palette[palette] }));
  return backgroundColors;
}

addParameters({
  backgrounds: [...createBackgroundColors()],
});

addDecorator(centered);

configure(loadStories, module);