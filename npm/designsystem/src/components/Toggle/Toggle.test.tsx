import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import Toggle, { TogglePosition, ToggleOnColor } from './Toggle';

describe('Gitt at Toggle skal vises', () => {
  describe('Når Toggle vises', () => {
    test('Så vises Toggle med standard props', () => {
      render(<Toggle label={[{ text: 'Test Toggle' }]} />);
      expect(screen.getByLabelText('Test Toggle')).toBeDefined();
    });

    test('Så vises Toggle med riktig label', () => {
      render(<Toggle label={[{ text: 'Aktiver funksjon' }]} />);
      expect(screen.getByRole('checkbox', { name: 'Aktiver funksjon' })).toBeDefined();
    });

    test('Så vises Toggle i unchecked tilstand som standard', () => {
      render(<Toggle label={[{ text: 'Test Toggle' }]} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('Så vises Toggle i checked tilstand når checked prop er true', () => {
      render(<Toggle label={[{ text: 'Test Toggle' }]} checked={true} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('Så vises sublabel når den er angitt', () => {
      render(<Toggle label={[{ text: 'Test Toggle' }]} subLabel="Dette er en sublabel" />);
      expect(screen.getByText('Dette er en sublabel')).toBeDefined();
    });
  });

  describe('Når Toggle interageres med', () => {
    test('Så endres tilstanden når den klikkes', () => {
      const handleChange = vi.fn();
      render(<Toggle label={[{ text: 'Test Toggle' }]} onChange={handleChange} />);
      const toggle = screen.getByRole('checkbox');
      fireEvent.click(toggle);
      expect(toggle).toBeChecked();
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når Toggle rendres med forskjellige props', () => {
    test('Så vises Toggle til høyre når togglePosition er satt til right', () => {
      render(<Toggle label={[{ text: 'Test Toggle' }]} togglePosition={TogglePosition.right} testId="Toggle" />);
      const container = screen.getByTestId('Toggle');
      // eslint-disable-next-line testing-library/no-node-access
      expect(container.querySelector('.toggle-container__row--right')).toBeDefined();
    });

    test('Så har Toggle riktig farge når onColor er satt', () => {
      render(<Toggle label={[{ text: 'Test Toggle' }]} onColor={ToggleOnColor.onblueberry} testId="Toggle" />);
      const toggle = screen.getByTestId('Toggle');
      // eslint-disable-next-line testing-library/no-node-access
      const toggleElement = toggle.querySelector('.toggle-container__toggle');
      expect(toggleElement).toBeDefined();
      expect(toggleElement).not.toHaveClass('toggle-container__toggle--on-white');
    });

    test('Så vises Toggle med uthevet label når type er semibold', () => {
      render(<Toggle label={[{ text: 'Test Toggle', type: 'semibold' }]} />);
      const labelElement = screen.getByText('Test Toggle');
      expect(labelElement).toHaveClass('toggle-container__label__text--semibold');
    });
  });

  describe('Når Toggle får en testId', () => {
    test('Så har Toggle-containeren riktig testId', () => {
      render(<Toggle label={[{ text: 'Test Toggle' }]} testId="Toggle" />);
      expect(screen.getByTestId('Toggle')).toBeDefined();
    });
  });
});
