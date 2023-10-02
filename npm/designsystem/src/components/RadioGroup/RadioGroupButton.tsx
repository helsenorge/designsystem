import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormMode, FormVariant } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { isMutableRefObject, mergeRefs } from '../../utils/refs';
import { getLabelText, renderLabelAsParent } from '../Label';

import radioGroupButtonStyles from './styles.module.scss';

export interface RadioGroupButtonProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'aria-describedby' | 'name' | 'value' | 'disabled' | 'required' | 'onChange' | 'checked'
  > {
  /** Adds custom classes to the element. */
  className?: string;
  /** The <Label/> next to the radioButton - sublabels kan ikke kombineres med bigform variant */
  label: React.ReactNode;
  /** input id of the radioButton */
  inputId?: string;
  /** Changes the visuals of the radioButton */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the radioButton */
  variant?: keyof typeof FormVariant;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const RadioGroupButton = React.forwardRef((props: RadioGroupButtonProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    disabled,
    label,
    inputId = '0',
    mode = FormMode.onwhite,
    name,
    variant,
    value = getLabelText(label),
    testId,
    required,
    checked,
    onChange,
    ...rest
  } = props;
  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const onGrey = mode === FormMode.ongrey;
  const onCherry = mode === FormMode.oninvalid;
  const bigform = variant === FormVariant.bigform;
  const { refObject, isFocused } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);

  const radioButtonWrapperClasses = classNames(radioGroupButtonStyles['radio-button-wrapper'], {
    [radioGroupButtonStyles['radio-button-wrapper__bigform']]: bigform,
    [radioGroupButtonStyles['radio-button-wrapper__bigform--focused']]: bigform && isFocused,
    [radioGroupButtonStyles['radio-button-wrapper__bigform--selected']]: bigform && checked && isFocused,
    [radioGroupButtonStyles['radio-button-wrapper__bigform--invalid']]: bigform && onCherry && isFocused,
    [radioGroupButtonStyles['radio-button-wrapper__bigform--on-blueberry']]: bigform && onBlueberry && isFocused,
  });
  const radioButtonLabelClasses = classNames(radioGroupButtonStyles['radio-button-label'], {
    [radioGroupButtonStyles['radio-button-label--disabled']]: disabled,
    [radioGroupButtonStyles['radio-button-label--on-dark']]: onDark,
    [radioGroupButtonStyles['radio-button-label__bigform']]: bigform,
    [radioGroupButtonStyles['radio-button-label__bigform--on-grey']]: bigform && onGrey && !checked,
    [radioGroupButtonStyles['radio-button-label__bigform--on-blueberry']]: onBlueberry && !checked && bigform,
    [radioGroupButtonStyles['radio-button-label__bigform--selected']]: bigform && checked && !onCherry,
    [radioGroupButtonStyles['radio-button-label__bigform--disabled']]: bigform && disabled,
    [radioGroupButtonStyles['radio-button-label__bigform--selected-invalid']]: bigform && checked && onCherry,
  });
  const radioButtonClasses = classNames(
    radioGroupButtonStyles['radio-button'],
    {
      [radioGroupButtonStyles['radio-button--on-dark']]: onDark,
      [radioGroupButtonStyles['radio-button--disabled']]: disabled,
      [radioGroupButtonStyles['radio-button--on-blueberry']]: onBlueberry,
      [radioGroupButtonStyles['radio-button__bigform']]: bigform,
      [radioGroupButtonStyles['radio-button__bigform--disabled']]: bigform && disabled,
    },
    className
  );

  const getLabelContent = (): React.ReactNode => (
    <input
      id={inputId}
      name={name}
      className={radioButtonClasses}
      type="radio"
      disabled={disabled}
      value={value}
      ref={mergedRefs}
      aria-describedby={props['aria-describedby'] ?? undefined}
      required={required}
      {...rest}
      onChange={onChange}
      checked={checked}
    />
  );

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.RadioButton} className={radioButtonWrapperClasses}>
      {renderLabelAsParent(
        label,
        getLabelContent(),
        inputId,
        mode as FormMode,
        disabled,
        radioButtonLabelClasses,
        undefined,
        radioGroupButtonStyles['radiobutton-sublabel-wrapper'],
        bigform
      )}
    </div>
  );
});

RadioGroupButton.displayName = 'RadioButtonGroup';

export default RadioGroupButton;
