import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, AVERAGE_CHARACTER_WIDTH_PX, FormMode, IconSize } from '../../constants';
import { useUuid } from '../../hooks/useUuid';
import { getColor } from '../../theme/currys';
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
  /** Component shown after label */
  afterLabelChildren?: React.ReactNode;
  /** Sets the content of the select element. */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the visuals of the component */
  concept?: SelectConcept;
  /** The label text above the select */
  label?: React.ReactNode;
  /** Changes the visuals of the component */
  mode?: keyof typeof FormMode;
  /** Activates Error style for the select component - This is can be true while errorText is empty, when in a FormGroup */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** select id of the select element */
  selectId?: string;
  /** Width of select in characters (approximate) */
  width?: number;
  /** Gives defaultvalue to the comp. Preferred over selected prop on option by react */
  defaultValue?: string | number;
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
    afterLabelChildren,
    className,
    children,
    concept = 'normal',
    disabled,
    error,
    errorText,
    label,
    selectId,
    name = selectId,
    mode = FormMode.onwhite,
    testId,
    width,
    required,
    value,
    defaultValue,
    autoComplete = 'off',
    ...rest
  } = props;

  const uuid = useUuid(selectId);
  const onBlueberry = mode === 'onblueberry';
  const invalid = mode === 'oninvalid' || !!errorText || !!error;
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

  return (
    <ErrorWrapper errorText={errorText}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.Select} className={selectStyles['select-wrapper']} style={{ maxWidth }}>
        {renderLabel(label, uuid, mode as FormMode, disabled)}
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
            aria-describedby={props['aria-describedby'] ?? undefined}
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
