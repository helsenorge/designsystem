import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Expander, { ExpanderSize } from './Expander';
import LawBook from '../Icons/LawBook';
import Loader from '../Loader';
import { Overlay } from '../Loader/Loader';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Expander',
  component: Expander,
  parameters: {
    docs: {
      description: {
        component: 'Expander skjuler detaljinformasjon når den ikke trengs, og gjør den lett tilgjengelig i kontekst når den trengs.',
      },
    },
  },
  args: {
    children:
      'Skjoldbruskkjertelen ligger ved strupehodet på halsen. Den produserer stoffskiftehormonene tyroksin T4 og trijodotyronin T3, som blir ført med blodet til cellene i kroppen. Disse hormonene kontrollerer stoffskiftet.',
    title: 'Hva skjer i kroppen',
    size: ExpanderSize.small,
    color: 'blueberry',
    noNestedLine: false,
    expanded: false,
    renderChildrenWhenClosed: false,
    sticky: true,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ExpanderSize,
    },
    color: {
      control: 'select',
      options: ['banana', 'blueberry', 'cherry', 'kiwi', 'neutral', 'plum', 'white'],
    },
    noNestedLine: {
      control: 'boolean',
    },
    expanded: {
      control: 'boolean',
    },
    renderChildrenWhenClosed: {
      control: 'boolean',
    },
    sticky: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Expander>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSmall: Story = {
  render: args => (
    <>
      <p>
        {
          'I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.I selvhjelpsprogrammet Co-mestring lærer du om milde til moderate psykiske reaksjoner på korona-situasjonen, og du vil få kunnskap og verktøy for å håndtere dette. Du får daglig lese tekst og gjøre øvelser som du kan bruke for å øve på å håndtere hverdagen.'
        }
      </p>
      <Expander {...args} />
      <Expander {...args} />
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
    </>
  ),
};

export const Large: Story = {
  args: {
    size: ExpanderSize.large,
  },
  render: args => <Expander {...args}>{args.children}</Expander>,
};

export const WithIcon: Story = {
  args: {
    svgIcon: LawBook,
    size: ExpanderSize.large,
  },
  render: args => <Expander {...args}>{args.children}</Expander>,
};

export const WithLoader: Story = {
  render: args => (
    <Expander {...args}>
      <Loader overlay={Overlay.parent} />
    </Expander>
  ),
};

export const WithCallback: Story = {
  args: {
    onExpand: isExpanded => console.log(isExpanded),
  },
  render: args => (
    <Expander {...args}>
      <p>Sjekk nettleserkonsollen</p>
    </Expander>
  ),
};
