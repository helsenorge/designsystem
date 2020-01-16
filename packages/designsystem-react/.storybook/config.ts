import {configure, addDecorator, addParameters} from '@storybook/react';
import centered from '@storybook/addon-centered/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// This is temporary disabled and replaced by component <Centered>
addDecorator(centered);

addParameters({
  backgrounds: [
    {name: 'white', value: 'white', default: true},
    {name: 'black', value: 'black'},
    {name: 'light-grey', value: 'lightgrey'},
  ],
});

configure(loadStories, module);
