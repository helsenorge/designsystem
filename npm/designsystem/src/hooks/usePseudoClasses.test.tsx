import type { Ref } from 'react';
import { createRef } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import type * as UsePseudoClassesModule from './usePseudoClasses';

const { usePseudoClasses } = await vi.importActual<typeof UsePseudoClassesModule>('./usePseudoClasses');

const Probe: React.FC<{ passedRef?: Ref<HTMLButtonElement> | null }> = ({ passedRef }) => {
  const { refObject, isHovered, isFocused, isActive } = usePseudoClasses<HTMLButtonElement>(passedRef);

  return (
    <button ref={refObject} data-testid="target">
      {`h:${isHovered} f:${isFocused} a:${isActive}`}
    </button>
  );
};

describe('Gitt at usePseudoClasses brukes', (): void => {
  describe('Når ingen ref sendes inn', (): void => {
    it('Så oppdateres hover, fokus og active på det interne elementet', (): void => {
      render(<Probe />);
      const target = screen.getByTestId('target');

      fireEvent.mouseEnter(target);
      expect(target).toHaveTextContent('h:true');
      fireEvent.mouseLeave(target);
      expect(target).toHaveTextContent('h:false');

      fireEvent.focusIn(target);
      expect(target).toHaveTextContent('f:true');
      fireEvent.focusOut(target);
      expect(target).toHaveTextContent('f:false');

      fireEvent.pointerDown(target);
      expect(target).toHaveTextContent('a:true');
      fireEvent.pointerUp(target);
      expect(target).toHaveTextContent('a:false');
    });
  });

  describe('Når null sendes inn', (): void => {
    it('Så brukes intern ref', (): void => {
      render(<Probe passedRef={null} />);
      const target = screen.getByTestId('target');

      fireEvent.mouseEnter(target);
      expect(target).toHaveTextContent('h:true');
    });
  });

  describe('Når en ref-objekt sendes inn', (): void => {
    it('Så returneres samme ref-objekt, og eventene lyttes på det elementet', (): void => {
      const ref = createRef<HTMLButtonElement>();
      const Wrapper: React.FC = () => {
        const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement>(ref);
        return (
          <>
            <button ref={refObject} data-testid="target">{`h:${isHovered}`}</button>
            <span data-testid="same">{String(refObject === ref)}</span>
          </>
        );
      };
      render(<Wrapper />);

      expect(screen.getByTestId('same')).toHaveTextContent('true');
      expect(ref.current).toBe(screen.getByTestId('target'));

      fireEvent.mouseEnter(screen.getByTestId('target'));
      expect(screen.getByTestId('target')).toHaveTextContent('h:true');
    });
  });

  describe('Når en callback-ref sendes inn', (): void => {
    it('Så ignoreres den, og hooken faller tilbake til intern ref uten å feile', (): void => {
      const callbackRef = vi.fn();
      render(<Probe passedRef={callbackRef} />);
      const target = screen.getByTestId('target');

      fireEvent.mouseEnter(target);
      expect(target).toHaveTextContent('h:true');
    });
  });

  describe('Når komponenten unmountes', (): void => {
    it('Så fjernes lyttere uten feil', (): void => {
      const { unmount } = render(<Probe />);
      const target = screen.getByTestId('target');
      unmount();

      expect(() => fireEvent.mouseEnter(target)).not.toThrow();
    });
  });
});
