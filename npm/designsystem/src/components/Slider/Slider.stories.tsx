import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider, { SliderStep } from './Slider';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          'Slider inneholder en interaktiv slider som kan styres via mus/touch og tastatur interaksjon. Verdien kan returneres via onChange propen som blir gitt inn.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Hvor ofte sykler du til jobb?',
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
      defaultValue: false,
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
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args: any) => (
  <GridExample>
    <Slider onChange={action('Slider')} labelLeft={'Skjeldent'} labelRight={'Ofte'} {...args} />
  </GridExample>
);

export const NotSelected: ComponentStory<typeof Slider> = (args: any) => (
  <GridExample>
    <Slider onChange={action('Slider')} labelLeft={'Skjeldent'} labelRight={'Ofte'} selected={false} {...args} />
  </GridExample>
);

export const Steps: ComponentStory<typeof Slider> = (args: any) => {
  const sliderData: SliderStep[] = new Array(9).fill({});

  return (
    <GridExample>
      <Slider onChange={action('Slider')} steps={sliderData} {...args} />
    </GridExample>
  );
};

export const StepLabel: ComponentStory<typeof Slider> = (args: any) => {
  const sliderData: SliderStep[] = [{ label: -1.0 }, { label: -0.5 }, { label: 0 }, { label: 0.5 }, { label: 1.0 }];

  return (
    <GridExample>
      <Slider onChange={action('Slider')} steps={sliderData} minValue={-1.0} maxValue={1.0} step={0.5} {...args} />
    </GridExample>
  );
};

export const StepEmoji: ComponentStory<typeof Slider> = (args: any) => {
  const sliderData: SliderStep[] = [{ emojiUniCode: '🙁' }, { emojiUniCode: '😐' }, { emojiUniCode: '🙂' }];

  return (
    <GridExample>
      <Slider onChange={action('Slider')} steps={sliderData} {...args} />
    </GridExample>
  );
};

export const CombinedData: ComponentStory<typeof Slider> = (args: any) => {
  const sliderData: SliderStep[] = [
    { label: -1.0, emojiUniCode: '😔' },
    { label: -0.5, emojiUniCode: '🙁' },
    { label: 0, emojiUniCode: '😐' },
    { label: 0.5, emojiUniCode: '🙂' },
    { label: 1.0, emojiUniCode: '😃' },
  ];

  return (
    <GridExample>
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
    </GridExample>
  );
};
