import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import LightBox from './LightBox';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/LightBox',
  component: LightBox,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av LightBox',
      },
      page: (): React.JSX.Element => <Docs component={LightBox} />,
    },
  },
  args: {
    ariaLabelCloseButton: 'Lukk Lightbox',
    imageAlt: 'A random cat',
    imageSrc: 'https://loremflickr.com/640/480',
    testId: 'lightBox',
    onClose: action('Close button clicked'),
    onLeftArrowClick: action('Left arrow clicked'),
    onRightArrowClick: action('Right arrow clicked'),
  },
  argTypes: {},
} satisfies Meta<typeof LightBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <LightBox {...args} />,
};
