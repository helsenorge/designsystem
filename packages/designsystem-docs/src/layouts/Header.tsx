import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search/Search';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import {Link} from 'gatsby';

import helsenorgeLogo from '@images/landing/helsenorge-logo.svg';

interface HeaderProps {
  fitLogoWideScreen: boolean;
}

function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <Grid>
        <Row>
          <Col lg={4}>
            <Link to="/">
              <Logo fitLogoWideScreen={props.fitLogoWideScreen}>
                <BannerImage src={helsenorgeLogo} />
                <span>design</span>
              </Logo>
            </Link>
          </Col>
          <Col lg={8}>{/* <Search /> */}</Col>
        </Row>
      </Grid>
    </StyledHeader>
  );
}

const Logo = styled('div')<HeaderProps>`
  min-width: 20rem;
  max-width: 20rem;
  display: flex;
  justify-content: left;
  font-size: 2.125rem; //34px
  font-weight: 200;
  letter-spacing: 0.1rem;
  margin-left: ${props => (props.fitLogoWideScreen ? '0' : '2rem')};
`;
const BannerImage = styled('img')`
  width: 8rem;
  padding-right: 1.5rem;
  margin-right: 1.5rem;
  border-right: 2px solid #d8d8d8;
`;

const StyledHeader = styled('div')`
  height: 6rem;
  display: flex;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;

export default Header;
