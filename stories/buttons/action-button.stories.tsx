// import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/html';

const stories = storiesOf('Buttons', module);
// stories.addDecorator(withKnobs);

stories.add('action-button', () => `<hnds-action-button>Hello world!</hnds-action-button>`);