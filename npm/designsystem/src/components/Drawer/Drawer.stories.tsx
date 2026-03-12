import { Source } from '@storybook/addon-docs/blocks';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';
import { useArgs } from 'storybook/preview-api';

import type { DrawerProps } from './Drawer';
import type { StoryObj, Meta } from '@storybook/react-vite';

import Drawer from './Drawer';
import { allTitleTags } from '../../../.storybook/knobs';
import longLoremText from '../../utils/loremtext';
import Button from '../Button';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Drawer',
  component: Drawer,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => (
        <Docs
          component={Drawer}
          belowControlsContent={
            <>
              <section style={{ margin: '1rem 0' }}>
                <h2>{'Rendring av Drawer'}</h2>
                <p>{'Bruk isOpen-proppen sammen med onRequestClose-callbacken for å styre rendringen av Drawer.'}</p>
                <Source
                  language="tsx"
                  code={`
  import React, { useState } from 'react';
  import Drawer from '@helsenorge/designsystem-react/Components/Drawer';

  const [isOpen, setIsOpen] = useState(true);

  <Drawer
    isOpen={isOpen}
    onRequestClose={setIsOpen(false)}
    // ...other props
  >
    {/* Drawer content here */}
  </Drawer>`}
                />
              </section>
            </>
          }
        />
      ),
      description: {
        component:
          'Drawer er en generisk container komponent som brukes for å vise innhold fra bunn til topp på mobil, og venstre eller høyre til motsatt side på desktop. Samtidig som det lar brukeren se litt av innholdet bak komponentet. Komponenten er controlled og vises via `isOpen` prop',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {
    children:
      'Cillum officia officia elit et officia eu eiusmod eu exercitation irure exercitation reprehenderit. Ut irure eiusmod ad Lorem nostrud Lorem ut. Ullamco deserunt dolore deserunt voluptate Lorem occaecat. Commodo id adipisicing sint adipisicing ut. Labore consequat commodo laboris excepteur deserunt qui sunt veniam elit cupidatat. Qui sit officia nostrud et dolore adipisicing et ut nostrud eu. Sint ullamco ullamco laborum nostrud nulla velit et sit excepteur qui sit proident non. Aute in ea sint ipsum commodo commodo veniam. Labore sunt sint cillum sit magna tempor non nulla. Aliquip tempor eu excepteur ea exercitation dolor ea incididunt. Proident deserunt nisi incididunt minim mollit sit incididunt et excepteur voluptate dolor est cillum. Sit cupidatat sunt in commodo anim minim culpa sint incididunt cupidatat. Tempor sunt nostrud voluptate mollit aliqua occaecat veniam eiusmod culpa ea velit. Lorem ad ea duis ex tempor elit sit nostrud voluptate sit eu quis. Quis elit ullamco anim occaecat amet fugiat qui consectetur. Eu id deserunt tempor amet sit laboris dolor sunt. Et adipisicing id culpa enim in adipisicing in labore incididunt nisi. Minim enim dolore aute nostrud esse exercitation minim consectetur do sit deserunt. Anim ex reprehenderit culpa magna exercitation mollit eiusmod quis velit incididunt. Non minim quis fugiat aliquip quis commodo Lorem laborum proident sunt tempor irure. Dolor proident eu cupidatat duis sint. Ex consectetur laborum nisi consequat. Sit est non nostrud consequat deserunt labore irure laboris magna cupidatat elit amet.',
    onPrimaryAction: action('Primary action clicked'),
    onRequestClose: action('Drawer closed'),
    onSecondaryAction: action('Secondary action clicked'),
    primaryActionText: 'Send inn',
    secondaryActionText: 'Avbryt',
    title: 'Fullstendige bruksvilkår',
  },
  argTypes: {
    ariaLabel: { control: 'text' },
    ariaLabelledBy: { control: 'text' },
    children: { control: 'text' },
    desktopDirection: { control: 'select', options: ['left', 'right'] },
    footerContent: { control: 'object' },
    isOpen: { control: 'boolean' },
    onPrimaryAction: { action: 'onPrimaryAction' },
    onRequestClose: { action: 'onRequestClose' },
    onSecondaryAction: { action: 'onSecondaryAction' },
    primaryActionText: { control: 'text' },
    secondaryActionText: { control: 'text' },
    title: { control: 'text' },
    titleHtmlMarkup: { control: 'select', options: allTitleTags },
    titleId: { control: 'text' },
    zIndex: { control: 'number' },
    noCloseButton: { control: 'boolean' },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRequestClose: action('Drawer closed'),
    onPrimaryAction: action('Primary action clicked'),
    onSecondaryAction: action('Secondary action clicked'),
    isOpen: true,
  },

  render: (args: DrawerProps) => {
    const [{ isOpen }, setIsOpen] = useArgs<DrawerProps>();

    return (
      <Drawer
        {...args}
        isOpen={isOpen}
        onRequestClose={() => {
          args.onRequestClose?.();
          setIsOpen({ isOpen: false });
        }}
        onPrimaryAction={() => {
          args.onPrimaryAction?.();
          setIsOpen({ isOpen: false });
        }}
        onSecondaryAction={() => {
          args.onSecondaryAction?.();
          setIsOpen({ isOpen: false });
        }}
      >
        {args.children}
      </Drawer>
    );
  },
};

