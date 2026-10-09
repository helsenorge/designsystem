import styles from './styles.module.scss';

interface StackLabelledContentProps {
  /** Label shown before the content in the stack variant */
  label?: string;
  /** The content */
  children?: React.ReactNode;
}

/** Label + content as rendered in a stacked cell. Shared by UNSAFE_TableCell and UNSAFE_TableDetail. */
export const StackLabelledContent: React.FC<StackLabelledContentProps> = ({ label, children }) => (
  <>
    {label && <span className={styles['table__cell-label']}>{label}</span>}
    <span className={styles['table__cell-content']}>{children}</span>
  </>
);

export default StackLabelledContent;
