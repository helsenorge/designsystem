import React from 'react';
import styled from 'styled-components';

function Header() {
  return <StyledHeader>Helsenorge | Design </StyledHeader>;
}

const StyledHeader = styled('div')`
  padding: 1rem;
  background-color: pink;
`;

export default Header;
