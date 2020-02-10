import React from 'react';
import styled from 'styled-components';
import QuickMenuCard, {QuickMenuCardTitle, QuickMenuCardArt} from './QuickMenuCard';
import {PALETTE, screen} from '@styles/styled-constants';

import brandIllustration from '@images/brand-illustration.svg';
import patternsIllustration from '@images/patterns-illustration.svg';
import componentsIllustration from '@images/components-illustration.svg';
import principlesIllustration from '@images/principles-illustration.svg';
import editorialIllustration from '@images/editorial-illustration.svg';
import materialIllustration from '@images/material-illustration.svg';
import roadmapIllustration from '@images/roadmap-illustration.svg';

import Section from '@layouts/Section';

const StyledQuickMenuContent = styled('div')`
  min-height: calc(100vh - 20rem);
  padding: 6rem 0;
  display: flex;
  align-items: center;
  @media ${screen.sm} {
    padding: 1.5rem 0;
  }
`;

const StyledUpperQuickMenuRow = styled('div')`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'brand patterns library';
  @media ${screen.sm} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'brand'
      'patterns'
      'library';
  }
`;

const StyledLowerQuickMenuRow = styled('div')`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'principles editorial marketing roadmap';
  @media ${screen.md} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'principles editorial'
      'marketing roadmap';
  }
  @media ${screen.sm} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'principles'
      'editorial'
      'marketing'
      'roadmap';
  }
`;

const StyledQuickMenuContainer = styled('div')`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
`;

function QuickMenu() {
  return (
    <Section color={PALETTE.bandAid100}>
      <StyledQuickMenuContent>
        <StyledQuickMenuContainer>
          <StyledUpperQuickMenuRow>
            <QuickMenuCard grid="brand" to="/brand">
              <QuickMenuCardArt src={brandIllustration} />
              <QuickMenuCardTitle>Brand</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="patterns" to="/patterns">
              <QuickMenuCardArt src={patternsIllustration} />
              <QuickMenuCardTitle>Patterns</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="library" to="/library">
              <QuickMenuCardArt src={componentsIllustration} />
              <QuickMenuCardTitle>Library</QuickMenuCardTitle>
            </QuickMenuCard>
          </StyledUpperQuickMenuRow>
          <StyledLowerQuickMenuRow>
            <QuickMenuCard grid="principles" small to="/principles">
              <QuickMenuCardArt src={principlesIllustration} />
              <QuickMenuCardTitle>Design principles</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="editorial" small to="/editorial">
              <QuickMenuCardArt src={editorialIllustration} />
              <QuickMenuCardTitle>Editorial guidelines</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="marketing" small to="/marketing-material">
              <QuickMenuCardArt src={materialIllustration} />
              <QuickMenuCardTitle>Marketing material</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="roadmap" small to="/roadmap">
              <QuickMenuCardArt src={roadmapIllustration} />
              <QuickMenuCardTitle>Roadmap</QuickMenuCardTitle>
            </QuickMenuCard>
          </StyledLowerQuickMenuRow>
        </StyledQuickMenuContainer>
      </StyledQuickMenuContent>
    </Section>
  );
}

export default QuickMenu;
