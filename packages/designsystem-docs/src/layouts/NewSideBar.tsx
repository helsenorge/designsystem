import React, {useState} from 'react';
import styled from 'styled-components';

import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import Toc from '../components/ToC/ToC';
import {Home, X} from 'react-feather';
import {PALETTE} from '@styles/styled-constants';
import {Link} from 'gatsby';

interface SidebarProps {
  toggleSideBar: (x: boolean) => void;
  adaptToSmallScreen: boolean;
  showMobileSideBar: boolean;
}

function Sidebar(props: SidebarProps) {
  return (
    <StyledSidebar
      adaptToSmallScreen={props.adaptToSmallScreen}
      toggleSideBar={props.toggleSideBar}
      showMobileSideBar={props.showMobileSideBar}>
      {props.adaptToSmallScreen && ( //only show toolbar if small screen
        <ToolBar>
          <Link to="/">
            <Home size={24} color={PALETTE.surgical400} />
          </Link>
          <StyledClose size={24} color={PALETTE.surgical400} onClick={() => props.toggleSideBar(false)} />
        </ToolBar>
      )}
      <DropDownMenu />
      <Toc />
    </StyledSidebar>
  );
}
const ToolBar = styled('div')`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 8rem;
  visibility: show;
`;

const StyledClose = styled(X)`
  margin-left: auto;
`;

function toggleMobileSidebar(x: boolean) {
  if (x) return '0px';
  return '-400px';
}

const StyledSidebar = styled('div')<SidebarProps>`
  position: ${props => (props.adaptToSmallScreen ? 'absolute' : 'static')};
  top: ${props => (props.adaptToSmallScreen ? '0' : 'auto')};
  left: ${props => (props.adaptToSmallScreen ? '0' : 'auto')};
  bottom: ${props => (props.adaptToSmallScreen ? '0' : 'auto')};
  height: 100%;
  min-height: 800px;
  margin-left: ${props => (props.adaptToSmallScreen ? () => toggleMobileSidebar(props.showMobileSideBar) : '-32px')};
  padding-top: ${props => (props.adaptToSmallScreen ? '0' : '6rem')};
  max-width: 328px;
  /* transition: margin-left 300ms; */
`;

export default Sidebar;
