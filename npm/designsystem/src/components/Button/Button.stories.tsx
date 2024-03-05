import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Button from './Button';
import { getColor } from '../../theme/currys/color';
import GridExample from '../GridExample';
import Icon from '../Icon';
import Dog from '../Icons/Dog';
import VerticalDots from '../Icons/VerticalDots';
import LazyIcon from '../LazyIcon';
import Title from '../Title';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Button [Knapp] benyttes for å la innbygger initiere en handling eller hendelse. Knapper lar innbygger vite hva som vil skje om man trykker på dem.',
      },
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
    <GridExample>
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
      </Button>
    </GridExample>
  ),
};

export const Concepts: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Concepts'}
      </Title>
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} concept={'normal'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} concept={'destructive'}>
        {args.children}
      </Button>
    </GridExample>
  ),
};

export const Icons: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Icons'}
      </Title>
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
      <Button {...args} ref={myRef3} onBlur={action('Button blurred')} onClick={action('Button clicked')} arrow>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef4} onBlur={action('Button blurred')} onClick={action('Button clicked')} arrow>
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ariaLabel={'Verticaldots button'} ref={myRef5} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={VerticalDots} />
      </Button>
    </GridExample>
  ),
};
export const LazyIcons: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Icons'}
      </Title>
      <Button {...args} ref={myRef1} onClick={action('Button clicked')}>
        <LazyIcon iconName={'Dog'} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef2} onClick={action('Button clicked')}>
        {args.children}
        <LazyIcon iconName={'Dog'} />
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef3} onClick={action('Button clicked')} arrow>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ref={myRef4} onClick={action('Button clicked')} arrow>
        <LazyIcon iconName={'Dog'} />
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} ariaLabel={'Verticaldots button'} ref={myRef5} onClick={action('Button clicked')}>
        <LazyIcon iconName={'VerticalDots'} />
      </Button>
    </GridExample>
  ),
};

export const Sizes: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Sizes'}
      </Title>
      <Button size={'medium'} {...args} ref={myRef6} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button size={'large'} {...args} ref={myRef7} onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {args.children}
        <Icon svgIcon={Dog} />
      </Button>
    </GridExample>
  ),
};

export const Variants: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Variants'}
      </Title>
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'fill'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'outline'}>
        {args.children}
      </Button>
      <br />
      <br />
      <Button {...args} onBlur={action('Button blurred')} onClick={action('Button clicked')} variant={'borderless'}>
        {args.children}
      </Button>
    </GridExample>
  ),
};

export const DarkMode: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'DarkMode'}
      </Title>
      <div style={{ padding: '3rem', backgroundColor: getColor('blueberry', 600) }}>
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
    </GridExample>
  ),
};

export const Disabled: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Disabled'}
      </Title>
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
    </GridExample>
  ),
};

export const Fluid: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Fluid'}
      </Title>
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
      <Button {...args} arrow fluid onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={Dog} />
        {args.children}
      </Button>
    </GridExample>
  ),
};

export const Ellipsis: Story = {
  render: args => (
    <GridExample>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Ellipsis'}
      </Title>
      <Button {...args} ellipsis onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        {'Alt for mye tekst her'}
      </Button>
      <br />
      <br />
      <Button {...args} ellipsis onBlur={action('Button blurred')} onClick={action('Button clicked')}>
        <Icon svgIcon={Dog} />
        {'Alt for mye tekst her'}
      </Button>
    </GridExample>
  ),
};
