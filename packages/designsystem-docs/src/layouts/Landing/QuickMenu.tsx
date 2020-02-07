import React from 'react';
import styled from 'styled-components';
import QuickMenuCard, {QuickMenuCardTitle, QuickMenuCardArt} from './QuickMenuCard';
import {Link} from 'gatsby';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {palette, screen} from '@styles/styled-constants';

import brandIllustration from '@images/brand-illustration.svg';
import patternsIllustration from '@images/patterns-illustration.svg';
import componentsIllustration from '@images/components-illustration.svg';
import principlesIllustration from '@images/principles-illustration.svg';
import editorialIllustration from '@images/editorial-illustration.svg';
import materialIllustration from '@images/material-illustration.svg';
import roadmapIllustration from '@images/roadmap-illustration.svg';

const StyledDivider = styled('div')`
  height: 1rem;
`;

function QuickMenu() {
  return (
    <StyledQuickMenu>
      <Grid>
        <Row>
          <Col lg={4} md={12}>
            <QuickMenuCard to="/brand">
              <QuickMenuCardArt src={brandIllustration} />
              <QuickMenuCardTitle>Brand</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={4} md={12}>
            <QuickMenuCard to="/patterns">
              <QuickMenuCardArt src={patternsIllustration} />
              <QuickMenuCardTitle>Patterns</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={4} md={12}>
            <QuickMenuCard to="/library">
              <QuickMenuCardArt src={componentsIllustration} />
              <QuickMenuCardTitle>Library</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
        </Row>
        <StyledDivider />
        <Row style={{flex: 1}}>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/principles">
              <QuickMenuCardArt src={principlesIllustration} />
              <QuickMenuCardTitle>Design principles</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/editorial">
              <QuickMenuCardArt src={editorialIllustration} />
              <QuickMenuCardTitle>Editorial guidelines</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/marketing-material">
              <QuickMenuCardArt src={materialIllustration} />
              <QuickMenuCardTitle>Marketing material</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/roadmap">
              <QuickMenuCardArt src={roadmapIllustration} />
              <QuickMenuCardTitle>Roadmap</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
        </Row>
      </Grid>
    </StyledQuickMenu>
  );
}

const StyledQuickMenu = styled('div')`
  padding: 8rem 0;
  background: ${palette('bandAid100')};
  @media ${screen.sm} {
    padding: 0.5rem 0;
  }
`;

export default QuickMenu;
