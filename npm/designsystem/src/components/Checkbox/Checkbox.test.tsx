import { render, screen, fireEvent } from '@testing-library/react';

import Checkbox from './Checkbox';
import { FormOnColor, FormSize } from '../../constants';
import Label from '../Label';

describe('Gitt at Checkbox skal vises', (): void => {
  describe('Når Checkbox rendres', (): void => {
    test('Så vises Checkbox', (): void => {
      render(<Checkbox inputId={'test01'} label={<Label labelTexts={[{ text: 'Check me out!' }]} testId="test01-label" />} />);

      const label = screen.getByTestId('test01-label');
      expect(label).toBeVisible();
      expect(label?.className).toBe('checkbox-label');

      const input = screen.getByRole('checkbox');
      expect(input).toBeVisible();
      expect(input.className).toBe('checkbox');

      // eslint-disable-next-line testing-library/no-node-access
      const checkIconWrapper = screen.getByRole('checkbox')?.parentElement?.children[1];
      expect(checkIconWrapper?.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--on-white');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Checkbox som disabled', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'Check me out!' }]} testId="check-label" />} disabled />);

      const label = screen.getByTestId('check-label');
      expect(label?.className).toBe('checkbox-label checkbox-label--disabled');
    });
  });

  describe('Når onColor er onBlueberry', (): void => {
    test('Så vises Checkbox med onBlueberry styling', (): void => {
      render(
        <Checkbox label={<Label labelTexts={[{ text: 'Check me out!' }]} testId="check-label" />} onColor={FormOnColor.onblueberry} />
      );

      const label = screen.getByTestId('check-label');
      expect(label?.className).toBe('checkbox-label');
    });
  });
  describe('Når onColor er onDark', (): void => {
    test('Så vises Checkbox med onDark styling', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'Check me out!' }]} testId="check-label" />} onColor={FormOnColor.ondark} />);

      const label = screen.getByTestId('check-label');
      expect(label?.className).toBe('checkbox-label checkbox-label--on-dark');
    });
  });

  describe('Når size er large', (): void => {
    test('Så vises Checkbox med large styling', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'Check me out!' }]} testId="check-label" />} size={FormSize.large} />);

      const label = screen.getByTestId('check-label');
      expect(label?.className).toBe('checkbox-label checkbox-label--large checkbox-label__large--on-white');
    });
  });

  describe('Når startChecked er true', (): void => {
    test('Så vises Checkbox med checkmark ikon', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'Check me out!' }]} />} checked />);

      // eslint-disable-next-line testing-library/no-node-access
      const checkIcon = screen.getByRole('checkbox')?.parentElement?.children[1];

      expect(checkIcon).toBeVisible();
      expect(checkIcon?.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--on-white checkbox__icon-wrapper__regular--checked');
    });
  });

  describe('Når checkbox trykkes på', (): void => {
    test('Så vises Checkbox med checkmark ikon', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'Check me out!' }]} />} />);

      fireEvent.click(screen.getByText('Check me out!'));

      // eslint-disable-next-line testing-library/no-node-access
      const checkIcon = screen.getByRole('checkbox')?.parentElement?.children[1];

      expect(checkIcon?.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--on-white checkbox__icon-wrapper__regular--checked');

      fireEvent.click(screen.getByText('Check me out!'));

      expect(checkIcon?.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--on-white');
    });
  });

  describe('Når checkbox får satt error', (): void => {
    test('Så vises Checkbox med indre error styling, uten ytre error styling', (): void => {
      render(<Checkbox testId={'test01'} label={<Label labelTexts={[{ text: 'Check me out!' }]} testId="check-label" />} error />);

      // Indre styling
      const label = screen.getByTestId('check-label');
      // eslint-disable-next-line testing-library/no-node-access
      const checkIcon = screen.getByRole('checkbox')?.parentElement?.children[1];

      expect(label?.className).toBe('checkbox-label');
      expect(checkIcon?.className).toBe(
        'checkbox__icon-wrapper checkbox__icon-wrapper--on-white checkbox__icon-wrapper--on-invalid checkbox__icon-wrapper--invalid'
      );

      // Ytre styling
      const wrapper = screen.getByTestId('test01');
      expect(wrapper?.className).toBe('');
    });
  });

  describe('Når checkbox får satt errorText', (): void => {
    test('Så vises Checkbox med errormelding i tilleg til indre og ytre error styling', (): void => {
      render(
        <Checkbox
          testId={'test01'}
          inputId="checkbox"
          label={<Label labelTexts={[{ text: 'Check me out!' }]} testId="check-label" />}
          errorText={'error error!'}
        />
      );

      const checkbox = screen.getByLabelText('Check me out!');

      expect(checkbox).toHaveAccessibleDescription('error error!');

      // Indre styling
      const label = screen.getByTestId('check-label');
      // eslint-disable-next-line testing-library/no-node-access
      const checkIcon = screen.getByRole('checkbox')?.parentElement?.children[1];

      expect(label?.className).toBe('checkbox-label');
      expect(checkIcon?.className).toBe(
        'checkbox__icon-wrapper checkbox__icon-wrapper--on-white checkbox__icon-wrapper--on-invalid checkbox__icon-wrapper--invalid'
      );
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har input riktig name', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'En fin label' }]} />} name="custom-name" />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når value-prop er satt', (): void => {
    test('Så har input riktig value', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'En fin label' }]} />} value="custom-value" />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toHaveAttribute('value', 'custom-value');
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er input required', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'En fin label' }]} />} required />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toBeRequired();
    });
  });

  describe('Når disabled er satt', (): void => {
    test('Så er input disabled', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'En fin label' }]} />} disabled />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toBeDisabled();
    });
  });

  describe('Når checked er satt', (): void => {
    test('Så er input checked', (): void => {
      render(<Checkbox label={<Label labelTexts={[{ text: 'En fin label' }]} />} checked />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toHaveAttribute('checked', '');
    });
  });
});
