import * as React from 'react';
import {shallow, mount, ShallowWrapper} from 'enzyme';
import ValidationSummary, {Props} from './validation-summary';
import SafeInputField from '../../../atoms/safe-input-field';
import {FormChild} from '..';

describe('ValidationSummary', () => {
  let props: Props;
  let mountedValidationSummary: ShallowWrapper<any, any> | undefined; // tslint:disable-line no-any

  const validationSummary = () => {
    if (!mountedValidationSummary) {
      mountedValidationSummary = shallow(<ValidationSummary {...props} />);
    }
    return mountedValidationSummary;
  };

  beforeEach(() => {
    const safeInputField = (shallow(<SafeInputField id="id" value="value" />) as any) as FormChild; // tslint:disable-line no-any
    props = {
      components: [safeInputField],
      submitted: undefined,
      header: '',
    };
    mountedValidationSummary = undefined;
  });

  it('renders nothing when not submitted', () => {
    expect(validationSummary().html()).toBe(null);
  });

  it('renders heading tag', () => {
    const safeInputField1 = mount(<SafeInputField id="id" value="" isRequired />).instance() as SafeInputField;
    safeInputField1.validateField();
    props.submitted = true;
    props.components = [(safeInputField1 as any) as FormChild]; // tslint:disable-line no-any
    expect(validationSummary().find('h3').length).toBe(1);
  });

  it('renders heading text', () => {
    const safeInputField1 = mount(<SafeInputField id="id" value="" isRequired />).instance() as SafeInputField;
    safeInputField1.validateField();
    props.submitted = true;
    props.header = 'header';
    props.components = [(safeInputField1 as any) as FormChild]; // tslint:disable-line no-any

    expect(
      validationSummary()
        .find('h3')
        .text(),
    ).toBe('header');
  });

  it('renders only invalid components', () => {
    const safeInputField1 = mount(<SafeInputField id="id" value="" isRequired />).instance() as SafeInputField;
    const safeInputField2 = mount(<SafeInputField id="id" value="asd" isRequired />).instance() as SafeInputField;
    safeInputField1.validateField();
    safeInputField2.validateField();

    props.submitted = true;
    props.components = [(safeInputField1 as any) as FormChild, (safeInputField2 as any) as FormChild]; // tslint:disable-line no-any

    expect(validationSummary().find('li').length).toBe(1);
  });

  it('renders nothing when all fields are valid', () => {
    const safeInputField1 = mount(<SafeInputField id="id" value="sdf" isRequired />).instance() as SafeInputField;
    const safeInputField2 = mount(<SafeInputField id="id" value="asd" isRequired />).instance() as SafeInputField;
    safeInputField1.validateField();
    safeInputField2.validateField();

    props.submitted = true;
    props.components = [(safeInputField1 as any) as FormChild, (safeInputField2 as any) as FormChild]; // tslint:disable-line no-any

    expect(validationSummary().html()).toBe(null);
  });
});
