import React from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';

import {theme as hndsTheme} from '@helsenorge/designsystem-react';
import Logo from '@helsenorge/designsystem-react/components/Logo';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import Section from './Section';
import useWindowSize from '@hooks/UseWindowSize';

const StyledFooterContent = styled('div')`
  width: 100%;
  padding: 2rem 0 4rem 0;
`;

const StyledContentDisclaimer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledContentDisclaimerText = styled('span')`
  margin-bottom: 1rem;
  font-size: 1rem;
  @media ${hndsTheme.screen.sm} {
    font-size: 0.8rem;
  }
`;

const StyledContentDisclaimerLink = styled('a')`
  display: block;
`;

const StyledFooterLinkGroup = styled('ul')`
  display: flex;
  flex-direction: column;
`;

const StyledFooterLinkGroupItem = styled('li')`
  list-style: none;
`;

const footerLinkStyle = css`
  padding: 0.25rem 0.25rem 0.25rem 1rem;
  display: block;
  text-decoration: none;
  border-left: 2px solid ${hndsTheme.palette.kiwi100};
  font-size: 1.1rem;
  &:hover {
    border-left: 2px solid ${hndsTheme.palette.kiwi400};
  }
`;

const StyledFooterLink = styled(Link)`
  ${footerLinkStyle}
`;

const StyledFooterLinkExternal = styled('a')`
  ${footerLinkStyle}
`;

interface FooterLinkProps {
  children?: React.ReactNode;
  external?: boolean;
  to: string;
}

function FooterLink(props: FooterLinkProps) {
  const {children, to, external} = props;
  return (
    <StyledFooterLinkGroupItem>
      {external ? (
        <StyledFooterLinkExternal target="_blank" href={to}>
          {children}
        </StyledFooterLinkExternal>
      ) : (
        <StyledFooterLink to={to}>{children}</StyledFooterLink>
      )}
    </StyledFooterLinkGroupItem>
  );
}

interface ContentDisclaimerProps {
  children: React.ReactNode;
  byline?: boolean;
}

function ContentDisclaimer(props: ContentDisclaimerProps) {
  const {children, byline = false} = props;
  return (
    <StyledContentDisclaimer>
      <StyledContentDisclaimerText>{children}</StyledContentDisclaimerText>
      <StyledContentDisclaimerLink href="https://www.helsenorge.no">
        <Logo byline={byline ? true : false} size={byline ? 200 : 125} />
      </StyledContentDisclaimerLink>
    </StyledContentDisclaimer>
  );
}

function Footer() {
  const size = useWindowSize();
  return (
    <Section>
      <StyledFooterContent>
        <Grid>
          <Row>
            <Col lg md={12}>
              <StyledFooterLinkGroup>
                <FooterLink to="/about">About Helsenorge Design</FooterLink>
                <FooterLink to="/contribute">Contribution</FooterLink>
                <FooterLink to="/Privacy">Privacy</FooterLink>
                <FooterLink to="/Terms of use">Terms of use</FooterLink>
              </StyledFooterLinkGroup>
            </Col>
            <Col md sm={12}>
              <StyledFooterLinkGroup>
                <FooterLink external to="https://github.com/helsenorge/designsystem">
                  GitHub
                </FooterLink>
                <FooterLink external to="https://www.abstract.com">
                  Abstract
                </FooterLink>
                <FooterLink external to="mailto:design@helsenorge.design">
                  Email
                </FooterLink>
              </StyledFooterLinkGroup>
            </Col>
            {size.width && size.width > 768 ? (
              <Row>
                <Col md sm={12}>
                  <ContentDisclaimer byline={false}>Content provided by</ContentDisclaimer>
                </Col>
              </Row>
            ) : null}
          </Row>
          {size.width && size.width <= 768 ? (
            <Row>
              <Col md sm={12}>
                <ContentDisclaimer byline={true}>Content provided by</ContentDisclaimer>
              </Col>
            </Row>
          ) : null}
        </Grid>
      </StyledFooterContent>
    </Section>
  );
}

export default Footer;
