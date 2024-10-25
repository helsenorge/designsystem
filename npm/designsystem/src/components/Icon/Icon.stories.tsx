import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Checkbox from '../Checkbox';
import additionalIconInformation from '../Icons/AdditionalIconInformation';
import { IconList, IconName } from '../Icons/IconNames';
import Search from '../Icons/Search';
import ExampleSvgIcon from '../Icons/Undo';
import Input from '../Input';
import LazyIcon from '../LazyIcon';
import Select from '../Select';
import Spacer from '../Spacer';

import Icon, { IconSize } from '.';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Icon} />,
      description: {
        component: 'Icon lar deg vise et av flere ikoner i ulike størrelser og farger',
      },
    },
  },
  args: {
    color: 'black',
    hoverColor: 'black',
    isHovered: false,
  },
  argTypes: {
    color: {
      control: 'text',
    },
    hoverColor: {
      control: 'text',
    },
    isHovered: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    svgIcon: ExampleSvgIcon,
  },
  render: args => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p>{'XLarge'}</p>
          <Icon {...args} size={IconSize.XLarge} />
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
  },
};

export const Accessibility: Story = {
  args: {
    svgIcon: Search,
    size: IconSize.Small,
  },
  render: args => (
    <>
      <p>{'aria-label'}</p>
      <Icon {...args} ariaLabel="Search" />
      <Spacer size="4xs" />
      <p>{'ingen aria-label'}</p>
      <Icon {...args} />
    </>
  ),
};

type LazyIconStory = StoryObj<typeof LazyIcon>;

export const IconWall: LazyIconStory = {
  render: args => {
    const [searchText, setSearchText] = React.useState<string | undefined>();
    const [iconSize, setIconSize] = React.useState<IconSize>(IconSize.Medium);
    const [isHovered, setIsHovered] = React.useState<boolean>(false);

    const searchIcons = (searchText: string): string[] => {
      const lowerCaseSearchText = searchText.toLowerCase();

      return Object.keys(additionalIconInformation).filter(key => {
        const value = additionalIconInformation[key as keyof typeof additionalIconInformation];
        const matchKey = key.toLowerCase().includes(lowerCaseSearchText);
        const matchAlternativeName = value.alternativeName.toLowerCase().includes(lowerCaseSearchText);
        const matchCategories = value.categories.toLowerCase().includes(lowerCaseSearchText);

        return matchKey || matchAlternativeName || matchCategories;
      });
    };

    function includesCaseInsensitive(mainStr: string, searchStr: string): boolean {
      return mainStr.toLowerCase().includes(searchStr.toLowerCase());
    }

    const filterCamelCaseKeys = (searchText: string): string[] => {
      const lowercaseKeys = searchIcons(searchText).map(key => key.toLowerCase());
      return IconList.filter(camelCaseKey => lowercaseKeys.some(lowercaseKey => includesCaseInsensitive(camelCaseKey, lowercaseKey)));
    };
    const filteredIcons = typeof searchText !== 'undefined' ? filterCamelCaseKeys(searchText) : IconList;
    const iconSizeOptions = Object.entries(IconSize).filter(([, value]) => typeof value === 'number');
    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const selectedSize = Number(event.target.value);
      setIconSize(selectedSize);
    };
    return (
      <div>
        <div
          style={{
            background: '#fff',
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            width: '100%',
          }}
        >
          <Input
            label={'Finn ikon'}
            onChange={e => {
              setSearchText(e.currentTarget.value);
            }}
          />
          <Select label={'Velg størrelse'} defaultValue={IconSize.Medium} onChange={handleSizeChange}>
            {iconSizeOptions.map(([sizeName, sizeValue]) => (
              <option key={sizeValue} value={sizeValue}>
                {sizeName}
              </option>
            ))}
          </Select>
          <Checkbox
            label={'Hover'}
            onChange={() => {
              setIsHovered(!isHovered);
            }}
          />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            columnGap: '2rem',
            rowGap: '2rem',
            paddingTop: '10rem',
          }}
        >
          {filteredIcons.map((iconName, index) => {
            const additionalInfo = additionalIconInformation[iconName.toLowerCase() as keyof typeof additionalIconInformation];

            return (
              <div
                style={{ display: 'flex', width: 'fit-content', minWidth: '10rem', flexDirection: 'column', alignItems: 'center' }}
                key={index}
              >
                <LazyIcon {...args} iconName={iconName as IconName} size={iconSize} isHovered={isHovered} />
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
      </div>
    );
  },
};
