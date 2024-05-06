import React from 'react';

import { render, screen } from '@testing-library/react';

import HighlightPanel from './HighlightPanel';
import PdfFile from '../Icons/PdfFile';

describe('Gitt at HighlightPanel skal rendres', (): void => {
  describe('Når HighlightPanel skal vises vanlig', (): void => {
    test('Så rendres HighlightPanel riktig', (): void => {
      render(<HighlightPanel testId="panelet">Teksten sin</HighlightPanel>);

      const panel = screen.getByTestId('panelet');
      expect(panel).toBeVisible();

      const text = screen.getByText('Teksten sin');
      expect(text).toBeVisible();
    });
  });
  describe('Når HighlightPanel skal vises som medium', (): void => {
    test('Så rendres HighlightPanel riktig', (): void => {
      const { container } = render(
        <HighlightPanel color="blueberry" size="medium">
          <p>Avsnitt</p>
        </HighlightPanel>
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når HighlightPanel skal vises som large', (): void => {
    test('Så rendres HighlightPanel riktig', (): void => {
      const { container } = render(
        <HighlightPanel color="blueberry" size="large">
          <p>Avsnitt</p>
        </HighlightPanel>
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når HighlightPanel skal vises som fluid', (): void => {
    test('Så rendres HighlightPanel riktig', (): void => {
      const { container } = render(
        <HighlightPanel color="blueberry" size="fluid">
          <p>Avsnitt</p>
        </HighlightPanel>
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når HighlightPanel skal vises som et nav-element', (): void => {
    test('Så har komponenten riktig rolle', (): void => {
      render(
        <HighlightPanel testId="boksen" htmlMarkup="nav">
          Teksten sin
        </HighlightPanel>
      );

      const panel = screen.getByRole('navigation');
      expect(panel).toBeVisible();
    });
  });
  describe('Når HighlightPanel skal vises med HTML som children', (): void => {
    test('Så er children rendret riktig', (): void => {
      render(
        <HighlightPanel testId="boksen" htmlMarkup="nav">
          <h1>Jeg er en tittel</h1>
        </HighlightPanel>
      );

      const title = screen.getByRole('heading', { name: 'Jeg er en tittel' });
      expect(title).toBeVisible();
    });
  });

  describe('Når HighlightPanel skal vises med ikon', (): void => {
    test('Så er ikonet med', (): void => {
      render(
        <HighlightPanel testId="boksen" svgIcon={PdfFile}>
          <h1>Jeg er en tittel</h1>
        </HighlightPanel>
      );

      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeInTheDocument();
    });
  });
  describe('Når HighlightPanel skal vises med custom className', (): void => {
    test('Så er className med', (): void => {
      render(
        <HighlightPanel className="test-av-custom-classname">
          <h1>Jeg er en tittel</h1>
        </HighlightPanel>
      );

      const panel = screen.getByTestId('highlightpanel-wrapper');
      expect(panel).toHaveClass('test-av-custom-classname');
    });
  });
  describe('Når HighlightPanel skal vises som fluid med custom className', (): void => {
    test('Så er className med', (): void => {
      render(
        <HighlightPanel className="test-av-custom-classname" size={'fluid'} testId="fluid-highlightpanel">
          <h1>Jeg er en tittel</h1>
        </HighlightPanel>
      );

      const panel = screen.getByTestId('fluid-highlightpanel');
      expect(panel).toHaveClass('test-av-custom-classname');
    });
  });
});
