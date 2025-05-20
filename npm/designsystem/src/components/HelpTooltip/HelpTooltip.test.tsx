import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HelpTooltip from './HelpTooltip';

describe('Gitt at HelpTooltip skal vises ', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så vises beskrivelsen', () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');
      expect(word).toBeVisible();
      expect(word).toHaveAccessibleDescription('beskrivelse av ordet');
    });
  });

  describe('Når komponenten ikke har fokus', () => {
    it('Så finnes beskrivelsen men boblen vises ikke', async () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');
      expect(word).toBeVisible();
      expect(word).toHaveAccessibleDescription('beskrivelse av ordet');

      const helpbubble = screen.queryByLabelText('beskrivelse av ordet');
      expect(helpbubble).not.toBeInTheDocument();
    });
  });

  describe('Når tekst hovres med musen', () => {
    it('Så vises boblen', async () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');
      await userEvent.hover(word);

      // findByRole has issues: https://github.com/testing-library/react-testing-library/issues/1248
      const helpBubble = await screen.findByText('beskrivelse av ordet');
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når tekst får fokus', () => {
    it('Så vises boblen', async () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');

      await userEvent.tab();
      expect(word).toHaveFocus();

      // findByRole has issues: https://github.com/testing-library/react-testing-library/issues/1248
      const helpBubble = await screen.findByText('beskrivelse av ordet');
      expect(helpBubble).toBeInTheDocument();
    });
  });
});
