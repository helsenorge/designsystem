import React, { useState, useRef, useEffect } from 'react';

import cn from 'classnames';

import { AnalyticsId, AVERAGE_CHARACTER_WIDTH_PX, FormMode } from '../../constants';
import { uuid } from '../../utils/uuid';
import ErrorWrapper from '../ErrorWrapper';
import { renderLabel } from '../Label';
import MaxCharacters from '../MaxCharacters/MaxCharacters';

import styles from './styles.module.scss';

interface TextareaProps
  extends Pick<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    | 'aria-describedby'
    | 'autoFocus'
    | 'disabled'
    | 'name'
    | 'autoComplete'
    | 'placeholder'
    | 'readOnly'
    | 'required'
    | 'defaultValue'
    | 'onChange'
  > {
  /** max character limit in textarea  */
  maxCharacters?: number;
  /** The text is displayed in the end of the text-counter */
  maxText?: string;
  /** Width of textarea in characters (approximate) */
  width?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** If true, the component will have a bottom margin. */
  marginBottom?: boolean;
  /** If true, the component will be transparent. */
  transparent?: boolean;
  /** Changes the visuals of the textarea */
  mode?: keyof typeof FormMode;
  /** Label of the input */
  label?: React.ReactNode;
  /** id of the textarea */
  textareaId?: string;
  /** max rows */
  maxRows?: number;
  /** min rows */
  minRows?: number;
  /** auto-grows until maxRows */
  grow?: boolean;
  /** Error text to show above the component */
  errorText?: string;
}

const getTextareaMaxWidth = (characters: number): string => {
  const paddingWidth = '2rem';
  const scrollbarWidth = '16px';
  const borderWidth = '4px';

  return `calc(${characters * AVERAGE_CHARACTER_WIDTH_PX}px + ${paddingWidth} + ${scrollbarWidth} + ${borderWidth})`;
};

const Textarea = React.forwardRef((props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const {
    maxCharacters,
    maxText,
    width,
    testId,
    defaultValue,
    marginBottom: gutterBottom,
    transparent,
    mode = FormMode.onwhite,
    label,
    textareaId = uuid(),
    minRows = 3,
    maxRows = 10,
    grow,
    errorText,
    autoFocus,
    disabled,
    name,
    autoComplete,
    placeholder,
    readOnly,
    required,
    onChange,
    ...rest
  } = props;

  const [rows, setRows] = useState(minRows);
  const [textareaInput, setTextareaInput] = useState(defaultValue || '');
  const referanse = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTextareaInput(defaultValue || '');
  }, [defaultValue]);

  const resizeHeight = (target: HTMLTextAreaElement): void => {
    const textareaLineHeight = 28;

    const previousRows = target.rows;
    target.rows = minRows; // reset number of rows in textarea

    const currentRows = Math.floor((target.scrollHeight - 16) / textareaLineHeight); // scrollHeight - 16px of padding to calculate the rows

    if (currentRows === previousRows) {
      target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      target.rows = maxRows;
      target.scrollTop = target.scrollHeight;
    }

    if (currentRows < maxRows) {
      setRows(currentRows);
    } else {
      setRows(maxRows);
    }
  };

  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const maxCharactersExceeded = !!maxCharacters && textareaInput.toString().length > maxCharacters;
  const onError = mode === FormMode.oninvalid || !!errorText || maxCharactersExceeded;

  const textareaWrapperClass = cn(styles.textarea, {
    [styles['textarea--gutterBottom']]: gutterBottom,
  });

  const contentWrapperClass = cn(styles['input-container'], {
    [styles['input-container--transparent']]: transparent,
    [styles['input-container--on-blueberry']]: onBlueberry,
    [styles['input-container--on-dark']]: onDark,
    [styles['input-container--invalid']]: onError,
    [styles['input-container--disabled']]: props.disabled,
  });

  const textareaClass = cn(styles['input-container__input'], {
    [styles[`input-container__input--disabled`]]: props.disabled,
  });

  useEffect(() => {
    if (grow && referanse.current?.children && referanse.current?.children[0]) {
      const textarea = referanse.current?.children[0] as HTMLTextAreaElement;
      resizeHeight(textarea);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (grow) {
      resizeHeight(e.target);
    }
    setTextareaInput(e.target.value);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChange) {
      onChange(e);
    }
    handleChange(e);
  };

  const maxWidth = width ? getTextareaMaxWidth(width) : undefined;

  return (
    <ErrorWrapper errorText={errorText}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.Textarea} className={textareaWrapperClass}>
        {renderLabel(label, textareaId, mode as FormMode, disabled)}
        <div className={contentWrapperClass} ref={referanse} style={{ maxWidth }}>
          <textarea
            rows={rows}
            defaultValue={defaultValue}
            id={textareaId}
            className={textareaClass}
            ref={ref}
            aria-describedby={props['aria-describedby'] ?? undefined}
            aria-invalid={!!onError}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            disabled={disabled}
            name={name}
            autoComplete={autoComplete ? autoComplete : undefined}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            onChange={onChangeHandler}
            {...rest}
          />
        </div>
        {maxCharacters && (
          <MaxCharacters
            maxCharacters={maxCharacters}
            length={textareaInput.toString().length}
            maxText={maxText}
            mode={mode}
            maxWidth={maxWidth}
          />
        )}
      </div>
    </ErrorWrapper>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
