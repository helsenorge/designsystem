import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import GridExample from '../GridExample';
import additionalIconInformation from '../Icons/AdditionalIconInformation';
import { IconList } from '../Icons/IconNames';
import Search from '../Icons/Search';
import ExampleSvgIcon from '../Icons/Undo';
import LazyIcon from '../LazyIcon';
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
      defaultValue: 'black',
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
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '2rem', rowGap: '2rem' }}>
      {IconList.map((iconName, index) => {
        const additionalInfo = additionalIconInformation[iconName.toLowerCase()];

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={index}>
            <LazyIcon iconName={iconName} {...args} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>{iconName}</span>
              {additionalInfo && (
                <>
                  <span style={{ fontSize: '1rem' }}>{'(' + additionalInfo.alternativeName + ')'}</span>
                  <Spacer />
                  <span style={{ fontSize: '1rem' }}>{additionalInfo.categories}</span>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
