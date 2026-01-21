import type React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';

import styles from './styles.module.scss';

export interface DictionaryTriggerProps extends Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onFocus' | 'onBlur'> {
  /**
   * Sets the content of the trigger.
   */
  children: React.ReactNode;
  /**
   * Indicates that the trigger is in use.
   */
  selected?: boolean;
  /**
   * Classname will be applied to the button element.
   */
  className?: string;
  /**
   * Sets the data-testid attribute.
   */
  testId?: string;
  /**
   * ref that is passed to the component
   */
  ref?: React.Ref<HTMLButtonElement | null>;
}

const DictionaryTrigger: React.FC<DictionaryTriggerProps> = (props: DictionaryTriggerProps) => {
  const { children, selected = false, className, testId, ref, ...rest } = props;
  const triggerClasses = classNames(styles.dictionarytrigger, className);

  return (
    <button
      type="button"
      data-testid={testId}
      data-analyticsid={AnalyticsId.DictionaryTrigger}
      className={triggerClasses}
      aria-expanded={selected}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
};

DictionaryTrigger.displayName = 'DictionaryTrigger';

export default DictionaryTrigger;
