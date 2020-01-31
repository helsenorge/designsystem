import React, {useState} from 'react';
import styled from 'styled-components';
import {Codesandbox, ChevronDown, ChevronUp} from 'react-feather';
import {PALETTE} from '@styles/styled-constants';

const ComponentWrapper = styled('div')`
  width: auto;
  height: auto;
`;

const IconContainer = styled('div')`
  width: 44px;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;
const Icon = styled('img')`
  width: 2rem;
`;
const Label = styled('div')`
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  color: inherit;
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: auto;
`;
const StyledChevronUp = styled(ChevronUp)`
  margin-left: auto;
`;

const StyledDropDownMenu = styled('div')`
  position: relative;
  width: 100%;
  height: auto;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background-color: ${setComponentColors().regular.background};
  padding: 0 1rem;
  color:${PALETTE.surgical400};
  :hover {
    cursor: pointer;
    /* color: ${setComponentColors().hover.color};
    background: ${setComponentColors().hover.background}; */
  }
`;
const MenuDrawer = styled('div')`
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100%;
  height: auto;
  /* min-height: 4rem; */
  background: ${PALETTE.bone};
  /* border: 1px solid ${PALETTE.scab}; */
  /* border-left: 2px solid #d6f5f3; */
`;
const MenuDrawerItem = styled('div')`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${PALETTE.wheelChair};
  border-top: 1px solid #ded8d3;
  :hover {
    background: #d6f5f3;
  }
`;

function setChevron(expanded: boolean) {
  return expanded ? (
    <StyledChevronUp color={PALETTE.surgical400} size={24} />
  ) : (
    <StyledChevronDown color={PALETTE.surgical400} size={24} />
  );
}
function showMenuDrawer(expanded: boolean) {
  return expanded ? (
    <MenuDrawer>
      <MenuDrawerItem>apple</MenuDrawerItem>
      <MenuDrawerItem>marsipan</MenuDrawerItem>
      <MenuDrawerItem>orange</MenuDrawerItem>
    </MenuDrawer>
  ) : null;
}

function setComponentColors() {
  let componentColors = {
    hover: {
      background: PALETTE.surgical400,
      color: PALETTE.bone,
    },
    regular: {
      background: 'rgba(255, 255, 255, 0.5)',
      color: PALETTE.surgical400,
    },
    expanded: {
      background: 'green',
    },
  };
  return componentColors;
}

function DropDownMenu() {
  const [expanded, setExpanded] = useState(false);
  return (
    <ComponentWrapper>
      <StyledDropDownMenu onClick={() => setExpanded(!expanded)}>
        <IconContainer>
          <Codesandbox color="#01656F" size={32} />
        </IconContainer>
        <Label>komponenter</Label>
        {setChevron(expanded)}
        {showMenuDrawer(expanded)}
      </StyledDropDownMenu>
    </ComponentWrapper>
  );
}

export default DropDownMenu;
