import React from 'react';
import styled from 'styled-components';

import {theme as hndsTheme} from '@helsenorge/designsystem-react';

import QuickMenuCard, {QuickMenuCardTitle, QuickMenuCardArt} from './QuickMenuCard';

import brandIllustration from '@images/brand-illustration.svg';
import patternsIllustration from '@images/patterns-illustration.svg';
import componentsIllustration from '@images/components-illustration.svg';
import principlesIllustration from '@images/principles-illustration.svg';
import editorialIllustration from '@images/editorial-illustration.svg';
import materialIllustration from '@images/material-illustration.svg';
import roadmapIllustration from '@images/roadmap-illustration.svg';

import Section from '@layouts/Section';

const StyledQuickMenuContent = styled('div')`
  min-height: calc(100vh - 21rem);
  display: flex;
  align-items: center;
  padding: 1.5rem 0;

  @media ${hndsTheme.screen.sm} {
    padding: 6rem 0;
  }
`;

const StyledUpperQuickMenuRow = styled('div')`
  display: grid;
  grid-gap: 1rem;
  width: 100%;

  grid-template-columns: 1fr;
  grid-template-areas:
    'brand'
    'patterns'
    'library';

  @media ${hndsTheme.screen.sm} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'brand patterns library';
  }
`;

const StyledLowerQuickMenuRow = styled('div')`
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: 1fr;
  grid-template-areas:
    'principles'
    'editorial'
    'marketing'
    'roadmap';

  @media ${hndsTheme.screen.sm} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'principles editorial'
      'marketing roadmap';
  }

  @media ${hndsTheme.screen.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'principles editorial marketing roadmap';
  }
`;

const StyledQuickMenuContainer = styled('div')`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
`;

function QuickMenu() {
  return (
    <Section color={hndsTheme.palette.blueberry100}>
      <StyledQuickMenuContent>
        <StyledQuickMenuContainer>
          <StyledUpperQuickMenuRow>
            <QuickMenuCard grid="brand" to="/brand">
              <QuickMenuCardArt src={brandIllustration} />
              <QuickMenuCardTitle>Merkevare</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="patterns" to="/patterns">
              <QuickMenuCardArt src={patternsIllustration} />
              <QuickMenuCardTitle>Mønstre</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="library" to="/library">
              <QuickMenuCardArt src={componentsIllustration} />
              <QuickMenuCardTitle>Komponenter</QuickMenuCardTitle>
            </QuickMenuCard>
          </StyledUpperQuickMenuRow>
          <StyledLowerQuickMenuRow>
            <QuickMenuCard grid="principles" small to="/principles">
              <QuickMenuCardArt src={principlesIllustration} />
              <QuickMenuCardTitle>Design-prinsipper</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="editorial" small to="/editorial">
              <QuickMenuCardArt src={editorialIllustration} />
              <QuickMenuCardTitle>Redaksjonelle retningslinjer</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="marketing" small to="/marketing-material">
              <QuickMenuCardArt src={materialIllustration} />
              <QuickMenuCardTitle>Markedsmateriell</QuickMenuCardTitle>
            </QuickMenuCard>
            <QuickMenuCard grid="roadmap" small to="/roadmap">
              <QuickMenuCardArt src={roadmapIllustration} />
              <QuickMenuCardTitle>Veikart</QuickMenuCardTitle>
            </QuickMenuCard>
          </StyledLowerQuickMenuRow>
        </StyledQuickMenuContainer>
      </StyledQuickMenuContent>
    </Section>
  );
}

export default QuickMenu;
