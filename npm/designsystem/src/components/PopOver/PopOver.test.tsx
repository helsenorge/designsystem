import { useRef } from 'react';

import { screen, render, waitFor } from '@testing-library/react';

import type { PopOverProps } from './PopOver';

import PopOver from './PopOver';

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

  describe('Når controllerRef peker på et element', (): void => {
    it('Så posisjoneres PopOver relativt til det elementet', async (): Promise<void> => {
      const controllerRect = { ...dummyDomRect, x: 300, y: 400, top: 400, left: 300, right: 400, bottom: 500 };
      const spy = vi.spyOn(HTMLSpanElement.prototype, 'getBoundingClientRect').mockReturnValue(controllerRect as DOMRect);

      render(
        <PopOverWithController testId="test01" show>
          {'Test tekst'}
        </PopOverWithController>
      );

      const bubble = screen.getByTestId('test01');
      await waitFor(() => {
        expect(bubble.style.transform).not.toBe('');
        expect(bubble.style.transform).not.toBe('translate(0px, 0px)');
      });

      spy.mockRestore();
    });

    it('Så vises og skjules PopOver med show-prop uten å miste posisjon', async (): Promise<void> => {
      const { rerender } = render(
        <PopOverWithController testId="test01" show={false}>
          {'Test tekst'}
        </PopOverWithController>
      );
      expect(screen.getByTestId('test01')).toHaveStyle({ visibility: 'hidden' });

      rerender(
        <PopOverWithController testId="test01" show>
          {'Test tekst'}
        </PopOverWithController>
      );
      expect(screen.getByTestId('test01')).toHaveStyle({ visibility: 'visible' });
    });
  });

  describe('Når PopOver rendres', (): void => {
    it('Så videresendes ref til PopOver-elementet', (): void => {
      const ref = { current: null as HTMLDivElement | null };
      const Wrapper: React.FC = () => {
        const controllerRef = useRef<HTMLSpanElement>(null);
        return (
          <>
            <span ref={controllerRef}>{'Test'}</span>
            <PopOver controllerRef={controllerRef} ref={ref} testId="test01">
              {'Test tekst'}
            </PopOver>
          </>
        );
      };
      render(<Wrapper />);

      expect(ref.current).toBe(screen.getByTestId('test01'));
    });
  });
});
