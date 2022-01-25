import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';
import { FormMode, FormVariant } from '../../constants';

describe('Gitt at RadioButton skal vises', (): void => {
  describe('Når RadioButton rendres', (): void => {
    test('Så vises RadioButton', (): void => {
      const { container } = render(<RadioButton inputid={'test01'} label={'Radio1'} />);

      expect(container).toMatchSnapshot();

      const label = screen.getByText('Radio1');
      expect(label).toBeVisible();
      expect(label).toHaveClass('radio-button-label');

      const input = screen.getByRole('radio');
      expect(input).toBeVisible();
      expect(input).toHaveClass('radio-button');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises RadioButton som disabled', (): void => {
      render(<RadioButton label={'Radio1'} disabled />);

      const input = screen.getByRole('radio');
      const label = screen.getByText('Radio1');
      expect(input).toBeDisabled();
      expect(label).toHaveClass('radio-button-label radio-button-label--disabled');
    });
  });

  describe('Når mode er onBlueberry', (): void => {
    test('Så vises RadioButton med onBlueberry styling', (): void => {
      render(<RadioButton label={'Radio1'} mode={FormMode.onblueberry} />);

      const label = screen.getByText('Radio1');
      expect(label).toHaveClass('radio-button-label radio-button-label--on-blueberry');
    });
  });
  describe('Når mode er onDark', (): void => {
    test('Så vises RadioButton med onDark styling', (): void => {
      render(<RadioButton label={'Radio1'} mode={FormMode.ondark} />);

      const label = screen.getByText('Radio1');
      expect(label).toHaveClass('radio-button-label radio-button-label--on-dark');
    });
  });

  describe('Når formvariant er bigform', (): void => {
    test('Så vises RadioButton med bigform styling', (): void => {
      render(<RadioButton label={'Radio1'} variant={FormVariant.bigform} />);

      const label = screen.getByText('Radio1');
      expect(label).toHaveClass('radio-button-label radio-button-label--bigform');
    });
  });

  describe('Når startChecked er true', (): void => {
    test('Så vises RadioButton som checked', (): void => {
      render(<RadioButton label={'Radio1'} defaultChecked />);

      const input = screen.getByRole('radio');
      expect(input).toHaveProperty('checked', true);
    });
  });

  describe('Når RadioButton trykkes på', (): void => {
    test('Så vises RadioButton som checked', (): void => {
      render(<RadioButton label={'Radio1'} />);

      fireEvent.click(screen.getByText('Radio1'));

      const input = screen.getByRole('radio');
      expect(input).toHaveProperty('checked', true);
    });
  });

  describe('Når RadioButton får satt error', (): void => {
    test('Så vises RadioButton med indre error styling, uten ytre error styling', (): void => {
      render(<RadioButton label={'Radio1'} error />);

      // Indre styling
      const label = screen.getByText('Radio1');

      expect(label).toHaveClass('radio-button-label radio-button-label--invalid');

      // Ytre styling
      const wrapper = label.parentElement;
      expect(wrapper).toHaveClass('radio-button-wrapper');
    });
  });

  describe('Når RadioButton får satt errorText', (): void => {
    test('Så vises RadioButton med errormelding i tilleg til indre og ytre error styling', (): void => {
      render(<RadioButton label={'Radio1'} errorText={'error error!'} />);

      expect(screen.getByText('error error!')).toBeVisible();

      // Indre styling
      const label = screen.getByText('Radio1');

      expect(label).toHaveClass('radio-button-label radio-button-label--invalid');

      // Ytre styling
      const wrapper = label.parentElement;
      expect(wrapper).toHaveClass('radio-button-wrapper radio-button-wrapper--with-error');
    });
  });
});
