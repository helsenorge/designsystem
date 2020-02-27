import {configure, addDecorator} from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import {addParameters} from '@storybook/react';
import {theme} from '../src/theme';
import './global.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

function createBackgroundColors() {
  const placeholder = '#4A412A';
  let backgroundColors = [
    {name: 'white', value: 'white', default: true},
    {name: 'black', value: 'black'},
  ];
  Object.keys(theme.palette)
    .filter(palette => theme.palette[palette] !== placeholder)
    .map(palette => backgroundColors.push({name: palette, value: theme.palette[palette]}));
  return backgroundColors;
}

addParameters({
  backgrounds: [...createBackgroundColors()],
});

// This is temporary disabled and replaced by component <Centered>
addDecorator(centered);

configure(loadStories, module);
