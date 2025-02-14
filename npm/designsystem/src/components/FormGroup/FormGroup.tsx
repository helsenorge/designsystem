import React, { useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormOnColor, FormSize } from '../../constants';
import { useUuid } from '../../hooks/useUuid';
import { isComponent } from '../../utils/component';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';
import FormLayout, { FormLayoutProps } from '../FormLayout';
import Input, { InputProps } from '../Input/Input';
import RadioButton, { RadioButtonProps, getRadioLabelClasses } from '../RadioButton/RadioButton';
import Select, { SelectProps } from '../Select';
import Slider, { SliderProps } from '../Slider';
import TemporaryErrorWrapper from '../TemporaryErrorWrapper';
import Textarea, { TextareaProps } from '../Textarea';
import Title from '../Title';

import formGroupStyles from './styles.module.scss';

export type FormGroupTags = 'fieldset' | 'div';

export interface FormGroupProps {
  /** title for the the fieldset */
  title?: string;
  /** text placed in the legend tag of the fieldset */
  legend?: string;
  /** Items in the FormGroup component */
  children?: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds custom classes to the errorWrapper. */
  errorWrapperClassName?: string;
  /** Adds custom classes to the fieldset element. */
  fieldsetClassName?: string;
  /** Changes the visuals of the formgroup */
  onColor?: keyof typeof FormOnColor;
  /** Changes the visuals of the formgroup */
  size?: keyof typeof FormSize;
  /** Error message */
  error?: string;
  /** Error text id */
  errorTextId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets the data-testid attribute for the error-wrapper. */
  errorWrapperTestId?: string;
  /** Unique name for the child input element */
  name?: string;
  /** Unique name for the fieldset */
  fieldsetName?: string;
  /** Sets div instead of fieldset tag */
  htmlMarkup?: FormGroupTags;
  /** Renders the error component (Default: true) */
  renderError?: boolean;
}

export const FormGroup = React.forwardRef((props: FormGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const {
    className,
    fieldsetClassName,
    onColor = FormOnColor.onwhite,
    size = FormSize.medium,
    error,
    errorTextId,
    name,
    htmlMarkup = 'fieldset',
    renderError = true,
    errorWrapperClassName,
    errorWrapperTestId,
  } = props;
  const [checkedRadioId, setCheckedRadioId] = useState<string>();
  const radioGroupId = useUuid();
  const errorTextUuid = useUuid(errorTextId);
  const onDark = onColor === FormOnColor.ondark;
  const isLarge = size === FormSize.large;
  const formGroupWrapperClasses = classNames(formGroupStyles['form-group-wrapper'], className);
  const titleClasses = classNames({
    [formGroupStyles['form-group-wrapper__title--on-dark']]: onDark && !error,
  });

  const legendClasses = classNames(formGroupStyles['field-set__legend'], {
    [formGroupStyles['field-set__legend--on-dark']]: onDark && !error,
  });

  const fieldsetClasses = classNames(formGroupStyles['field-set'], fieldsetClassName);

  const mapFormComponent = (child: React.ReactNode, index: number): React.ReactNode => {
    if (isComponent<FormLayoutProps>(child, FormLayout)) {
      return React.cloneElement(child, {
        size,
        mapHelper: mapFormComponent,
      });
    } else if (isComponent<FormGroupProps>(child, FormGroup)) {
      return React.cloneElement(child, {
        onColor,
        size,
        error,
        renderError: false,
        errorTextId: errorTextUuid,
      });
    } else if (isComponent<CheckboxProps>(child, Checkbox)) {
      return React.cloneElement(child, {
        name: name ?? child.props.name,
        onColor,
        size,
        error: !!error,
        errorTextId: errorTextUuid,
      });
    } else if (isComponent<RadioButtonProps>(child, RadioButton)) {
      const radioId = typeof child.props.inputId === 'undefined' ? radioGroupId + index : child.props.inputId;
      return React.cloneElement(child, {
        inputId: radioId,
        name: name ?? child.props.name,
        onColor,
        size,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          setCheckedRadioId(event.target.id);
          child.props.onChange && child.props.onChange(event);
        },
        error: !!error,
        errorTextId: errorTextUuid,
        labelClassNames: getRadioLabelClasses(radioId, onColor as FormOnColor, isLarge, checkedRadioId),
      });
    } else if (isComponent<InputProps>(child, Input)) {
      return React.cloneElement(child, {
        name: name ?? child.props.name,
        onColor,
        size,
        error: !!error,
        errorTextId: errorTextUuid,
      });
    } else if (isComponent<TextareaProps>(child, Textarea)) {
      return React.cloneElement(child, {
        name: name ?? child.props.name,
        onColor,
        error: !!error,
        errorTextId: errorTextUuid,
      });
    } else if (isComponent<SelectProps>(child, Select)) {
      return React.cloneElement(child, {
        name: name ?? child.props.name,
        onColor,
        error: !!error,
        errorTextId: errorTextUuid,
      });
    } else if (isComponent<SliderProps>(child, Slider)) {
      return React.cloneElement(child, {
        name: name ?? child.props.name,
        error: !!error,
        errorTextId: errorTextUuid,
      });
    }
    return child;
  };

  const formGroupContent = (): React.ReactNode => {
    return (
      <div>
        {htmlMarkup === 'div' && (
          <div className={fieldsetClasses}>
            {props.legend && <h5 className={legendClasses}>{props.legend}</h5>}
            {React.Children.map(props.children, mapFormComponent)}
          </div>
        )}
        {htmlMarkup === 'fieldset' && (
          <fieldset name={props.fieldsetName} className={fieldsetClasses}>
            {props.legend && <legend className={legendClasses}>{props.legend}</legend>}
            {React.Children.map(props.children, mapFormComponent)}
          </fieldset>
        )}
      </div>
    );
  };

  return (
    <div data-testid={props.testId} data-analyticsid={AnalyticsId.FormGroup} className={formGroupWrapperClasses} ref={ref} tabIndex={-1}>
      {props.title && (
        <Title className={titleClasses} htmlMarkup={'h4'} appearance={'title4'} margin={{ marginTop: 0, marginBottom: error ? 1 : 2 }}>
          {props.title}
        </Title>
      )}
      {renderError ? (
        <TemporaryErrorWrapper className={errorWrapperClassName} errorText={error} testId={errorWrapperTestId} errorTextId={errorTextUuid}>
          {formGroupContent()}
        </TemporaryErrorWrapper>
      ) : (
        formGroupContent()
      )}
    </div>
  );
});

FormGroup.displayName = 'FormGroup';

export default FormGroup;
