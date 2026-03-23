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
  /** Called when a parameter is removed. */
  filterOnRemove?: (filterKey: keyof T, value?: string) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Creates chips or tags depending on wether they should be removable */
  canRemoveChips?: boolean;
}

const FilterResult = <T extends FilterValues = FilterValues>({
  filters,
  children,
  filterOnRemove,
  testId,
  canRemoveChips = true,
}: FilterProps<T>): React.ReactElement | null => {
  const entries = flattenFilters(filters);

  return (
    <div className={styles.filter} data-testid={testId}>
      {entries.length > 0 && (
        <div className={styles['filter-active-filters']}>
          <TagList>
            {entries.map(entry =>
              canRemoveChips ? (
                <Chip
                  key={`${entry.filterKey}-${entry.value}`}
                  action="remove"
                  onClick={() => filterOnRemove?.(entry.filterKey as keyof T, String(entry.value))}
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
