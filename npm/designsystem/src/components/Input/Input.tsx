import React, { useRef } from 'react';
import cn from 'classnames';

import { FormMode, FormVariant, AnalyticsId } from '../../constants';
import { uuid } from '../../utils/uuid';
import Icon, { IconSize, SvgIcon } from '../Icons';
import { getColor } from '../../theme/currys';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';

import styles from './styles.module.scss';

export interface InputProps {
  /** initial value for input */
  defaultValue?: string;
  /** Text for the placeholder */
  placeholder?: string;
  /**  HMTL Input type */
  type?: keyof typeof InputTypes;
  /** input id */
  inputId?: string;
  /** Unique identifyer for the input tag */
  name?: string;
  /** If true, the component will be transparent. */
  transparent?: boolean;
  /** Icon to be displayed next to the input field */
  icon?: SvgIcon;
  /** Places the icon to the right */
  iconRight?: boolean;
  /** Changes the color profile of the input */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the input */
  variant?: keyof typeof FormVariant;
  /** Label of the input */
  label?: string;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Disables the input field */
  disabled?: boolean;
  /** Om input feltet er readOnly */
  readOnly?: boolean;
  /** attribute autocomplete,  */
  autocomplete?: string;
  /** Component shown after label */
  afterLabelChildren?: React.ReactNode;
  /** Component shown under label */
  belowLabelChildren?: React.ReactNode;
}

export enum InputTypes {
  text = 'text',
  number = 'number',
  email = 'email',
  password = 'password',
  search = 'search',
  tel = 'tel',
  url = 'url',
}

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    defaultValue,
    placeholder,
    type = InputTypes.text,
    inputId = uuid(),
    name,
    transparent = false,
    icon,
    iconRight,
    mode,
    variant,
    label,
    error,
    errorText,
    testId,
    disabled,
    readOnly,
    autocomplete,
    afterLabelChildren,
    belowLabelChildren,
    ...restProps
  } = props;
  const breakpoint = useBreakpoint();
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const onError = mode === FormMode.oninvalid || errorText || error;
  const bigForm = variant === FormVariant.bigform;
  const isTransparent = transparent && mode !== FormMode.ondark && !onError;

  const inputWrapperClass = cn(styles['input-wrapper'], {
    [styles['input-wrapper--invalid']]: errorText,
  });

  const labelWrapperClass = cn(styles['input-wrapper__label-wrapper'], {
    [styles['input-wrapper__label-wrapper--on-dark']]: onDark,
    [styles['input-wrapper__label-wrapper--disabled']]: disabled,
  });

  const contentWrapperClass = cn(styles['content-wrapper'], {
    [styles['content-wrapper--transparent']]: isTransparent,
    [styles['content-wrapper--on-blueberry']]: onBlueberry,
    [styles['content-wrapper--on-dark']]: onDark,
    [styles['content-wrapper--invalid']]: onError,
    [styles['content-wrapper--bigform']]: bigForm,
    [styles['content-wrapper--disabled']]: disabled,
    [styles['content-wrapper--with-icon']]: icon,
  });

  const inputClass = cn(styles['content-wrapper__input'], {
    [styles['content-wrapper__input--bigform']]: bigForm,
    [styles['content-wrapper__input--disabled']]: disabled,
  });

  const iconColor = disabled ? getColor('neutral', 500) : getColor('black');

  const renderIcon = () => {
    const iconSize = breakpoint === Breakpoint.xs || !bigForm ? IconSize.XSmall : IconSize.Small;
    return icon !== undefined ? <Icon color={iconColor} size={iconSize} svgIcon={icon} /> : null;
  };

  const handleClick = (): void => {
    if (contentWrapperRef && contentWrapperRef.current && icon) {
      const selectedChild = iconRight ? 0 : 1;
      const input = contentWrapperRef.current.children[selectedChild] as HTMLInputElement;
      input.focus();
    }
  };

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.Input} className={inputWrapperClass}>
      {label && (
        <div className={labelWrapperClass}>
          <label htmlFor={inputId}>{label}</label>
          {afterLabelChildren && <div className={styles['input-wrapper__after-label-children']}>{afterLabelChildren}</div>}
        </div>
      )}
      {belowLabelChildren && <div>{belowLabelChildren}</div>}
      <div onClick={handleClick} ref={contentWrapperRef} className={contentWrapperClass}>
        {!iconRight && renderIcon()}
        <input
          name={name}
          type={type}
          defaultValue={defaultValue}
          id={inputId}
          className={inputClass}
          ref={ref}
          aria-invalid={!!onError}
          disabled={disabled}
          placeholder={placeholder}
          readOnly={readOnly}
          autoComplete={autocomplete || 'off'}
          {...restProps}
        />
        {iconRight && renderIcon()}
      </div>
    </div>
  );
});

export default Input;
