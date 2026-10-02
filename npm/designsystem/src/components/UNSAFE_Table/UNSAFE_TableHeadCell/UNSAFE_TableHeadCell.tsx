import { useContext } from 'react';

import classNames from 'classnames';

import { TableSizes, SortDirection, TableColors } from '../constants';
import styles from '../styles.module.scss';
import { TableContext } from '../TableContext';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'th'>, 'style'> {
  /** Sort direction  */
  sortDir?: SortDirection;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the td element.  */
  children?: React.ReactNode;
  /** Sets the width of the column, e.g. '10rem', '25%' or a number of pixels. Ignored in the stack variant. */
  width?: string | number;
}

export const UNSAFE_TableHeadCell: React.FC<Props> = ({ className, children, sortDir, scope = 'col', width, ...rest }) => {
  const { color, size } = useContext(TableContext);
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

  const style = typeof width !== 'undefined' ? { width } : undefined;

  if (!children) {
    return <td className={tableHeadCellDefaultClass} style={style} />;
  }

  return (
    <th scope={scope} className={tableHeadCellDefaultClass} style={style} aria-sort={getSortDirection()} {...rest}>
      {children}
    </th>
  );
};

export default UNSAFE_TableHeadCell;
