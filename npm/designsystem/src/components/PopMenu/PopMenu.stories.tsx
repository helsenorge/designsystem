import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopMenu, PopMenuVariant } from './PopMenu';
import { LinkList } from '../LinkList';
import GridExample from '../GridExample';
import { PopOverVariant } from '../PopOver';
import styles from './story.module.scss';

export default {
  title: 'Components/PopMenu',
  component: PopMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne hente fram og velge handlingsalternativer for et element også der det ikke er plass til å vise disse valgene åpent i grensesnittet, slik at jeg kan foreta valg som gjelder i kontekst av akkurat dette ene elementet.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: PopOverVariant,
      defaultValue: PopOverVariant.positionautomatic,
    },
    popMenuVariant: {
      control: 'select',
      options: PopMenuVariant,
      defaultValue: PopMenuVariant.onWhite,
    },
  },
} as ComponentMeta<typeof PopMenu>;

export const Default: ComponentStory<typeof PopMenu> = (args: any) => (
  <GridExample>
    <div className={styles['story-wrapper']}>
      <PopMenu {...args}>
        <LinkList testId="linkList-tester" chevron={false}>
          <LinkList.Link tabIndex={0} href="/">
            Link 1
          </LinkList.Link>
          <LinkList.Link tabIndex={0} href="/">
            Link 2
          </LinkList.Link>
          <LinkList.Link tabIndex={0} href="/">
            Link 3
          </LinkList.Link>
        </LinkList>
      </PopMenu>
      <div>{'PopMenuVariant: ' + args.popMenuVariant}</div>
    </div>
  </GridExample>
);
