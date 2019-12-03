import React, {useState} from 'react';
import styled from 'styled-components';

const StyledIconTile = styled('div')`
  background-color: #f6f5f2;
  border: 1px solid #dedbd3;
  padding: 2rem;
`;

const StyledSearch = styled('input')`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
`;

function IconWall() {
  const [icons, setIcons] = useState(['alarmclock', 'paperplane', 'bell', 'tull', 'ball', 'test', 'bin']);
  const [filter, setFilter] = useState('');
  return (
    <>
      <StyledSearch onInput={e => setFilter(e.currentTarget.value)} placeholder="Filter icon by name..." />
      <StyledIconWall>
        {icons
          .filter(icon => (filter ? icon.includes(filter) : icon))
          .map(icon => (
            <StyledIconTile key={icon}>{icon}</StyledIconTile>
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
