import type React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

export interface FilterButtonAndChipsWrapperProps {
  filterButtonComponent: React.ReactNode;
  filterChips: React.ReactNode[];
  testId?: string;
}

const FilterButtonAndChipsWrapper: React.FC<FilterButtonAndChipsWrapperProps> = ({ filterButtonComponent, filterChips, testId }) => {
  return (
    <div className={classNames(styles['filter-chip-bar'])} data-testid={testId}>
      {filterButtonComponent}
      {filterChips}
    </div>
  );
};

export default FilterButtonAndChipsWrapper;
