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
              <QuickMenuCardTitle>Merkevare</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={4} md={12}>
            <QuickMenuCard to="/functional-patterns">
              <QuickMenuCardArt src={patternsIllustration} />
              <QuickMenuCardTitle>Patterns</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={4} md={12}>
            <QuickMenuCard to="/library">
              <QuickMenuCardArt src={componentsIllustration} />
              <QuickMenuCardTitle>Komponenter</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
        </Row>
        <StyledDivider />
        <Row style={{flex: 1}}>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/">
              <QuickMenuCardArt src={principlesIllustration} />
              <QuickMenuCardTitle>Designprinsipper</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/c">
              <QuickMenuCardArt src={editorialIllustration} />
              <QuickMenuCardTitle>Å skrive for helsenorge</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/components">
              <QuickMenuCardArt src={materialIllustration} />
              <QuickMenuCardTitle>Markedsmateriell</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
          <Col lg={3} md={6}>
            <QuickMenuCard small to="/roadmap">
              <QuickMenuCardArt src={roadmapIllustration} />
              <QuickMenuCardTitle>Veikart</QuickMenuCardTitle>
            </QuickMenuCard>
          </Col>
        </Row>
      </Grid>
    </StyledQuickMenu>
  );
}

const StyledQuickMenu = styled('div')`
  padding: 8rem 0;
  background: ${palette('surgical400')};
  @media ${screen.sm} {
    padding: 0.5rem 0;
  }
`;

export default QuickMenu;
