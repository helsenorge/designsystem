import classNames from 'classnames';

import { ModeType, TextAlign } from '../constants';
import tableStyles from '../styles.module.scss';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'td'>, 'style'> {
  /** Label used for small viewport block */
  dataLabel?: string;
  /**  text align in cell */
  textAlign?: TextAlign;
  /**  nowrap for white space */
  nowrap?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table cell */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeType;
  /** For test purposes */
  testId?: string;
}

export const TableCell: React.FC<Props> = ({
  nowrap = false,
  textAlign = TextAlign.left,
  dataLabel,
  children,
  className,
  testId,
  mode = ModeType.normal,
  ...rest
}) => {
  const tableCellClass = classNames(
    tableStyles['table__cell'],
    { [tableStyles['table__cell--compact']]: mode === ModeType.compact },
    { [tableStyles['table__cell--nowrap']]: nowrap },
    { [tableStyles['table__cell--center']]: textAlign === 'center' },
    { [tableStyles['table__cell--right']]: textAlign === 'right' },
    className
  );

  return (
    <td className={tableCellClass} data-label={dataLabel} data-testid={testId} {...rest}>
      {children}
    </td>
  );
};

export default TableCell;
