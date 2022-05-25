import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HelpBubble, { HelpBubbleVariant } from './HelpBubble';
import Icon from '../Icons';
import HelpSign from '../Icons/HelpSign';

export default {
  title: 'Components/HelpBubble',
  component: HelpBubble,
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Dette er en HelpBubble. Aliquip aute consectetur eiusmod nisi ullamco aliquip adipisicing cupidatat reprehenderit nulla in Lorem sint.',
    },
    showBubble: {
      control: 'boolean',
      defaultValue: true,
    },
    variant: {
      control: 'select',
      options: HelpBubbleVariant,
      defaultValue: HelpBubbleVariant.positionautomatic,
    },
  },
} as ComponentMeta<typeof HelpBubble>;

export const Default: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<SVGSVGElement>(null);

  return (
    <div>
      <span>
        {
          'Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris.'
        }
      </span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Icon ref={controllerRef} svgIcon={HelpSign} />
        <HelpBubble {...args} onLinkClick={action('Mer hjelp clicked')} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          {args.children}
        </HelpBubble>
      </div>
      <span>
        {
          'Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris.'
        }
      </span>
    </div>
  );
};

export const OnText: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLSpanElement>(null);

  return (
    <div>
      <span>
        {
          'Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris.'
        }
      </span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <span ref={controllerRef} style={{ display: 'inline-block', color: 'red' }}>
          {'Jeg er en tooltip tekst.'}
        </span>
        <HelpBubble {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          {args.children}
        </HelpBubble>
      </div>
      <span>
        {
          'Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris. Dolore quis tempor culpa exercitation laboris. Enim enim pariatur veniam nisi ad quis fugiat magna occaecat nisi. Excepteur ad ad duis quis mollit ex. Laboris duis velit eu eiusmod ea in ex aliqua. Est proident proident dolor veniam nostrud aliquip occaecat dolore sunt laboris nisi ipsum Lorem nisi. Magna sunt ex occaecat amet id. Eiusmod magna Lorem proident est occaecat pariatur sunt esse nostrud. Mollit reprehenderit velit veniam amet ipsum veniam et. Dolor sunt adipisicing enim dolore quis qui occaecat esse quis ut fugiat laboris.'
        }
      </span>
    </div>
  );
};