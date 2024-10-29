import { fireEvent, render, screen } from '@testing-library/react';

import Close from './Close';

describe('Gitt at Close skal rendres', (): void => {
  describe('Når en bruker trykker på knappen', (): void => {
    test('Så kalles onClick funksjonen', (): void => {
      const onClick = vi.fn();
      render(<Close onClick={onClick} testId="test" />);

      const button = screen.getByTestId('test');

      fireEvent.click(button);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
