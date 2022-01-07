import React, { useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { HTMLTextareaProps, ModeVariant } from '../../constants';
import uuid from '../../utils/uuid';
import { useEffect } from 'react';
import { useRef } from 'react';

interface TextareaProps extends HTMLTextareaProps {
  /** initial value for textarea */
  defaultValue?: string;
  /** max character limit in textarea  */
  max?: number;
  /** The text is displayed in the end of the text-counter */
  maxText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** If true, the component will have a bottom margin. */
  gutterBottom?: boolean;
  /** If true, the component will be transparent. */
  transparent?: boolean;
  /** Changes the visuals of the textarea */
  mode?: keyof typeof ModeVariant;
  /** Label of the input */
  label?: string;
  /** max rows */
  maxRows?: number;
  /** min rows */
  minRows?: number;
  /** auto-grows until maxRows */
  grow?: boolean;
  /** Error text to show above the component */
  errorText?: string;
}

const Textarea = React.forwardRef((props: TextareaProps, ref: React.Ref<HTMLTextAreaElement>) => {
  const {
    max,
    maxText,
    testId,
    defaultValue,
    gutterBottom,
    transparent,
    mode,
    label,
    minRows = 3,
    maxRows = 10,
    grow,
    errorText,
    ...restProps
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

  const onDark = mode === ModeVariant.onDark;
  const onBlueberry = mode === ModeVariant.onBlueberry;
  const textHasError = max && textareaInput.length > max;
  const onError = mode === ModeVariant.onError || errorText || textHasError;

  const textareaWrapperClass = cn(styles.textarea, {
    [styles['textarea--gutterBottom']]: gutterBottom,
    [styles[`textarea--${ModeVariant.onError}`]]: errorText,
  });

  const textareaClass = cn(styles.textarea__input, {
    [styles['textarea__input--transparent']]: transparent,
    [styles[`textarea__input--${ModeVariant.onBlueberry}`]]: onBlueberry,
    [styles[`textarea__input--${ModeVariant.onDark}`]]: onDark,
    [styles[`textarea__input--${ModeVariant.onError}`]]: onError,
  });

  const counterTextClass = cn(styles['textarea__counter-wrapper'], {
    [styles[`textarea__counter-wrapper--${ModeVariant.onDark}`]]: onDark,
    [styles[`textarea__counter-wrapper--${ModeVariant.onError}`]]: onError,
  });

  const labelClass = cn(styles.textarea__label, {
    [styles[`textarea__label--${ModeVariant.onDark}`]]: onDark,
  });

  const uniqueId = label ? uuid() : undefined;

  useEffect(() => {
    if (grow && referanse.current?.children && referanse.current?.children[0]) {
      const textarea = referanse.current?.children[0] as HTMLTextAreaElement;
      resizeHeight(textarea);
    }
  }, []);

  return (
      <div data-testid={testId} className={textareaWrapperClass}>
        {label && (
          <div className={labelClass}>
            <label htmlFor={uniqueId}>{label}</label>
          </div>
        )}
        <div ref={referanse}>
          <textarea
            rows={rows}
            defaultValue={defaultValue}
            id={uniqueId}
            className={textareaClass}
            ref={ref}
            onChange={handleChange}
            {...restProps}
          />
          {max && (
            <div className={counterTextClass}>
              <p>{`${textareaInput.length}/${max} ${maxText ? maxText : 'tegn'}`}</p>
            </div>
          )}
        </div>
      </div>
  );
});

export default Textarea;
