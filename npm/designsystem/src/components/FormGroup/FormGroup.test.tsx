import React from 'react';

import { render, screen } from '@testing-library/react';

import FormGroup from './FormGroup';
import Checkbox from '../Checkbox/Checkbox';
import Label from '../Label';
import RadioButton from '../RadioButton';

describe('Gitt at FormGroup skal vises', (): void => {
  describe('Når FormGroup rendres', (): void => {
    test('Så vises FormGroup', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const title = screen.getByText('One amazing title');
      expect(title).toBeVisible();
      expect(title.className).toBe('title title--title4 form-group-wrapper__title');

      const legend = screen.getByText('Check out these checkboxes!');
      expect(legend).toBeVisible();
      expect(legend.className).toBe('field-set__legend');

      const wrapper = title.parentElement;
      expect(wrapper).toBeVisible();
      expect(wrapper?.className).toBe('form-group-wrapper');
    });
  });

  describe('Når mode settes', (): void => {
    test('Så er stylingen satt riktig på FormGroup children', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} mode={'onblueberry'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const checkbox = screen.getByText('Checkbox 1').parentElement?.parentElement?.parentElement;
      expect(checkbox).toBeVisible();
      expect(checkbox?.className).toBe('checkbox-label');
    });
  });
  describe('Når errorWrapperClass settes', (): void => {
    test('Så er stylingen satt riktig på errorWrapper', (): void => {
      render(
        <FormGroup
          errorWrapperClassName="custom-wrapper-class"
          title={'One amazing title'}
          legend={'Check out these checkboxes!'}
          mode={'onblueberry'}
          errorWrapperTestId="error-wrapper-testid-1"
        >
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const errorWrapperWithCustomClassName = screen.getByTestId('error-wrapper-testid-1');
      expect(errorWrapperWithCustomClassName).toBeVisible();
      expect(errorWrapperWithCustomClassName.className).toBe('error-wrapper custom-wrapper-class');
    });
  });

  describe('Når variant settes', (): void => {
    test('Så er stylingen satt riktig på FormGroup children', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} variant={'bigform'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const checkbox = screen.getByText('Checkbox 1').parentElement?.parentElement?.parentElement;
      expect(checkbox).toBeVisible();
      expect(checkbox?.className).toBe('checkbox-label checkbox-label--bigform checkbox-label__big-form--on-white');
    });
  });

  describe('Når FormGroup har checkbox children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const checkboxArray = screen.getAllByRole('checkbox');
      expect(checkboxArray.length).toBe(3);
    });
  });

  describe('Når FormGroup har radio children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <RadioButton inputId={'Radiobutton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
          <RadioButton inputId={'Radiobutton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
          <RadioButton inputId={'Radiobutton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
        </FormGroup>
      );

      const radioButtonArray = screen.getAllByRole('radio');
      expect(radioButtonArray.length).toBe(3);
    });
  });

  describe('Når FormGroup får error prop satt', (): void => {
    test('Så rendres error melding og styling', (): void => {
      render(
        <FormGroup error={'error error!'} title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const error = screen.getByRole('alert');
      expect(error).toBeVisible();

      const formGroup = screen.getByRole('group').parentElement;
      const errorWrapper = formGroup?.parentElement;
      const formGroupWrapper = errorWrapper?.parentElement;

      expect(formGroup?.className).toBe('form-group');
      expect(errorWrapper?.className).toBe('error-wrapper error-wrapper--with-error');
      expect(formGroupWrapper?.className).toBe('form-group-wrapper form-group-wrapper--invalid');
    });
  });
});
