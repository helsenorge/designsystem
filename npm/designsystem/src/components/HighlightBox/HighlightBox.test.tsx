import React from 'react';

import { render, screen } from '@testing-library/react';

import HighlightBox from './HighlightBox';
import PdfFile from '../Icons/PdfFile';

describe('Gitt at HighlightBox skal rendres', (): void => {
  describe('Når HighlightBox skal vises vanlig', (): void => {
    test('Så rendres HighlightBox riktig', (): void => {
      render(<HighlightBox testId="boksen">Teksten sin</HighlightBox>);

      const box = screen.getByTestId('boksen');
      expect(box).toBeVisible();

      const text = screen.getByText('Teksten sin');
      expect(text).toBeVisible();
    });
  });
  describe('Når HighlightBox skal vises som medium', (): void => {
    test('Så rendres HighlightBox riktig', (): void => {
      const { container } = render(
        <HighlightBox color="blueberry" size="medium">
          <p>Avsnitt</p>
        </HighlightBox>
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når HighlightBox skal vises som large', (): void => {
    test('Så rendres HighlightBox riktig', (): void => {
      const { container } = render(
        <HighlightBox color="blueberry" size="large">
          <p>Avsnitt</p>
        </HighlightBox>
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når HighlightBox skal vises som fluid', (): void => {
    test('Så rendres HighlightBox riktig', (): void => {
      const { container } = render(
        <HighlightBox color="blueberry" size="fluid">
          <p>Avsnitt</p>
        </HighlightBox>
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når HighlightBox skal vises som et nav-element', (): void => {
    test('Så har komponenten riktig rolle', (): void => {
      render(
        <HighlightBox testId="boksen" htmlMarkup="nav">
          Teksten sin
        </HighlightBox>
      );

      const box = screen.getByRole('navigation');
      expect(box).toBeVisible();
    });
  });
  describe('Når HighlightBox skal vises med HTML som children', (): void => {
    test('Så er children rendret riktig', (): void => {
      render(
        <HighlightBox testId="boksen" htmlMarkup="nav">
          <h1>Jeg er en tittel</h1>
        </HighlightBox>
      );

      const title = screen.getByRole('heading', { name: 'Jeg er en tittel' });
      expect(title).toBeVisible();
    });
  });

  describe('Når HighlightBox skal vises med ikon', (): void => {
    test('Så er ikonet med', (): void => {
      render(
        <HighlightBox testId="boksen" svgIcon={PdfFile}>
          <h1>Jeg er en tittel</h1>
        </HighlightBox>
      );

      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeInTheDocument();
    });
  });
  describe('Når HighlightBox skal vises med custom className', (): void => {
    test('Så er className med', (): void => {
      render(
        <HighlightBox className="test-av-custom-classname">
          <h1>Jeg er en tittel</h1>
        </HighlightBox>
      );

      const box = screen.getByTestId('highlightbox-wrapper');
      expect(box).toHaveClass('test-av-custom-classname');
    });
  });
  describe('Når HighlightBox skal vises som fluid med custom className', (): void => {
    test('Så er className med', (): void => {
      render(
        <HighlightBox className="test-av-custom-classname" size={'fluid'} testId="fluid-highlightbox">
          <h1>Jeg er en tittel</h1>
        </HighlightBox>
      );

      const box = screen.getByTestId('fluid-highlightbox');
      expect(box).toHaveClass('test-av-custom-classname');
    });
  });
});
