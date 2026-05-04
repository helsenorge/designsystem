import type React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

export interface FilterButtonAndChipsWrapperProps {
  /** FilterButton content area */
  filterButtonComponent: React.ReactNode;
  /** Content area for rendering filter chips */
  filterChips: React.ReactNode[];
  /** test id that is placed on the wrapper */
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
