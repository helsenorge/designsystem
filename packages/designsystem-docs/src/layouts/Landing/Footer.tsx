import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import helsenorgeLogo from '@images/landing/helsenorge-logo.svg';
import { StyledDefaultProps } from '@shared/constants';
import { Grid, Row, Col } from '@shared/CustomizedGrid';
import { palette } from '@styles/styled-constants';

/**
 * HELSENORGE LINK
 */

function StyledHelsenorgeLink({className}: {className?: string}) {
    return (
        <a href="https://helsenorge.no" className={className}>
            <img src={helsenorgeLogo} />
        </a>
    )
}

const HelsenorgeLink = styled(StyledHelsenorgeLink)`
    width: 8rem;
    display: block;
`

/**
 * LINK GROUP LIST ITEM
 */

const LinkGroupListItem = styled('li')`
    padding: 0.3rem 0;
    display: block;
`

/**
 * LINK GROUP
 */

interface LinkGroupProps extends StyledDefaultProps {}

function StyledLinkGroup(props: LinkGroupProps) {
    const {className, children} = props;
    return (
        <ul className={className}>
            {React.Children.map(children, child => {
                return <LinkGroupListItem>{child}</LinkGroupListItem>
            })}
        </ul>
    )
}

const LinkGroup = styled(StyledLinkGroup)`
    list-style: none;
    & a {
        display: block;
        text-decoration: none;
        width: fit-content;
        transition: all 250ms;
        &:after {
            display:block;
            content: '';
            border-bottom: 2px solid ${palette('wheelChair')};  
            transform: scaleX(0);  
            transform-origin:  0% 50%;
            transition: transform 250ms ease-in-out;
        }
        &:hover:after {
            transform: scaleX(1);
            font-weight: bold;
        }
    }
`

interface FooterProps extends StyledDefaultProps {}

function Footer(props: FooterProps) {
    const {className} = props;
    return (
        <Row className={className}>
            <Grid padding={4}>
                <Row around="xs"> 
                    <Col>
                        <LinkGroup>
                            <Link to="/about">About</Link>
                            <Link to="/contribute">Contribute</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/terms-of-use">Terms of Use</Link>
                        </LinkGroup>
                    </Col>
                    <Col>
                        <LinkGroup>
                            <a href="https://github.com/helsenorge/">GitHub</a>
                            <a href="https://slack.com">Slack</a>
                            <a href="mailto:contact@helsenorge.design">Email</a>
                        </LinkGroup>
                    </Col>
                    <Row middle="xs">
                        <HelsenorgeLink />
                    </Row>
                </Row>
            </Grid>
        </Row>
    )
}

const StyledFooter = styled(Footer)`
    padding: 3rem 0.5rem;
`

export {StyledFooter as Footer};