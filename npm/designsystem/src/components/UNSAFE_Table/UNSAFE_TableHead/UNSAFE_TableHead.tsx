import { useContext, useMemo } from 'react';

import classNames from 'classnames';

import styles from '../styles.module.scss';
import { TableContext } from '../TableContext';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'thead'>, 'style'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the thead. Add table rows  */
  children: React.ReactNode;
}

export const UNSAFE_TableHead: React.FC<Props> = ({ children, className, ...rest }) => {
  const tableContext = useContext(TableContext);
  // Radene i hodet skal ikke skjule kolonner eller få expander
  const headContext = useMemo(() => ({ ...tableContext, hiddenColumns: [] }), [tableContext]);

  return (
    <TableContext.Provider value={headContext}>
      <thead className={classNames(styles.table__head, className)} {...rest}>
        {children}
      </thead>
    </TableContext.Provider>
  );
};

export default UNSAFE_TableHead;
