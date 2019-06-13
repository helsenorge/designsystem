import * as React from 'react';
import {shallow, ShallowWrapper, mount} from 'enzyme';
import Form, {FormProps} from '.';
import SafeInputField from '../../atoms/safe-input-field';
import Validation from './Validation';
import ValidationError from '../../atoms/validation-error';
import ValidationSummary from './ValidationSummary/ValidationSummary';

describe('Form', () => {
  let mounted: ShallowWrapper<any, any> | undefined; // tslint:disable-line no-any
  let props: FormProps;

  const form = () => {
    if (!mounted) {
      mounted = shallow(<Form {...props} />);
    }
    return mounted;
  };

  beforeEach(() => {
    props = {
      action: '',
    };
    mounted = undefined;
  });

  it('Form renders without crashing', () => {
    form();
  });

  it('renders children', () => {
    const form = mount(
      <Form action="">
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
      </Form>,
    );
    expect(form.find(Validation).length).toBe(1);
  });

  it('adds addFormComponent function to children', () => {
    const form = mount(
      <Form action="" requiredLabel="required">
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
      </Form>,
    );
    expect(
      form
        .find(Validation)
        .first()
        .props().addFormComponent,
    ).toBeDefined();
  });

  it('adds onValidated function to children', () => {
    const form = mount(
      <Form action="" requiredLabel="required">
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
      </Form>,
    );
    expect(
      form
        .find(Validation)
        .first()
        .props().onValidated,
    ).toBeDefined();
  });

  it('adds requiredLabel to children', () => {
    const form = mount(
      <Form action="" requiredLabel="required">
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
      </Form>,
    );
    expect(
      form
        .find(SafeInputField)
        .first()
        .props().requiredLabel,
    ).toBe('required');
  });

  it('adds optionalLabel to children', () => {
    const form = mount(
      <Form action="" optionalLabel="optional">
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
      </Form>,
    );
    expect(
      form
        .find(SafeInputField)
        .first()
        .props().optionalLabel,
    ).toBe('optional');
  });

  it('never sets showrequiredlabel', () => {
    const form = mount(
      <Form action="">
        <Validation>
          <SafeInputField id="id" value="value" isRequired />
        </Validation>
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
      </Form>,
    );
    expect(
      form
        .find(SafeInputField)
        .first()
        .props().showRequiredLabel,
    ).toBeFalsy();
  });

  it('always sets showoptionallabel', () => {
    const form = mount(
      <Form action="">
        <Validation>
          <SafeInputField id="id" value="value" isRequired />
        </Validation>
        <Validation>
          <SafeInputField id="id" value="value" isRequired />
        </Validation>
        <Validation>
          <SafeInputField id="id" value="value" />
        </Validation>
      </Form>,
    );
    expect(
      form
        .find(SafeInputField)
        .first()
        .props().showOptionalLabel,
    ).toBeTruthy();
  });

  it('renders error message', () => {
    const form = mount(
      <Form action="" submitButtonText="button" optionalLabel="optional">
        <Validation>
          <SafeInputField id="id" value="" isRequired />
        </Validation>
      </Form>,
    );
    form
      .find('button')
      .first()
      .simulate('click');
    expect(
      form
        .find(ValidationError)
        .first()
        .props().isValid,
    ).toBeFalsy();
  });

  it('renders validation summary', () => {
    const form = mount(
      <Form
        action=""
        validationSummary={{enable: true, header: 'validationsummary'}}
        submitButtonText="button"
        optionalLabel="optional">
        <Validation>
          <SafeInputField id="id" value="" isRequired />
        </Validation>
      </Form>,
    );
    expect(form.find(ValidationSummary).length).toBe(1);
  });

  it('calls validatefield on child on submit', () => {
    const form = mount(
      <Form action="" submitButtonText="button" optionalLabel="optional">
        <Validation>
          <SafeInputField id="id" value="" isRequired />
        </Validation>
      </Form>,
    );
    const spy = jest.spyOn(form.find(SafeInputField).instance() as SafeInputField, 'validateField');
    form
      .find('button')
      .first()
      .simulate('click');

    expect(spy).toHaveBeenCalled();
  });
});
