import React, { useRef } from 'react';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HelpBubble, { HelpBubbleProps } from './HelpBubble';

const { dummyDomRect } = vi.hoisted(() => {
  return {
    dummyDomRect: {
      height: 100,
      width: 100,
      top: 0,
      left: 0,
      right: 100,
      bottom: 100,
    },
  };
});

vi.mock('../../hooks/useSize', () => ({
  useSize: vi.fn().mockReturnValue(dummyDomRect),
}));
vi.mock('../../hooks/useIsVisible', () => ({
  useIsVisible: vi.fn().mockReturnValue(true),
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
  beforeAll(() => {
    window.HTMLDivElement.prototype.getBoundingClientRect = vi.fn().mockReturnValue(dummyDomRect);
  });

  describe('Når den skal vises vanlig', (): void => {
    it('Så vises HelpBubble som vanlig', (): void => {
      const { container } = render(
        <HelpBubleWithController showBubble testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når onLinkClick er satt', (): void => {
    it('Så vises ekstra knapp med onLinkClick callback riktig', async (): Promise<void> => {
      const onLinkClick = vi.fn();
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
  describe('Når linkUrl og target er satt', (): void => {
    it('Så vises ekstra knapp med linkUrl riktig', async (): Promise<void> => {
      render(
        <HelpBubleWithController
          showBubble
          linkText={'Helsenorge'}
          linkUrl={'https://www.helsenorge.no'}
          linkTarget="_blank"
          testId="test01"
        >
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const link = screen.getByText('Helsenorge');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('target', '_blank');
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
      const onClose = vi.fn();
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
      render(
        <HelpBubleWithController showBubble={false} testId="test01">
          {'Test tekst'}
        </HelpBubleWithController>
      );

      const bubble = screen.queryByTestId('test01');
      const child = screen.queryByText('Test tekst');

      expect(bubble).not.toBeInTheDocument();
      expect(child).not.toBeInTheDocument();
    });
  });
});
