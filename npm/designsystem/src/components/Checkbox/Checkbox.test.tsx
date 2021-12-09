import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Gitt at Checkbox skal vises', (): void => {
  describe('Når Checkbox rendres', (): void => {
    test('Så vises Checkbox', (): void => {
      const { container } = render(<Checkbox inputid={'test01'} label={'Check me out!'} />);

      expect(container).toMatchSnapshot();

      const label = screen.getByText('Check me out!');
      expect(label).toBeVisible();
      expect(label.className).toBe('checkbox-label');

      const input = screen.getByRole('checkbox');
      expect(input).toBeVisible();
      expect(input.className).toBe('checkbox');

      const checkIconWrapper = screen.getByText('Check me out!').children[1];
      expect(checkIconWrapper.className).toBe('checkbox__icon-wrapper');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Checkbox som disabled', (): void => {
      render(<Checkbox label={'Check me out!'} disabled />);

      const label = screen.getByText('Check me out!');
      expect(label.className).toBe('checkbox-label checkbox-label--disabled');
    });
  });

  describe('Når mode er onBlueberry', (): void => {
    test('Så vises Checkbox med onBlueberry styling', (): void => {
      render(<Checkbox label={'Check me out!'} mode={'on-blueberry'} />);

      const label = screen.getByText('Check me out!');
      expect(label.className).toBe('checkbox-label checkbox-label--on-blueberry');
    });
  });
  describe('Når mode er onDark', (): void => {
    test('Så vises Checkbox med onDark styling', (): void => {
      render(<Checkbox label={'Check me out!'} mode={'on-dark'} />);

      const label = screen.getByText('Check me out!');
      expect(label.className).toBe('checkbox-label checkbox-label--on-dark');
    });
  });

  describe('Når formvariant er bigform', (): void => {
    test('Så vises Checkbox med bigform styling', (): void => {
      render(<Checkbox label={'Check me out!'} variant={'bigform'} />);

      const label = screen.getByText('Check me out!');
      expect(label.className).toBe('checkbox-label checkbox-label--bigform');
    });
  });

  describe('Når startChecked er true', (): void => {
    test('Så vises Checkbox med checkmark ikon', (): void => {
      render(<Checkbox label={'Check me out!'} checked />);

      const checkIcon = screen.getByText('Check me out!').children[1];

      expect(checkIcon).toBeVisible();
      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--checked');
    });
  });

  describe('Når checkbox trykkes på', (): void => {
    test('Så vises Checkbox med checkmark ikon', (): void => {
      render(<Checkbox label={'Check me out!'} />);

      const label = screen.getByText('Check me out!');

      fireEvent.click(screen.getByText('Check me out!'));

      const checkIcon = label.children[1];

      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--checked');

      fireEvent.click(screen.getByText('Check me out!'));

      expect(checkIcon.className).toBe('checkbox__icon-wrapper');
    });
  });

  describe('Når checkbox får satt error', (): void => {
    test('Så vises Checkbox med indre error styling, uten ytre error styling', (): void => {
      render(<Checkbox label={'Check me out!'} error />);

      // Indre styling
      const label = screen.getByText('Check me out!');
      const checkIcon = label.children[1];

      expect(label.className).toBe('checkbox-label checkbox-label--invalid');
      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--invalid');

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
      const label = screen.getByText('Check me out!');
      const checkIcon = label.children[1];

      expect(label.className).toBe('checkbox-label checkbox-label--invalid');
      expect(checkIcon.className).toBe('checkbox__icon-wrapper checkbox__icon-wrapper--invalid');

      // Ytre styling
      const wrapper = label.parentElement;
      expect(wrapper.className).toBe('checkbox-wrapper checkbox-wrapper--with-error');
    });
  });
});
