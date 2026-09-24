import React from 'react';

import classNames from 'classnames';

import type { PopMenuProps } from '../../PopMenu';

import { TableSizes } from '../constants';
import styles from '../styles.module.scss';

export interface UNSAFE_TablePopMenuCellProps {
  /** PopMenu shown inside the cell. Fills the entire cell. */
  children: React.ReactElement<PopMenuProps>;
  /** For display with less space. */
  size?: TableSizes;
}

const UNSAFE_TablePopMenuCell: React.FC<UNSAFE_TablePopMenuCellProps> = ({ children, size = TableSizes.normal }) => {
  const cellClass = classNames(styles['table__cell'], styles['table__cell-pop-menu'], {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  return (
    <td className={cellClass}>
      {React.cloneElement(children, {
        popMenuClassName: classNames(styles['table__pop-menu'], children.props.popMenuClassName),
      })}
    </td>
  );
};

export default UNSAFE_TablePopMenuCell;
