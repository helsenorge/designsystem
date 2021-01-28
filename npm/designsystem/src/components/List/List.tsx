import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../theme/currys/color';

const StyledListItem = styled('li')`
  border-bottom: 1px solid ${getColor('neutral', 600)};
`;

const StyledList = styled('ul')`
  width: 100%;
  list-style: none;
  padding: 0 1rem 0 0.5rem;
`;

interface ListProps {
  children: React.ReactNode[];
  className?: string;
}

function List(props: ListProps) {
  const { children, className } = props;
  return (
    <StyledList className={className}>
      {children.map((child: React.ReactNode, index: number) => {
        return <StyledListItem key={index}>{child}</StyledListItem>;
      })}
    </StyledList>
  );
}

export default List;
