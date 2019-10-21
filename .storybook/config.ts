import {configure} from '@storybook/html';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

import { addParameters } from '@storybook/html'; // <- or your storybook framework
 
addParameters({
  backgrounds: [
    { name: 'white', value: 'white', default: true },
    { name: 'black', value: 'black' },
    { name: 'light-grey', value: 'lightgrey' },
  ],
});

configure(loadStories, module);
