import React, {useState, useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from './Header';
// import Footer from './NewFooter';
import {Sidebar} from './Sidebar/Sidebar';
import {Main} from './Main';
import {palette, theme} from '@styles/styled-constants';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import LiveComponent from '../components/LiveComponent/LiveComponent';
import Footer from './Footer';

interface FrontpageProps {
  children?: React.ReactNode;
}

function Page(props: FrontpageProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StyledContent fluid>
        <Header />
        <StyledMainContent>
          <Row>
            <Col lg={3}>
              <Sidebar />
            </Col>
            <Col lg={9}>
              <Main>{props.children}</Main>
            </Col>
          </Row>
        </StyledMainContent>
        <Footer />
      </StyledContent>
    </ThemeProvider>
  );
}

const StyledMainContent = styled(Grid)`
  /* min-height: calc(100vh - 24rem); */
  margin: 3rem 0;
`;

const StyledContent = styled(Grid)`
  background-color: ${palette('bandAid100')};
`;

const RevealSideBarLink = styled('div')`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 2rem;
`;

export default Page;
