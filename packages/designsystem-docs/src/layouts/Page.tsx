import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './NewFooter';
import {Sidebar} from './Sidebar';
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
    if (typeof window !== 'undefined' && window.innerWidth < mobileFriendlyBreakpoint) return true;
    return false;
  };

  const [smallScreen, setSmallScreen] = useState(mobileFriendlyLayout());
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  useEffect(() => {
    function handleResize() {
      setSmallScreen(mobileFriendlyLayout());
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
  });
  return (
    <div className={props.className}>
      <Header />
      <StyledContent>
        <Sidebar />
        <Main>{props.children}</Main>
      </StyledContent>
    </div>
  );
}

const StyledContent = styled('div')`
  display: flex;
  flex: 1;
  background-color: #d6f5f3;
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
