import { useRef, useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import type { useSize as UseSizeType } from './useSize';

const { useSize } = await vi.importActual<{ useSize: typeof UseSizeType }>('./useSize');

const SizeProbe: React.FC<{ showElement: boolean; tag?: 'div' | 'p' }> = ({ showElement, tag = 'div' }) => {
  const ref = useRef<HTMLElement>(null);
  const size = useSize(ref);
  const Tag = tag as React.ElementType;

  return (
    <>
      {showElement && <Tag ref={ref} data-testid="target" />}
      <span data-testid="width">{size?.width ?? 'ingen'}</span>
    </>
  );
};

describe('Gitt at useSize brukes', (): void => {
  let observeSpy: ReturnType<typeof vi.spyOn>;
  let disconnectSpy: ReturnType<typeof vi.spyOn>;

  beforeEach((): void => {
    observeSpy = vi.spyOn(window.ResizeObserver.prototype, 'observe');
    disconnectSpy = vi.spyOn(window.ResizeObserver.prototype, 'disconnect');
  });

  afterEach((): void => {
    vi.restoreAllMocks();
  });

  describe('Når elementet finnes ved første render', (): void => {
    it('Så observeres elementet', (): void => {
      render(<SizeProbe showElement />);

      expect(observeSpy).toHaveBeenCalledWith(screen.getByTestId('target'));
    });
  });

  describe('Når elementet monteres etter første render', (): void => {
    it('Så begynner hooken å observere det nye elementet', (): void => {
      const { rerender } = render(<SizeProbe showElement={false} />);
      expect(observeSpy).not.toHaveBeenCalled();

      rerender(<SizeProbe showElement />);

      expect(observeSpy).toHaveBeenCalledWith(screen.getByTestId('target'));
    });
  });

  describe('Når elementet byttes ut', (): void => {
    it('Så observeres det nye elementet, og den gamle observeren ryddes opp', (): void => {
      const { rerender } = render(<SizeProbe showElement tag="div" />);
      const first = screen.getByTestId('target');

      rerender(<SizeProbe showElement tag="p" />);
      const second = screen.getByTestId('target');

      expect(second).not.toBe(first);
      expect(observeSpy).toHaveBeenLastCalledWith(second);
      expect(disconnectSpy).toHaveBeenCalled();
    });
  });

  describe('Når komponenten unmountes', (): void => {
    it('Så kobles observeren fra', (): void => {
      const { unmount } = render(<SizeProbe showElement />);
      unmount();

      expect(disconnectSpy).toHaveBeenCalled();
    });
  });

  describe('Når en parent re-rendrer uten at elementet endres', (): void => {
    it('Så opprettes ikke observeren på nytt', (): void => {
      const Parent: React.FC = () => {
        const [count, setCount] = useState(0);
        return (
          <>
            <button onClick={(): void => setCount(count + 1)}>{`klikk ${count}`}</button>
            <SizeProbe showElement />
          </>
        );
      };
      render(<Parent />);
      const callsBefore = observeSpy.mock.calls.length;

      fireEvent.click(screen.getByRole('button'));

      expect(observeSpy.mock.calls.length).toBe(callsBefore);
    });
  });
});
