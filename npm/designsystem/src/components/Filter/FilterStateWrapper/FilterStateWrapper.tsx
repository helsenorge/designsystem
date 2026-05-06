import type React from 'react';

import styles from './styles.module.scss';

export interface FilterStateWrapperProps {
  /** Content to be rendered inside the wrapper */
  children: React.ReactNode;
  /** test id that is placed on the wrapper */
  testId?: string;
}

const FilterStateWrapper: React.FC<FilterStateWrapperProps> = ({ children, testId }) => {
  return (
    <div className={styles['filter-state-wrapper']} data-testid={testId}>
      {children}
    </div>
  );
};

export default FilterStateWrapper;
