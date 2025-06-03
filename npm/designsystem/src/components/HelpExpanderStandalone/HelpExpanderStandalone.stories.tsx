import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import HelpExpanderStandalone from './HelpExpanderStandalone';
import { mediumLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpExpanderStandalone',
  component: HelpExpanderStandalone,
  parameters: {
    docs: {
      description: {
        component:
          'HelpExpanderStandalone tilbyr et felt med kontekstuell informasjon som opptrer mellom andre elementer. I motsetning til HelpBubble og HelpTooltip vises informasjonen direkte i flaten, ikke over som en popup. HelpExpanderStandalone benyttes for å gi innbygger en utdypet forklaring eller hjelp under tekst eller elementer på siden.',
      },
      page: (): React.JSX.Element => <Docs component={HelpExpanderStandalone} />,
    },
  },
  args: {
    children: mediumLoremText,
    triggerText: 'Hjelp text',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    weight: {
      control: {
        type: 'select',
        options: ['normal', 'strong'],
      },
    },
  },
} satisfies Meta<typeof HelpExpanderStandalone>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'test',
  },

  render: args => <HelpExpanderStandalone {...args} onExpand={action('Expander toggled')} />,
};

export const Weights: Story = {
  render: args => (
    <>
      <HelpExpanderStandalone {...args} onExpand={action('Trigger expanded!')} weight="normal" />
      <HelpExpanderStandalone {...args} onExpand={action('Trigger expanded!')} weight="strong" />
    </>
  ),
};

export const NextToElements: Story = {
  render: args => (
    <>
      <div>
        {mediumLoremText}
        <HelpExpanderStandalone {...args} onExpand={action('Trigger expanded!')} />
        {mediumLoremText}
      </div>
      <div>
        {mediumLoremText + ' '}
        <HelpExpanderStandalone {...args} onExpand={action('Trigger expanded!')} />
        {' ' + mediumLoremText}
      </div>
    </>
  ),
};
