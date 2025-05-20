import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';
import { useArgs } from 'storybook/internal/preview-api';

import HelpDrawer, { HelpDrawerProps } from './HelpDrawer';
import { allTitleTags } from '../../../.storybook/knobs';
import Button from '../Button';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpDrawer',
  component: HelpDrawer,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av HelpDrawer',
      },
      page: (): React.JSX.Element => <Docs component={HelpDrawer} />,
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
    title: 'Hvorfor må jeg oppgi årsak for å få dekket reise under 10 km?',
  },
  argTypes: {
    ariaLabel: { control: 'text' },
    ariaLabelCloseBtn: { control: 'text' },
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
} satisfies Meta<typeof HelpDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onRequestClose: action('Drawer closed'),
    onPrimaryAction: action('Primary action clicked'),
    onSecondaryAction: action('Secondary action clicked'),
    isOpen: false,
  },

  render: (args: HelpDrawerProps) => {
    const [{ isOpen }, setIsOpen] = useArgs<HelpDrawerProps>();

    return (
      <>
        <Button onClick={() => setIsOpen({ isOpen: true })}>{'Åpne HelpDrawer'}</Button>
        <HelpDrawer
          {...args}
          isOpen={isOpen}
          onRequestClose={() => {
            args.onRequestClose?.();
            setIsOpen({ isOpen: false });
          }}
          footerContent={<></>}
        >
          {args.children}
        </HelpDrawer>
      </>
    );
  },
};
