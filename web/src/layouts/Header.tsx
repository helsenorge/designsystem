import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@shared/CustomizedGrid';
import Logo from '../components/Logo';
import Section from './Section';

const StyledHeaderContent = styled(Row)`
  padding: 1rem 0;
`;

function Header() {
  return (
    <Section>
      <StyledHeaderContent start="xs">
        <Col xs>
          <Logo />
        </Col>
      </StyledHeaderContent>
    </Section>
  );
}

export default Header;
