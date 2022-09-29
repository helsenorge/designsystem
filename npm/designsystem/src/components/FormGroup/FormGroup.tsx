import React from 'react';

import classNames from 'classnames';

import formGroupStyles from './styles.module.scss';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';
import { AnalyticsId, FormMode, FormVariant } from '../../constants';
import RadioButton, { RadioButtonProps } from '../RadioButton/RadioButton';
import Input, { InputProps } from '../Input/Input';
import Title from '../Title';
import FormLayout, { FormLayoutProps } from '../FormLayout';

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
  /** Changes the visuals of the formgroup */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the formgroup */
  variant?: keyof typeof FormVariant;
  /** Error message */
  error?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Unique identifyer for the child input tags */
  name?: string;
  /** Sets div instead of fieldset tag */
  htmlMarkup?: FormGroupTags;
}

export const FormGroup = React.forwardRef((props: FormGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { className, mode = FormMode.onwhite, variant = FormVariant.normal, error, name, htmlMarkup = 'fieldset' } = props;
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
  const formGroupClasses = classNames(formGroupStyles['form-group'], {
    [formGroupStyles['form-group--invalid']]: error,
  });
  const errorStyles = classNames(formGroupStyles['form-group-wrapper__errors'], {
    [formGroupStyles['form-group-wrapper__errors--bigform']]: bigform,
  });
  const legendClasses = classNames(formGroupStyles['field-set__legend'], {
    [formGroupStyles['field-set__legend--on-dark']]: onDark && !error,
    [formGroupStyles['field-set__legend--bigform']]: bigform,
  });

  const mapFormComponent = (child: React.ReactNode): React.ReactNode => {
    if ((child as React.ReactElement<FormLayoutProps>).type === FormLayout) {
      return React.cloneElement(child as React.ReactElement<FormLayoutProps>, {
        variant,
        mapHelper: mapFormComponent,
      });
    } else if ((child as React.ReactElement<CheckboxProps>).type === Checkbox) {
      let checkbox = (child as React.ReactElement<CheckboxProps>).type === Checkbox;
      return React.cloneElement(child as React.ReactElement<CheckboxProps>, {
        name: name ?? checkbox.valueOf.name,
        mode,
        variant,
        error: !!error,
      });
    } else if ((child as React.ReactElement<RadioButtonProps>).type === RadioButton) {
      let radioButton = (child as React.ReactElement<RadioButtonProps>).type === RadioButton;
      return React.cloneElement(child as React.ReactElement<RadioButtonProps>, {
        name: name ?? radioButton.valueOf.name,
        mode,
        variant,
        error: !!error,
      });
    } else if ((child as React.ReactElement<InputProps>).type === Input) {
      let input = (child as React.ReactElement<InputProps>).type === Input;
      return React.cloneElement(child as React.ReactElement<InputProps>, {
        name: name ?? input.valueOf.name,
        mode,
        variant,
        error: !!error,
      });
    }
    return child;
  };

  return (
    <div data-testid={props.testId} data-analyticsid={AnalyticsId.FormGroup} className={formGroupWrapperClasses} ref={ref} tabIndex={-1}>
      {props.title && (
        <Title className={titleClasses} htmlMarkup={'h4'} appearance={'title4'} margin={{ marginTop: 0, marginBottom: error ? 1 : 2 }}>
          {props.title}
        </Title>
      )}
      <div className={formGroupClasses}>
        {error && (
          <p role={'alert'} className={errorStyles}>
            {error}
          </p>
        )}
        {htmlMarkup === 'div' && (
          <div id={props.title} className={formGroupStyles['field-set']}>
            {props.legend && <h5 className={legendClasses}>{props.legend}</h5>}
            {React.Children.map(props.children, mapFormComponent)}
          </div>
        )}
        {htmlMarkup === 'fieldset' && (
          <fieldset name={props.title} className={formGroupStyles['field-set']}>
            {props.legend && <legend className={legendClasses}>{props.legend}</legend>}
            {React.Children.map(props.children, mapFormComponent)}
          </fieldset>
        )}
      </div>
    </div>
  );
});

export default FormGroup;
