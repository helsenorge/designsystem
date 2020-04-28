import React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import {action} from '@storybook/addon-actions';
import {withKnobs, text, select, boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import NotificationPanel from './NotificationPanel';

const stories = storiesOf('NotificationPanel', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{width: '50rem'}}>
    <NotificationPanel
      shadow={boolean('Shaodw', false)}
      dismissable={boolean('Dismissable', false)}
      onClick={action('on-click-dismiss')}
      variant={select('Variant', ['info', 'warn', 'alert'], 'alert')}>
      <p>
        På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis
        utilgjenglig i en periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å
        prøve igjen senere.
      </p>
    </NotificationPanel>
  </div>
));

stories.add('Default with label', () => (
  <div style={{width: '50rem'}}>
    <NotificationPanel
      shadow={boolean('Shaodw', false)}
      dismissable={boolean('Dismissable', false)}
      onClick={action('on-click-dismiss')}
      label="Her er det noe du må være oppmerksom på"
      variant={select('Variant', ['info', 'warn', 'alert'], 'alert')}>
      <p>
        På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis
        utilgjenglig i en periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å
        prøve igjen senere.
      </p>
    </NotificationPanel>
  </div>
));
