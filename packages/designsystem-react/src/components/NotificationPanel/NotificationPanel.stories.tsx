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
  <div style={{width: boolean('Fluid', false) ? '100vw' : 'auto'}}>
    <NotificationPanel
      shadow={boolean('Shadow', false)}
      dismissable={boolean('Dismissable', false)}
      onClick={action('on-click-dismiss')}
      size={select('Size', ['small', 'medium', 'large'], 'large')}
      fluid={boolean('Fluid', false)}
      label={text('Label', '')}
      variant={select('Variant', ['info', 'warn', 'alert', 'crisis'], 'alert')}>
      <p>
        Foreldre har begrenset tilgang til tjenester på vegne av barn mellom 12 og 16 år, og ingen tilgang etter fylte
        16 år.{' '}
        <a target="_blank" href="https://vg.no">
          Les mer om foreldrerepresentasjon.
        </a>
      </p>
    </NotificationPanel>
  </div>
));

stories.add('Simplified (label only)', () => (
  <div style={{width: boolean('Fluid', false) ? '100vw' : '80rem'}}>
    <NotificationPanel
      shadow={boolean('Shadow', false)}
      dismissable={boolean('Dismissable', false)}
      onClick={action('on-click-dismiss')}
      fluid={boolean('Fluid', false)}
      label={text('Label', 'Det har skjedd noe galt. Prøv igjen senere.')}
      variant={select('Variant', ['info', 'warn', 'alert', 'crisis'], 'alert')}
    />
  </div>
));

stories.add('All variants', () => (
  <div className="container">
    <div className="row">
      <div className={select('Columns', ['col-12', 'col-10', 'col-8'], 'col-12')}>
        <NotificationPanel
          shadow={boolean('Shadow', false)}
          dismissable={boolean('Dismissable', false)}
          onClick={action('on-click-dismiss')}
          variant="info"
          label={text('Label', '')}>
          <p>
            På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis
            utilgjenglig i en periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å
            prøve igjen senere. <a href="/">Les mer om dine rettigheter her.</a>
          </p>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={select('Columns', ['col-12', 'col-10', 'col-8'], 'col-12')}>
        <NotificationPanel
          shadow={boolean('Shadow', false)}
          dismissable={boolean('Dismissable', false)}
          onClick={action('on-click-dismiss')}
          variant="warn"
          label={text('Label', '')}>
          <p>
            På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis
            utilgjenglig i en periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å
            prøve igjen senere. <a href="/">Les mer om dine rettigheter her.</a>
          </p>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={select('Columns', ['col-12', 'col-10', 'col-8'], 'col-12')}>
        <NotificationPanel
          shadow={boolean('Shadow', false)}
          dismissable={boolean('Dismissable', false)}
          onClick={action('on-click-dismiss')}
          variant="alert"
          label={text('Label', '')}>
          <p>
            På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis
            utilgjenglig i en periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å
            prøve igjen senere. <a href="/">Les mer om dine rettigheter her.</a>
          </p>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={select('Columns', ['col-12', 'col-10', 'col-8'], 'col-12')}>
        <NotificationPanel
          shadow={boolean('Shadow', false)}
          dismissable={boolean('Dismissable', false)}
          onClick={action('on-click-dismiss')}
          variant="crisis"
          label={text('Label', '')}>
          <p>
            På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis
            utilgjenglig i en periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å
            prøve igjen senere. <a href="/">Les mer om dine rettigheter her.</a>
          </p>
        </NotificationPanel>
      </div>
    </div>
  </div>
));
