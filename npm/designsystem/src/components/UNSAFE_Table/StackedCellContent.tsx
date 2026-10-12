import styles from './styles.module.scss';

interface StackedCellContentProps {
  /** Heading shown before the content in the stack variant */
  headingText?: string;
  /** The content */
  children?: React.ReactNode;
}

/** Heading + content as rendered in a stacked cell. Shared by UNSAFE_TableCell and UNSAFE_TableDetail. */
export const StackedCellContent: React.FC<StackedCellContentProps> = ({ headingText, children }) => (
  <>
    {headingText && <span className={styles['table__cell-heading-text']}>{headingText}</span>}
    <span className={styles['table__cell-content']}>{children}</span>
  </>
);

export default StackedCellContent;
