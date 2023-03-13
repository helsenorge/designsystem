import * as React from 'react';

import { render, screen } from '@testing-library/react';

import StatusDot from '.';

describe('Gitt at StatusDot rendres ', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så skal teksten vises til innbygger', () => {
      render(<StatusDot variant="warning" text="Eksempeltekst" />);

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
    });
  });
  describe('Når StatusDot er variant="recurring".', () => {
    it('Så skal komponenten ha en SVG-fil.', () => {
      const { container } = render(<StatusDot variant="recurring" text="Eksempeltekst" testId={'statusdot'} />);

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();

      const statusdot = screen.getByTestId('statusdot');
      expect(statusdot.firstElementChild.className).toBe('statusdot__dot statusdot__dot--icon');
      expect(statusdot.lastElementChild.className).toBe('statusdot__label statusdot__label--icon');

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når StatusDot er variant="group".', () => {
    it('Så skal komponenten ha en SVG-fil.', () => {
      const { container } = render(<StatusDot variant="group" text="Eksempeltekst" testId={'statusdot'} />);

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();

      const statusdot = screen.getByTestId('statusdot');
      expect(statusdot.firstElementChild.className).toBe('statusdot__dot statusdot__dot--icon');
      expect(statusdot.lastElementChild.className).toBe('statusdot__label statusdot__label--icon');

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når StatusDot er variant="noaccess".', () => {
    it('Så skal komponenten ha en SVG-fil.', () => {
      const { container } = render(<StatusDot variant="noaccess" text="Eksempeltekst" testId={'statusdot'} />);

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();

      const statusdot = screen.getByTestId('statusdot');
      expect(statusdot.firstElementChild.className).toBe('statusdot__dot statusdot__dot--icon');
      expect(statusdot.lastElementChild.className).toBe('statusdot__label statusdot__label--icon');

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når StatusDot er variant="attachment".', () => {
    it('Så skal komponenten ha en SVG-fil.', () => {
      const { container } = render(<StatusDot variant="attachment" text="Eksempeltekst" testId={'statusdot'} />);

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();

      const statusdot = screen.getByTestId('statusdot');
      expect(statusdot.firstElementChild.className).toBe('statusdot__dot statusdot__dot--icon');
      expect(statusdot.lastElementChild.className).toBe('statusdot__label statusdot__label--icon');

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når StatusDot er en av de andre variantene', () => {
    it('Så skal komponenten ikke ha en tilhørende SVG-fil og samsvarende klassenavn', () => {
      render(
        <>
          <StatusDot variant="info" text="text1" testId={'statusdot1'} />
          <StatusDot variant="warning" text="text2" testId={'statusdot2'} />
          <StatusDot variant="alert" text="text3" testId={'statusdot3'} />
          <StatusDot variant="transparent" text="text4" testId={'statusdot4'} />
        </>
      );

      const dot1 = screen.getByTestId('statusdot1').firstElementChild;
      const dot2 = screen.getByTestId('statusdot2').firstElementChild;
      const dot3 = screen.getByTestId('statusdot3').firstElementChild;
      const dot4 = screen.getByTestId('statusdot4').firstElementChild;

      expect(dot1.className).toBe('statusdot__dot statusdot__dot--info');
      expect(dot2.className).toBe('statusdot__dot statusdot__dot--warning');
      expect(dot3.className).toBe('statusdot__dot statusdot__dot--alert');
      expect(dot4.className).toBe('statusdot__dot statusdot__dot--transparent');
    });
  });
});
