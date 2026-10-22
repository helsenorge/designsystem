import { useRef } from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import HelpDetails from './HelpDetails';

describe('Gitt at HelpDetails skal vises', (): void => {
  describe('Når HelpDetails vises', (): void => {
    test('Så vises HelpDetails', (): void => {
      render(<HelpDetails>{'Innhold'}</HelpDetails>);
      expect(screen.getByText('Innhold')).toBeInTheDocument();
    });
  });

  describe('Når controllerRef er satt', (): void => {
    test('Så posisjoneres HelpDetails relativt til controller-elementet', async (): Promise<void> => {
      const controllerRect = vi.spyOn(HTMLButtonElement.prototype, 'getBoundingClientRect').mockReturnValue({
        x: 300,
        y: 400,
        top: 400,
        left: 300,
        right: 400,
        bottom: 500,
        width: 100,
        height: 100,
        toJSON: () => ({}),
      });
      const Wrapper: React.FC = () => {
        const controllerRef = useRef<HTMLButtonElement>(null);
        return (
          <>
            <button ref={controllerRef}>{'Kontroller'}</button>
            <HelpDetails controllerRef={controllerRef} testId="details">
              {'Innhold'}
            </HelpDetails>
          </>
        );
      };
      render(<Wrapper />);

      await waitFor(() => {
        expect(controllerRect).toHaveBeenCalled();
      });

      controllerRect.mockRestore();
    });
  });

  describe('Når ref sendes inn', (): void => {
    test('Så videresendes ref til elementet', (): void => {
      const ref = { current: null as HTMLDivElement | null };
      render(
        <HelpDetails ref={ref} testId="details">
          {'Innhold'}
        </HelpDetails>
      );

      expect(ref.current).toBe(screen.getByTestId('details'));
    });
  });
});
