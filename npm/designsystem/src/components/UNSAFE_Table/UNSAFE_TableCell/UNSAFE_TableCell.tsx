import classNames from 'classnames';

import { TableColors, TableSizes, TextAlign } from '../constants';
import styles from '../styles.module.scss';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'td'>, 'style'> {
  /** Label used for small viewport stack */
  dataLabel?: string;
  /** In the stack variant, hides the cell and shows dataLabel + content in an automatically rendered UNSAFE_TableExpandedRow. Other variants always show the cell. Requires expandable on the row. */
  hideBehindExpander?: boolean;
  /**  text align in cell */
  textAlign?: TextAlign;
  /**  nowrap for white space */
  nowrap?: boolean;
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table cell */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
  /** For test purposes */
  testId?: string;
}

export const UNSAFE_TableCell: React.FC<Props> = ({
  nowrap = false,
  textAlign = TextAlign.left,
  dataLabel,
  hideBehindExpander = false,
  children,
  className,
  testId,
  color,
  size = TableSizes.normal,
  ...rest
}) => {
  const tableCellClass = classNames(
    styles['table__cell'],
    { [styles['table__cell--transparent']]: color === TableColors.transparent },
    { [styles['table__cell--compact']]: size === TableSizes.compact },
    { [styles['table__cell--nowrap']]: nowrap },
    { [styles['table__cell--center']]: textAlign === 'center' },
    { [styles['table__cell--right']]: textAlign === 'right' },
    { [styles['table__cell--behind-expander']]: hideBehindExpander },
    className
  );

  return (
    <td className={tableCellClass} data-label={dataLabel} data-testid={testId} {...rest}>
      {dataLabel && <span className={styles['table__cell-label']}>{dataLabel}</span>}
      <span className={styles['table__cell-content']}>{children}</span>
    </td>
  );
};

export default UNSAFE_TableCell;
