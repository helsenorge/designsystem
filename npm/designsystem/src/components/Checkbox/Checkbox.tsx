import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import Check from '../Icons/Check';
import Icon from '../Icons';
import { getColor } from '../../theme/currys/color';

import checkboxStyles from './styles.module.scss';
import { FormMode, FormVariant } from '../FormGroup/FormGroup';

export interface CheckboxProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets checkbox as checked */
  checked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  /** The label text next to the checkbox */
  label: string;
  /** input id of the checkbox */
  inputid?: string;
  /** Changes the visuals of the checkbox */
  mode?: FormMode;
  /** Unique identifyer for the input tag */
  name?: string;
  /** Return value for the checkbox */
  value?: string;
  /** Changes the visuals of the checkbox */
  variant?: FormVariant;
  /** Activates Error style for the checkbox - This is can be true while errorText is empty, when in a FormGroup */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Checkbox = React.forwardRef((props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    disabled,
    label,
    inputid = uuidv4(),
    mode,
    name = inputid,
    variant,
    errorText,
    error = !!errorText,
    value = label,
  } = props;
  const [isChecked, setIsChecked] = useState(props.checked);
  const invalid = error;
  const onDark = mode === 'on-dark';
  const onBlueberry = mode === 'on-blueberry';
  const bigform = variant === 'bigform';

  const checkboxWrapperClasses = classNames(checkboxStyles['checkbox-wrapper'], {
    [checkboxStyles['checkbox-wrapper--with-error']]: errorText,
    [checkboxStyles['checkbox-wrapper--bigform']]: bigform,
  });
  const checkboxLabelClasses = classNames(checkboxStyles['checkbox-label'], {
    [checkboxStyles['checkbox-label--disabled']]: disabled,
    [checkboxStyles['checkbox-label--on-dark']]: onDark,
    [checkboxStyles['checkbox-label--on-blueberry']]: onBlueberry,
    [checkboxStyles['checkbox-label--invalid']]: invalid,
    [checkboxStyles['checkbox-label--bigform']]: bigform,
  });
  const checkboxClasses = classNames(checkboxStyles.checkbox, className);
  const checkboxIconWrapperClasses = classNames(checkboxStyles['checkbox__icon-wrapper'], {
    [checkboxStyles['checkbox__icon-wrapper--checked']]: isChecked,
    [checkboxStyles['checkbox__icon-wrapper--disabled']]: disabled,
    [checkboxStyles['checkbox__icon-wrapper--on-dark']]: onDark,
    [checkboxStyles['checkbox__icon-wrapper--on-blueberry']]: onBlueberry,
    [checkboxStyles['checkbox__icon-wrapper--invalid']]: invalid,
  });
  const errorStyles = classNames(checkboxStyles['checkbox-errors'], {
    [checkboxStyles['checkbox-errors--bigform']]: bigform,
  });

  let iconColor = getColor('blueberry', 500);
  if (disabled) iconColor = getColor('neutral', 400);
  if (onDark) iconColor = getColor('blueberry', 200);
  if (invalid) iconColor = getColor('cherry', 500);

  useEffect(() => {
    setIsChecked(props.checked);
  }, [props.checked]);

  return (
    <div data-testid={props.testId} className={checkboxWrapperClasses}>
      {errorText && <p className={errorStyles}>{errorText}</p>}
      <label htmlFor={inputid} className={checkboxLabelClasses}>
        <input
          id={inputid}
          name={name}
          className={checkboxClasses}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          value={value}
          ref={ref}
          aria-invalid={error}
        />
        <span className={checkboxIconWrapperClasses}>
          {isChecked && <Icon color={iconColor} className={checkboxStyles['checkbox__icon']} svgIcon={Check} size={38} />}
        </span>
        {label}
      </label>
    </div>
  );
});

export default Checkbox;
