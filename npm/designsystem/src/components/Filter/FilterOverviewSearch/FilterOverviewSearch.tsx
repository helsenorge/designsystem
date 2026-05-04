import cn from 'classnames';

import type { FilterSearchProps } from '../FilterSearch/FilterSearch';

import FilterSearch from '../FilterSearch/FilterSearch';

import styles from './styles.module.scss';

export interface FilterOverviewSearchProps extends FilterSearchProps {
  /** Adds custom classes to the wrapper element. */
  wrapperClassName?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const FilterOverviewSearch: React.FC<FilterOverviewSearchProps> = props => {
  const { wrapperClassName, testId, ...filterSearchProps } = props;

  return (
    <div className={cn(styles['filter-overview-search'], wrapperClassName)} data-testid={testId}>
      <FilterSearch {...filterSearchProps} />
    </div>
  );
};

export default FilterOverviewSearch;
