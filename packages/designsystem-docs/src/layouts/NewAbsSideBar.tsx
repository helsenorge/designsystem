import React from 'react';
import styled from 'styled-components';

import DropDownMenu from '../components/DropDownMenu/DropDownMenu';
import Toc from '../components/ToC/ToC';
import {Home, X} from 'react-feather';
import {PALETTE} from '@styles/styled-constants';
import {Link} from 'gatsby';

interface SidebarProps {
  toggle: Function;
  showSideBar: boolean;
}

function Sidebar(props: SidebarProps) {
  return (
    <StyledSidebar showSideBar={props.showSideBar} toggle={props.toggle}>
      <ToolBar>
        <Link to="/">
          <Home size={24} color={PALETTE.surgical400} />
        </Link>
        <StyledClose size={24} color={PALETTE.surgical400} onClick={props.toggle()} />
      </ToolBar>
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
  margin-bottom: 6rem;
  visibility: show;
`;

const StyledClose = styled(X)`
  margin-left: auto;
`;

const IconContainer = styled('div')`
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconContainerRight = styled(IconContainer)`
  margin-left: auto;
  /* margin-right: 1rem; */
`;

const StyledSidebar = styled('div')<SidebarProps>`
  position: absolute;
  top: -110;
  left: 0;
  height: 100%;
  /* margin-top: -32px; */
  margin-left: ${props => (props.showSideBar ? '-32px' : '-440px')};
  max-width: 328px;
  /* padding-top: 8rem; */
  /* transition: margin-left 300ms; */
`;

export default Sidebar;
