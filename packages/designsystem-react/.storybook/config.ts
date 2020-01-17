import {configure, addDecorator} from '@storybook/react';
import centered from '@storybook/addon-centered/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// This is temporary disabled and replaced by component <Centered>
addDecorator(centered);

configure(loadStories, module);
