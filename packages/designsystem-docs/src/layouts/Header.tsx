import React from 'react';
import styled from 'styled-components';

import bannerImage from '../images/snail.svg';
import gitHub from '../images/github-brands.svg';
import gitHubHover from '../images/github-brands-hover.svg';
import sketch from '../images/sketch-brands.svg';
import sketchHover from '../images/sketch-brands-hover.svg';
import slack from '../images/slack-brands.svg';
import slackHover from '../images/slack-brands-hover.svg';
import Search from '../components/Search/Search';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const HeaderContent = styled('div')`
  width: 100%;
  max-width: 90.5rem;
  display: flex;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled('div')`
  min-width: 18.625rem;
  max-width: 18.625rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
`;

const BannerText = styled('a')`
  width: 100%;
  height: 100%;
  justify-content: center;
  font-size: 1.25rem;
  flex-direction: column;
  line-height: 110%;
  display: flex;
  margin-left: 1rem;
  text-decoration: none;
  color: black;
`;

const Inner = styled('div')`
  flex: 1 1 auto;
  margin: 0 5.5rem 0 1.5rem;
  position: relative;
  max-width: 750px;
  align-items: center;
  display: flex;
`;

const HotLinks = styled('div')`
  height: 5rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  padding: 0 1.5rem;
`;

const BannerImage = styled('img')`
  width: 3rem;
`;

const HotLink = styled('a')`
  width: 1.25rem;
`;

function Header(props: HeaderProps): JSX.Element {
  return (
    <div className={props.className}>
      <HeaderContent>
        <Logo>
          <BannerImage src={bannerImage} />
          <BannerText href="/">
            <span>helsenorge</span>
            <span>design system</span>
          </BannerText>
        </Logo>
        <Inner>
          <Search />
        </Inner>
        <HotLinks>
          <HotLink href="https://github.com/Helsenorge/designsystem-docs">
            <img
              onMouseEnter={e => (e.currentTarget.src = gitHubHover)}
              onMouseLeave={e => (e.currentTarget.src = gitHub)}
              src={gitHub}
            />
          </HotLink>
          <HotLink href="https://github.com/Helsenorge/designsystem-docs">
            <img
              onMouseEnter={e => (e.currentTarget.src = sketchHover)}
              onMouseLeave={e => (e.currentTarget.src = sketch)}
              src={sketch}
            />
          </HotLink>
          <HotLink href="https://helsedirutvikling.slack.com">
            <img
              onMouseEnter={e => (e.currentTarget.src = slackHover)}
              onMouseLeave={e => (e.currentTarget.src = slack)}
              src={slack}
            />
          </HotLink>
        </HotLinks>
      </HeaderContent>
    </div>
  );
}

const StyledHeader = styled(Header)`
  width: 100%;
  height: 5rem;
  display: flex;
  z-index: 1100;
  position: relative;
  padding: 0;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  border-bottom: 1px solid #d4dadf;
  background-color: white;
`;

export {StyledHeader as Header};
