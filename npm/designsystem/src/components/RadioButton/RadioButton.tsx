import React, { useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormOnColor, FormSize } from '../../constants';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getAriaDescribedBy } from '../../utils/accessibility';
import { isMutableRefObject, mergeRefs } from '../../utils/refs';
import { uuid } from '../../utils/uuid';
import ErrorWrapper, { ErrorWrapperClassNameProps } from '../ErrorWrapper';
import { getLabelText, renderLabelAsParent } from '../Label';

import radioButtonStyles from './styles.module.scss';

export interface RadioButtonProps
  extends ErrorWrapperClassNameProps,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'aria-describedby' | 'name' | 'value' | 'disabled' | 'checked' | 'defaultChecked' | 'required' | 'onChange'
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
  onColor?: keyof typeof FormOnColor;
  /** Changes the visuals of the radioButton. Large version only works when used inside a FormGroup wrapper. */
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

export const getRadioLabelClasses = (
  radioId: string,
  onColor: FormOnColor,
  large: boolean,
  checkedRadioId?: string
): string | undefined => {
  const onCherry = onColor === 'oninvalid';
  const checked = radioId === checkedRadioId;

  return classNames({
    [radioButtonStyles['radio-button-label__large--on-grey']]: large && onColor === 'ongrey' && !checked,
    [radioButtonStyles['radio-button-label__large--on-blueberry']]: onColor === 'onblueberry' && !checked && large,
    [radioButtonStyles['radio-button-label__large--selected']]: large && checked && !onCherry,
    [radioButtonStyles['radio-button-label__large--selected-invalid']]: large && checked && onCherry,
  });
};

export const RadioButton = React.forwardRef((props: RadioButtonProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    defaultChecked,
    onChange,
    disabled,
    label,
    inputId = uuid(),
    onColor = FormOnColor.onwhite,
    name = inputId,
    size,
    errorText,
    errorTextId: errorTextIdProp,
    error = !!errorText,
    errorWrapperClassName,
    value = getLabelText(label),
    testId,
    required,
    labelClassNames,
    ...rest
  } = props;
  const invalid = error || onColor === FormOnColor.oninvalid;
  const onDark = onColor === FormOnColor.ondark;
  const onBlueberry = onColor === FormOnColor.onblueberry;
  const onCherry = onColor === FormOnColor.oninvalid;
  const isLarge = size === FormSize.large;
  const [checked, changeChecked] = useState<boolean>();
  const { refObject, isFocused } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);
  const errorTextId = useIdWithFallback(errorTextIdProp);

  const radioButtonWrapperClasses = classNames(radioButtonStyles['radio-button-wrapper'], {
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
      [radioButtonStyles['radio-button-label__large--focused']]: isFocused && isLarge,
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

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeChecked(e.target.checked);
    if (onChange) onChange(e);
  };

  const getLabelContent = (): React.ReactNode => (
    <input
      {...rest}
      id={inputId}
      name={name}
      className={radioButtonClasses}
      type="radio"
      disabled={disabled}
      value={value}
      ref={mergedRefs}
      defaultChecked={defaultChecked}
      aria-describedby={getAriaDescribedBy(props, errorTextId)}
      required={required}
      onChange={(e): void => change(e)}
    />
  );

  return (
    <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.RadioButton} className={radioButtonWrapperClasses}>
        {renderLabelAsParent(
          label,
          getLabelContent(),
          inputId,
          onColor as FormOnColor,
          radioButtonLabelClasses,
          undefined,
          radioButtonStyles['radiobutton-sublabel-wrapper'],
          isLarge
        )}
      </div>
    </ErrorWrapper>
  );
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;
