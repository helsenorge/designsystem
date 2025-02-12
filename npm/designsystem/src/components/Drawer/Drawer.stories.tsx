import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { Source } from '@storybook/blocks';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Drawer, { DrawerProps } from './Drawer';
import { allTitleTags } from '../../../.storybook/knobs';
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
                <h2>{'Rendering Drawer conditionally'}</h2>
                <p>{'Use the isOpen prop to render the drawer conditionally'}</p>
                <Source
                  language="tsx"
                  code={`
  import React, { useState } from 'react';
  import Drawer from '@helsenorge/designsystem-react/Components/Drawer';

  const [isOpen, setIsOpen] = useState(true);

  <Drawer
    isOpen={setIsOpen(false)}
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
    title: 'Fullstendige bruksvilkår',
    children:
      'Cillum officia officia elit et officia eu eiusmod eu exercitation irure exercitation reprehenderit. Ut irure eiusmod ad Lorem nostrud Lorem ut. Ullamco deserunt dolore deserunt voluptate Lorem occaecat. Commodo id adipisicing sint adipisicing ut. Labore consequat commodo laboris excepteur deserunt qui sunt veniam elit cupidatat. Qui sit officia nostrud et dolore adipisicing et ut nostrud eu. Sint ullamco ullamco laborum nostrud nulla velit et sit excepteur qui sit proident non. Aute in ea sint ipsum commodo commodo veniam. Labore sunt sint cillum sit magna tempor non nulla. Aliquip tempor eu excepteur ea exercitation dolor ea incididunt. Proident deserunt nisi incididunt minim mollit sit incididunt et excepteur voluptate dolor est cillum. Sit cupidatat sunt in commodo anim minim culpa sint incididunt cupidatat. Tempor sunt nostrud voluptate mollit aliqua occaecat veniam eiusmod culpa ea velit. Lorem ad ea duis ex tempor elit sit nostrud voluptate sit eu quis. Quis elit ullamco anim occaecat amet fugiat qui consectetur. Eu id deserunt tempor amet sit laboris dolor sunt. Et adipisicing id culpa enim in adipisicing in labore incididunt nisi. Minim enim dolore aute nostrud esse exercitation minim consectetur do sit deserunt. Anim ex reprehenderit culpa magna exercitation mollit eiusmod quis velit incididunt. Non minim quis fugiat aliquip quis commodo Lorem laborum proident sunt tempor irure. Dolor proident eu cupidatat duis sint. Ex consectetur laborum nisi consequat. Sit est non nostrud consequat deserunt labore irure laboris magna cupidatat elit amet.',
    primaryActionText: 'Send inn',
    secondaryActionText: 'Avbryt',
    ariaLabelCloseBtn: 'Lukk',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    ariaLabelledBy: {
      control: 'text',
    },
    ariaLabelCloseBtn: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    titleHtmlMarkup: {
      control: 'select',
      options: allTitleTags,
    },
    onRequestClose: {
      action: 'onRequestClose',
    },
    onPrimaryAction: {
      action: 'onPrimaryAction',
    },
    onSecondaryAction: {
      action: 'onSecondaryAction',
    },
    primaryActionText: {
      control: 'text',
    },
    secondaryActionText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRequestClose: action('Drawer closed'),
    onPrimaryAction: action('Primary action clicked'),
    onSecondaryAction: action('Secondary action clicked'),
  },

  render: (args: DrawerProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Drawer
        {...args}
        isOpen={isOpen}
        onRequestClose={() => {
          args.onRequestClose?.();
          setIsOpen(false);
        }}
        onPrimaryAction={() => {
          args.onPrimaryAction?.();
          setIsOpen(false);
        }}
        onSecondaryAction={() => {
          args.onSecondaryAction?.();
          setIsOpen(false);
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
  },

  render: (args: DrawerProps) => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
      <>
        <Button onClick={() => setShowDrawer(true)}>{'Åpne Drawer'}</Button>
        <Drawer
          {...args}
          isOpen={showDrawer}
          onRequestClose={() => {
            args.onRequestClose?.();
            setShowDrawer(false);
          }}
          onPrimaryAction={() => {
            args.onPrimaryAction?.();
            setShowDrawer(false);
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
  },

  render: (args: DrawerProps) => {
    const [showDrawer, setShowDrawer] = useState(true);

    return (
      <Drawer
        {...args}
        isOpen={showDrawer}
        onRequestClose={() => {
          args.onRequestClose?.();
          setShowDrawer(false);
        }}
        footerContent={
          <>
            <Button onClick={() => setShowDrawer(false)}>{'Custom button 1'}</Button>
            <Button onClick={() => setShowDrawer(false)} variant="outline">
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
