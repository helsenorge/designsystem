import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import Expander, { ExpanderSize } from './Expander';
import Loader from '../Loader';
import { Overlay } from '../Loader/Loader';
import LawBook from '../Icons/LawBook';

import '../../scss/typography.module.scss';

const removeStyleProp = (elm: HTMLElement, prop: string) =>
  (elm.style.cssText = elm.style.cssText // "top: 0px; bottom: 50px; text-align: right;"
    .split('; ') // ["top: 0px", "bottom: 50px", "right: 2px", "text-align: right;"]
    .filter(p => !p.startsWith(prop)) // ["top: 0px", "bottom: 50px", "text-align: right;"]
    .join(';'));

setTimeout(() => {
  const el = document.querySelector<HTMLElement>('#root > div');
  if (el) {
    removeStyleProp(el, 'position');
    removeStyleProp(el, 'overflow');
  }
}, 100);

const stories = storiesOf('Expander', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default (small)', () => (
  <div style={{ width: '40rem' }}>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <Expander
      title={'Hva skjer i kroppen'}
      size={select('Size', ExpanderSize, ExpanderSize.small)}
      color={select('Color', ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'], 'blueberry')}
      noNestedLine={boolean('No nested line', false)}
      expanded={boolean('Expanded', false)}
      sticky={boolean('Sticky', true)}
    >
      {text(
        'Content',
        'Skjoldbruskkjertelen ligger ved strupehodet på halsen. Den produserer stoffskiftehormonene tyroksin T4 og trijodotyronin T3, som blir ført med blodet til cellene i kroppen. Disse hormonene kontrollerer stoffskiftet.'
      )}
    </Expander>
    <Expander
      title={'Hvor er julenissen?'}
      size={select('Size', ExpanderSize, ExpanderSize.large)}
      color={select('Color', ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'], 'blueberry')}
      noNestedLine={boolean('No nested line', false)}
      expanded={boolean('Expanded', false)}
      sticky={boolean('Sticky', true)}
    >
      {text(
        'Content',
        'Skjoldbruskkjertelen ligger ved strupehodet på halsen. Den produserer stoffskiftehormonene tyroksin T4 og trijodotyronin T3, som blir ført med blodet til cellene i kroppen. Disse hormonene kontrollerer stoffskiftet.'
      )}
    </Expander>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
  </div>
));

stories.add('Large', () => (
  <div style={{ width: '40rem' }}>
    <Expander
      title={text('Title', 'Hva skjer i kroppen?')}
      size={select('Size', ExpanderSize, ExpanderSize.large)}
      color={select('Color', ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'], 'blueberry')}
      noNestedLine={boolean('No nested line', false)}
      expanded={boolean('Expanded', false)}
    >
      {text(
        'Content',
        'Skjoldbruskkjertelen ligger ved strupehodet på halsen. Den produserer stoffskiftehormonene tyroksin T4 og trijodotyronin T3, som blir ført med blodet til cellene i kroppen. Disse hormonene kontrollerer stoffskiftet.'
      )}
    </Expander>
  </div>
));

stories.add('With icon', () => (
  <div style={{ width: '40rem' }}>
    <Expander
      title={text('Title', 'Hva skjer i kroppen?')}
      size={select('Size', ExpanderSize, ExpanderSize.large)}
      color={select('Color', ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'], 'blueberry')}
      noNestedLine={boolean('No nested line', false)}
      expanded={boolean('Expanded', false)}
      svgIcon={LawBook}
    >
      {text(
        'Content',
        'Skjoldbruskkjertelen ligger ved strupehodet på halsen. Den produserer stoffskiftehormonene tyroksin T4 og trijodotyronin T3, som blir ført med blodet til cellene i kroppen. Disse hormonene kontrollerer stoffskiftet.'
      )}
    </Expander>
  </div>
));
stories.add('With loader', () => (
  <div style={{ width: '40rem' }}>
    <Expander
      title={text('Title', 'Hva skjer i kroppen?')}
      size={select('Size', ExpanderSize, ExpanderSize.large)}
      color={select('Color', ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'], 'blueberry')}
      noNestedLine={boolean('No nested line', false)}
      expanded={boolean('Expanded', false)}
      svgIcon={LawBook}
    >
      <Loader overlay={Overlay.parent} />
    </Expander>
  </div>
));
stories.add('With callback', () => (
  <div style={{ width: '40rem' }}>
    <Expander
      title={text('Title', 'Hva skjer i kroppen?')}
      size={select('Size', ExpanderSize, ExpanderSize.large)}
      color={select('Color', ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'], 'blueberry')}
      noNestedLine={boolean('No nested line', false)}
      expanded={boolean('Expanded', false)}
      svgIcon={LawBook}
      onExpand={isExpanded => console.log(isExpanded)}
    >
      <p>Sjekk nettleserkonsollen</p>
    </Expander>
  </div>
));
