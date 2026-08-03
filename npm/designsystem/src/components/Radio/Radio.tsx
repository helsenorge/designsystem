import classNames from 'classnames';

import type { ErrorWrapperClassNameProps } from '../ErrorWrapper';

import RadioMarker from './RadioMarker/RadioMarker';
import { AnalyticsId, FormOnColor, FormSize } from '../../constants';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { getAriaDescribedBy } from '../../utils/accessibility';
import { uuid } from '../../utils/uuid';
import ErrorWrapper from '../ErrorWrapper';
import { getLabelText, renderLabelAsParent } from '../Label/utils';

import radioStyles from './styles.module.scss';

export interface RadioProps
  extends
    ErrorWrapperClassNameProps,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'aria-describedby' | 'name' | 'value' | 'disabled' | 'checked' | 'defaultChecked' | 'required' | 'onChange'
    > {
  /** Adds custom classes to the element. */
  className?: string;
  /** The <Label/> next to the radio - sublabels kan ikke kombineres med large variant */
  label: React.ReactNode;
  /** Adds custom classes to the label element. */
  labelClassNames?: string;
  /** input id of the radio */
  inputId?: string;
  /** Changes the visuals of the radio */
  onColor?: keyof typeof FormOnColor;
  /** Changes the visuals of the radio. Large version only works when used inside a FormGroup wrapper. */
  size?: keyof typeof FormSize;
  /** Activates Error style for the radio - This is can be true while errorText is empty, when in a FormGroup */
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

export const Radio: React.FC<RadioProps> = props => {
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

  const radioWrapperClasses = classNames(radioStyles['radio-wrapper'], {
    [radioStyles['radio-wrapper__large']]: isLarge,
    [radioStyles['radio-wrapper__large--invalid']]: isLarge && onCherry,
    [radioStyles['radio-wrapper__large--on-blueberry']]: isLarge && onBlueberry,
  });
  const radioLabelClasses = classNames(
    radioStyles['radio-label'],
    {
      [radioStyles['radio-label--disabled']]: disabled,
      [radioStyles['radio-label--on-dark']]: onDark,
      [radioStyles['radio-label--invalid']]: invalid,
      [radioStyles['radio-label__large']]: isLarge,
      [radioStyles['radio-label__large--disabled']]: isLarge && disabled,
      [radioStyles['radio-label__large--on-grey']]: isLarge && onGrey,
      [radioStyles['radio-label__large--on-blueberry']]: isLarge && onBlueberry,
      [radioStyles['radio-label__large--invalid']]: isLarge && onCherry,
    },
    labelClassNames
  );
  const radioClasses = classNames(radioStyles['radio'], className);

  const getLabelContent = (): React.ReactNode => (
    <span className={radioStyles['radio__marker-wrapper']}>
      <input
        {...rest}
        id={inputId}
        name={name}
        className={radioClasses}
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
      <div data-testid={testId} data-analyticsid={AnalyticsId.RadioButton} className={radioWrapperClasses}>
        {renderLabelAsParent({
          label: label,
          children: getLabelContent(),
          inputId: inputId,
          onColor: onColor as FormOnColor,
          labelClassName: radioLabelClasses,
          sublabelWrapperClassName: radioStyles['radio-sublabel-wrapper'],
          large: isLarge,
          afterLabelChildrenClassName: radioStyles['radio-afterlabelchildren-wrapper'],
        })}
      </div>
    </ErrorWrapper>
  );
};

Radio.displayName = 'Radio';

export default Radio;
