import classNames from 'classnames';

import type { ErrorWrapperClassNameProps } from '../ErrorWrapper';

import RadioMarker from './RadioMarker/RadioMarker';
import { AnalyticsId, FormOnColor, FormSize } from '../../constants';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { getAriaDescribedBy } from '../../utils/accessibility';
import { uuid } from '../../utils/uuid';
import ErrorWrapper from '../ErrorWrapper';
import { getLabelText, renderLabelAsParent } from '../Label/utils';

import radioButtonStyles from './styles.module.scss';

export interface RadioButtonProps
  extends
    ErrorWrapperClassNameProps,
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
  /** Ref passed to the input element */
  ref?: React.Ref<HTMLInputElement | null>;
}

export const RadioButton: React.FC<RadioButtonProps> = props => {
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
    ref,
    ...rest
  } = props;
  const invalid = error || onColor === FormOnColor.oninvalid;
  const onDark = onColor === FormOnColor.ondark;
  const onGrey = onColor === FormOnColor.ongrey;
  const onBlueberry = onColor === FormOnColor.onblueberry;
  const onCherry = onColor === FormOnColor.oninvalid;
  const isLarge = size === FormSize.large;

  const errorTextId = useIdWithFallback(errorTextIdProp);

  const radioButtonWrapperClasses = classNames(radioButtonStyles['radio-button-wrapper'], {
    [radioButtonStyles['radio-button-wrapper__large']]: isLarge,
    [radioButtonStyles['radio-button-wrapper__large--invalid']]: isLarge && onCherry,
    [radioButtonStyles['radio-button-wrapper__large--on-blueberry']]: isLarge && onBlueberry,
  });
  const radioButtonLabelClasses = classNames(
    radioButtonStyles['radio-button-label'],
    {
      [radioButtonStyles['radio-button-label--disabled']]: disabled,
      [radioButtonStyles['radio-button-label--on-dark']]: onDark,
      [radioButtonStyles['radio-button-label--invalid']]: invalid,
      [radioButtonStyles['radio-button-label__large']]: isLarge,
      [radioButtonStyles['radio-button-label__large--disabled']]: isLarge && disabled,
      [radioButtonStyles['radio-button-label__large--on-grey']]: isLarge && onGrey,
      [radioButtonStyles['radio-button-label__large--on-blueberry']]: isLarge && onBlueberry,
      [radioButtonStyles['radio-button-label__large--invalid']]: isLarge && onCherry,
    },
    labelClassNames
  );
  const radioButtonClasses = classNames(radioButtonStyles['radio-button'], className);

  const getLabelContent = (): React.ReactNode => (
    <span className={radioButtonStyles['radio-button__marker-wrapper']}>
      <input
        {...rest}
        id={inputId}
        name={name}
        className={radioButtonClasses}
        type="radio"
        disabled={disabled}
        value={value}
        ref={ref}
        defaultChecked={defaultChecked}
        aria-describedby={getAriaDescribedBy(props, errorTextId)}
        required={required}
        onChange={onChange}
      />
      <RadioMarker disabled={disabled} error={invalid} onColor={onColor} size={size} />
    </span>
  );

  return (
    <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.RadioButton} className={radioButtonWrapperClasses}>
        {renderLabelAsParent({
          label: label,
          children: getLabelContent(),
          inputId: inputId,
          onColor: onColor as FormOnColor,
          labelClassName: radioButtonLabelClasses,
          sublabelWrapperClassName: radioButtonStyles['radiobutton-sublabel-wrapper'],
          large: isLarge,
          afterLabelChildrenClassName: radioButtonStyles['radiobutton-afterlabelchildren-wrapper'],
        })}
      </div>
    </ErrorWrapper>
  );
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
