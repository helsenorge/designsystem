import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledToc = styled('div')`
  margin: 1rem 0 1rem 1rem;
`;

const StyledToCLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin: 1rem 0;
  padding: 0.5rem 2rem;
  font-size: 1.125rem;
  &::first-letter {
    text-transform: uppercase;
  }
  &.active {
    color: white;
    background: #01656f;
  }
  &:hover {
    color: black;
    background: #90d9d3;
  }
`;
const StyledToCSectionLink = styled(StyledToCLink)`
  padding-left: 1rem;
  font-weight: 700;
`;

function ToC() {
  return (
    <StyledToc>
      <StyledToCSectionLink to="/introduction" activeClassName="active">
        Introduction
      </StyledToCSectionLink>
      <StyledToCSectionLink to="/absfdfout" activeClassName="active">
        Fundamentals
      </StyledToCSectionLink>
      <StyledToCLink to="/about" activeClassName="active">
        accessibility
      </StyledToCLink>
      <StyledToCLink to="/fdf" activeClassName="active">
        the use of space
      </StyledToCLink>
    </StyledToc>
  );
}

export default ToC;
