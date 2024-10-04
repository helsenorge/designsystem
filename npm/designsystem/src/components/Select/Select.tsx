import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, AVERAGE_CHARACTER_WIDTH_PX, FormOnColor, IconSize } from '../../constants';
import { useUuid } from '../../hooks/useUuid';
import { getColor } from '../../theme/currys';
import { getAriaDescribedBy } from '../../utils/accessibility';
import ErrorWrapper from '../ErrorWrapper';
import Icon from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import { renderLabel } from '../Label';

import selectStyles from './styles.module.scss';

type SelectConcept = 'normal' | 'transparent';

export interface SelectProps
  extends Pick<
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
}

const getSelectMaxWidth = (characters: number): string => {
  const paddingWidth = '2rem';

  return `calc(${characters * AVERAGE_CHARACTER_WIDTH_PX}px + ${paddingWidth})`;
};

const getIconColor = (invalid: boolean, disabled: boolean) => {
  const iconColor = invalid ? 'cherry' : 'blueberry';
  return disabled ? getColor('neutral', 500) : getColor(iconColor, 600);
};

export const Select = React.forwardRef(function SelectForwardedRef(props: SelectProps, ref: React.Ref<HTMLSelectElement>) {
  const {
    className,
    children,
    concept = 'normal',
    disabled,
    error,
    errorText,
    errorTextId,
    label,
    selectId,
    name = selectId,
    onColor = FormOnColor.onwhite,
    testId,
    width,
    required,
    value,
    defaultValue,
    autoComplete = 'off',
    wrapperClassName,
    ...rest
  } = props;

  const uuid = useUuid(selectId);
  const errorTextUuid = useUuid(errorTextId);
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
    <ErrorWrapper errorText={errorText} errorTextId={errorTextUuid}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.Select} className={selectWrapperClasses} style={{ maxWidth }}>
        {renderLabel(label, uuid, onColor as FormOnColor)}
        <div className={selectInnerWrapperClasses}>
          <Icon className={selectStyles['select-arrow']} svgIcon={ChevronDown} color={iconColor} size={IconSize.XSmall} />
          <select
            aria-invalid={!!invalid}
            id={uuid}
            name={name}
            className={selectClasses}
            disabled={disabled}
            ref={ref}
            required={required}
            aria-describedby={getAriaDescribedBy(props, errorTextUuid)}
            aria-required={!!required}
            value={value}
            defaultValue={defaultValue}
            autoComplete={autoComplete ? autoComplete : undefined}
            {...rest}
          >
            {children}
          </select>
        </div>
      </div>
    </ErrorWrapper>
  );
});

export default Select;
