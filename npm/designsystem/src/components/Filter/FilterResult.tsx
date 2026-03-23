import styles from './styles.module.scss';

export interface FilterProps {
  /** Content of the filter */
  children?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const FilterResult = ({ children, testId }: FilterProps): React.ReactElement | null => {
  return (
    <div className={styles.filter} data-testid={testId}>
      {children}
    </div>
  );
};

export default FilterResult;
