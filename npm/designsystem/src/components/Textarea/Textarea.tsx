import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { AnalyticsId, AVERAGE_CHARACTER_WIDTH_PX, FormMode } from '../../constants';
import { uuid } from '../../utils/uuid';
import ErrorWrapper from '../ErrorWrapper';

interface TextareaProps
  extends Pick<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    'autoFocus' | 'disabled' | 'name' | 'autoComplete' | 'placeholder' | 'readOnly' | 'required' | 'defaultValue'
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
  label?: string;
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
  /** Component shown after label */
  afterLabelChildren?: React.ReactNode;
  /** Component shown under label */
  belowLabelChildren?: React.ReactNode;
}

const getTextareaMaxWidth = (characters: number): string => {
  const paddingWidth = '2rem';
  const scrollbarWidth = '16px';
  const borderWidth = '4px';

  return `calc(${characters * AVERAGE_CHARACTER_WIDTH_PX}px + ${paddingWidth} + ${scrollbarWidth} + ${borderWidth})`;
};

const Textarea = React.forwardRef((props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const {
    maxCharacters: max,
    maxText,
    width,
    testId,
    defaultValue,
    marginBottom: gutterBottom,
    transparent,
    mode,
    label,
    textareaId = uuid(),
    minRows = 3,
    maxRows = 10,
    grow,
    errorText,
    afterLabelChildren,
    belowLabelChildren,
    autoFocus,
    disabled,
    name,
    autoComplete,
    placeholder,
    readOnly,
    required,
  } = props;

  const [rows, setRows] = useState(minRows);
  const [textareaInput, setTextareaInput] = useState(defaultValue || '');
  const referanse = useRef<HTMLDivElement>(null);

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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (grow) {
      resizeHeight(event.target);
    }
    setTextareaInput(event.target.value);
  };

  const onDark = mode === FormMode.ondark;
  const onBlueberry = mode === FormMode.onblueberry;
  const textHasError = max && textareaInput.toString().length > max;
  const onError = mode === FormMode.oninvalid || errorText || textHasError;

  const textareaWrapperClass = cn(styles.textarea, {
    [styles['textarea--gutterBottom']]: gutterBottom,
  });

  const labelWrapperClass = cn(styles['textarea__label-wrapper'], {
    [styles[`textarea__label-wrapper--on-dark`]]: onDark,
  });

  const contentWrapperClass = cn(styles['content-wrapper'], {
    [styles['content-wrapper--transparent']]: transparent,
    [styles['content-wrapper--on-blueberry']]: onBlueberry,
    [styles['content-wrapper--on-dark']]: onDark,
    [styles['content-wrapper--invalid']]: onError,
    [styles['content-wrapper--disabled']]: props.disabled,
  });

  const textareaClass = cn(styles['content-wrapper__input'], {
    [styles[`content-wrapper__input--disabled`]]: props.disabled,
  });

  const counterTextClass = cn(styles['textarea__counter-wrapper'], {
    [styles[`textarea__counter-wrapper--on-dark`]]: onDark,
    [styles[`textarea__counter-wrapper--invalid`]]: onError,
  });

  useEffect(() => {
    if (grow && referanse.current?.children && referanse.current?.children[0]) {
      const textarea = referanse.current?.children[0] as HTMLTextAreaElement;
      resizeHeight(textarea);
    }
  }, []);

  let progress = 0;
  if (max) {
    progress = textareaInput.toString().length / max;
  }

  const ariaLevel = progress > 0.95 ? 'polite' : 'off';
  const maxWidth = width ? getTextareaMaxWidth(width) : undefined;

  return (
    <ErrorWrapper errorText={errorText}>
      <div data-testid={testId} data-analyticsid={AnalyticsId.Textarea} className={textareaWrapperClass}>
        {label && (
          <div className={labelWrapperClass}>
            <label htmlFor={textareaId}>{label}</label>
            {afterLabelChildren && <div className={styles['textarea__after-label-children']}>{afterLabelChildren}</div>}
          </div>
        )}
        {belowLabelChildren && <div>{belowLabelChildren}</div>}
        <div className={contentWrapperClass} ref={referanse} style={{ maxWidth }}>
          <textarea
            rows={rows}
            defaultValue={defaultValue}
            id={textareaId}
            className={textareaClass}
            ref={ref}
            onChange={handleChange}
            aria-invalid={!!onError}
            autoFocus={autoFocus}
            disabled={disabled}
            name={name}
            autoComplete={autoComplete}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
          />
        </div>
        {max && (
          <div aria-live={ariaLevel} aria-atomic={'true'} className={counterTextClass} style={{ maxWidth }}>
            <p>{`${textareaInput.toString().length}/${max} ${maxText ? maxText : 'tegn'}`}</p>
          </div>
        )}
      </div>
    </ErrorWrapper>
  );
});

export default Textarea;
