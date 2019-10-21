import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/html';

const stories = storiesOf('Typography', module);
stories.addDecorator(withKnobs);

stories.add('Typography',() => `
    <div>
      <h1>Heading one (H1)</h1>
      <h2>Heading two (H2)</h2>
      <h3>Heading three (H3)</h3>
      <h4>Heading four (H4)</h4>
      <h5>Heading five (H5)</h5>
    </div>
  `,
);
