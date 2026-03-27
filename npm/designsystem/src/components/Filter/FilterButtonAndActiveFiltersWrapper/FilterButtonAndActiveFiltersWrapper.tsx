import type React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

export interface FilterButtonAndActiveFiltersWrapperProps {
  children: React.ReactNode;
  className?: string;
  testId?: string;
}

const FilterButtonAndActiveFiltersWrapper: React.FC<FilterButtonAndActiveFiltersWrapperProps> = ({ children, className, testId }) => {
  return (
    <div className={classNames(styles['filter-chip-bar'], className)} data-testid={testId}>
      {children}
    </div>
  );
};

export default FilterButtonAndActiveFiltersWrapper;
