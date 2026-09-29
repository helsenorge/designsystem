import React from 'react';

import classNames from 'classnames';

import Button from '../../Button';
import Icon from '../../Icon';
import ChevronUp from '../../Icons/ChevronUp';
import { TableSizes } from '../constants';
import styles from '../styles.module.scss';

export interface Props {
  /** Row is expanded. */
  expanded: boolean;
  /** Number of columns in table. */
  numberOfColumns: number;
  /** Text for hide button. */
  hideDetailsText: string;
  /** When hide button inside expanded row is clicked. */
  toggleClick: () => void;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the expanded row.  */
  children: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
  /** Only display the expanded row in the stack variant. */
  stackOnly?: boolean;
  /** Row id. For use with aria-controls. */
  id?: string;
}

export const UNSAFE_TableExpandedRow = ({
  numberOfColumns,
  expanded,
  hideDetailsText,
  toggleClick,
  children,
  className,
  size = TableSizes.normal,
  stackOnly,
  id,
}: Props): React.JSX.Element => {
  const tableRowClass = classNames(
    styles['table__expanded-row'],
    {
      [styles['table__expanded-row--expanded']]: expanded,
      [styles['table__expanded-row--stack-only']]: stackOnly,
    },
    className
  );
  const tableCellClass = classNames(styles['table__cell'], className, {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  const containerClass = classNames(styles['table__expanded-row-container']);

  return (
    <tr className={tableRowClass} id={id}>
      <td colSpan={numberOfColumns} className={tableCellClass}>
        <div className={containerClass}>
          {React.Children.map(children, child => React.isValidElement(child) && React.cloneElement(child))}
          <Button variant={'borderless'} onClick={toggleClick} aria-expanded={expanded} tabIndex={expanded ? 0 : -1}>
            {hideDetailsText}
            <Icon svgIcon={ChevronUp} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default UNSAFE_TableExpandedRow;
