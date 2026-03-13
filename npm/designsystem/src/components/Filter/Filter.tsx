import type { ActiveFilter } from './useFilter';

import Chip from '../Chip';
import Tag from '../Tag';

import styles from './styles.module.scss';

export interface FilterActiveFiltersProps {
  /** Active filters to display as removable chips */
  activeFilters: ActiveFilter[];
  /** Called when a chip is removed. If provided, replaces the default filter.remove() behavior. */
  onRemove?: (filterName: string, value: string) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const FilterChips: React.FC<FilterActiveFiltersProps> = ({ activeFilters, onRemove, testId }) => {
  if (activeFilters.length === 0) return null;

  return (
    <div className={styles['filter-active-filters']} data-testid={testId}>
      {activeFilters.map(filter => (
        <Chip
          key={`${filter.filterName}-${filter.value}`}
          action="remove"
          onClick={() => (onRemove ? onRemove(filter.filterName, filter.value) : filter.remove())}
        >
          {filter.label}
        </Chip>
      ))}
    </div>
  );
};

export interface FilterTagsProps {
  /** Active filters to display as tags */
  activeFilters: ActiveFilter[];
  /** Sets the data-testid attribute. */
  testId?: string;
}

const FilterTags: React.FC<FilterTagsProps> = ({ activeFilters, testId }) => {
  if (activeFilters.length === 0) return null;

  return (
    <div className={styles['filter-active-filters']} data-testid={testId}>
      {activeFilters.map(filter => (
        <Tag key={`${filter.filterName}-${filter.value}`}>{filter.label}</Tag>
      ))}
    </div>
  );
};

export interface FilterProps {
  /** Content of the filter */
  children?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Filter: React.FC<FilterProps> & { Chips: typeof FilterChips; Tags: typeof FilterTags } = ({ children, testId }) => {
  return (
    <div className={styles.filter} data-testid={testId}>
      {children}
    </div>
  );
};

Filter.Chips = FilterChips;
Filter.Tags = FilterTags;

export default Filter;
