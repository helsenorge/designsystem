import React from 'react';

import classNames from 'classnames';

import formGroupStyles from './styles.module.scss';
import Checkbox from '../Checkbox';
import { CheckboxProps } from '../Checkbox/Checkbox';
import Title from '../Title';

interface FormGroupProps {
  /** title for the the fieldset */
  title?: string;
  /** text placed in the legend tag of the fieldset */
  legend?: string;
  /** Items in the ExpanderList */
  children?: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the visuals of the formgroup */
  mode?: FormGroupModes;
  /** Changes the visuals of the formgroup */
  variant?: FormGroupVariants;
  /** Error message */
  error?: string;
}

export enum FormGroupVariants {
  normal = 'normal',
  bigform = 'bigform',
}

export enum FormGroupModes {
  onWhite = 'on-white',
  onBlueberry = 'on-blueberry',
  onDark = 'on-dark',
}

const defaultProps = {
  mode: FormGroupModes.onWhite,
  variant: FormGroupVariants.normal,
};

export const FormGroup = React.forwardRef((props: FormGroupProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, mode, variant, error } = props;
  const onDark = mode === FormGroupModes.onDark;
  const onBlueberry = mode === FormGroupModes.onBlueberry;
  const bigform = variant === FormGroupVariants.bigform;
  const fieldSetClasses = classNames(
    formGroupStyles['form-group-wrapper'],
    {
      [formGroupStyles['form-group-wrapper--on-blueberry']]: onBlueberry,
      [formGroupStyles['form-group-wrapper--on-dark']]: onDark,
      [formGroupStyles['form-group-wrapper--bigform']]: bigform,
      [formGroupStyles['form-group-wrapper--invalid']]: error,
    },
    className
  );
  const titleClasses = classNames(formGroupStyles['form-group-wrapper__title'], {
    [formGroupStyles['form-group-wrapper__title--on-dark']]: onDark && !error,
    [formGroupStyles['form-group-wrapper__title--bigform']]: bigform,
  });
  const errorStyles = classNames(formGroupStyles['form-group-wrapper__errors'], {
    [formGroupStyles['form-group-wrapper__errors--bigform']]: bigform,
  });
  const legendClasses = classNames(formGroupStyles['form-group__legend'], {
    [formGroupStyles['form-group__legend--on-dark']]: onDark && !error,
    [formGroupStyles['form-group__legend--bigform']]: bigform,
  });

  return (
    <div className={fieldSetClasses}>
      {props.title && (
        <Title className={titleClasses} htmlMarkup={'h4'} appearance={'title4'}>
          {props.title}
        </Title>
      )}
      {error && <p className={errorStyles}>{error}</p>}
      <fieldset name={props.title} className={formGroupStyles['form-group']}>
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
  );
});

FormGroup.defaultProps = defaultProps;

export default FormGroup;
