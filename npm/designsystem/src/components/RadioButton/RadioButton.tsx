import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormMode, FormVariant } from '../../constants';
import { uuid } from '../../utils/uuid';

import radioButtonStyles from './styles.module.scss';

export interface RadioButtonProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'disabled' | 'defaultChecked' | 'required'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** The label text next to the radioButton */
  label: string;
  /** input id of the radioButton */
  inputId?: string;
  /** Changes the visuals of the radioButton */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the radioButton */
  variant?: keyof typeof FormVariant;
  /** Activates Error style for the radioButton - This is can be true while errorText is empty, when in a FormGroup */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const RadioButton = React.forwardRef((props: RadioButtonProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    defaultChecked = false,
    disabled,
    label,
    inputId = uuid(),
    mode,
    name = inputId,
    variant,
    errorText,
    error = !!errorText,
    value = label,
    testId,
    required,
    ...rest
  } = props;
  const invalid = error || mode === FormMode.oninvalid;
  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const bigform = variant === FormVariant.bigform;

  const radioButtonWrapperClasses = classNames(radioButtonStyles['radio-button-wrapper'], {
    [radioButtonStyles['radio-button-wrapper--with-error']]: errorText,
    [radioButtonStyles['radio-button-wrapper--bigform']]: bigform,
  });
  const radioButtonLabelClasses = classNames(radioButtonStyles['radio-button-label'], {
    [radioButtonStyles['radio-button-label--disabled']]: disabled,
    [radioButtonStyles['radio-button-label--on-dark']]: onDark,
    [radioButtonStyles['radio-button-label--on-blueberry']]: onBlueberry,
    [radioButtonStyles['radio-button-label--invalid']]: invalid,
    [radioButtonStyles['radio-button-label--bigform']]: bigform,
  });
  const radioButtonClasses = classNames(
    radioButtonStyles['radio-button'],
    {
      [radioButtonStyles['radio-button--on-dark']]: onDark,
      [radioButtonStyles['radio-button--disabled']]: disabled,
      [radioButtonStyles['radio-button--on-blueberry']]: onBlueberry,
      [radioButtonStyles['radio-button--invalid']]: invalid,
    },
    className
  );
  const errorStyles = classNames(radioButtonStyles['radio-button-errors'], {
    [radioButtonStyles['radio-button-errors--bigform']]: bigform,
  });

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.RadioButton} className={radioButtonWrapperClasses}>
      {errorText && <p className={errorStyles}>{errorText}</p>}
      <label htmlFor={inputId} className={radioButtonLabelClasses}>
        <input
          id={inputId}
          name={name}
          className={radioButtonClasses}
          type="radio"
          disabled={disabled}
          value={value}
          ref={ref}
          aria-invalid={error}
          defaultChecked={defaultChecked}
          required={required}
          {...rest}
        />
        {label}
      </label>
    </div>
  );
});

export default RadioButton;
