import React from 'react';

import classNames from 'classnames';

import Button from '../../Button';
import Icon from '../../Icons';
import ChevronUp from '../../Icons/ChevronUp';
import tableStyles from '../styles.module.scss';
import { CompactDataRendering } from '../Table';

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
  compactDataRendering?: CompactDataRendering;
}

export const TableExpandedRow = ({
  numberOfColumns,
  expanded,
  hideDetailsText,
  toggleClick,
  children,
  className,
  compactDataRendering = CompactDataRendering.notCompact,
}: Props): JSX.Element => {
  const tableRowClass = classNames(
    tableStyles['table__expanded-row'],
    { [tableStyles['table__expanded-row--expanded']]: expanded },
    className
  );
  const tableCellClass = classNames(tableStyles['table__cell'], className, {
    [tableStyles['table__cell--compact']]: compactDataRendering === CompactDataRendering.compact,
  });

  const containerClass = classNames(tableStyles['table__expanded-row-container'], {
    [tableStyles['table__expanded-row-container--expanded']]: expanded,
  });

  return (
    <tr className={tableRowClass}>
      <td colSpan={numberOfColumns} className={tableCellClass}>
        <div className={containerClass}>
          {React.Children.map(children, child => React.cloneElement(child as React.ReactElement<Props>, { compactDataRendering }))}
          <Button variant={'borderless'} onClick={toggleClick} aria-expanded={expanded} tabIndex={expanded ? 0 : -1}>
            {hideDetailsText}
            <Icon svgIcon={ChevronUp} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableExpandedRow;
