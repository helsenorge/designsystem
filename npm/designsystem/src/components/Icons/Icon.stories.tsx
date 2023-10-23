import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Candle from './Candle';
import FallingLeaf from './FallingLeaf';
import Graph from './Graph';
import GroupTwins from './GroupTwins';
import HandsAndHeart from './HandsAndHeart';
import HealthcarePerson from './HealthcarePerson';
import HealthcarePersonell from './HealthcarePersonell';
import IconWallComponent from './IconWall';
import LegalDocument from './LegalDocument';
import Search from './Search';
import Tombstone from './Tombstone';
import ExampleSvgIcon from './Undo';
import GridExample from '../GridExample';
import Spacer from '../Spacer';

import Icon, { IconSize } from '.';

export default {
  title: '@helsenorge∕designsystem-react/Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon lar deg vise et av flere ikoner i ulike størrelser og farger',
      },
    },
  },
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
    <GridExample>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
    </GridExample>
  );
};

export const Accessibility: ComponentStory<typeof Icon> = (args: any) => (
  <GridExample>
    <p>{'aria-label'}</p>
    <Icon {...args} svgIcon={Search} ariaLabel="Search" size={IconSize.Small} />
    <Spacer size="4xs" />
    <p>{'ingen aria-label'}</p>
    <Icon {...args} svgIcon={Search} size={IconSize.Small} />
  </GridExample>
);

export const IconWall: ComponentStory<typeof Icon> = (args: any) => {
  return (
    <IconWallComponent
      {...args}
      svgIcons={[HandsAndHeart, Tombstone, Candle, LegalDocument, FallingLeaf, Graph, GroupTwins, HealthcarePerson, HealthcarePersonell]}
    />
  );
};
