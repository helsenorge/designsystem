import type React from 'react';

import classNames from 'classnames';

import type { ErrorWrapperClassNameProps } from '../ErrorWrapper';

import { AnalyticsId, AVERAGE_CHARACTER_WIDTH_PX, FormOnColor, IconSize } from '../../constants';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { getColor } from '../../theme/currys';
import { getAriaDescribedBy } from '../../utils/accessibility';
import ErrorWrapper from '../ErrorWrapper';
import Icon from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import { renderLabel } from '../Label/utils';

import selectStyles from './styles.module.scss';

type SelectConcept = 'normal' | 'transparent';

export interface SelectProps
  extends
    ErrorWrapperClassNameProps,
    Pick<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      'aria-describedby' | 'name' | 'disabled' | 'required' | 'value' | 'onChange' | 'autoComplete'
    > {
  /** Sets the content of the select element. */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the visuals of the component */
  concept?: SelectConcept;
  /** The label text above the select */
  label?: React.ReactNode;
  /** Changes the visuals of the component */
  onColor?: keyof typeof FormOnColor;
  /** Activates Error style for the select component - This is can be true while errorText is empty, when in a FormGroup */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** select id of the select element */
  selectId?: string;
  /** Width of select in characters (approximate) */
  width?: number;
  /** Gives defaultvalue to the comp. Preferred over selected prop on option by react */
  defaultValue?: string | number;
  /** Adds custom classes to the wrapper tag */
  wrapperClassName?: string;
  /** Ref passed to the select element */
  ref?: React.Ref<HTMLSelectElement | null>;
}

const getSelectMaxWidth = (characters: number): string => {
  const paddingWidth = '2rem';

  return `calc(${characters * AVERAGE_CHARACTER_WIDTH_PX}px + ${paddingWidth})`;
};

const getIconColor = (invalid: boolean, disabled: boolean): string => {
  const iconColor = invalid ? 'cherry' : 'blueberry';
  return disabled ? getColor('neutral', 500) : getColor(iconColor, 600);
};

export const Select: React.FC<SelectProps> = props => {
  const {
    className,
    children,
    concept = 'normal',
    disabled,
    error,
    errorText,
    errorTextId: errorTextIdProp,
    selectId: selectIdProp,
    errorWrapperClassName,
    label,
    name = props.selectId,
    onColor = FormOnColor.onwhite,
    testId,
    width,
    required,
    value,
    defaultValue,
    autoComplete = 'off',
    wrapperClassName,
    ref,
    ...rest
  } = props;

  const selectId = useIdWithFallback(selectIdProp);
  const errorTextId = useIdWithFallback(errorTextIdProp);
  const onBlueberry = onColor === 'onblueberry';
  const invalid = onColor === 'oninvalid' || !!errorText || !!error;
  const iconColor = getIconColor(invalid, !!disabled);
  const maxWidth = width ? getSelectMaxWidth(width) : undefined;

  const selectInnerWrapperClasses = classNames(
    selectStyles['select-inner-wrapper'],
    {
      [selectStyles['select-inner-wrapper--transparent']]: concept === 'transparent',
      [selectStyles['select-inner-wrapper--on-blueberry']]: onBlueberry,
      [selectStyles['select-inner-wrapper--invalid']]: invalid,
      [selectStyles['select-inner-wrapper--disabled']]: disabled,
    },
    className
  );

  const selectClasses = classNames(selectStyles.select, {
    [selectStyles['select--on-blueberry']]: onBlueberry,
    [selectStyles['select--invalid']]: invalid,
  });

  const selectWrapperClasses = classNames(selectStyles['select-wrapper'], wrapperClassName);

  return (
    <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.Select} className={selectWrapperClasses} style={{ maxWidth }}>
        {renderLabel(label, selectId, onColor as FormOnColor)}
        <div className={selectInnerWrapperClasses} data-testid={testId + '-inner-wrapper'}>
          <Icon
            className={selectStyles['select-arrow']}
            svgIcon={ChevronDown}
            color={iconColor}
            size={IconSize.XSmall}
            testId={testId + '-icon'}
          />
          <select
            {...rest}
            aria-invalid={!!invalid}
            id={selectId}
            name={name}
            className={selectClasses}
            disabled={disabled}
            ref={ref}
            required={required}
            aria-describedby={getAriaDescribedBy(props, errorTextId)}
            aria-required={!!required}
            value={value}
            defaultValue={defaultValue}
            autoComplete={autoComplete ? autoComplete : undefined}
          >
            {children}
          </select>
        </div>
      </div>
    </ErrorWrapper>
  );
};

export default Select;
