import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Expander, { ExpanderSize } from './Expander';
import Loader from '../Loader';
import { Overlay } from '../Loader/Loader';
import LawBook from '../Icons/LawBook';
import GridExample from '../GridExample';

export default {
  title: 'Components/Expander',
  component: Expander,
  parameters: {
    docs: {
      description: {
        component: 'Expander skjuler detaljinformasjon når den ikke trengs, og gjør den lett tilgjengelig i kontekst når den trengs.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Skjoldbruskkjertelen ligger ved strupehodet på halsen. Den produserer stoffskiftehormonene tyroksin T4 og trijodotyronin T3, som blir ført med blodet til cellene i kroppen. Disse hormonene kontrollerer stoffskiftet.',
    },
    title: {
      control: 'text',
      defaultValue: 'Hva skjer i kroppen',
    },
    size: {
      control: 'select',
      options: ExpanderSize,
      defaultValue: ExpanderSize.small,
    },
    color: {
      control: 'select',
      options: ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'],
      defaultValue: 'blueberry',
    },
    noNestedLine: {
      control: 'boolean',
      defaultValue: false,
    },
    expanded: {
      control: 'boolean',
      defaultValue: false,
    },
    renderChildrenWhenClosed: {
      control: 'boolean',
      defaultValue: false,
    },
    sticky: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Expander>;

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

export const DefaultSmall: ComponentStory<typeof Expander> = (args: any) => (
  <GridExample>
    <p>
      {
        'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
      }
    </p>
    <Expander {...args}>{args.children}</Expander>
    <Expander {...args}>{args.children}</Expander>
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
  </GridExample>
);

export const Large: ComponentStory<typeof Expander> = (args: any) => (
  <GridExample>
    <Expander {...args}>{args.children}</Expander>
  </GridExample>
);

export const WithIcon: ComponentStory<typeof Expander> = (args: any) => (
  <GridExample>
    <Expander {...args} svgIcon={LawBook}>
      {args.children}
    </Expander>
  </GridExample>
);

export const WithLoader: ComponentStory<typeof Expander> = (args: any) => (
  <GridExample>
    <Expander {...args} svgIcon={LawBook}>
      <Loader overlay={Overlay.parent} />
    </Expander>
  </GridExample>
);

export const WithCallback: ComponentStory<typeof Expander> = (args: any) => (
  <GridExample>
    <Expander {...args} svgIcon={LawBook} onExpand={isExpanded => console.log(isExpanded)}>
      <p>Sjekk nettleserkonsollen</p>
    </Expander>
  </GridExample>
);
