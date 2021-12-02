import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup, { FormGroupModes, FormGroupVariants } from './FormGroup';

describe('Gitt at FormGroup skal vises', (): void => {
  describe('Når FormGroup rendres', (): void => {
    test('Så vises FormGroup', (): void => {
      const { container } = render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
          <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
          <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
        </FormGroup>
      );

      expect(container).toMatchSnapshot();

      const title = screen.getByText('One amazing title');
      expect(title).toBeVisible();
      expect(title.className).toBe('title title--title4 form-group-wrapper__title');

      const legend = screen.getByText('Check out these checkboxes!');
      expect(legend).toBeVisible();
      expect(legend.className).toBe('form-group__legend');

      const wrapper = title.parentElement;
      expect(wrapper).toBeVisible();
      expect(wrapper.className).toBe('form-group-wrapper');
    });
  });

  describe('Når mode settes', (): void => {
    test('Så er stylingen satt riktig på FormGroup', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} mode={FormGroupModes.onBlueberry}>
          <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
          <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
          <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
        </FormGroup>
      );

      const wrapper = screen.getByText('One amazing title').parentElement;
      expect(wrapper).toBeVisible();
      expect(wrapper.className).toBe('form-group-wrapper form-group-wrapper--on-blueberry');
    });
  });

  describe('Når variant settes', (): void => {
    test('Så er stylingen satt riktig på FormGroup', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} variant={FormGroupVariants.bigform}>
          <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
          <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
          <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
        </FormGroup>
      );

      const wrapper = screen.getByText('One amazing title').parentElement;
      expect(wrapper).toBeVisible();
      expect(wrapper.className).toBe('form-group-wrapper form-group-wrapper--bigform');
    });
  });

  describe('Når FormGroup har children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
          <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
          <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
        </FormGroup>
      );

      const checkboxArray = screen.getAllByRole('checkbox');
      expect(checkboxArray.length).toBe(3);
    });
  });

  describe('Når FormGroup får error prop satt', (): void => {
    test('Så rendres error melding og styling', (): void => {
      render(
        <FormGroup error={'error error!'} title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
          <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
          <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
        </FormGroup>
      );

      const error = screen.getByText('error error!');
      expect(error).toBeVisible();

      const formGroup = screen.getByRole('group').parentElement;
      expect(formGroup.className).toBe('form-group-wrapper form-group-wrapper--invalid');
    });
  });
});
