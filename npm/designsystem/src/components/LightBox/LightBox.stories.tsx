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
    ariaLabelLeftArrow: 'Forrige bilde',
    ariaLabelRightArrow: 'Neste bilde',
    ariaLabelCloseTextBox: 'Lukk tekstboks',
    ariaLabelOpenTextBox: 'Åpne tekstboks',
    closeTextAfterSeconds: 3,
    imageAlt: 'A random cat',
    imageSrc: 'https://loremflickr.com/640/480',
    testId: 'lightBox',
    imageText: 'En søt pus eller kanskje flere',
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
