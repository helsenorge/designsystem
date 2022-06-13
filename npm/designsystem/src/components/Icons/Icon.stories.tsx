import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { IconSize } from '.';
import ExampleSvgIcon from './Undo';
import Search from './Search';
import Spacer from '../Spacer';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: 'text',
      defaultValue: 'black',
    },
    hoverColor: {
      control: 'text',
      defaultValue: 'gray',
    },
    isHovered: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args: any) => {
  return (
    <div style={{ display: 'flex', width: '1400px', justifyContent: 'space-between' }}>
      <div>
        <p>{'XLarge'}</p>
        <Icon {...args} svgIcon={ExampleSvgIcon} size={IconSize.XLarge} />
      </div>
      <div>
        <p>{'Large'}</p>
        <Icon {...args} svgIcon={ExampleSvgIcon} size={IconSize.Large} />
      </div>
      <div>
        <p>{'Medium'}</p>
        <Icon {...args} svgIcon={ExampleSvgIcon} size={IconSize.Medium} />
      </div>
      <div>
        <p>{'Small'}</p>
        <Icon {...args} svgIcon={ExampleSvgIcon} size={IconSize.Small} />
      </div>
      <div>
        <p>{'XSmall'}</p>
        <Icon {...args} svgIcon={ExampleSvgIcon} size={IconSize.XSmall} />
      </div>
      <div>
        <p>{'XXSmall'}</p>
        <Icon {...args} svgIcon={ExampleSvgIcon} size={IconSize.XXSmall} />
      </div>
    </div>
  );
};

export const Accessibility: ComponentStory<typeof Icon> = (args: any) => (
  <>
    <>
      <p>{'aria-label'}</p>
      <Icon {...args} svgIcon={Search} ariaLabel="Search" size={IconSize.Small} />
    </>
    <Spacer size="4xs" />
    <>
      <p>{'ingen aria-label'}</p>
      <Icon {...args} svgIcon={Search} size={IconSize.Small} />
    </>
  </>
);
