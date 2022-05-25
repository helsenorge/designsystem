import React from 'react';
import { screen, render } from '@testing-library/react';
import HelpBubble, { HelpBubbleVariant } from './HelpBubble';
import userEvent from '@testing-library/user-event';

describe('Gitt at HelpBubble skal vises', (): void => {
  describe('Når den skal vises vanlig', (): void => {
    it('Så vises HelpBubble som vanlig', (): void => {
      const { container } = render(
        <HelpBubble showBubble testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const bubble = screen.getByTestId('test01');
      const child = screen.getByText('Test tekst');
      const closeButton = screen.getByRole('button');

      expect(bubble).toBeInTheDocument();
      expect(child).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();

      expect(bubble).toHaveClass('helpbubble helpbubble--below');
      expect(child).toHaveClass('helpbubble__child-wrapper');
      expect(closeButton).toHaveClass('close close--small');

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når variant er positionbelow', (): void => {
    it('Så vises HelpBubble riktig', (): void => {
      render(
        <HelpBubble variant={HelpBubbleVariant.positionbelow} showBubble testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const bubble = screen.getByTestId('test01');

      expect(bubble).toHaveClass('helpbubble helpbubble--below');
    });
  });

  describe('Når variant er positionabove', (): void => {
    it('Så vises HelpBubble riktig', (): void => {
      render(
        <HelpBubble variant={HelpBubbleVariant.positionabove} showBubble testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const bubble = screen.getByTestId('test01');

      expect(bubble).toHaveClass('helpbubble helpbubble--above');
    });
  });

  describe('Når onLinkClick er satt', (): void => {
    it('Så vises ekstra knapp med onLinkClick callback riktig', (): void => {
      const onLinkClick = jest.fn();
      render(
        <HelpBubble showBubble linkText={'Egen link tekst'} onLinkClick={onLinkClick} testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const allButtons = screen.getAllByRole('button');
      const link = screen.getByText('Egen link tekst');
      userEvent.click(link);

      expect(allButtons.length).toBe(2);
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('helpbubble__link-button');
      expect(onLinkClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når linkUrl er satt', (): void => {
    it('Så vises ekstra knapp med linkUrl riktig', (): void => {
      render(
        <HelpBubble showBubble linkText={'Egen link tekst'} linkUrl={'/'} testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const link = screen.getByText('Egen link tekst');
      userEvent.click(link);

      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('anchorlink');
      expect(link).toHaveAttribute('href', '/');
    });
  });

  describe('Når onLinkClick og linkUrl ikke er satt', (): void => {
    it('Så vises ikke ekstra knapp for link', (): void => {
      render(
        <HelpBubble showBubble testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const allButtons = screen.getAllByRole('button');

      expect(allButtons.length).toBe(1);
    });
  });

  describe('Når onClose er satt', (): void => {
    it('Så kalles onClose callback riktig', (): void => {
      const onClose = jest.fn();
      render(
        <HelpBubble onClose={onClose} showBubble testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const close = screen.getByRole('button');
      userEvent.click(close);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Gitt at HelpBubble ikke skal vises', (): void => {
  describe('Når den rendres', (): void => {
    it('Så vises HelpBubble ikke', (): void => {
      render(<HelpBubble testId="test01">{'Test tekst'}</HelpBubble>);

      const bubble = screen.queryByTestId('test01');
      const child = screen.queryByText('Test tekst');

      expect(bubble).not.toBeInTheDocument();
      expect(child).not.toBeInTheDocument();
    });
  });
});
