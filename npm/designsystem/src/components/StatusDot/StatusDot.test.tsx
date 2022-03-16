import * as React from 'react';
import StatusDot from '.';
import { render, screen } from '@testing-library/react';

describe('Gitt at StatusDot rendres ', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så skal teskten vises til innbygger', () => {
      render(<StatusDot variant="warning" text="Eksempeltekst" />);
      expect(screen.queryByText('Eksempeltekst')).toBeTruthy();
    });
  });
  describe('Når StatusDot har type="recurring".', () => {
    it('Så skal komponenten ha en SVG-fil.', () => {
      render(<StatusDot variant="recurring" text="Test Text" />);
      expect(screen.queryByText('Test Text').parentElement.firstElementChild.className).toBe('statusdot__dot statusdot__dot--icon');
      expect(screen.queryByText('Test Text').parentElement.lastElementChild.className).toBe('statusdot__label statusdot__label--icon');
    });
  });
  describe('Når StatusDot har en av de andre typene', () => {
    it('Så skal komponenten ikke ha en tilhørende SVG-fil og samsvarende klassenavn', () => {
      render(<StatusDot variant="info" text="text1" />);
      render(<StatusDot variant="warning" text="text2" />);
      render(<StatusDot variant="alert" text="text3" />);
      render(<StatusDot variant="recurring" text="text4" />);
      render(<StatusDot variant="transparent" text="text5" />);
      render(<StatusDot variant="group" text="text6" />);

      const dot1 = screen.queryByText('text1').parentElement.firstElementChild;
      const dot2 = screen.queryByText('text2').parentElement.firstElementChild;
      const dot3 = screen.queryByText('text3').parentElement.firstElementChild;
      const dot4 = screen.queryByText('text4').parentElement.firstElementChild;
      const dot5 = screen.queryByText('text5').parentElement.firstElementChild;
      const dot6 = screen.queryByText('text6').parentElement.firstElementChild;

      expect(dot1.className).toBe('statusdot__dot statusdot__dot--info');
      expect(dot2.className).toBe('statusdot__dot statusdot__dot--warning');
      expect(dot3.className).toBe('statusdot__dot statusdot__dot--alert');
      expect(dot4.className).toBe('statusdot__dot statusdot__dot--icon');
      expect(dot5.className).toBe('statusdot__dot statusdot__dot--transparent');
      expect(dot6.className).toBe('statusdot__dot statusdot__dot--icon');
    });
  });
});
