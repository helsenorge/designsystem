import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import Checkbox from './Checkbox';
import { FormMode, FormVariant } from '../../constants';

describe('Gitt at Checkbox skal vises', (): void => {
  describe('Når Checkbox rendres', (): void => {
    test('Så vises Checkbox', (): void => {
      const { container } = render(<Checkbox inputId={'test01'} label={'Check me out!'} />);

      expect(container).toMatchSnapshot();

      const label = screen.getByText('Check me out!').parentElement;
      expect(label).toBeVisible();
      expect(label.className).toBe('checkbox-label');

      const input = screen.getByRole('checkbox');
      expect(input).toBeVisible();
      expect(input.className).toBe('checkbox');

      const checkIconWrapper = label.children[1];
      expect(checkIconWrapper.className).toBe('checkbox__icon-wrapper');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Checkbox som disabled', (): void => {
      render(<Checkbox label={'Check me out!'} disabled />);

      const label = screen.getByText('Check me out!').parentElement;
      expect(label.className).toBe('checkbox-label checkbox-label--disabled');
    });
  });

  describe('Når mode er onBlueberry', (): void => {
    test('Så vises Checkbox med onBlueberry styling', (): void => {
      render(<Checkbox label={'Check me out!'} mode={FormMode.onblueberry} />);

      const label = screen.getByText('Check me out!').parentElement;
      expect(label.className).toBe('checkbox-label');
    });
  });
  describe('Når mode er onDark', (): void => {
    test('Så vises Checkbox med onDark styling', (): void => {
      render(<Checkbox label={'Check me out!'} mode={FormMode.ondark} />);

      const label = screen.getByText('Check me out!').parentElement;
      expect(label.className).toBe('checkbox-label checkbox-label--on-dark');
    });
  });

  describe('Når formvariant er bigform', (): void => {
    test('Så vises Checkbox med bigform styling', (): void => {
      render(<Checkbox label={'Check me out!'} variant={FormVariant.bigform} />);

      const label = screen.getByText('Check me out!').parentElement;
      expect(label.className).toBe('checkbox-label checkbox-label--bigform');
    });
  });

  describe('Når startChecked er true', (): void => {
    test('Så vises Checkbox med checkmark ikon', (): void => {
      render(<Checkbox label={'Check me out!'} checked />);

      const checkIcon = screen.getByText('Check me out!').parentElement.children[1];

      expect(checkIcon).toBeVisible();
      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper__regular--checked');
    });
  });

  describe('Når checkbox trykkes på', (): void => {
    test('Så vises Checkbox med checkmark ikon', (): void => {
      render(<Checkbox label={'Check me out!'} />);

      const label = screen.getByText('Check me out!').parentElement;

      fireEvent.click(screen.getByText('Check me out!'));

      const checkIcon = label.children[1];

      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper__regular--checked');

      fireEvent.click(screen.getByText('Check me out!'));

      expect(checkIcon.className).toBe('checkbox__icon-wrapper');
    });
  });

  describe('Når checkbox får satt error', (): void => {
    test('Så vises Checkbox med indre error styling, uten ytre error styling', (): void => {
      render(<Checkbox label={'Check me out!'} error />);

      // Indre styling
      const label = screen.getByText('Check me out!').parentElement;
      const checkIcon = label.children[1];

      expect(label.className).toBe('checkbox-label');
      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--on-invalid checkbox__icon-wrapper--invalid');

      // Ytre styling
      const wrapper = label.parentElement;
      expect(wrapper.className).toBe('checkbox-wrapper');
    });
  });

  describe('Når checkbox får satt errorText', (): void => {
    test('Så vises Checkbox med errormelding i tilleg til indre og ytre error styling', (): void => {
      render(<Checkbox label={'Check me out!'} errorText={'error error!'} />);

      expect(screen.getByText('error error!')).toBeVisible();

      // Indre styling
      const label = screen.getByText('Check me out!').parentElement;
      const checkIcon = label.children[1];

      expect(label.className).toBe('checkbox-label');
      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--on-invalid checkbox__icon-wrapper--invalid');

      // Ytre styling
      const wrapper = label.parentElement;
      expect(wrapper.className).toBe('checkbox-wrapper checkbox-wrapper--with-error');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har input riktig name', (): void => {
      render(<Checkbox label="En fin label" name="custom-name" />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når value-prop er satt', (): void => {
    test('Så har input riktig value', (): void => {
      render(<Checkbox label="En fin label" value="custom-value" />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toHaveAttribute('value', 'custom-value');
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er input required', (): void => {
      render(<Checkbox label="En fin label" required />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toBeRequired();
    });
  });

  describe('Når disabled er satt', (): void => {
    test('Så er input disabled', (): void => {
      render(<Checkbox label="En fin label" disabled />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toBeDisabled();
    });
  });

  describe('Når checked er satt', (): void => {
    test('Så er input checked', (): void => {
      render(<Checkbox label="En fin label" checked />);

      const checkbox = screen.getByLabelText('En fin label');
      expect(checkbox).toHaveAttribute('checked', '');
    });
  });
});
