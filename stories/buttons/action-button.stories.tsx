import {storiesOf} from '@storybook/html';
import {withKnobs, select, boolean, text} from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('action-button', () => `
  <hnds-action-button 
    disabled=${boolean('disabled', false)}
    variant="${select('variant', ['primary', 'secondary'], 'primary')}">
    ${text('text', 'action-button')}
  </hnds-action-button>
`);