import React, { useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import { HTMLTextareaProps, ModeVariant } from '../../constants';

interface TextareaProps extends HTMLTextareaProps {
  /** initial value for textarea */
  defaultValue?: string;
  /** triggers function on every change */
  onChange?: (e: string) => void;
  /** Show counter of words in bottom of the component */
  max?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** If true, the component will have a bottom margin. */
  gutterBottom?: boolean;
  /** If true, the component will be transparent. */
  transparent?: boolean;
  
  mode?: keyof typeof ModeVariant;
}

const Textarea = function(props: TextareaProps): JSX.Element {
  const { max, defaultValue, testId, onChange, gutterBottom, transparent, mode, ...restProps } = props;

  const [temp, setTemp] = useState(defaultValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTemp(event.currentTarget.value);
    onChange && onChange(event.currentTarget.value);
  };

  const textareaWrapperClass = cn(styles.textarea, {
    [styles['textarea--gutterBottom']]: gutterBottom,
  });

  const textareaClass = cn(styles.textarea__input, {
    [styles['textarea__input--transparent']]: transparent,
    [styles[`textarea__input--${ModeVariant.onBlueberry}`]]: mode === ModeVariant.onBlueberry,
  });

  return (
    <div data-testid={testId} className={textareaWrapperClass}>
      <textarea className={textareaClass} value={temp} onChange={handleChange} {...restProps} />
      {max && (
        <div className={styles['textarea__counter-wrapper']}>
          <p>{`${temp.length}/${max} tegn`}</p>
        </div>
      )}
    </div>
  );
};

export default Textarea;
