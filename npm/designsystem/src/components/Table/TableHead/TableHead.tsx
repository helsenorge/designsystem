import classNames from 'classnames';

import { HeaderCategory, ModeType } from '../constants';
import tableStyles from '../styles.module.scss';
import { mapChildrenWithMode } from '../utils';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'thead'>, 'style'> {
  /** Header category for styling. Default: normal */
  category?: HeaderCategory;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the thead. Add table rows  */
  children: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeType;
}

export const TableHead: React.FC<Props> = ({ category = HeaderCategory.normal, className, children, mode, ...rest }) => {
  const tableHeadClass = classNames(
    tableStyles['table__head'],
    {
      [tableStyles['table__head--normal']]: category === HeaderCategory.normal,
      [tableStyles['table__head--transparent']]: category === HeaderCategory.transparent,
      [tableStyles['table__head--sortable']]: category == HeaderCategory.sortable,
      [tableStyles['table__head--compact']]: mode == ModeType.compact,
    },
    className
  );

  return (
    <thead className={tableHeadClass} {...rest}>
      {mapChildrenWithMode(children, mode)}
    </thead>
  );
};

export default TableHead;
