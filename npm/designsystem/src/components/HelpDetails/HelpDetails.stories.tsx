import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import HelpDetails from './HelpDetails';
import longLoremText, { mediumLoremText, shortLoremText } from '../../utils/loremtext';
import HelpTriggerIcon from '../HelpTriggerIcon';
import HelpTriggerStandalone from '../HelpTriggerStandalone';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/HelpDetails',
  component: HelpDetails,
  parameters: {
    docs: {
      description: {
        component:
          'HelpDetails brukes for å vise hjelpetekst i et blokkelement som en del av innholdet på siden. Det er et internt komponent som blir brukt i HelpExpander.',
      },
      page: (): React.JSX.Element => <Docs component={HelpDetails} />,
    },
  },
  args: {
    children: mediumLoremText,
  },
  argTypes: {},
} satisfies Meta<typeof HelpDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <HelpDetails {...args} />,
};

export const Inline: Story = {
  args: {},
  render: args => {
    const controllerRef = React.useRef<HTMLButtonElement>(null);
    const controllerRef2 = React.useRef<HTMLButtonElement>(null);
    const controllerRef3 = React.useRef<HTMLButtonElement>(null);

    return (
      <>
        {shortLoremText}
        <HelpTriggerIcon ref={controllerRef} size={'inherit'} />
        <HelpDetails {...args} controllerRef={controllerRef} />
        {mediumLoremText}
        {shortLoremText}
        <HelpTriggerIcon ref={controllerRef2} size={'inherit'} />
        <HelpDetails {...args} controllerRef={controllerRef2} />
        {mediumLoremText}
        {mediumLoremText}
        <HelpTriggerIcon ref={controllerRef3} size={'inherit'} />
        <HelpDetails {...args} controllerRef={controllerRef3} />
        {longLoremText}
      </>
    );
  },
};

export const Standalone: Story = {
  args: {},
  render: args => {
    return (
      <>
        <HelpTriggerStandalone>{'Help text'}</HelpTriggerStandalone>
        <HelpDetails {...args} />
      </>
    );
  },
};
