import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormMode, FormVariant, IconSize } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getColor } from '../../theme/currys/color';
import { uuid } from '../../utils/uuid';
import Icon from '../Icons';
import Check from '../Icons/Check';

import checkboxStyles from './styles.module.scss';

export interface CheckboxProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'disabled' | 'checked' | 'required' | 'onChange'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** The label text next to the checkbox */
  label: string;
  /** input id of the checkbox */
  inputId?: string;
  /** Changes the visuals of the checkbox */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the checkbox */
  variant?: keyof typeof FormVariant;
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
    checked = false,
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
    onChange,
    ...rest
  } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const onWhite = mode === FormMode.onwhite;
  const onGrey = mode === FormMode.ongrey;
  const onBlueberry = mode === FormMode.onblueberry;
  const onInvalid = error || mode === FormMode.oninvalid;
  const onDark = mode === FormMode.ondark;
  const bigform = variant === FormVariant.bigform;
  const { refObject, isFocused } = usePseudoClasses(ref as React.RefObject<HTMLInputElement>);
  const checkboxWrapperClasses = classNames(checkboxStyles['checkbox-wrapper'], {
    [checkboxStyles['checkbox-wrapper--with-error']]: errorText,
    [checkboxStyles['checkbox-wrapper--bigform']]: bigform,
  });
  const checkboxLabelClasses = classNames(checkboxStyles['checkbox-label'], {
    [checkboxStyles['checkbox-label--disabled']]: disabled,
    [checkboxStyles['checkbox-label--on-dark']]: onDark,
    [checkboxStyles['checkbox-label--bigform']]: bigform,
    [checkboxStyles['checkbox-label__big-form--checked']]: bigform && isChecked,
    [checkboxStyles['checkbox-label__big-form--focus']]: bigform && isFocused,
    [checkboxStyles['checkbox-label__big-form--on-white']]: bigform && onWhite,
    [checkboxStyles['checkbox-label__big-form--on-grey']]: bigform && onGrey,
    [checkboxStyles['checkbox-label__big-form--on-blueberry']]: bigform && onBlueberry,
    [checkboxStyles['checkbox-label__big-form--on-invalid']]: bigform && onInvalid,
    [checkboxStyles['checkbox-label__big-form--disabled']]: bigform && disabled,
  });
  const checkboxClasses = classNames(checkboxStyles.checkbox, className);
  const checkboxIconWrapperClasses = classNames(checkboxStyles['checkbox__icon-wrapper'], {
    [checkboxStyles['checkbox__icon-wrapper--on-white']]: onWhite,
    [checkboxStyles['checkbox__icon-wrapper--on-grey']]: onGrey,
    [checkboxStyles['checkbox__icon-wrapper--on-invalid']]: onInvalid,
    [checkboxStyles['checkbox__icon-wrapper--disabled']]: disabled,
    [checkboxStyles['checkbox__icon-wrapper__regular--checked']]: !bigform && isChecked,
    [checkboxStyles['checkbox__icon-wrapper__regular--invalid']]: !bigform && isChecked && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__regular--on-dark']]: !bigform && isChecked && onDark,
    [checkboxStyles['checkbox__icon-wrapper__big-form--checked']]: bigform && isChecked,
    [checkboxStyles['checkbox__icon-wrapper__big-form--invalid']]: bigform && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper--on-dark']]: onDark,
    [checkboxStyles['checkbox__icon-wrapper--on-blueberry']]: onBlueberry,
    [checkboxStyles['checkbox__icon-wrapper--invalid']]: onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__big-form--invalid']]: bigform && isChecked && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__big-form--disabled']]: disabled && bigform && isChecked,
    [checkboxStyles['checkbox__icon-wrapper__big-form--checked--invalid']]: bigform && isChecked && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__big-form--checked--disabled']]: disabled && bigform && isChecked,
  });
  const labelClasses = classNames(checkboxStyles['checkbox-label__text'], {
    [checkboxStyles['checkbox-label__text__big-form--checked']]: bigform && isChecked,
    [checkboxStyles['checkbox-label__text__big-form--invalid']]: bigform && isChecked && onInvalid,
    [checkboxStyles['checkbox-label__text--on-dark']]: onDark,
    [checkboxStyles['checkbox-label__text--disabled']]: disabled,
  });
  const errorStyles = classNames(checkboxStyles['checkbox-errors']);

  let iconColor = getColor('white');
  if (onDark || (bigform && isChecked)) iconColor = getColor('blueberry', 900);
  if (onInvalid && bigform && isChecked) iconColor = getColor('white');
  if (disabled) iconColor = getColor('neutral', 400);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e);
    }

    setIsChecked(!isChecked);
  };

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.Checkbox} className={checkboxWrapperClasses}>
      {errorText && <p className={errorStyles}>{errorText}</p>}
      <label htmlFor={inputId} className={checkboxLabelClasses}>
        <input
          id={inputId}
          name={name}
          className={checkboxClasses}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          value={value}
          ref={refObject}
          aria-invalid={error}
          required={required}
          onChange={onChangeHandler}
          {...rest}
        />
        <span className={checkboxIconWrapperClasses}>
          {isChecked && <Icon color={iconColor} className={checkboxStyles['checkbox__icon']} svgIcon={Check} size={IconSize.XSmall} />}
        </span>
        <span className={labelClasses}>{label}</span>
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
