import React, { useRef, useState } from 'react';

import cn from 'classnames';

import { FormMode, FormVariant, AnalyticsId, AVERAGE_CHARACTER_WIDTH_PX } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { getColor } from '../../theme/currys';
import { uuid } from '../../utils/uuid';
import ErrorWrapper from '../ErrorWrapper';
import Icon, { IconSize, SvgIcon } from '../Icon';
import { renderLabel } from '../Label';
import MaxCharacters from '../MaxCharacters/MaxCharacters';

import styles from './styles.module.scss';

export interface InputProps
  extends Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    | 'disabled'
    | 'readOnly'
    | 'autoComplete'
    | 'name'
    | 'placeholder'
    | 'defaultValue'
    | 'required'
    | 'value'
    | 'min'
    | 'max'
    | 'aria-describedby'
    | 'aria-labelledby'
    | 'onChange'
    | 'onKeyDown'
    | 'autoFocus'
  > {
  /** Adds custom classes to the element. */
  className?: string;
  /**  HMTL Input type */
  type?: keyof typeof InputTypes;
  /** input id */
  inputId?: string;
  /** Width of input field in characters (approximate) */
  width?: number;
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
  label?: React.ReactNode;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Component shown after input */
  afterInputChildren?: React.ReactNode;
  /** max character limit in input  */
  maxCharacters?: number;
  /** The text is displayed in the end of the text-counter */
  maxText?: string;
}

export enum InputTypes {
  text = 'text',
  number = 'number',
  email = 'email',
  password = 'password',
  search = 'search',
  tel = 'tel',
  url = 'url',
  date = 'date',
  time = 'time',
}

const getInputMaxWidth = (characters: number, hasIcon: boolean, iconSize: number): string => {
  const paddingWidth = hasIcon ? '1.5rem' : '2rem';
  const iconWidth = hasIcon ? `${iconSize}px` : '0px';
  const borderWidth = '4px';

  return `calc(${characters * AVERAGE_CHARACTER_WIDTH_PX}px + ${paddingWidth} + ${iconWidth} + ${borderWidth})`;
};

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    defaultValue,
    placeholder,
    type = InputTypes.text,
    inputId = uuid(),
    name,
    transparent = false,
    icon,
    iconRight,
    mode = FormMode.onwhite,
    variant,
    label,
    error,
    errorText,
    testId,
    disabled,
    readOnly,
    autoComplete,
    afterInputChildren,
    width,
    required,
    onChange,
    onKeyDown,
    autoFocus,
    maxCharacters,
    maxText,
    ...rest
  } = props;
  const breakpoint = useBreakpoint();
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState(defaultValue || '');

  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const maxCharactersExceeded = !!maxCharacters && input.toString().length > maxCharacters;
  const onError = mode === FormMode.oninvalid || !!errorText || !!error || maxCharactersExceeded;
  const bigForm = variant === FormVariant.bigform;
  const isTransparent = transparent && mode !== FormMode.ondark && !onError;

  const inputWrapperClass = cn(styles['input-wrapper'], className);

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
  const iconSize = breakpoint === Breakpoint.xs || !bigForm ? IconSize.XSmall : IconSize.Small;

  const renderIcon = (): React.ReactNode => {
    return icon !== undefined ? <Icon color={iconColor} size={iconSize} svgIcon={icon} /> : null;
  };

  const handleClick = (): void => {
    if (contentWrapperRef && contentWrapperRef.current && icon) {
      const selectedChild = iconRight ? 0 : 1;
      const input = contentWrapperRef.current.children[selectedChild] as HTMLInputElement;
      input.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e);
    }
    setInput(e.target.value);
  };

  const maxWidth = width ? getInputMaxWidth(width, !!icon, iconSize) : undefined;

  return (
    <ErrorWrapper errorText={errorText}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.Input} className={inputWrapperClass}>
        {renderLabel(label, inputId, mode as FormMode, disabled)}
        {/* input-elementet tillater keyboard-interaksjon */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <div onClick={handleClick} ref={contentWrapperRef} className={contentWrapperClass} style={{ maxWidth }}>
          {!iconRight && renderIcon()}
          <input
            onChange={handleChange}
            onKeyDown={onKeyDown}
            name={name}
            type={type}
            defaultValue={defaultValue}
            id={inputId}
            className={inputClass}
            ref={ref}
            aria-labelledby={props['aria-labelledby'] ?? undefined}
            aria-describedby={props['aria-describedby'] ?? undefined}
            aria-invalid={!!onError}
            disabled={disabled}
            placeholder={placeholder}
            readOnly={readOnly}
            autoComplete={autoComplete || 'off'}
            required={required}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            {...rest}
          />
          {iconRight && renderIcon()}
        </div>
        {maxCharacters && (
          <MaxCharacters maxCharacters={maxCharacters} length={input.toString().length} maxText={maxText} mode={mode} maxWidth={maxWidth} />
        )}
        {afterInputChildren}
      </div>
    </ErrorWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
