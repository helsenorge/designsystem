import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Slider, { SliderStep } from './Slider';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Slider} />,
      description: {
        component:
          'Slider inneholder en interaktiv slider som kan styres via mus/touch og tastatur interaksjon. Verdien kan returneres via onChange propen som blir gitt inn.',
      },
    },
  },
  args: {
    title: 'Hvor ofte sykler du til jobb?',
    disabled: false,
  },
  argTypes: {
    title: {
      control: 'text',
    },
    labelLeft: {
      control: 'text',
    },
    labelRight: {
      control: 'text',
    },
    ariaLabel: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    step: {
      control: 'number',
    },
    value: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Slider onChange={action('Slider')} labelLeft={'Skjeldent'} labelRight={'Ofte'} {...args} />,
};

export const NotSelected: Story = {
  render: args => <Slider onChange={action('Slider')} labelLeft={'Skjeldent'} labelRight={'Ofte'} selected={false} {...args} />,
};

export const Steps: Story = {
  render: args => {
    const sliderData: SliderStep[] = new Array(9).fill({});

    return <Slider onChange={action('Slider')} steps={sliderData} {...args} />;
  },
};

export const StepLabel: Story = {
  render: args => {
    const sliderData: SliderStep[] = [{ label: -1.0 }, { label: -0.5 }, { label: 0 }, { label: 0.5 }, { label: 1.0 }];

    return <Slider onChange={action('Slider')} steps={sliderData} minValue={-1.0} maxValue={1.0} step={0.5} {...args} />;
  },
};

export const StepEmoji: Story = {
  render: args => {
    const sliderData: SliderStep[] = [{ emojiUniCode: '🙁' }, { emojiUniCode: '😐' }, { emojiUniCode: '🙂' }];

    return <Slider onChange={action('Slider')} steps={sliderData} {...args} />;
  },
};

export const CombinedData: Story = {
  render: args => {
    const sliderData: SliderStep[] = [
      { label: -1.0, emojiUniCode: '😔' },
      { label: -0.5, emojiUniCode: '🙁' },
      { label: 0, emojiUniCode: '😐' },
      { label: 0.5, emojiUniCode: '🙂' },
      { label: 1.0, emojiUniCode: '😃' },
    ];

    return (
      <Slider
        onChange={action('Slider')}
        steps={sliderData}
        labelLeft={'Min'}
        labelRight={'Max'}
        title={'Hvordan føler du deg?'}
        minValue={-1.0}
        maxValue={1.0}
        step={0.5}
        {...args}
      />
    );
  },
};
