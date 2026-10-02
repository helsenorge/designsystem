import React, { useContext } from 'react';

import classNames from 'classnames';

import type { PopMenuProps } from '../../PopMenu';

import { ResponsiveTableVariant, TableSizes } from '../constants';
import styles from '../styles.module.scss';
import { TableContext } from '../TableContext';

export interface UNSAFE_TablePopMenuCellProps {
  /** PopMenu shown inside the cell. Fills the entire cell. */
  children: React.ReactElement<PopMenuProps>;
}

const UNSAFE_TablePopMenuCell: React.FC<UNSAFE_TablePopMenuCellProps> = ({ children }) => {
  const { variant, size } = useContext(TableContext);
  const cellClass = classNames(styles['table__cell'], styles['table__cell-pop-menu'], {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  const { labelText, openButtonAriaLabel, closeButtonAriaLabel } = children.props;
  // Kun stack-varianten har plass til synlig ledetekst; ellers blir den skjult tekst for skjermlesere
  const hideLabelText = labelText !== undefined && variant !== ResponsiveTableVariant.stack;

  return (
    <td className={cellClass}>
      {React.cloneElement(children, {
        popMenuClassName: classNames(styles['table__pop-menu'], children.props.popMenuClassName),
        ...(hideLabelText && {
          labelText: undefined,
          openButtonAriaLabel: openButtonAriaLabel ?? labelText,
          closeButtonAriaLabel: closeButtonAriaLabel ?? labelText,
        }),
      })}
    </td>
  );
};

export default UNSAFE_TablePopMenuCell;
