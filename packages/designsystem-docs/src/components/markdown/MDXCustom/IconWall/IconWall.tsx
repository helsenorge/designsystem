import React, {useState, useEffect} from 'react';
import {Icon} from '@helsenorge/designsystem-react';
import styled from 'styled-components';
import Button from '../../../Button/Button';

const StyledIconTile = styled('div')`
  background-color: #f6f5f2;
  border: 1px solid #dedbd3;
  padding: 2rem;
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
`;

interface IconWallFilterProps {
  onFilterChange: (e: any) => void;
}

function IconWallFilter(props: IconWallFilterProps) {
  const {onFilterChange} = props;
  const [filter, setFilter] = useState('');
  // const [isHovered, setIsHovered] = useState(false);
  // const [color, setColor] = useState(Palette.Wheelchair);
  // const [size, setSize] = useState(IconSize.XSmall);
  useEffect(() => {
    onFilterChange({filter});
  }, [filter]);
  // function resetFilter() {
  //   setFilter('');
  //   setIsHovered(false);
  //   setColor(Palette.Wheelchair);
  //   setSize(IconSize.XSmall);
  // }
  return (
    <div>
      <StyledSearch
        onFocus={e => (e.currentTarget.placeholder = '')}
        onBlur={e => (e.currentTarget.placeholder = 'Filter icon by name...')}
        onInput={e => setFilter(e.currentTarget.value)}
        placeholder="Filter icon by name..."
      />
      {/* <StyledFilterProps>
        Hover: <input type="checkbox" onInput={e => setIsHovered(e.currentTarget.checked)} />
        Color:
        <select value={color} onChange={e => setColor(e.currentTarget.value)}>
          {Object.keys(Palette).map(key => (
            <option key={key} value={Palette[key]}>
              {key}
            </option>
          ))}
        </select>
        Size:
        <select value={size} onChange={e => setSize(Number(e.currentTarget.value))}>
          {Object.keys(IconSize)
            .filter(key => !isNaN(Number(IconSize[key])))
            .map(key => (
              <option key={key} value={IconSize[key]}>
                {key}
              </option>
            ))}
        </select>
        <Button tiny onClick={resetFilter}>
          Reset
        </Button>
      </StyledFilterProps> */}
    </div>
  );
}

function IconWall() {
  const icons = [
    'alarmclock',
    'arrowLeft',
    'arrowRight',
    'calendarSave',
    'chevronDown',
    'chevronLeft',
    'chevronRight',
    'chevronUp',
    'cross',
    'eye',
    'filterOff',
    'minus',
    'paperplane',
    'pencil',
    'plusLarge',
    'plusSmall',
    'printer',
    'share',
    'verticalDots',
  ];
  const [filterProps, setFilterProps] = useState({
    filter: '',
    // isHovered: false,
    // color: Palette.Wheelchair,
    // size: IconSize.XSmall,
  });
  return (
    <>
      <IconWallFilter onFilterChange={e => setFilterProps(e)} />
      <StyledIconWall>
        {icons
          .filter(icon => (filterProps.filter ? icon.includes(filterProps.filter) : icon))
          .map(icon => (
            <StyledIconTile key={icon}>
              <Icon>{icon}</Icon>
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
  grid-gap: 2rem;
  margin: 2rem 0;
`;

export default IconWall;
