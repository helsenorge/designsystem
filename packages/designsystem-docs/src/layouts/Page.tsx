import React, {useState, useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from './Header';
// import Footer from './NewFooter';
import {Sidebar} from './Sidebar/Sidebar';
import {Main} from './Main';
import {palette, theme} from '@styles/styled-constants';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import LiveComponent from '../components/LiveComponent/LiveComponent';
import {Footer} from './Footer';

interface FrontpageProps {
  children?: React.ReactNode;
  className?: string;
}

function StyledPage(props: FrontpageProps): JSX.Element {
  // let mobileFriendlyBreakpoint = 992;

  // const mobileFriendlyLayout = () => {
  //   if (typeof window !== 'undefined' && window.innerWidth < mobileFriendlyBreakpoint) return true;
  //   return false;
  // };

  // const [smallScreen, setSmallScreen] = useState(mobileFriendlyLayout());
  // const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  // useEffect(() => {
  //   function handleResize() {
  //     setSmallScreen(mobileFriendlyLayout());
  //   }
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('resize', handleResize);
  //   }
  // });
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
  min-height: calc(100vh - 8rem);
  margin-top: 3rem;
`;

const StyledContent = styled(Grid)`
  background-color: ${palette('bandAid100')};
`;

const Page = styled(StyledPage)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RevealSideBarLink = styled('div')`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 2rem;
`;

export default Page;
