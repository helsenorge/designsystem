import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {StyledDefaultProps} from '@shared/constants';
import {palette} from '@styles/styled-constants';
import {Logo} from '@helsenorge/designsystem-react';
import {Grid, Row, Col} from 'react-flexbox-grid';

const LinkGroupListItem = styled('li')`
  padding: 0.15rem 0.6875rem;
  display: block;
`;

interface LinkGroupProps extends StyledDefaultProps {}

function StyledLinkGroup(props: LinkGroupProps) {
  const {className, children} = props;
  return (
    <div className={className}>
      {React.Children.map(children, child => {
        return <LinkGroupListItem>{child}</LinkGroupListItem>;
      })}
    </div>
  );
}

const LinkGroup = styled(StyledLinkGroup)`
  list-style: none;
  border-left: 2px solid #d8d8d8;
  & a {
    display: block;
    text-decoration: none;
    width: fit-content;
    transition: all 250ms;
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

interface FooterProps extends StyledDefaultProps {}

function Footer(props: FooterProps) {
  const {className} = props;
  return (
    <StyledFooter fluid>
      <Grid>
        <Row>
          <Col lg={3}>
            <LinkGroup>
              <Link to="/about">About Helsenorge Design</Link>
              <Link to="/contribute">Contribute</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/license">Term of Use</Link>
            </LinkGroup>
          </Col>
          <Col lg={3}>
            <LinkGroup>
              <Link to="/github">Github</Link>
              <Link to="/email">Email</Link>
            </LinkGroup>
          </Col>
          <Col lg={6}>
            <Row end="md">
              <Col lg={12}>
                <div>
                  <StyledContentDisclaimerText>Innholdet er levert av</StyledContentDisclaimerText>
                  <StyledContentDisclaimerLink target="_blank" href="https://www.helsenorge.no">
                    <Logo size={150} />
                  </StyledContentDisclaimerLink>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </StyledFooter>
  );
}

const StyledContentDisclaimerLink = styled('a')`
  text-decoration: none;
`;

const StyledContentDisclaimerText = styled('h4')`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const StyledFooter = styled(Grid)`
  margin-top: 2.5rem;
  background-color: white;
`;

export {Footer};
