import styles from './styles.module.scss';

export interface FilterResultCountAndSortWrapper {
  /** Result count content area */
  resultCount?: React.ReactNode;
  /** FilterSort content area */
  sortComponent?: React.ReactNode;
}

const FilterResultCountAndSortWrapper: React.FC<FilterResultCountAndSortWrapper> = props => {
  const { resultCount, sortComponent } = props;

  return (
    <div className={styles['filter-result-count-and-sort-wrapper']}>
      <span className={styles['filter-result-count-and-sort-wrapper__count']}>{resultCount}</span>
      <span className={styles['filter-result-count-and-sort-wrapper__sort']}>{sortComponent}</span>
    </div>
  );
};

export default FilterResultCountAndSortWrapper;
