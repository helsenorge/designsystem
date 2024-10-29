import React, { useRef } from 'react';

import { screen, render, waitFor } from '@testing-library/react';

import PopOver, { PopOverProps, PopOverVariant } from './PopOver';

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

const PopOverWithController: React.FC<Omit<PopOverProps, 'controllerRef'>> = props => {
  const controllerRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      <span ref={controllerRef}>{'Test'}</span>
      <PopOver {...props} controllerRef={controllerRef} />
    </>
  );
};

describe('Gitt at PopOver skal vises', (): void => {
  beforeAll(() => {
    window.HTMLDivElement.prototype.getBoundingClientRect = vi.fn().mockReturnValue(dummyDomRect);
  });

  describe('Når den skal vises vanlig', (): void => {
    it('Så vises PopOver som vanlig', (): void => {
      const { container } = render(<PopOverWithController testId="test01">{'Test tekst'}</PopOverWithController>);

      const bubble = screen.getByTestId('test01');
      const child = screen.getByText('Test tekst');

      expect(bubble).toBeInTheDocument();
      expect(child).toBeInTheDocument();

      expect(bubble).toHaveClass('popover');

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når variant er positionbelow', (): void => {
    it('Så vises PopOver riktig', async (): Promise<void> => {
      render(
        <PopOverWithController variant={PopOverVariant.positionbelow} testId="test01">
          {'Test tekst'}
        </PopOverWithController>
      );

      const bubble = screen.getByTestId('test01');
      // eslint-disable-next-line testing-library/no-node-access
      const arrow = bubble.nextSibling;

      expect(bubble).toHaveClass('popover');
      await waitFor(() => expect(arrow).toHaveClass('popover__arrow popover__arrow--over'));
    });
  });

  describe('Når variant er positionabove', (): void => {
    it('Så vises PopOver riktig', async (): Promise<void> => {
      render(
        <PopOverWithController variant={PopOverVariant.positionabove} testId="test01">
          {'Test tekst'}
        </PopOverWithController>
      );

      const bubble = screen.getByTestId('test01');
      // eslint-disable-next-line testing-library/no-node-access
      const arrow = bubble.nextSibling;

      expect(bubble).toHaveClass('popover');
      await waitFor(() => expect(arrow).toHaveClass('popover__arrow popover__arrow--under'));
    });
  });
});
