import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import HelpTooltip, { HelpTooltipDelayGroup } from './HelpTooltip';
import HelpTooltipExample from '../../docs/HelpTooltipExample';
import longLoremText, { shortLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpTooltip',
  component: HelpTooltip,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={HelpTooltip} />,
      description: {
        component:
          'HelpTooltip [HelpTooltip] hjelper innbygger å forstå et ord eller en setning bedre ved å vise en forklaring i en boble når teksten hovres eller får fokus.',
      },
      story: {
        inline: false,
        iframeHeight: '10rem',
      },
    },
  },
  args: { children: 'Ord', description: 'Dette er tekst som skal fylle HelpTooltip' },
  argTypes: {
    children: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof HelpTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <HelpTooltip {...args} />,
};

export const WithText: Story = {
  render: args => <HelpTooltipExample {...args} />,
};

export const SingleExample: Story = {
  render: args => <HelpTooltip {...args} />,
};

export const MultipleTooltips: Story = {
  render: args => (
    <div>
      <HelpTooltipDelayGroup delay={200}>
        {longLoremText + ' '}
        <HelpTooltip {...args} description="Dette er tekst som skal fylle HelpTooltip" />
        {' ' + shortLoremText + ' '}
        <HelpTooltip {...args} description="Dette er tekst som skal fylle HelpTooltip" />
        {' ' + longLoremText + ' '}
        <HelpTooltip {...args} description="Dette er tekst som skal fylle HelpTooltip" />
      </HelpTooltipDelayGroup>
    </div>
  ),
};
