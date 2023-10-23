import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormMode, FormSize, IconSize } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getColor } from '../../theme/currys/color';
import { isMutableRefObject, mergeRefs } from '../../utils/refs';
import { uuid } from '../../utils/uuid';
import Icon from '../Icon';
import Check from '../Icons/Check';
import { getLabelText, renderLabelAsParent } from '../Label';

import checkboxStyles from './styles.module.scss';

export interface CheckboxProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'aria-describedby' | 'name' | 'value' | 'disabled' | 'checked' | 'required' | 'onChange'
  > {
  /** Adds custom classes to the element. */
  className?: string;
  /** The <Label/> next to the checkbox - sublabels kan ikke kombineres med large variant */
  label: React.ReactNode;
  /** input id of the checkbox */
  inputId?: string;
  /** Changes the visuals of the checkbox */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the checkbox */
  size?: keyof typeof FormSize;
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
    mode = FormMode.onwhite,
    name = inputId,
    size,
    errorText,
    error = !!errorText,
    value = getLabelText(label),
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
  const large = size === FormSize.large;
  const { refObject, isFocused } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);

  const checkboxWrapperClasses = classNames(checkboxStyles['checkbox-wrapper'], {
    [checkboxStyles['checkbox-wrapper--with-error']]: errorText,
    [checkboxStyles['checkbox-wrapper--large']]: large,
  });
  const checkboxLabelClasses = classNames(checkboxStyles['checkbox-label'], {
    [checkboxStyles['checkbox-label--disabled']]: disabled,
    [checkboxStyles['checkbox-label--on-dark']]: onDark,
    [checkboxStyles['checkbox-label--large']]: large,
    [checkboxStyles['checkbox-label__large--checked']]: large && isChecked,
    [checkboxStyles['checkbox-label__large--focus']]: large && isFocused,
    [checkboxStyles['checkbox-label__large--on-white']]: large && onWhite,
    [checkboxStyles['checkbox-label__large--on-grey']]: large && onGrey,
    [checkboxStyles['checkbox-label__large--on-blueberry']]: large && onBlueberry,
    [checkboxStyles['checkbox-label__large--on-invalid']]: large && onInvalid,
    [checkboxStyles['checkbox-label__large--disabled']]: large && disabled,
  });
  const checkboxClasses = classNames(checkboxStyles.checkbox, className);
  const checkboxIconWrapperClasses = classNames(checkboxStyles['checkbox__icon-wrapper'], {
    [checkboxStyles['checkbox__icon-wrapper--on-white']]: onWhite,
    [checkboxStyles['checkbox__icon-wrapper--on-grey']]: onGrey,
    [checkboxStyles['checkbox__icon-wrapper--on-invalid']]: onInvalid,
    [checkboxStyles['checkbox__icon-wrapper--disabled']]: disabled,
    [checkboxStyles['checkbox__icon-wrapper__regular--checked']]: !large && isChecked,
    [checkboxStyles['checkbox__icon-wrapper__regular--invalid']]: !large && isChecked && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__regular--on-dark']]: !large && isChecked && onDark,
    [checkboxStyles['checkbox__icon-wrapper__large--checked']]: large && isChecked,
    [checkboxStyles['checkbox__icon-wrapper__large--invalid']]: large && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper--on-dark']]: onDark,
    [checkboxStyles['checkbox__icon-wrapper--on-blueberry']]: onBlueberry,
    [checkboxStyles['checkbox__icon-wrapper--invalid']]: onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__large--invalid']]: large && isChecked && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__large--disabled']]: disabled && large && isChecked,
    [checkboxStyles['checkbox__icon-wrapper__large--checked--invalid']]: large && isChecked && onInvalid,
    [checkboxStyles['checkbox__icon-wrapper__large--checked--disabled']]: disabled && large && isChecked,
  });
  const labelTextClasses = classNames(checkboxStyles['checkbox-label__text'], {
    [checkboxStyles['checkbox-label__text__large--checked']]: large && isChecked,
    [checkboxStyles['checkbox-label__text__large--invalid']]: large && isChecked && onInvalid,
    [checkboxStyles['checkbox-label__text--on-dark']]: onDark,
    [checkboxStyles['checkbox-label__text--disabled']]: disabled,
  });
  const errorStyles = classNames(checkboxStyles['checkbox-errors']);

  let iconColor = getColor('white');
  if (onDark || (large && isChecked)) iconColor = getColor('blueberry', 900);
  if (onInvalid && large && isChecked) iconColor = getColor('white');
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

  const getLabelContent = (): React.ReactNode => {
    return (
      <>
        <input
          id={inputId}
          name={name}
          className={checkboxClasses}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          value={value}
          ref={mergedRefs}
          aria-describedby={props['aria-describedby'] ?? undefined}
          aria-invalid={error}
          required={required}
          onChange={onChangeHandler}
          {...rest}
        />
        <span className={checkboxIconWrapperClasses}>
          {isChecked && <Icon color={iconColor} className={checkboxStyles['checkbox__icon']} svgIcon={Check} size={IconSize.XSmall} />}
        </span>
      </>
    );
  };

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.Checkbox} className={checkboxWrapperClasses}>
      {errorText && <p className={errorStyles}>{errorText}</p>}
      {renderLabelAsParent(
        label,
        getLabelContent(),
        inputId,
        mode as FormMode,
        disabled,
        checkboxLabelClasses,
        labelTextClasses,
        checkboxStyles['checkbox-sublabel-wrapper'],
        large
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
