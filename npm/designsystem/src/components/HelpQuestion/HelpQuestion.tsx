import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { mergeRefs } from '../../utils/refs';
import HelpTrigger from '../HelpTrigger';

import styles from './styles.module.scss';

export interface HelpQuestionProps extends Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'aria-controls'> {
  /**
   * Help question contents
   */
  children: string;
  /**
   * Indicates that the help question is in use.
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
}

const HelpQuestion = React.forwardRef<HTMLButtonElement, HelpQuestionProps>(
  ({ children, selected = false, className, onClick, testId }, ref) => {
    const { isHovered, refObject } = usePseudoClasses<HTMLButtonElement>();

    const classes = classNames(styles.helpquestion, selected && styles['helpquestion--selected'], className);

    return (
      <button
        type="button"
        data-testid={testId}
        className={classes}
        onClick={onClick}
        ref={mergeRefs([ref, refObject])}
        aria-expanded={selected}
        data-analyticsid={AnalyticsId.HelpQuestion}
      >
        <HelpTrigger htmlMarkup="span" selected={selected} isHovered={isHovered} />
        {children}
      </button>
    );
  }
);

HelpQuestion.displayName = 'HelpQuestion';

export default HelpQuestion;
