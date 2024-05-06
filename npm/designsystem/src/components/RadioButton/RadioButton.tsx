import React, { useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormMode, FormSize } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { useUuid } from '../../hooks/useUuid';
import { getAriaDescribedBy } from '../../utils/accessibility';
import { isMutableRefObject, mergeRefs } from '../../utils/refs';
import { uuid } from '../../utils/uuid';
import { getLabelText, renderLabelAsParent } from '../Label';

import radioButtonStyles from './styles.module.scss';

export interface RadioButtonProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    'aria-describedby' | 'name' | 'value' | 'disabled' | 'defaultChecked' | 'required' | 'onChange'
  > {
  /** Adds custom classes to the element. */
  className?: string;
  /** The <Label/> next to the radioButton - sublabels kan ikke kombineres med large variant */
  label: React.ReactNode;
  /** Adds custom classes to the label element. */
  labelClassNames?: string;
  /** input id of the radioButton */
  inputId?: string;
  /** Changes the visuals of the radioButton */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the radioButton */
  size?: keyof typeof FormSize;
  /** Activates Error style for the radioButton - This is can be true while errorText is empty, when in a FormGroup */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const getRadioLabelClasses = (radioId: string, mode: FormMode, large: boolean, checkedRadioId?: string): string | undefined => {
  const onCherry = mode === 'oninvalid';
  const checked = radioId === checkedRadioId;

  return classNames({
    [radioButtonStyles['radio-button-label__large--on-grey']]: large && mode === 'ongrey' && !checked,
    [radioButtonStyles['radio-button-label__large--on-blueberry']]: mode === 'onblueberry' && !checked && large,
    [radioButtonStyles['radio-button-label__large--selected']]: large && checked && !onCherry,
    [radioButtonStyles['radio-button-label__large--selected-invalid']]: large && checked && onCherry,
  });
};

export const RadioButton = React.forwardRef((props: RadioButtonProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    defaultChecked = false,
    onChange,
    disabled,
    label,
    inputId = uuid(),
    mode = FormMode.onwhite,
    name = inputId,
    size,
    errorText,
    error = !!errorText,
    errorTextId,
    value = getLabelText(label),
    testId,
    required,
    labelClassNames,
    ...rest
  } = props;
  const invalid = error || mode === FormMode.oninvalid;
  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const onCherry = mode === FormMode.oninvalid;
  const isLarge = size === FormSize.large;
  const [checked, changeChecked] = useState<boolean>(defaultChecked);
  const { refObject, isFocused } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);
  const errorTextUuid = useUuid(errorTextId);

  const radioButtonWrapperClasses = classNames(radioButtonStyles['radio-button-wrapper'], {
    [radioButtonStyles['radio-button-wrapper--with-error']]: errorText,
    [radioButtonStyles['radio-button-wrapper__large']]: isLarge,
    [radioButtonStyles['radio-button-wrapper__large--focused']]: isLarge && isFocused,
    [radioButtonStyles['radio-button-wrapper__large--selected']]: isLarge && checked && isFocused,
    [radioButtonStyles['radio-button-wrapper__large--invalid']]: isLarge && onCherry && isFocused,
    [radioButtonStyles['radio-button-wrapper__large--on-blueberry']]: isLarge && onBlueberry && isFocused,
  });
  const radioButtonLabelClasses = classNames(
    radioButtonStyles['radio-button-label'],
    {
      [radioButtonStyles['radio-button-label--disabled']]: disabled,
      [radioButtonStyles['radio-button-label--on-dark']]: onDark,
      [radioButtonStyles['radio-button-label--invalid']]: invalid,
      [radioButtonStyles['radio-button-label__large']]: isLarge,
      [radioButtonStyles['radio-button-label__large--disabled']]: isLarge && disabled,
    },
    labelClassNames
  );
  const radioButtonClasses = classNames(
    radioButtonStyles['radio-button'],
    {
      [radioButtonStyles['radio-button--on-dark']]: onDark,
      [radioButtonStyles['radio-button--disabled']]: disabled,
      [radioButtonStyles['radio-button--on-blueberry']]: onBlueberry,
      [radioButtonStyles['radio-button--invalid']]: invalid,
      [radioButtonStyles['radio-button__large']]: isLarge,
      [radioButtonStyles['radio-button__large--disabled']]: isLarge && disabled,
      [radioButtonStyles['radio-button__large--invalid']]: isLarge && invalid,
    },
    className
  );
  const errorStyles = classNames(radioButtonStyles['radio-button-errors']);

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeChecked(e.target.checked);
    onChange && onChange(e);
  };

  const getLabelContent = (): React.ReactNode => (
    <input
      id={inputId}
      name={name}
      className={radioButtonClasses}
      type="radio"
      disabled={disabled}
      value={value}
      ref={mergedRefs}
      defaultChecked={defaultChecked}
      aria-describedby={getAriaDescribedBy(props, errorTextUuid)}
      required={required}
      {...rest}
      onChange={(e): void => change(e)}
    />
  );

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.RadioButton} className={radioButtonWrapperClasses}>
      {errorText && (
        <p className={errorStyles} id={errorTextUuid}>
          {errorText}
        </p>
      )}
      {renderLabelAsParent(
        label,
        getLabelContent(),
        inputId,
        mode as FormMode,
        radioButtonLabelClasses,
        undefined,
        radioButtonStyles['radiobutton-sublabel-wrapper'],
        isLarge
      )}
    </div>
  );
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;
