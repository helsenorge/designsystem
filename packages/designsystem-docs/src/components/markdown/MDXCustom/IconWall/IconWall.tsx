import React, {useState, useEffect} from 'react';
import {Icon, IconTypes} from '@helsenorge/designsystem-react';
import Checkbox from '../../../CheckBox/CheckBox';
import styled from 'styled-components';

const StyledIconTile = styled('div')`
  background-color: #f6f5f2;
  border: 1px solid #dedbd3;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledIconName = styled('span')`
  margin-top: 1rem;
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

const allIcons: IconTypes[] = [
  'alarmClock',
  'arrowLeft',
  'arrowRight',
  'avatar',
  'calendarSave',
  'chevronDown',
  'chevronRight',
  'chevronLeft',
  'chevronUp',
  'cross',
  'enterFullScreen',
  'eraser',
  'exitFullScreen',
  'eye',
  'filterOff',
  'forward',
  'lock',
  'menu',
  'minus',
  'paperPlane',
  'pause',
  'pencil',
  'plusLarge',
  'plusSmall',
  'printer',
  'reply',
  'search',
  'share',
  'verticalDots',
  'x',
];

function IconWall() {
  const [filterProps, setFilterProps] = useState({
    filter: '',
    isHovered: false,
  });
  return (
    <>
      <IconWallFilter onFilterChange={e => setFilterProps(e)} />
      <StyledIconWall>
        {allIcons
          .filter(icon => (filterProps.filter ? icon.includes(filterProps.filter) : icon))
          .map(icon => (
            <StyledIconTile key={icon}>
              <Icon isHovered={filterProps.isHovered} type={icon} />
              <StyledIconName>{icon}</StyledIconName>
            </StyledIconTile>
          ))}
      </StyledIconWall>
    </>
  );
}

const StyledIconWall = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 1rem 0;
`;

export default IconWall;
