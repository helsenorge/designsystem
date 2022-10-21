import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HelpBubble, { HelpBubbleVariant } from './HelpBubble';
import Icon from '../Icons';
import HelpSign from '../Icons/HelpSign';
import loremText from '../../utils/loremtext';
import GridExample from '../GridExample';

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
    <GridExample>
      <span>{loremText + loremText + loremText + loremText}</span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Icon ref={controllerRef} svgIcon={HelpSign} />
        <HelpBubble {...args} onLinkClick={action('Mer hjelp clicked')} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          {args.children}
        </HelpBubble>
      </div>
      <span>{loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const OnText: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLSpanElement>(null);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText}</span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <span ref={controllerRef} style={{ display: 'inline-block', color: 'red' }}>
          {'Jeg er en tooltip tekst.'}
        </span>
        <HelpBubble {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          <div>{args.children}</div>
        </HelpBubble>
      </div>
      <span>{loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};
