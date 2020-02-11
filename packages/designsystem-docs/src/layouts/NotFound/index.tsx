import React from 'react';
import styled from 'styled-components';

import Landing from '@layouts/Landing';
import Section from '@layouts/Section';
import notFoundIllustration from '@images/not-found-404.svg';
import {screen, theme} from '@styles/styled-constants';
import {Row, Col} from '@shared/CustomizedGrid';

const StyledNotFoundImage = styled('img')`
  max-width: 30rem;
  margin: 0 2rem;
  @media ${screen.sm} {
    max-width: 20rem;
  }
`;

const StyledNotFoundTitle = styled('h1')`
  font-weight: 700;
  font-size: 4rem;
  @media ${screen.sm} {
    font-size: 2rem;
    margin: 0.75rem 0;
  }
`;

const StyledNotFoundDescription = styled('h2')`
  @media ${screen.sm} {
    font-size: 1.5rem;
  }
`;

const StyledNotFoundBanner = styled(Row)`
  padding: 6rem 0;
  @media ${screen.md} {
    padding: 3rem 0;
  }
  @media ${screen.sm} {
    padding: 1.5rem 0;
  }
`;

function NotFound() {
  return (
    <Landing>
      <Section color={theme.palette.veins50}>
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
