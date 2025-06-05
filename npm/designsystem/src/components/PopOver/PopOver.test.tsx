import React, { useRef } from 'react';

import { screen, render } from '@testing-library/react';

import PopOver, { PopOverProps } from './PopOver';

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
      render(<PopOverWithController testId="test01">{'Test tekst'}</PopOverWithController>);

      const bubble = screen.getByTestId('test01');
      const child = screen.getByText('Test tekst');

      expect(bubble).toBeInTheDocument();
      expect(child).toBeInTheDocument();

      expect(bubble).toHaveClass('popover');
    });
  });
  describe('Når ariaLabel settes', (): void => {
    it('Så vises PopOver med riktig aria tekst', (): void => {
      render(
        <PopOverWithController ariaLabel="testlabel" testId="test01">
          {'Test tekst'}
        </PopOverWithController>
      );

      const bubble = screen.getByLabelText('testlabel');

      expect(bubble).toBeInTheDocument();
    });
  });
  describe('Når ariaLabelledBy settes', (): void => {
    it('Så vises PopOver med riktig aria tekst', (): void => {
      render(
        <>
          <h3 id="tittelid">{'Tittel label'}</h3>
          <PopOverWithController ariaLabelledById="tittelid" testId="test01">
            {'Test tekst'}
          </PopOverWithController>
        </>
      );

      const bubble = screen.getByLabelText('Tittel label');

      expect(bubble).toBeInTheDocument();
    });
  });
});
