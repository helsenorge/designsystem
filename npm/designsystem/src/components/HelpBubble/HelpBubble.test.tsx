import React, { useRef } from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import HelpBubble, { HelpBubbleProps, HelpBubbleVariant } from './HelpBubble';
import userEvent from '@testing-library/user-event';

const dummyDomRect = {
  height: 100,
  width: 100,
  top: 0,
  left: 0,
  right: 100,
  bottom: 100,
};

jest.mock('../../hooks/useSize', () => ({
  useSize: jest.fn().mockReturnValue(dummyDomRect),
}));
jest.mock('../../hooks/useIsVisible', () => ({
  useIsVisible: jest.fn().mockReturnValue(true),
}));

const HelpBubleWithController: React.FC<Omit<HelpBubbleProps, 'controllerRef'>> = props => {
  const controllerRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      <span ref={controllerRef}>{'Test'}</span>
      <HelpBubble {...props} controllerRef={controllerRef} />
    </>
  );
};

describe('Gitt at HelpBubble skal vises', (): void => {
  const originalWindow = global.document['window'];

  beforeAll(() => {
    window.HTMLDivElement.prototype.getBoundingClientRect = jest.fn().mockReturnValue(dummyDomRect);
  });

  afterAll(() => {
    global.document['window'] = originalWindow;
  });

  describe('Når den skal vises vanlig', (): void => {
    it('Så vises HelpBubble som vanlig', (): void => {
      const { container } = render(
        <HelpBubble controllerRef={jest.fn()} showBubble testId="test01">
          {'Test tekst'}
        </HelpBubble>
      );

      const bubble = screen.getByTestId('test01');
      const child = screen.getByText('Test tekst');
      const closeButton = screen.getByRole('button');

      expect(bubble).toBeInTheDocument();
      expect(child).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();

      expect(bubble).toHaveClass('helpbubble');
      expect(child).toHaveClass('helpbubble__content');
      expect(closeButton).toHaveClass('close close--small');

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når variant er positionbelow', (): void => {
    it('Så vises HelpBubble riktig', async (): Promise<void> => {
      render(
        <HelpBubleWithController variant={HelpBubbleVariant.positionbelow} showBubble testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const bubble = screen.getByTestId('test01');
      const arrow = bubble.nextSibling;

      expect(bubble).toHaveClass('helpbubble');
      await waitFor(() => expect(arrow).toHaveClass('helpbubble__arrow helpbubble__arrow--visible helpbubble__arrow--over'));
    });
  });

  describe('Når variant er positionabove', (): void => {
    it('Så vises HelpBubble riktig', async (): Promise<void> => {
      render(
        <HelpBubleWithController variant={HelpBubbleVariant.positionabove} showBubble testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const bubble = screen.getByTestId('test01');
      const arrow = bubble.nextSibling;

      expect(bubble).toHaveClass('helpbubble');
      await waitFor(() => expect(arrow).toHaveClass('helpbubble__arrow helpbubble__arrow--visible helpbubble__arrow--under'));
    });
  });

  describe('Når onLinkClick er satt', (): void => {
    it('Så vises ekstra knapp med onLinkClick callback riktig', async (): Promise<void> => {
      const onLinkClick = jest.fn();
      render(
        <HelpBubleWithController showBubble linkText={'Egen link tekst'} onLinkClick={onLinkClick} testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const allButtons = screen.getAllByRole('button');
      const link = screen.getByText('Egen link tekst');
      await userEvent.click(link);

      expect(allButtons.length).toBe(2);
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('helpbubble__link');
      expect(onLinkClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når linkUrl er satt', (): void => {
    it('Så vises ekstra knapp med linkUrl riktig', async (): Promise<void> => {
      render(
        <HelpBubleWithController showBubble linkText={'Egen link tekst'} linkUrl={'/'} testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const link = screen.getByText('Egen link tekst');
      await userEvent.click(link);

      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('anchorlink');
      expect(link).toHaveAttribute('href', '/');
    });
  });

  describe('Når onLinkClick og linkUrl ikke er satt', (): void => {
    it('Så vises ikke ekstra knapp for link', (): void => {
      render(
        <HelpBubleWithController showBubble testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const allButtons = screen.getAllByRole('button');

      expect(allButtons.length).toBe(1);
    });
  });

  describe('Når onClose er satt', (): void => {
    it('Så kalles onClose callback riktig', async (): Promise<void> => {
      const onClose = jest.fn();
      render(
        <HelpBubleWithController onClose={onClose} showBubble testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const close = screen.getByRole('button');
      await userEvent.click(close);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Gitt at HelpBubble ikke skal vises', (): void => {
  describe('Når den rendres', (): void => {
    it('Så vises HelpBubble ikke', (): void => {
      render(<HelpBubleWithController testId="test01">{'Test tekst'}</HelpBubleWithController>);

      const bubble = screen.queryByTestId('test01');
      const child = screen.queryByText('Test tekst');

      expect(bubble).not.toBeInTheDocument();
      expect(child).not.toBeInTheDocument();
    });
  });
});
