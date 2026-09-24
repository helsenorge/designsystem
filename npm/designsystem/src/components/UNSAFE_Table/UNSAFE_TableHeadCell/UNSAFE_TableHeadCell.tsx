import classNames from 'classnames';

import { TableSizes, SortDirection, TableColors } from '../constants';
import styles from '../styles.module.scss';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'th'>, 'style'> {
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** Sort direction  */
  sortDir?: SortDirection;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the td element.  */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
}

export const UNSAFE_TableHeadCell: React.FC<Props> = ({
  color = TableColors.normal,
  className,
  children,
  sortDir,
  size = TableSizes.normal,
  scope = 'col',
  ...rest
}) => {
  const tableHeadCellDefaultClass = classNames(styles['table__head-cell'], className, {
    [styles['table__head-cell--transparent']]: color === TableColors.transparent,
    [styles['table__head-cell--compact']]: size === TableSizes.compact,
  });

  const getSortDirection = (): React.AriaAttributes['aria-sort'] => {
    if (typeof sortDir === 'undefined') {
      return undefined;
    }

    switch (sortDir) {
      case SortDirection.asc:
        return 'ascending';
      case SortDirection.desc:
        return 'descending';
    }
  };

  if (!children) {
    return <td className={tableHeadCellDefaultClass} />;
  }

  return (
    <th scope={scope} className={tableHeadCellDefaultClass} aria-sort={getSortDirection()} {...rest}>
      {children}
    </th>
  );
};

export default UNSAFE_TableHeadCell;
