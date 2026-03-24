import styles from './styles.module.scss';

export interface FilterSortProps {
  countText?: string;
  sortComponent?: React.ReactNode;
}

const FilterResultTopBar: React.FC<FilterSortProps> = props => {
  const { countText, sortComponent } = props;

  return (
    <div className={styles['filter-result-top-bar']}>
      <span className={styles['filter-result-top-bar__count']}>{countText}</span>
      <span className={styles['filter-result-top-bar__sort']}>{sortComponent}</span>
    </div>
  );
};

export default FilterResultTopBar;
