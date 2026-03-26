import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import Chip from './Chip';

describe('Gitt at Chip skal vises som remove-knapp', (): void => {
  describe('Når man klikker på knappen', (): void => {
    test('Så kalles click-funksjonen', async (): Promise<void> => {
      const mockClickHandler = vi.fn();

      render(<Chip onChipClick={mockClickHandler}>{'Knapp'}</Chip>);

      const chip = screen.getByRole('button', { name: 'Knapp' });

      expect(chip).toBeVisible();

      await userEvent.click(chip);

      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });
  describe('Når man klikker på lukkekrysset', (): void => {
    test('Så kalles click-funksjonen', async (): Promise<void> => {
      const mockClickHandler = vi.fn();

      render(
        <Chip onCloseClick={mockClickHandler} closeButtonProps={{ 'aria-label': 'Lukkekryss' }}>
          {'Knapp'}
        </Chip>
      );

      const chip = screen.queryByLabelText('Lukkekryss');

      expect(chip).toBeVisible();

      if (chip) {
        await userEvent.click(chip);
      }

      expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
