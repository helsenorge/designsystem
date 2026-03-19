import type { FilterValues } from './useFilter';
import type { Filters } from './utils';

import { flattenFilters } from './utils';
import Chip from '../Chip';
import Tag from '../Tag';
import TagList from '../TagList';

import styles from './styles.module.scss';

export interface FilterProps<T extends FilterValues = FilterValues> {
  /** Filter state from useFilter — used for both filtering and chip rendering */
  filters: Filters<T>;
  /** Content of the filter */
  children?: React.ReactNode;
  /** Called when a chip is removed. If provided, replaces the default filter.remove() behavior. */
  onRemove?: (filterKey: string, value: unknown) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const FilterResult = <T extends FilterValues = FilterValues>({
  filters,
  children,
  onRemove,
  testId,
}: FilterProps<T>): React.ReactElement | null => {
  const entries = flattenFilters(filters);

  return (
    <div className={styles.filter} data-testid={testId}>
      {entries.length > 0 && (
        <div className={styles['filter-active-filters']}>
          <TagList>
            {entries.map(entry =>
              entry.remove ? (
                <Chip
                  key={`${entry.filterKey}-${entry.value}`}
                  action="remove"
                  onClick={() => (onRemove ? onRemove(entry.filterKey, entry.value) : entry.remove!())}
                >
                  {entry.label}
                </Chip>
              ) : (
                <Tag key={`${entry.filterKey}-${entry.value}`}>{entry.label}</Tag>
              )
            )}
          </TagList>
        </div>
      )}
      {children}
    </div>
  );
};

export default FilterResult;
