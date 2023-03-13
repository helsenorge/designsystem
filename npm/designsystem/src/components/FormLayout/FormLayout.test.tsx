import React from 'react';

import { render, screen } from '@testing-library/react';

import FormLayout, { FormLayoutColumns } from './FormLayout';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup from '../FormGroup';
import RadioButton from '../RadioButton';

describe('Gitt at FormLayout skal vises', (): void => {
  describe('Når FormLayout rendres', (): void => {
    test('Så vises FormLayout', (): void => {
      const { container } = render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <FormLayout>
            <Checkbox inputId={'Checkbox1'} label={'Checkbox 1'} />
            <Checkbox inputId={'Checkbox2'} label={'Checkbox 2'} />
            <Checkbox inputId={'Checkbox3'} label={'Checkbox 3'} />
          </FormLayout>
        </FormGroup>
      );

      expect(container).toMatchSnapshot();

      const layout = screen.getByText('Checkbox 1').parentElement.parentElement.parentElement.parentElement;
      expect(layout).toBeVisible();
      expect(layout.className).toBe('form-layout-container');
    });
  });

  describe('Når maxColumns settes', (): void => {
    test('Så er stylingen satt riktig', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <FormLayout maxColumns={FormLayoutColumns.two}>
            <Checkbox inputId={'Checkbox1'} label={'Checkbox 1'} />
            <Checkbox inputId={'Checkbox2'} label={'Checkbox 2'} />
            <Checkbox inputId={'Checkbox3'} label={'Checkbox 3'} />
          </FormLayout>
        </FormGroup>
      );

      const layout = screen.getByText('Checkbox 1').parentElement.parentElement.parentElement;
      expect(layout).toBeVisible();
      expect(layout.className).toBe('form-layout-child form-layout-child--two');
    });
  });

  describe('Når colMinWidth settes', (): void => {
    test('Så er css variabel satt riktig', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <FormLayout colMinWidth={200}>
            <Checkbox inputId={'Checkbox1'} label={'Checkbox 1'} />
            <Checkbox inputId={'Checkbox2'} label={'Checkbox 2'} />
            <Checkbox inputId={'Checkbox3'} label={'Checkbox 3'} />
          </FormLayout>
        </FormGroup>
      );

      const layout = screen.getByText('Checkbox 1').parentElement.parentElement.parentElement.parentElement;
      expect(layout).toBeVisible();
      expect(layout.style['_values']['--min-col-width']).toBe('200px');
    });
  });

  describe('Når variant settes', (): void => {
    test('Så er stylingen satt riktig på children', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} variant={'bigform'}>
          <FormLayout maxColumns={FormLayoutColumns.two}>
            <Checkbox inputId={'Checkbox1'} label={'Checkbox 1'} />
            <Checkbox inputId={'Checkbox2'} label={'Checkbox 2'} />
            <Checkbox inputId={'Checkbox3'} label={'Checkbox 3'} />
          </FormLayout>
        </FormGroup>
      );

      const checkbox = screen.getByText('Checkbox 1').parentElement;
      expect(checkbox).toBeVisible();
      expect(checkbox.className).toBe('checkbox-label checkbox-label--bigform');
    });
  });

  describe('Når FormLayout har checkbox children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <FormLayout maxColumns={FormLayoutColumns.two}>
            <Checkbox inputId={'Checkbox1'} label={'Checkbox 1'} />
            <Checkbox inputId={'Checkbox2'} label={'Checkbox 2'} />
            <Checkbox inputId={'Checkbox3'} label={'Checkbox 3'} />
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
            <RadioButton inputId={'Radio1'} label={'Radio 1'} />
            <RadioButton inputId={'Radio2'} label={'Radio 2'} />
            <RadioButton inputId={'Radio3'} label={'Radio 3'} />
          </FormLayout>
        </FormGroup>
      );

      const radioButtonArray = screen.getAllByRole('radio');
      expect(radioButtonArray.length).toBe(3);
    });
  });
});
