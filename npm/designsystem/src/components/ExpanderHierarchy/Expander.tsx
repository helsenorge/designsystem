import React from 'react';

import classNames from 'classnames';

import ExpanderButton from './ExpanderButton';
import ExpanderHierarchy, { ExpanderHierarchyCommonProps, ExpanderHierarchyProps } from './ExpanderHierarchy';
import { getHeadingTag } from './utils';
import { isComponent } from '../../utils/component';

import styles from './expander.module.scss';

export interface ExpanderProps extends ExpanderHierarchyCommonProps {
  /** Sets the trigger title */
  title: string;
  /** Opens or closes the expander */
  expanded?: boolean;
  /** Called when expander is open/closed. */
  onExpand?: (isExpanded: boolean) => void;
  /** Sets the expanded content */
  children?: React.ReactNode;
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
}

export type ExpanderType = React.FC<ExpanderProps>;

const Expander: ExpanderType = ({
  title,
  htmlMarkup = 'h2',
  level = 1,
  print,
  expanded = false,
  onExpand,
  children,
  testId,
}: ExpanderProps) => {
  const contentClasses = classNames(
    styles.expander__content,
    (level === 1 || level === 2) && styles[`expander__content--${level}`],
    level > 2 && styles[`expander__content--3-and-lower`]
  );

  return (
    <li className={styles.expander}>
      <ExpanderButton htmlMarkup={htmlMarkup} level={level} print={print} expanded={expanded} onExpand={onExpand} testId={testId}>
        {title}
      </ExpanderButton>
      <div className={contentClasses}>
        {React.Children.map(children, child =>
          isComponent<ExpanderHierarchyProps>(child, ExpanderHierarchy)
            ? React.cloneElement(child, { htmlMarkup: getHeadingTag(htmlMarkup), level: level + 1, print })
            : child
        )}
      </div>
    </li>
  );
};

export default Expander;
