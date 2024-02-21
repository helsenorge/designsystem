import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './Select';
import { FormMode } from '../../constants';
import Label from '../Label';

describe('Gitt at Select skal vises', (): void => {
  describe('Når Select rendres', (): void => {
    test('Så vises Select', (): void => {
      render(
        <Select selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const label = screen.getByText('Label test').parentElement;
      expect(label).toBeVisible();

      const select = screen.getByRole('combobox');
      expect(select).toBeVisible();
      expect(select).toHaveClass('select');

      const icon = select.previousElementSibling;
      expect(icon).toBeVisible();
      expect(icon).toHaveClass('hnds-style-icon select-arrow');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Select som disabled', (): void => {
      render(
        <Select disabled selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const selectGrid = screen.getByRole('combobox').parentElement;
      expect(selectGrid).toHaveClass('select-inner-wrapper select-inner-wrapper--disabled');
    });
  });

  describe('Når mode er onBlueberry', (): void => {
    test('Så vises Select med onBlueberry styling', (): void => {
      render(
        <Select selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />} mode={FormMode.onblueberry}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      const selectGrid = select?.parentElement;

      expect(select).toHaveClass('select select--on-blueberry');
      expect(selectGrid).toHaveClass('select-inner-wrapper select-inner-wrapper--on-blueberry');
    });
  });

  describe('Når Select får satt error', (): void => {
    test('Så vises Select med indre error styling, uten ytre error styling', (): void => {
      render(
        <Select selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />} error>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      const wrapper = select?.parentElement;

      expect(select).toHaveClass('select select--invalid');
      expect(wrapper).toHaveClass('select-inner-wrapper select-inner-wrapper--invalid');
    });
  });

  describe('Når select får satt errorText', (): void => {
    test('Så vises Select med errormelding i tilleg til error styling', (): void => {
      render(
        <Select selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />} errorText={'error error!'}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      expect(screen.getByText('error error!')).toBeVisible();

      const select = screen.getByRole('combobox');
      const wrapper = select?.parentElement;

      expect(select).toHaveClass('select select--invalid');
      expect(wrapper).toHaveClass('select-inner-wrapper select-inner-wrapper--invalid');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har Select riktig name', (): void => {
      render(
        <Select selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />} name={'custom-name'}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er Select required', (): void => {
      render(
        <Select selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />} required>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('aria-required', 'true');
      expect(select).toBeRequired();
    });
  });

  describe('Når value og onChange er satt', (): void => {
    test('Så har select riktig value, og onChange kalles når man endrer', async (): Promise<void> => {
      const handleChange = jest.fn();

      render(
        <Select selectId={'test01'} label={<Label labelTexts={[{ text: 'Label test' }]} />} value={'Option 2'} onChange={handleChange}>
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );

      expect(handleChange).not.toHaveBeenCalled();

      const select = screen.getByRole('combobox');
      expect(select).toHaveValue('Option 2');

      await userEvent.selectOptions(select, 'Option 1');

      expect(handleChange).toHaveBeenCalledTimes(1);

      await userEvent.selectOptions(select, 'Option 3');

      expect(handleChange).toHaveBeenCalledTimes(2);
    });
  });

  describe('Når autocomplete ikke er satt', (): void => {
    test('Så er autocomplete=off', (): void => {
      render(
        <Select label={'En fin label'}>
          <option value={'Option 1'}>{'Option 1'}</option>
        </Select>
      );

      const select = screen.getByLabelText('En fin label');
      expect(select).toHaveAttribute('autocomplete', 'off');
    });
  });
  describe('Når autocomplete er satt', (): void => {
    test('Så er autocomplete riktig verdi', (): void => {
      render(
        <Select label={'En fin label'} autoComplete="name">
          <option value={'Option 1'}>{'Option 1'}</option>
        </Select>
      );

      const select = screen.getByLabelText('En fin label');
      expect(select).toHaveAttribute('autocomplete', 'name');
    });
  });
});
