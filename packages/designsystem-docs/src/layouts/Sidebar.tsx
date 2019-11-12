import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby';
import {Location} from '@reach/router';
import styled from 'styled-components';

import npm from '../images/npm-brands.svg';
import useLatestNPMVersion from '../hooks/UseLatestNPMVersion';

const NavGroupName = styled('span')`
  padding: 0.5rem;
  font-weight: 600;
  color: #9b978c;
  text-transform: uppercase;
`;

const NavGroupLink = styled(Link)`
  padding: 0.4rem;
  text-decoration: none;
  background-color: ${(props: {active?: boolean}) => (props.active ? 'white' : 'none')};
  border: ${(props: {active?: boolean}) => (props.active ? '1px solid #dedbd3' : '1px solid transparent')};
  transition: all 200ms;
  margin: 0.2rem 0;
  &:hover {
    background-color: ${(props: {active?: boolean}) => (!props.active ? '#ffdbbe' : 'white')};
  }
`;

function StyledNavGroup({
  className,
  children,
  groupTitle,
}: {
  className?: string;
  children: React.ReactNode;
  groupTitle?: string;
}) {
  return (
    <div className={className}>
      {groupTitle ? <NavGroupName>{groupTitle}</NavGroupName> : null}
      {children}
    </div>
  );
}

const NavGroup = styled(StyledNavGroup)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const NavContent = styled('nav')`
  margin-top: 3rem;
  padding: 0 2rem;
`;

function StyledDesignSystemVersion({className}: {className?: string}) {
  const [latest, loading] = useLatestNPMVersion('dev');
  return (
    <div className={className}>
      <img src={npm} />
      <span>{latest ? latest['dist-tags'].dev : ''}</span>
    </div>
  );
}

const DesignSystemVersion = styled(StyledDesignSystemVersion)`
  margin: 1rem;
  padding: 0 0.5rem;
  display: flex;
  height: 3rem;
  align-items: center;
  & > img {
    width: 2.4rem;
    margin-right: 1rem;
  }
  & > span {
    font-size: 1.1rem;
  }
`;

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

function Sidebar(props: SidebarProps): JSX.Element {
  const [activeRoute, setActiveRoute] = useState();
  return (
    <div className={props.className}>
      <Location>
        {({location}) => {
          setActiveRoute(location.pathname);
          return <></>;
        }}
      </Location>
      {/* <DesignSystemVersion /> */}
      <NavContent>
        <NavGroup>
          <NavGroupLink to="/introduction">Introduction</NavGroupLink>
          <NavGroupLink to="/personality">Personality</NavGroupLink>
          <NavGroupLink to="/roadmap">Roadmap</NavGroupLink>
          <NavGroupLink to="/about">About</NavGroupLink>
          <NavGroupLink to="/tags">Markdown tags</NavGroupLink>
        </NavGroup>
        <NavGroup groupTitle="Principles">
          <NavGroupLink to="/principles/design">Design</NavGroupLink>
        </NavGroup>
        <NavGroup groupTitle="Brand (perc)">
          <NavGroupLink to="/perceptual-patterns/palette">Palette</NavGroupLink>
          <NavGroupLink to="/perceptual-patterns/spacing">Spacing</NavGroupLink>
        </NavGroup>
        <NavGroup groupTitle="Patterns (func)">
          <NavGroupLink to="/functional-patterns/page-feedback">Page feedback</NavGroupLink>
        </NavGroup>
        <NavGroup groupTitle="Component library">
          <NavGroupLink to="/pattern-library/introduction">Introduction</NavGroupLink>
          <NavGroupLink to="/pattern-library/get-started">Get started</NavGroupLink>
          <NavGroupLink to="/pattern-library/grid">Grid</NavGroupLink>
        </NavGroup>
        <NavGroup groupTitle="Components">
          <NavGroupLink to="/pattern-library/components/confirmation-button">confirmation-button</NavGroupLink>
        </NavGroup>
      </NavContent>
    </div>
  );
}

const StyledSidebar = styled(Sidebar)`
  flex: 0 0 auto;
  width: calc((100% - 90.5rem) / 2 + 18.625rem);
  height: calc(100vh - 5rem);
  min-width: 18.625rem;
  overflow-y: auto;
  padding-left: calc((100% - 90.5rem) / 2);
  border-right: 1px solid #dedbd3;
  background-color: #fff1e1;
`;

export {StyledSidebar as Sidebar};