export const OpenFromButton: Story = {
  args: {
    onRequestClose: action('Drawer closed'),
    onPrimaryAction: action('Primary action clicked'),
    onSecondaryAction: action('Secondary action clicked'),
    isOpen: false,
  },

  render: (args: DrawerProps) => {
    const [{ isOpen }, setIsOpen] = useArgs<DrawerProps>();

    return (
      <>
        <Button onClick={() => setIsOpen({ isOpen: true })}>{'Åpne Drawer'}</Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onRequestClose={() => {
            args.onRequestClose?.();
            setIsOpen({ isOpen: false });
          }}
          onPrimaryAction={() => {
            args.onPrimaryAction?.();
            setIsOpen({ isOpen: false });
          }}
          onSecondaryAction={() => {
            args.onSecondaryAction?.();
          }}
          primaryActionText="I close"
          secondaryActionText="I don't"
        >
          {args.children}
        </Drawer>
      </>
    );
  },
};

export const FooterContent: Story = {
  args: {
    onRequestClose: action('Drawer closed'),
    isOpen: true,
  },

  render: (args: DrawerProps) => {
    const [{ isOpen }, setIsOpen] = useArgs<DrawerProps>();

    return (
      <Drawer
        {...args}
        isOpen={isOpen}
        onRequestClose={() => {
          args.onRequestClose?.();
          setIsOpen({ isOpen: false });
        }}
        footerContent={
          <>
            <Button onClick={() => setIsOpen({ isOpen: false })}>{'Custom button 1'}</Button>
            <Button onClick={() => setIsOpen({ isOpen: false })} variant="outline">
              {'Custom button 2'}
            </Button>
          </>
        }
      >
        {args.children}
      </Drawer>
    );
  },
};

export const ScrollingWindow: Story = {
  args: {
    onRequestClose: action('Drawer closed'),
    onPrimaryAction: action('Primary action clicked'),
    onSecondaryAction: action('Secondary action clicked'),
    isOpen: false,
  },

  render: (args: DrawerProps) => {
    const [{ isOpen }, setIsOpen] = useArgs<DrawerProps>();

    return (
      <>
        <div>{longLoremText}</div>
        <div>{longLoremText}</div>
        <Button onClick={() => setIsOpen({ isOpen: true })}>{'Åpne Drawer'}</Button>
        <Drawer
          {...args}
          isOpen={isOpen}
          onRequestClose={() => {
            args.onRequestClose?.();
            setIsOpen({ isOpen: false });
          }}
          onPrimaryAction={() => {
            args.onPrimaryAction?.();
            setIsOpen({ isOpen: false });
          }}
          onSecondaryAction={() => {
            args.onSecondaryAction?.();
          }}
          primaryActionText="I close"
          secondaryActionText="I don't"
        >
          {args.children}
        </Drawer>
        <div>{longLoremText}</div>
        <div>{longLoremText}</div>
        <div>{longLoremText}</div>
      </>
    );
  },
};
