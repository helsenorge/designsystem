import * as React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Tooltip from './Tooltip';

describe('Gitt at Tooltip rendres ', () => {
  describe('Når komponenten får en tekst', () => {
    it('Så rendres den riktig', () => {
      const wrapper = render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');

      expect(word).toBeInTheDocument();
      expect(word).toHaveClass('word');
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Når tekst trykkes på', () => {
    it('Så vises HelpBubble', async () => {
      render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');
      fireEvent.click(word);

      const helpBubble = await screen.findByText('beskrivelse av ordet');
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når tekst hovres med musen', () => {
    it('Så vises HelpBubble', async () => {
      render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');
      fireEvent.mouseOver(word);

      const helpBubble = await screen.findByText('beskrivelse av ordet');
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når tekst får fokus', () => {
    it('Så vises HelpBubble', async () => {
      render(<Tooltip description={'beskrivelse av ordet'}>{'ordet'}</Tooltip>);

      const word = screen.getByText('ordet');
      fireEvent.focus(word);

      const helpBubble = await screen.findByText('beskrivelse av ordet');
      expect(helpBubble).toBeInTheDocument();
    });
  });

  describe('Når det trykkes mens HelpBubble er åpen', () => {
    it('Så skjules HelpBubble', async () => {
      render(
        <Tooltip description={'beskrivelse av ordet'} testId={'test01'}>
          {'ordet'}
        </Tooltip>
      );

      const word = screen.getByText('ordet');
      fireEvent.click(word);

      const helpBubble = await screen.findByText('beskrivelse av ordet');
      fireEvent.mouseUp(helpBubble);
      const helpBubble2 = screen.queryByText('beskrivelse av ordet');

      expect(helpBubble2).not.toBeInTheDocument();
    });
  });
});
