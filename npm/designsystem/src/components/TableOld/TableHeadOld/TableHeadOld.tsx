import classNames from 'classnames';

import { HeaderCategoryOld, ModeTypeOld } from '../constants';
import tableStyles from '../styles.module.scss';
import { mapChildrenWithModeOld } from '../utils';

export interface TableHeadPropsOld extends Omit<React.ComponentPropsWithoutRef<'thead'>, 'style'> {
  /** Header category for styling. Default: normal */
  category?: HeaderCategoryOld;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the thead. Add table rows  */
  children: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeTypeOld;
}

export const TableHeadOld: React.FC<TableHeadPropsOld> = ({ category = HeaderCategoryOld.normal, className, children, mode, ...rest }) => {
  const tableHeadClass = classNames(
    tableStyles['table__head'],
    {
      [tableStyles['table__head--normal']]: category === HeaderCategoryOld.normal,
      [tableStyles['table__head--transparent']]: category === HeaderCategoryOld.transparent,
      [tableStyles['table__head--sortable']]: category == HeaderCategoryOld.sortable,
      [tableStyles['table__head--compact']]: mode == ModeTypeOld.compact,
    },
    className
  );

  return (
    <thead className={tableHeadClass} {...rest}>
      {mapChildrenWithModeOld(children, mode)}
    </thead>
  );
};

export default TableHeadOld;
