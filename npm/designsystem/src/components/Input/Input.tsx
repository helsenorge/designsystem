import React, { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { FormMode, FormSize, AnalyticsId, AVERAGE_CHARACTER_WIDTH_PX } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { useUuid } from '../../hooks/useUuid';
import { getColor } from '../../theme/currys';
import { getAriaDescribedBy } from '../../utils/accessibility';
import { mergeRefs } from '../../utils/refs';
import ErrorWrapper from '../ErrorWrapper';
import Icon, { IconSize, SvgIcon } from '../Icon';
import { IconName } from '../Icons/IconNames';
import { renderLabel } from '../Label';
import LazyIcon from '../LazyIcon';
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
    | 'onBlur'
    | 'onClick'
    | 'onChange'
    | 'onFocus'
    | 'onKeyDown'
    | 'autoFocus'
  > {
  /** The number at which the input field starts when you increment or decrement it */
  baseIncrementValue?: number;
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
  icon?: SvgIcon | IconName;
  /** Places the icon to the right */
  iconRight?: boolean;
  /** Ref that is placed on the inputContainerRef */
  inputContainerRef?: React.RefObject<HTMLDivElement>;
  /** Ref that is placed on the inputWrapper */
  inputWrapperRef?: React.RefObject<HTMLDivElement>;
  /** Changes the color profile of the input */
  mode?: keyof typeof FormMode;
  /** Changes the visuals of the input */
  size?: keyof typeof FormSize;
  /** Label of the input */
  label?: React.ReactNode;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Component shown after input */
  afterInputChildren?: React.ReactNode;
  /** Component shown to the right of input */
  rightOfInput?: React.ReactNode;
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
    name,
    transparent = false,
    icon,
    iconRight,
    inputId,
    inputWrapperRef,
    mode = FormMode.onwhite,
    size,
    baseIncrementValue,
    label,
    error,
    errorText,
    errorTextId,
    testId,
    disabled,
    readOnly,
    autoComplete = 'off',
    afterInputChildren,
    rightOfInput,
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
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputIdState = useUuid(inputId);
  const [input, setInput] = useState(defaultValue || '');
  const [prevValue, setPrevValue] = useState<string | number | undefined>(undefined);
  const numKeyPressed = useRef<boolean>(false);
  const errorTextUuid = useUuid(errorTextId);
  const numRegex = /^[0-9]$/;

  useEffect(() => {
    setInput(defaultValue || '');
  }, [defaultValue]);

  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const maxCharactersExceeded = !!maxCharacters && input.toString().length > maxCharacters;
  const onError = mode === FormMode.oninvalid || !!errorText || !!error || maxCharactersExceeded;
  const isLarge = size === FormSize.large;
  const isTransparent = transparent && mode !== FormMode.ondark && !onError;

  const inputWrapperClass = cn(styles['input-wrapper'], className);

  const inputContainer = cn(styles['input-container'], {
    [styles['input-container--transparent']]: isTransparent,
    [styles['input-container--on-blueberry']]: onBlueberry,
    [styles['input-container--on-dark']]: onDark,
    [styles['input-container--invalid']]: onError,
    [styles['input-container--large']]: isLarge,
    [styles['input-container--disabled']]: disabled,
    [styles['input-container--with-icon']]: icon,
  });

  const inputClass = cn(styles['input-container__input'], {
    [styles['input-container__input--large']]: isLarge,
    [styles['input-container__input--disabled']]: disabled,
  });

  const iconColor = disabled ? getColor('neutral', 700) : getColor('black');
  const iconSize = breakpoint === Breakpoint.xs || !isLarge ? IconSize.XSmall : IconSize.Small;

  const renderIcon = (): React.ReactNode => {
    if (!icon) {
      return;
    }

    if (typeof icon === 'string') {
      return <LazyIcon className={styles['input-container__input__icon']} color={iconColor} size={iconSize} iconName={icon} />;
    }

    return <Icon className={styles['input-container__input__icon']} color={iconColor} size={iconSize} svgIcon={icon} />;
  };

  // eslint-disable-next-line
  const handleClick = (e: React.MouseEvent<any>): void => {
    if (inputContainerRef && inputContainerRef.current && icon) {
      const selectedChild = iconRight ? 0 : 1;
      const input = inputContainerRef.current.children[selectedChild] as HTMLInputElement;
      input.focus();

      props.onClick && props.onClick(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = getIncrementValue(e);

    if (onChange) {
      onChange(e);
    }

    setInput(newValue);
    setPrevValue(newValue);
  };

  // Hvis bruker endrer number value med 1 og det skal startes på en annen verdi enn 0
  const getIncrementValue = (e: React.ChangeEvent<HTMLInputElement>): string => {
    if (typeof baseIncrementValue === 'undefined' || type !== 'number') return e.target.value;

    const valueAsNumber = Number(e.target.value);

    if (!prevValue && !numKeyPressed.current && (valueAsNumber === 1 || valueAsNumber === -1)) {
      e.target.value = baseIncrementValue + '';
    }

    return e.target.value;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (numRegex.test(e.key)) {
      numKeyPressed.current = true;
    }
    onKeyDown && onKeyDown(e);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (numRegex.test(e.key)) {
      numKeyPressed.current = false;
    }
  };

  const maxWidth = width ? getInputMaxWidth(width, !!icon, iconSize) : undefined;

  return (
    <ErrorWrapper errorText={errorText} errorTextId={errorTextUuid}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.Input} className={inputWrapperClass} ref={inputWrapperRef}>
        {renderLabel(label, inputIdState, mode as FormMode)}
        {/* input-elementet tillater keyboard-interaksjon */}
        <div className={styles['content-wrapper']}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <div
            onClick={handleClick}
            ref={mergeRefs([inputContainerRef, props.inputContainerRef])}
            className={inputContainer}
            style={{ maxWidth }}
          >
            {!iconRight && renderIcon()}
            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              name={name}
              type={type}
              defaultValue={defaultValue}
              id={inputIdState}
              className={inputClass}
              ref={ref}
              aria-labelledby={props['aria-labelledby'] ?? undefined}
              aria-describedby={getAriaDescribedBy(props, errorTextUuid)}
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
          <div className={styles['content-wrapper__right-of-input']}>{rightOfInput}</div>
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
