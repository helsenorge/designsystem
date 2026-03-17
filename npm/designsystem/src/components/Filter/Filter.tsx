import type { ActiveFilter } from './useFilter';

import Chip from '../Chip';
import Tag from '../Tag';
import TagList from '../TagList';

import styles from './styles.module.scss';

export interface FilterProps {
  /** Aktive filtre */
  activeFilters: ActiveFilter[];
  /** Content of the filter */
  children?: React.ReactNode;
  /** Called when a chip is removed. If provided, replaces the default filter.remove() behavior. */
  onRemove?: (filterKey: string, value: unknown) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Filter: React.FC<FilterProps> = ({ activeFilters, children, onRemove, testId }) => {
  return (
    <div className={styles.filter} data-testid={testId}>
      {activeFilters.length > 0 && (
        <div className={styles['filter-active-filters']}>
          <TagList>
            {activeFilters.map(filter =>
              filter.remove ? (
                <Chip
                  key={`${filter.filterKey}-${filter.value}`}
                  action="remove"
                  onClick={() => (onRemove ? onRemove(filter.filterKey, filter.value) : filter.remove!())}
                >
                  {filter.label}
                </Chip>
              ) : (
                <Tag key={`${filter.filterKey}-${filter.value}`}>{filter.label}</Tag>
              )
            )}
          </TagList>
        </div>
      )}
      {children}
    </div>
  );
};

export default Filter;
