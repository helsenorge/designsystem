import React from 'react';
import styled from 'styled-components';

import { theme as hndsTheme } from '@helsenorge/designsystem-react';

import Landing from '@layouts/Landing';
import Section from '@layouts/Section';
import notFoundIllustration from '@images/not-found-404.svg';
import { Row, Col } from '@shared/CustomizedGrid';

const StyledNotFoundImage = styled('img')`
  max-width: 20rem;
  @media ${hndsTheme.screen.sm} {
    max-width: 30rem;
    margin: 0 2rem;
  }
`;

const StyledNotFoundTitle = styled('h1')`
  font-size: 2rem;
  margin: 0.75rem 0;
  @media ${hndsTheme.screen.sm} {
    font-weight: 700;
    font-size: 4rem;
  }
`;

const StyledNotFoundDescription = styled('h2')`
  font-size: 1.5rem;
`;

const StyledNotFoundBanner = styled(Row)`
  padding: 1.5rem 0;

  @media ${hndsTheme.screen.sm} {
    padding: 3rem 0;
  }

  @media ${hndsTheme.screen.md} {
    padding: 6rem 0;
  }
`;

function NotFound() {
  return (
    <Landing>
      <Section color={hndsTheme.palette.blueberry50}>
        <StyledNotFoundBanner middle="xs">
          <Col lg={6} md={12}>
            <Row center="xs">
              <Col xs={12}>
                <StyledNotFoundImage src={notFoundIllustration} />
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12}>
            <Row start="lg" center="xs">
              <Col xs={12}>
                <StyledNotFoundTitle>Ever been to Narnia?</StyledNotFoundTitle>
                <StyledNotFoundDescription>Because that's the location of your page.</StyledNotFoundDescription>
              </Col>
            </Row>
          </Col>
        </StyledNotFoundBanner>
      </Section>
    </Landing>
  );
}

export default NotFound;
