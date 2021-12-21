import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Lukkekryss from './Lukkekryss';

describe('Gitt at Lukkekryss skal rendres', (): void => {
  describe('Når en bruker trykker på lukkeknappen', (): void => {
    test('Så kalles onClick funksjonen', (): void => {
    const onClick = jest.fn();
      render(<Lukkekryss onClick={onClick} testId='test' />);

      const button = screen.getByTestId('test');

      fireEvent.click(button);

      expect(onClick).toHaveBeenCalled()
    });
  });
});
