import React from 'react';

import classNames from 'classnames';

import formGroupStyles from './styles.module.scss';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';
import { AnalyticsId, FormMode, FormVariant } from '../../constants';
import RadioButton, { RadioButtonProps } from '../RadioButton/RadioButton';
import Input, { InputProps } from '../Input/Input';
import Title from '../Title';
import FormLayout, { FormLayoutProps } from '../FormLayout';
import ErrorWrapper from '../ErrorWrapper';
import Select, { SelectProps } from '../Select';
import { isComponent } from '../../utils/component';

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
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the formgroup */
  variant?: keyof typeof FormVariant;
  /** Error message */
  error?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets the data-testid attribute for the error-wrapper. */
  errorWrapperTestId?: string;
  /** Unique identifyer for the child input tags */
  name?: string;
  /** Sets div instead of fieldset tag */
  htmlMarkup?: FormGroupTags;
  /** Renders the error component (Default: true) */
  renderError?: boolean;
}

export const FormGroup = React.forwardRef((props: FormGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const {
    className,
    fieldsetClassName,
    mode = FormMode.onwhite,
    variant = FormVariant.normal,
    error,
    name,
    htmlMarkup = 'fieldset',
    renderError = true,
    errorWrapperClassName,
    errorWrapperTestId,
  } = props;
  const onDark = mode === FormMode.ondark;
  const bigform = variant === FormVariant.bigform;
  const formGroupWrapperClasses = classNames(
    formGroupStyles['form-group-wrapper'],
    {
      [formGroupStyles['form-group-wrapper--on-dark']]: onDark,
      [formGroupStyles['form-group-wrapper--invalid']]: error,
    },
    className
  );
  const titleClasses = classNames(formGroupStyles['form-group-wrapper__title'], {
    [formGroupStyles['form-group-wrapper__title--on-dark']]: onDark && !error,
    [formGroupStyles['form-group-wrapper__title--bigform']]: bigform,
  });
  const formGroupClasses = classNames(formGroupStyles['form-group']);

  const legendClasses = classNames(formGroupStyles['field-set__legend'], {
    [formGroupStyles['field-set__legend--on-dark']]: onDark && !error,
    [formGroupStyles['field-set__legend--bigform']]: bigform,
  });

  const fieldsetClasses = classNames(formGroupStyles['field-set'], fieldsetClassName);

  const mapFormComponent = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<FormGroupProps>(child, FormLayout)) {
      return React.cloneElement(child as React.ReactElement<FormLayoutProps>, {
        variant,
        mapHelper: mapFormComponent,
      });
    } else if (isComponent<FormGroupProps>(child, FormGroup)) {
      return React.cloneElement(child, {
        mode,
        variant,
        error,
        renderError: false,
      });
    } else if (isComponent<CheckboxProps>(child, Checkbox)) {
      return React.cloneElement(child as React.ReactElement<CheckboxProps>, {
        name: name ?? child.props.name,
        mode,
        variant,
        error: !!error,
      });
    } else if (isComponent<RadioButtonProps>(child, RadioButton)) {
      return React.cloneElement(child as React.ReactElement<RadioButtonProps>, {
        name: name ?? child.props.name,
        mode,
        variant,
        error: !!error,
      });
    } else if (isComponent<InputProps>(child, Input)) {
      return React.cloneElement(child as React.ReactElement<InputProps>, {
        name: name ?? child.props.name,
        mode,
        variant,
        error: !!error,
      });
    } else if (isComponent<SelectProps>(child, Select)) {
      return React.cloneElement(child as React.ReactElement<SelectProps>, {
        name: name ?? child.props.name,
        mode,
        error: !!error,
      });
    }
    return child;
  };

  const formGroupContent = () => {
    return (
      <div className={formGroupClasses}>
        {htmlMarkup === 'div' && (
          <div id={props.title} className={fieldsetClasses}>
            {props.legend && <h5 className={legendClasses}>{props.legend}</h5>}
            {React.Children.map(props.children, mapFormComponent)}
          </div>
        )}
        {htmlMarkup === 'fieldset' && (
          <fieldset name={props.title} className={fieldsetClasses}>
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
        <ErrorWrapper className={errorWrapperClassName} errorText={error} testId={errorWrapperTestId}>
          {formGroupContent()}
        </ErrorWrapper>
      ) : (
        formGroupContent()
      )}
    </div>
  );
});

export default FormGroup;
