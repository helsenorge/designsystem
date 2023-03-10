import React from 'react';

import classNames from 'classnames';

import Expander, { ExpanderProps, ExpanderType } from './Expander';
import { HeadingTags } from './utils';
import { AnalyticsId } from '../../constants';
import { isComponent } from '../../utils/component';

import styles from './styles.module.scss';

export interface ExpanderHierarchyCommonProps {
  /** Changes the underlying element of the expander title. Default: h2. */
  htmlMarkup?: HeadingTags;
  /** Expand all children when printing. */
  print?: boolean;
  /** Expander nesting level. Should not be set manually. */
  level?: number;
}

export interface ExpanderHierarchyProps extends ExpanderHierarchyCommonProps {
  children: React.ReactNode;
  /** Sets the data-testid attribute on the expander list. */
  testId?: string;
}

export interface ExpanderHierarchyCompound extends React.FC<ExpanderHierarchyProps> {
  Expander: ExpanderType;
}

const ExpanderHierarchy: ExpanderHierarchyCompound = ({
  htmlMarkup = 'h2',
  level = 1,
  print,
  children,
  testId,
}: ExpanderHierarchyProps) => {
  const listClasses = classNames(
    styles.expanderhierarchy,
    styles[`expanderhierarchy--${level}`],
    level > 2 && styles[`expanderhierarchy--3-and-lower`]
  );

  return (
    <ul className={listClasses} data-testid={testId} data-analyticsid={AnalyticsId.ExpanderHierarchy}>
      {React.Children.map(children, child =>
        isComponent<ExpanderProps>(child, Expander) ? React.cloneElement(child, { htmlMarkup, level, print }) : child
      )}
    </ul>
  );
};

ExpanderHierarchy.Expander = Expander;

export default ExpanderHierarchy;
