import { render, screen } from '@testing-library/react';

import StatusDot from '.';

describe('Gitt at StatusDot rendres ', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så skal teksten vises til innbygger', () => {
      render(<StatusDot variant="inprocess" text="Eksempeltekst" />);

      const text = screen.getByText('Eksempeltekst');
      expect(text).toBeVisible();
    });
  });
  describe('Når StatusDot rendres som vilken som helst av variantene', () => {
    it('Så skal komponenten ha en tilhørende SVG-fil med role presentation', () => {
      render(
        <>
          <StatusDot variant="success" text="text1" testId={'statusdot1'} />
          <StatusDot variant="inprocess" text="text2" testId={'statusdot2'} />
          <StatusDot variant="exception" text="text3" testId={'statusdot3'} />
          <StatusDot variant="unknown" text="text4" testId={'statusdot4'} />
          <StatusDot variant="inspected" text="text4" testId={'statusdot4'} />
          <StatusDot variant="cancelled" text="text4" testId={'statusdot4'} />
          <StatusDot variant="alert" text="text4" testId={'statusdot4'} />
          <StatusDot variant="transparent" text="text4" testId={'statusdot4'} />
          <StatusDot variant="info" text="text4" testId={'statusdot4'} />
          <StatusDot variant="group" text="text4" testId={'statusdot4'} />
          <StatusDot variant="recurring" text="text4" testId={'statusdot4'} />
          <StatusDot variant="noaccess" text="text4" testId={'statusdot4'} />
          <StatusDot variant="draft" text="text4" testId={'statusdot4'} />
          <StatusDot variant="hidden" text="text4" testId={'statusdot4'} />
          <StatusDot variant="login" text="text4" testId={'statusdot4'} />
          <StatusDot variant="attachment" text="text4" testId={'statusdot4'} />
        </>
      );

      const dots = screen.getAllByRole('presentation', { hidden: true });

      expect(dots.length).toBe(16);
    });
  });
});
