import React from 'react';

import classNames from 'classnames';

import formGroupStyles from './styles.module.scss';
import Checkbox from '../Checkbox';
import { CheckboxProps } from '../Checkbox/Checkbox';
import { FormMode } from '../../constants';
import Title from '../Title';

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
  variant?: FormVariant;
  /** Error message */
  error?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export type FormVariant = 'normal' | 'bigform';

export const allFormVariants: FormVariant[] = ['normal', 'bigform'];

export const FormGroup = React.forwardRef((props: FormGroupProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, mode = FormMode.onWhite, variant = 'normal', error } = props;
  const onDark = mode === FormMode.onDark;
  const bigform = variant === 'bigform';
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

  return (
    <div data-testid={props.testId} className={formGroupWrapperClasses}>
      {props.title && (
        <Title className={titleClasses} htmlMarkup={'h4'} appearance={'title4'} margin={{ marginTop: 0, marginBottom: 2 }}>
          {props.title}
        </Title>
      )}
      <div className={formGroupClasses}>
        {error && <p className={errorStyles}>{error}</p>}
        <fieldset name={props.title} className={formGroupStyles['field-set']}>
          {props.legend && <legend className={legendClasses}>{props.legend}</legend>}
          {React.Children.map(props.children, (child: React.ReactNode) => {
            if ((child as React.ReactElement<CheckboxProps>).type === Checkbox) {
              return React.cloneElement(child as React.ReactElement<CheckboxProps>, {
                mode,
                variant,
                error: !!error,
              });
            }
            return child;
          })}
        </fieldset>
      </div>
    </div>
  );
});

export default FormGroup;
