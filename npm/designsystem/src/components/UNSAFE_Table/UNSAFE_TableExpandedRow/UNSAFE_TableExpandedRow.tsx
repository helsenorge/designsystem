import React, { useContext, useLayoutEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import Button from '../../Button';
import Icon from '../../Icon';
import ChevronUp from '../../Icons/ChevronUp';
import { TableSizes } from '../constants';
import styles from '../styles.module.scss';
import { TableContext } from '../TableContext';

export interface Props {
  /** Row is expanded. */
  expanded: boolean;
  /** When hide button inside expanded row is clicked. */
  toggleClick: () => void;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the expanded row.  */
  children: React.ReactNode;
  /** Only display the expanded row in the stack variant. */
  stackOnly?: boolean;
  /** Row id. For use with aria-controls. */
  id?: string;
}

export const UNSAFE_TableExpandedRow = ({ expanded, toggleClick, children, className, stackOnly, id }: Props): React.JSX.Element => {
  const { size, resources } = useContext(TableContext);
  const rowRef = useRef<HTMLTableRowElement>(null);
  const [colSpan, setColSpan] = useState(1);

  // Spenner over alle kolonnene i raden over
  useLayoutEffect(() => {
    const previousRow = rowRef.current?.previousElementSibling;
    if (!previousRow) {
      return;
    }

    const count = Array.from(previousRow.children).reduce((sum, cell) => sum + ((cell as HTMLTableCellElement).colSpan || 1), 0);
    setColSpan(count);
  });
  const tableRowClass = classNames(
    styles['table__expanded-row'],
    {
      [styles['table__expanded-row--expanded']]: expanded,
      [styles['table__expanded-row--stack-only']]: stackOnly,
    },
    className
  );
  const tableCellClass = classNames(styles['table__cell'], styles['table__expanded-row__cell'], className, {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  return (
    <tr ref={rowRef} className={tableRowClass} id={id}>
      <td colSpan={colSpan} className={tableCellClass}>
        {React.Children.map(children, child => React.isValidElement(child) && React.cloneElement(child))}
        <Button variant={'borderless'} onClick={toggleClick} aria-expanded={expanded} tabIndex={expanded ? 0 : -1}>
          {resources.collapseRowButton}
          <Icon svgIcon={ChevronUp} />
        </Button>
      </td>
    </tr>
  );
};

export default UNSAFE_TableExpandedRow;
