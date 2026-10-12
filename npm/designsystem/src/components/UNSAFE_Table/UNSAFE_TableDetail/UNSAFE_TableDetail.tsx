import classNames from 'classnames';

import StackedCellContent from '../StackedCellContent';
import styles from '../styles.module.scss';

export interface Props {
  /** Heading shown before the content */
  headingText: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** The content, typically the value of a column hidden with hideBehindExpander */
  children?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const UNSAFE_TableDetail: React.FC<Props> = ({ headingText, className, children, testId }) => (
  <div
    className={classNames(styles['table__cell'], styles['table__cell--stacked'], styles['table__detail'], className)}
    data-testid={testId}
  >
    <StackedCellContent headingText={headingText}>{children}</StackedCellContent>
  </div>
);

export default UNSAFE_TableDetail;
