import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import {Link} from 'gatsby';

import hndLogo from '@images/hnd-logo.svg';

function Header() {
  return (
    <StyledHeader>
      <Row>
        <Col lg={4}>
          <Link to="/">
            <Logo src={hndLogo} />
          </Link>
        </Col>
      </Row>
    </StyledHeader>
  );
}

const Logo = styled('img')`
  width: 14rem;
  height: 5rem;
`;

const StyledHeader = styled(Grid)`
  height: 5rem;
  background-color: white;
`;

export default Header;
