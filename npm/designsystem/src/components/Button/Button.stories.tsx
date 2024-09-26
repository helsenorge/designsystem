import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Button from './Button';
import { getColor } from '../../theme/currys/color';
import Icon from '../Icon';
import Dog from '../Icons/Dog';
import VerticalDots from '../Icons/VerticalDots';
import LazyIcon from '../LazyIcon';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Button [Knapp] benyttes for å la innbygger initiere en handling eller hendelse. Knapper lar innbygger vite hva som vil skje om man trykker på dem.',
      },
      page: (): React.JSX.Element => <Docs component={Button} />,
    },
  },
  args: {
    children: 'Button',
    ellipsis: false,
    disabled: false,
    fluid: false,
    htmlMarkup: 'button',
    href: 'https://www.helsenorge.no',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    ellipsis: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fluid: {
      control: 'boolean',
    },
    htmlMarkup: {
      control: 'select',
      options: ['button', 'a'],
    },
    href: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const myRef1: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef2: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef3: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef4: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef5: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef6: React.RefObject<HTMLButtonElement> = React.createRef();
const myRef7: React.RefObject<HTMLButtonElement> = React.createRef();

export const Default: Story = {
  render: args => (
    <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
      {args.children}
    </Button>
  ),
};

export const Concepts: Story = {
  render: args => (
    <>
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} concept={'normal'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} concept={'destructive'}>
        {args.children}
      </Button>
    </>
  ),
};

export const Icons: Story = {
  render: args => (
    <>
      <Button {...args} ref={myRef1} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef2} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
        <Icon svgIcon={Dog} />
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef3} onBlur={action('Button blurred')} onClick={action('Button clicked')} arrow="icon">
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef4} onBlur={action('Button blurred')} onClick={action('Button clicked')} arrow="icon">
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ariaLabel={'Verticaldots button'} ref={myRef5} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={VerticalDots} />
      </Button>
    </>
  ),
};
export const LazyIcons: Story = {
  render: args => (
    <>
      <Button {...args} ref={myRef1} onClick={action('Button clicked')}>
        <LazyIcon iconName={'Dog'} />
        {args.children}
        <Icon svgIcon={Dog} />
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef2} onClick={action('Button clicked')}>
        {args.children}
        <LazyIcon iconName={'Dog'} />
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef3} onClick={action('Button clicked')} arrow="icon">
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef4} onClick={action('Button clicked')} arrow="icon">
        <LazyIcon iconName={'Dog'} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ariaLabel={'Verticaldots button'} ref={myRef5} onClick={action('Button clicked')}>
        <LazyIcon iconName={'VerticalDots'} />
      </Button>
    </>
  ),
};

export const Sizes: Story = {
  render: args => (
    <>
      <Button size={'medium'} {...args} ref={myRef6} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button size={'large'} {...args} ref={myRef7} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
        <Icon svgIcon={Dog} />
      </Button>
    </>
  ),
};

export const DarkMode: Story = {
  render: args => (
    <>
      <div style={{ padding: '3rem', backgroundColor: getColor('blueberry', 500) }}>
        <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'fill'} mode={'ondark'}>
          {args.children}
        </Button>
        <br />
        <br />
        <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} mode={'ondark'}>
          <Icon svgIcon={Dog} />
          {args.children}
        </Button>
        <br />
        <br />
        <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'outline'} mode={'ondark'}>
          {args.children}
        </Button>
        <br />
        <br />
        <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'borderless'} mode={'ondark'}>
          {args.children}
        </Button>
        <br />
        <br />
        <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'borderless'} mode={'ondark'}>
          <Icon svgIcon={Dog} />
          {args.children}
        </Button>
      </div>
    </>
  ),
};

export const Disabled: Story = {
  render: args => (
    <>
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'fill'} disabled>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'outline'} disabled>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'borderless'} disabled>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'borderless'} disabled>
        <Icon svgIcon={Dog} />
        {'Button long text'}
      </Button>
    </>
  ),
};

export const Fluid: Story = {
  render: args => (
    <>
      <Button {...args} fluid onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} fluid onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} fluid onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
        <Icon svgIcon={Dog} />
      </Button>
      <br />
      <br />
      <Button {...args} arrow="icon" fluid onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
    </>
  ),
};

export const Variants: Story = {
  render: args => (
    <>
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'fill'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'outline'}>
        {args.children}
      </Button>
    </>
  ),
};

export const Ellipsis: Story = {
  render: args => (
    <>
      <Button {...args} ellipsis onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {'Alt for mye tekst her'}
      </Button>
      <br />
      <br />
      <Button {...args} ellipsis onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={Dog} />
        {'Alt for mye tekst her'}
      </Button>
    </>
  ),
};

export const UURightArrow: Story = {
  render: args => (
    <Button
      {...args}
      variant="borderless"
      arrow="accessibility-character"
      onBlur={action('Button blurred')}
      onClick={action('Button clicked')}
    >
      {'Button'}
    </Button>
  ),
};
