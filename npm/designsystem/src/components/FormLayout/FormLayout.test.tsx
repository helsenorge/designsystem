import React from 'react';

import { render, screen } from '@testing-library/react';

import FormLayout, { FormLayoutColumns } from './FormLayout';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup from '../FormGroup';
import Label from '../Label';
import RadioButton from '../RadioButton';

describe('Gitt at FormLayout skal vises', (): void => {
  describe('Når FormLayout rendres', (): void => {
    test('Så vises FormLayout', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <FormLayout testId="form-layout">
            <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
            <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
            <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
          </FormLayout>
        </FormGroup>
      );

      const layout = screen.getByTestId('form-layout');
      expect(layout).toBeVisible();
      expect(layout).toHaveClass('form-layout-container');
    });
  });

  describe('Når FormLayout har checkbox children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <FormLayout maxColumns={FormLayoutColumns.two}>
            <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
            <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
            <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
          </FormLayout>
        </FormGroup>
      );

      const checkboxArray = screen.getAllByRole('checkbox');
      expect(checkboxArray.length).toBe(3);
    });
  });

  describe('Når FormLayout har radio children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <FormLayout maxColumns={FormLayoutColumns.two}>
            <RadioButton inputId={'Radio1'} label={<Label labelTexts={[{ text: 'Radio 1' }]} />} />
            <RadioButton inputId={'Radio2'} label={<Label labelTexts={[{ text: 'Radio 2' }]} />} />
            <RadioButton inputId={'Radio3'} label={<Label labelTexts={[{ text: 'Radio 3' }]} />} />
          </FormLayout>
        </FormGroup>
      );

      const radioButtonArray = screen.getAllByRole('radio');
      expect(radioButtonArray.length).toBe(3);
    });
  });
});
