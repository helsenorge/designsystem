import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Icon from '@helsenorge/designsystem-react/components/Icons';
import * as SvgIcons from './allIconsImports';

import Checkbox from '../../../CheckBox/CheckBox';
import {SvgIcon} from '@helsenorge/designsystem-react/components/Icons/Icon';
import {theme as hndsTheme} from '@helsenorge/designsystem-react';

type IconImport = {module: SvgIcon; name: string};

const StyledIconTile = styled('div')`
  background-color: #f6f5f2;
  border: 1px solid #dedbd3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const StyledIconName = styled('span')`
  margin: 1rem auto;
  color: #9b978c;
`;

const StyledSearch = styled('input')`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid #dedbd3;
  outline: none;
  color: #9b978c;
  transition: all 250ms;
  &::placeholder {
    color: #9b978c;
  }
  &:focus,
  :hover {
    background-color: #f6f5f2;
  }
`;

const StyledFilterProps = styled('div')`
  display: flex;
  margin-top: 1rem;
  padding: 0.5rem;
`;

interface IconWallFilterProps {
  onFilterChange: (e: any) => void;
}

function IconWallFilter(props: IconWallFilterProps) {
  const {onFilterChange} = props;
  const [filter, setFilter] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    onFilterChange({filter, isHovered});
  }, [filter, isHovered]);
  return (
    <div>
      <StyledSearch
        onFocus={e => (e.currentTarget.placeholder = '')}
        onBlur={e => (e.currentTarget.placeholder = 'Filter icon by name...')}
        onInput={e => setFilter(e.currentTarget.value)}
        placeholder="Filter icon by name..."
      />
      <StyledFilterProps>
        <Checkbox label="Hover state" checked={isHovered} onChange={() => setIsHovered(!isHovered)} />
      </StyledFilterProps>
    </div>
  );
}

function IconWall() {
  const [filterProps, setFilterProps] = useState({
    filter: '',
    isHovered: false,
  });

  const filterIcons = (iconImport: IconImport, index: number) => {
    if (filterProps.filter) {
      if (iconImport.name.toLowerCase().includes(filterProps.filter.toLowerCase())) {
        return iconImport;
      } else {
        return false;
      }
    } else {
      return iconImport;
    }
  };

  return (
    <>
      <IconWallFilter onFilterChange={e => setFilterProps(e)} />
      <StyledIconWall>
        {SvgIcons.allSvgIcons.filter(filterIcons).map((iconImport: IconImport, index) => (
          <div>
            <StyledIconTile>
              <Icon isHovered={filterProps.isHovered} svgIcon={iconImport.module} />
              <StyledIconName>{iconImport.name}</StyledIconName>
            </StyledIconTile>
          </div>
        ))}
      </StyledIconWall>
    </>
  );
}

const StyledIconWall = styled('div')`
  display: grid;
  grid-row-gap: 1rem;
  margin: 1rem 0;
  @media ${hndsTheme.screen.sm} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

export default IconWall;
