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

    it('Så rendres den riktig', () => {
      const { container } = render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når tekst trykkes på', () => {
    it('Så vises HelpBubble', async () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');
      await userEvent.click(word);

      const helpBubble = screen.getByRole('tooltip', { name: 'beskrivelse av ordet' });
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når tekst hovres med musen', () => {
    it('Så vises HelpBubble', async () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');
      await userEvent.hover(word);

      const helpBubble = await screen.findByRole('tooltip', { name: 'beskrivelse av ordet' });
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når tekst får fokus', () => {
    it('Så vises HelpBubble', async () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');

      await userEvent.tab();
      expect(word).toHaveFocus();

      const helpBubble = await screen.findByRole('tooltip', { name: 'beskrivelse av ordet' });
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når det trykkes mens HelpBubble er åpen', () => {
    it('Så skjules HelpBubble', async () => {
      render(<HelpTooltip description={'beskrivelse av ordet'}>{'ordet'}</HelpTooltip>);

      const word = screen.getByText('ordet');
      await userEvent.click(word);

      const helpBubble = screen.getByRole('tooltip');
      await userEvent.click(helpBubble);

      expect(helpBubble).not.toHaveClass('helpbubble--visible');
    });
  });
});
