import React from 'react';
import styled from 'styled-components';
import {color} from '../../theme';

const StyledListItem = styled('li')`
  border-bottom: 1px solid ${color('waitingRoom')};
`;

const StyledList = styled('ul')`
  width: 100%;
  list-style: none;
  padding: 0 1rem 0 0.5rem;
`;

interface ListProps {
  children: React.ReactNode[];
}

function List(props: ListProps) {
  const {children} = props;
  return (
    <StyledList>
      {children.map((child: React.ReactNode, index: number) => {
        return <StyledListItem key={index}>{child}</StyledListItem>;
      })}
    </StyledList>
  );
}

export default List;
