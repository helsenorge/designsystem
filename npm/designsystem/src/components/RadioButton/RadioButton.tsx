import React from 'react';

import classNames from 'classnames';
import { uuid } from '../../utils/uuid';

import radioButtonStyles from './styles.module.scss';
import { AnalyticsId, FormMode, FormVariant } from '../../constants';

export interface RadioButtonProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets radioButton as checked by default */
  defaultChecked?: boolean;
  /** Disables the radioButton */
  disabled?: boolean;
  /** The label text next to the radioButton */
  label: string;
  /** input id of the radioButton */
  inputid?: string;
  /** Changes the visuals of the radioButton */
  mode?: keyof typeof FormMode;
  /** Unique identifyer for the input tag */
  name?: string;
  /** Return value for the radioButton */
  value?: string;
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
    inputid = uuid(),
    mode,
    name = inputid,
    variant,
    errorText,
    error = !!errorText,
    value = label,
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
    <div data-testid={props.testId} data-analyticsid={AnalyticsId.RadioButton} className={radioButtonWrapperClasses}>
      {errorText && <p className={errorStyles}>{errorText}</p>}
      <label htmlFor={inputid} className={radioButtonLabelClasses}>
        <input
          id={inputid}
          name={name}
          className={radioButtonClasses}
          type="radio"
          disabled={disabled}
          value={value}
          ref={ref}
          aria-invalid={error}
          defaultChecked={defaultChecked}
        />
        {label}
      </label>
    </div>
  );
});

export default RadioButton;
