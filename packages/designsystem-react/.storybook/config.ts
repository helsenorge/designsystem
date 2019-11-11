import {configure, addDecorator, addParameters} from '@storybook/react';
import centered from '@storybook/addon-centered';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

 
addDecorator(centered);

addParameters({
  backgrounds: [
    { name: 'white', value: 'white', default: true },
    { name: 'black', value: 'black' },
    { name: 'light-grey', value: 'lightgrey' },
  ],
});

configure(loadStories, module);
