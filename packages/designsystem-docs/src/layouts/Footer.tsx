import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import helsenorgeLogo from '@images/landing/helsenorge-logo.svg';
import {StyledDefaultProps} from '@shared/constants';
import {Grid, Row, Col} from '@shared/CustomizedGrid';
import {palette} from '@styles/styled-constants';

/**
 * HELSENORGE LINK
 */

function StyledHelsenorgeLink({className}: {className?: string}) {
  return (
    <a href="https://helsenorge.no" className={className}>
      <img src={helsenorgeLogo} />
    </a>
  );
}

const HelsenorgeLink = styled(StyledHelsenorgeLink)`
  width: 8rem;
  display: block;
`;

/**
 * LINK GROUP LIST ITEM
 */

const LinkGroupListItem = styled('li')`
  padding: 0.15rem 0.6875rem; /* 0.6875 = 11 px*/
  display: block;
`;

/**
 * LINK GROUP
 */

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
    &:after {
      display: block;
      content: '';
      /* border-bottom: 2px solid ${palette('surgical400')}; */
      transform: scaleX(0);
      transform-origin: 0% 50%;
      transition: transform 250ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
      font-weight: bold;
    }
  }
`;

interface FooterProps extends StyledDefaultProps {}

function Footer(props: FooterProps) {
  const {className} = props;
  return (
    <Row className={className}>
      <Grid>
        <Row>
          <Col lg={3}>
            <LinkGroup>
              <Link to="/about">Om Helsenorge design</Link>
              <Link to="/komponenter">komponenter</Link>
            </LinkGroup>
          </Col>
          <Col lg={3}>
            <LinkGroup>
              <Link to="/about">Bidra</Link>
              <Link to="/contribute">Personvern</Link>
              <Link to="/privacy">Bruksvilkår</Link>
            </LinkGroup>
          </Col>
          <Col lg={3}>
            <LinkGroup>
              <Link to="/about">Github</Link>
              <Link to="/contribute">Slack</Link>
              <Link to="/privacy">email</Link>
            </LinkGroup>
          </Col>
          <Col lg={3}>
            <div className="legal">
              Innholdet levert av Helsenorge
              <br />
              Sist oppdatert 10.06.2020
            </div>
          </Col>
        </Row>
      </Grid>
    </Row>
  );
}

const StyledFooter = styled(Footer)`
  margin-top: 1rem;
  height: 7rem;
  & .legal {
    padding: 0.6875rem;
    font-size: 1.125rem;
    text-align: right;
  }
`;

export {StyledFooter as Footer};
