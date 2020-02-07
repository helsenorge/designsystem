import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {screen} from '@styles/styled-constants';
import hndLogo from '@images/hnd-logo.svg';
import {Grid, Row, Col} from 'react-flexbox-grid';

function Header() {
  return (
    <StyledHeader fluid>
      <Grid>
        <Row>
          <Col lg={4}>
            <Link to="/">
              <Logo src={hndLogo} />
            </Link>
          </Col>
        </Row>
      </Grid>
    </StyledHeader>
  );
}

const Logo = styled('img')`
  width: 14rem;
  height: 5rem;
  @media ${screen.sm} {
    width: 10rem;
  }
`;

const StyledHeader = styled(Grid)`
  height: 5rem;
  background-color: white;
`;

export default Header;
