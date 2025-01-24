import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Drawer, { DrawerProps } from './Drawer';
import { allTitleTags } from '../../../.storybook/knobs';
import Button from '../Button';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={Drawer} />,
      description: {
        component:
          'Drawer er en generisk container komponent som brukes for å vise innhold fra bunn til topp på mobil, og venstre til høyre på desktop. Samtidig som det lar brukeren se litt av innholdet bak komponentet.',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {
    title: 'Title',
    primaryActionLabel: 'Send inn',
    secondaryActionLabel: 'Avbryt',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Tittel i header-delen av skuffen.',
    },
    titleHtmlMarkup: {
      control: 'select',
      options: allTitleTags,
    },
    primaryActionLabel: {
      control: 'text',
      description: 'Tekst på primær-handlingsknappen (om footerContent ikke brukes).',
    },
    secondaryActionLabel: {
      control: 'text',
      description: 'Tekst på sekundær-handlingsknappen (om footerContent ikke brukes).',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: action('Drawer closed'),
    onPrimaryAction: action('Primary action clicked'),
    onSecondaryAction: action('Secondary action clicked'),
  },

  render: (args: DrawerProps) => {
    return (
      <Drawer
        {...args}
        onClose={() => {
          args.onClose?.();
        }}
        onPrimaryAction={() => {
          args.onPrimaryAction?.();
        }}
        onSecondaryAction={() => {
          args.onSecondaryAction?.();
        }}
      >
        <span>
          {
            'Cillum officia officia elit et officia eu eiusmod eu exercitation irure exercitation reprehenderit. Ut irure eiusmod ad Lorem nostrud Lorem ut. Ullamco deserunt dolore deserunt voluptate Lorem occaecat. Commodo id adipisicing sint adipisicing ut. Labore consequat commodo laboris excepteur deserunt qui sunt veniam elit cupidatat. Qui sit officia nostrud et dolore adipisicing et ut nostrud eu. Sint ullamco ullamco laborum nostrud nulla velit et sit excepteur qui sit proident non. Aute in ea sint ipsum commodo commodo veniam. Labore sunt sint cillum sit magna tempor non nulla. Aliquip tempor eu excepteur ea exercitation dolor ea incididunt. Proident deserunt nisi incididunt minim mollit sit incididunt et excepteur voluptate dolor est cillum. Sit cupidatat sunt in commodo anim minim culpa sint incididunt cupidatat. Tempor sunt nostrud voluptate mollit aliqua occaecat veniam eiusmod culpa ea velit. Lorem ad ea duis ex tempor elit sit nostrud voluptate sit eu quis. Quis elit ullamco anim occaecat amet fugiat qui consectetur.'
          }
        </span>
      </Drawer>
    );
  },
};

export const OpenFromButton: Story = {
  args: {
    onClose: action('Drawer closed'),
    onPrimaryAction: action('Primary action clicked'),
    onSecondaryAction: action('Secondary action clicked'),
  },

  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>{'Åpne Drawer'}</Button>

        {open && (
          <Drawer
            {...args}
            onClose={() => {
              args.onClose?.();
              setOpen(false);
            }}
            onPrimaryAction={() => {
              args.onPrimaryAction?.();
            }}
            onSecondaryAction={() => {
              args.onSecondaryAction?.();
            }}
          >
            <span>
              {
                'Cillum officia officia elit et officia eu eiusmod eu exercitation irure exercitation reprehenderit. Ut irure eiusmod ad Lorem nostrud Lorem ut. Ullamco deserunt dolore deserunt voluptate Lorem occaecat. Commodo id adipisicing sint adipisicing ut. Labore consequat commodo laboris excepteur deserunt qui sunt veniam elit cupidatat. Qui sit officia nostrud et dolore adipisicing et ut nostrud eu. Sint ullamco ullamco laborum nostrud nulla velit et sit excepteur qui sit proident non. Aute in ea sint ipsum commodo commodo veniam. Labore sunt sint cillum sit magna tempor non nulla. Aliquip tempor eu excepteur ea exercitation dolor ea incididunt. Proident deserunt nisi incididunt minim mollit sit incididunt et excepteur voluptate dolor est cillum. Sit cupidatat sunt in commodo anim minim culpa sint incididunt cupidatat. Tempor sunt nostrud voluptate mollit aliqua occaecat veniam eiusmod culpa ea velit. Lorem ad ea duis ex tempor elit sit nostrud voluptate sit eu quis. Quis elit ullamco anim occaecat amet fugiat qui consectetur.'
              }
            </span>
          </Drawer>
        )}
      </>
    );
  },
};
