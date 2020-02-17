import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Expander from './Expander';

const stories = storiesOf('Expander', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <Expander>
      <Expander.Header>
        <Expander.Title>{text('Title', 'Title')}</Expander.Title>
      </Expander.Header>
      <Expander.Content>
        <h1>Blablablalba</h1>
        <p>Ipsum lorem larem lurum lerum</p>
      </Expander.Content>
    </Expander>
    <Expander>
      <Expander.Header>
        <Expander.Title>{text('Title', 'Title')}</Expander.Title>
      </Expander.Header>
      <Expander.Content>
        <h1>Blablablalba</h1>
        <p>Ipsum lorem larem lurum lerum</p>
      </Expander.Content>
    </Expander>
    <Expander>
      <Expander.Header>
        <Expander.Title>{text('Title', 'Title')}</Expander.Title>
      </Expander.Header>
      <Expander.Content>
        <h1>Blablablalba</h1>
        <p>Ipsum lorem larem lurum lerum</p>
      </Expander.Content>
    </Expander>
  </div>
));
