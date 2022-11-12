import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tooltip from './Tooltip';

describe('Gitt at Tooltip rendres ', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så rendres den riktig', () => {
      const { container } = render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');

      expect(word).toBeInTheDocument();
      expect(word).toHaveClass('word');

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når tekst trykkes på', () => {
    it('Så vises HelpBubble', async () => {
      render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');
      await userEvent.click(word);

      const helpBubble = screen.getByRole('tooltip', { name: 'beskrivelse av ordet' });
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når tekst hovres med musen', () => {
    it('Så vises HelpBubble', async () => {
      render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');
      await userEvent.hover(word);

      const helpBubble = screen.getByRole('tooltip', { name: 'beskrivelse av ordet' });
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når tekst får fokus', () => {
    it('Så vises HelpBubble', async () => {
      render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');

      await userEvent.tab();
      expect(word).toHaveFocus();

      const helpBubble = screen.getByRole('tooltip', { name: 'beskrivelse av ordet' });
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når det trykkes mens HelpBubble er åpen', () => {
    it('Så skjules HelpBubble', async () => {
      render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');
      await userEvent.click(word);

      const helpBubble = screen.getByRole('tooltip');
      await userEvent.click(helpBubble);

      expect(helpBubble).not.toHaveClass('helpbubble--visible');
    });
  });
});
