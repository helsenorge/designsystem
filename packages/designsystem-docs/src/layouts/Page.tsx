import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './NewFooter';
import {Content} from './Content';
import Sidebar from './NewSidebar';
import {Main} from './Main';
import {palette} from '@styles/styled-constants';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import LiveComponent from '../components/LiveComponent/LiveComponent';

interface FrontpageProps {
  children?: React.ReactNode;
  className?: string;
}

function StyledPage(props: FrontpageProps): JSX.Element {
  let mobileFriendlyBreakpoint = 992;

  const mobileFriendlyLayout = () => {
    if (window.innerWidth < mobileFriendlyBreakpoint) return true;
    return false;
  };

  const [smallScreen, setSmallScreen] = useState(mobileFriendlyLayout());
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  useEffect(() => {
    function handleResize() {
      setSmallScreen(mobileFriendlyLayout());
    }
    window.addEventListener('resize', handleResize);
  });
  return (
    <div className={props.className}>
      <Grid>
        <Row>
          <Col lg={12}>
            <Header fitLogoWideScreen={smallScreen} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Content>
              <Grid>
                <Row>
                  <Col lg={3} md={1}>
                    <Sidebar
                      toggleSideBar={setShowMobileSideBar}
                      adaptToSmallScreen={smallScreen}
                      showMobileSideBar={showMobileSideBar}
                    />
                    <RevealSideBarLink onClick={() => setShowMobileSideBar(true)}>Meny</RevealSideBarLink>
                  </Col>
                  <Col lg={9} md={11}>
                    <Main>{props.children}</Main>
                  </Col>
                </Row>
              </Grid>
            </Content>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

const Page = styled(StyledPage)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background: lavender; */
`;

const RevealSideBarLink = styled('div')`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 2rem;
`;

export default Page;
