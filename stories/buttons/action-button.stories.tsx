import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('action-button', (): JSX.Element => (
  <hnds-action-button>Hello world!</hnds-action-button>
));