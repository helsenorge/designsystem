import classNames from 'classnames';

import { ModeTypeOld } from '../constants';
import tableStyles from '../styles.module.scss';
import { mapChildrenWithModeOld } from '../utils';

export interface TableBodyPropsOld extends Omit<React.ComponentPropsWithoutRef<'tbody'>, 'style'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table body. Use TableRows */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeTypeOld;
}

export const TableBodyOld: React.FC<TableBodyPropsOld> = ({ className, children, mode = ModeTypeOld.normal, ...rest }) => {
  const tableBodyClasses = classNames(tableStyles['table-body'], className);
  return (
    <tbody className={tableBodyClasses} {...rest}>
      {mapChildrenWithModeOld(children, mode)}
    </tbody>
  );
};

export default TableBodyOld;
