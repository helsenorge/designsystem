import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonVariants, ButtonIntents } from './Button';
import Icon from '../Icons';
import X from '../Icons/X';
import Calendar from '../Icons/Calendar';

const allButtonVariants: ButtonVariants[] = ['fill', 'outline', 'borderless'];
const allButtonIntents: ButtonIntents[] = ['primary', 'warning', 'danger'];

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
    ellipsis: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    fluid: {
      control: 'boolean',
      defaultValue: false,
    },
    intent: {
      control: 'select',
      options: allButtonIntents,
      defaultValue: 'primary',
    },
    inverted: {
      control: 'boolean',
      defaultValue: false,
    },
    htmlMarkup: {
      control: 'select',
      options: ['button', 'a'],
      defaultValue: 'button',
    },
    large: {
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: allButtonVariants,
      defaultValue: 'fill',
    },
    href: {
      control: 'text',
      defaultValue: 'https://www.helsenorge.no',
    },
  },
} as ComponentMeta<typeof Button>;

const myRef1: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef2: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef3: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef4: React.RefObject<HTMLButtonElement> = React.createRef();

export const Default: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '15rem' }}>
    <Button {...args} onClick={action('Button clicked')}>
      {args.children}
    </Button>
  </div>
);

export const Fluid: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '30rem', padding: '1rem' }}>
    <Button {...args} fluid onClick={action('Button clicked')}>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} fluid onClick={action('Button clicked')}>
      <Icon svgIcon={X} />
      {args.children}
      <Icon svgIcon={X} />
    </Button>
    <br />
    <br />
    <Button {...args} fluid onClick={action('Button clicked')}>
      <Icon svgIcon={X} />
      {args.children}
    </Button>
  </div>
);

export const WithIcons: ComponentStory<typeof Button> = (args: any) => (
  <div>
    <Button {...args} ref={myRef1} onClick={action('Button clicked')}>
      <Icon svgIcon={X} />
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} ref={myRef2} onClick={action('Button clicked')}>
      {args.children}
      <Icon svgIcon={X} />
    </Button>
    <br />
    <br />
    <Button {...args} ref={myRef3} onClick={action('Button clicked')}>
      <Icon svgIcon={Calendar} />
      {args.children}
      <Icon svgIcon={X} />
    </Button>
    <br />
    <br />
    <Button {...args} ref={myRef4} onClick={action('Button clicked')}>
      <Icon svgIcon={X} />
    </Button>
  </div>
);

export const AllVariants: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ display: 'grid', gridGap: '2rem' }}>
    <Button {...args} variant={'fill'} onClick={action('Button clicked')}>
      <Icon svgIcon={X} />
      {'Fill'}
    </Button>
    <Button {...args} variant={'outline'} onClick={action('Button clicked')}>
      {'Outline'}
      <Icon svgIcon={X} />
    </Button>
    <Button {...args} variant={'borderless'} onClick={action('Button clicked')}>
      <Icon svgIcon={Calendar} />
      {'Borderless'}
      <Icon svgIcon={X} />
    </Button>
  </div>
);
