import classNames from 'classnames';

import StackLabelledContent from '../StackLabelledContent';
import styles from '../styles.module.scss';

export interface Props {
  /** Label shown before the content */
  label: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** The content, typically the value of a column hidden with hideBehindExpander */
  children?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

/** Label + content in the same layout as a cell in the stack variant. Only displayed in the stack variant. Use inside UNSAFE_TableExpandedRow. */
export const UNSAFE_TableDetail: React.FC<Props> = ({ label, className, children, testId }) => (
  <div
    className={classNames(styles['table__cell'], styles['table__cell--labelled'], styles['table__detail'], className)}
    data-testid={testId}
  >
    <StackLabelledContent label={label}>{children}</StackLabelledContent>
  </div>
);

export default UNSAFE_TableDetail;
