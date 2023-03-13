import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip, { TooltipOpenProvider } from './Tooltip';
import TooltipExample from '../TooltipExample';
import GridExample from '../GridExample';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          'Tooltip [Tooltip] hjelper innbygger å forstå et ord eller en setning bedre ved å vise en forklaring i en HelpBubble når teksten hovres eller klikkes på.<br><br>Ved bruk av flere tooltips på en side så skal de wrappes i TooltipOpenProvider som eksporteres fra Tooltip.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'ordet',
    },
    description: {
      control: 'text',
      defaultValue: 'Dette er tekst som skal fylle HelpBubble',
    },
  },
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = (args: any) => (
  <GridExample>
    <TooltipExample {...args} />
  </GridExample>
);
export const SingleExample: ComponentStory<typeof Tooltip> = (args: any) => (
  <GridExample>
    <TooltipOpenProvider>
      <Tooltip {...args} />
    </TooltipOpenProvider>
  </GridExample>
);
