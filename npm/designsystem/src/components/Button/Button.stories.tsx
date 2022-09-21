import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Icon from '../Icons';
import Dog from '../Icons/Dog';
import VerticalDots from '../Icons/VerticalDots';
import Title from '../Title';
import { getColor } from '../../theme/currys/color';

export default {
  title: 'Components/Button',
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
    htmlMarkup: {
      control: 'select',
      options: ['button', 'a'],
      defaultValue: 'button',
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
const myRef5: React.RefObject<HTMLButtonElement> = React.createRef();

export const Default: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '15rem' }}>
    <Button {...args} onClick={action('Button clicked')}>
      {args.children}
    </Button>
  </div>
);

export const Concepts: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '15rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'Concepts'}
    </Title>
    <Button {...args} onClick={action('Button clicked')} concept={'normal'}>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} onClick={action('Button clicked')} concept={'destructive'}>
      {args.children}
    </Button>
  </div>
);

export const Icons: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '15rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'Icons'}
    </Title>
    <Button {...args} ref={myRef1} onClick={action('Button clicked')}>
      <Icon svgIcon={Dog} />
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} ref={myRef2} onClick={action('Button clicked')}>
      {args.children}
      <Icon svgIcon={Dog} />
    </Button>
    <br />
    <br />
    <Button {...args} ref={myRef3} onClick={action('Button clicked')} arrow>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} ref={myRef4} onClick={action('Button clicked')} arrow>
      <Icon svgIcon={Dog} />
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} ariaLabel={'Verticaldots button'} ref={myRef5} onClick={action('Button clicked')}>
      <Icon svgIcon={VerticalDots} />
    </Button>
  </div>
);

export const Sizes: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '15rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'Sizes'}
    </Title>
    <Button size={'medium'} {...args} ref={myRef1} onClick={action('Button clicked')}>
      {args.children}
    </Button>
    <br />
    <br />
    <Button size={'large'} {...args} ref={myRef2} onClick={action('Button clicked')}>
      {args.children}
      <Icon svgIcon={Dog} />
    </Button>
  </div>
);

export const Variants: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '15rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'Variants'}
    </Title>
    <Button {...args} onClick={action('Button clicked')} variant={'fill'}>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} onClick={action('Button clicked')} variant={'outline'}>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} onClick={action('Button clicked')} variant={'borderless'}>
      {args.children}
    </Button>
  </div>
);

export const DarkMode: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ minWidth: '15rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'DarkMode'}
    </Title>
    <div style={{ padding: '3rem', backgroundColor: getColor('blueberry', 600) }}>
      <Button {...args} onClick={action('Button clicked')} variant={'fill'} mode={'ondark'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onClick={action('Button clicked')} mode={'ondark'}>
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onClick={action('Button clicked')} variant={'outline'} mode={'ondark'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onClick={action('Button clicked')} variant={'borderless'} mode={'ondark'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onClick={action('Button clicked')} variant={'borderless'} mode={'ondark'}>
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
    </div>
  </div>
);

export const Disabled: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '15rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'Disabled'}
    </Title>
    <Button {...args} onClick={action('Button clicked')} variant={'fill'} disabled>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} onClick={action('Button clicked')} variant={'outline'} disabled>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} onClick={action('Button clicked')} variant={'borderless'} disabled>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} onClick={action('Button clicked')} variant={'borderless'} disabled>
      <Icon svgIcon={Dog} />
      {'Button long text'}
    </Button>
  </div>
);

export const Fluid: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '30rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'Fluid'}
    </Title>
    <Button {...args} fluid onClick={action('Button clicked')}>
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} fluid onClick={action('Button clicked')}>
      <Icon svgIcon={Dog} />
      {args.children}
    </Button>
    <br />
    <br />
    <Button {...args} fluid onClick={action('Button clicked')}>
      {args.children}
      <Icon svgIcon={Dog} />
    </Button>
    <br />
    <br />
    <Button {...args} arrow fluid onClick={action('Button clicked')}>
      <Icon svgIcon={Dog} />
      {args.children}
    </Button>
  </div>
);

export const Ellipsis: ComponentStory<typeof Button> = (args: any) => (
  <div style={{ width: '10rem' }}>
    <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
      {'Ellipsis'}
    </Title>
    <Button {...args} ellipsis onClick={action('Button clicked')}>
      {'Alt for mye tekst her'}
    </Button>
    <br />
    <br />
    <Button {...args} ellipsis onClick={action('Button clicked')}>
      <Icon svgIcon={Dog} />
      {'Alt for mye tekst her'}
    </Button>
  </div>
);

export const AllVariants: ComponentStory<typeof Button> = (args: any) => (
  <>
    <Concepts {...args} />
    <Icons {...args} />
    <Sizes {...args} />
    <Variants {...args} />
    <DarkMode {...args} />
    <Disabled {...args} />
    <Fluid {...args} />
    <Ellipsis {...args} />
  </>
);
