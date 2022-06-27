import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';
import Button from '../Button';
import Icon from '../Icons';
import ChevronUp from '../Icons/ChevronUp';

export interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  /** Row is expanded. */
  expanded: boolean;
  /** Number of columns in table. */
  numberOfColumns: number;
  /** Text for hide button. */
  hideDetailsText: string;
  /** When hide button inside expanded row is clicked. */
  toggleClick: () => void;
  /** Sets the content of the expanded row.  */
  children: React.ReactNode;
}

export const TableExpandedRow = function TableExpandedRow({
  numberOfColumns,
  expanded,
  hideDetailsText,
  toggleClick,
  children,
  className,
}: Props) {
  const tableRowClass = classNames(
    tableStyles['table__expanded-row'],
    { [tableStyles['table__expanded-row--expanded']]: expanded }, // TODO: Sjekk at det holder å sette display (i gammel table settes height=0, aria-hidden og tabindex -1)
    className
  );
  const tableCellClass = classNames(tableStyles['table__cell'], className);

  return (
    <tr className={tableRowClass}>
      <td colSpan={numberOfColumns} className={tableCellClass}>
        <div
          className={`${tableStyles['table__expanded-row-container']} ${
            !!expanded ? tableStyles['table__expanded-row-container--expanded'] : ''
          }`}
        >
          {children}
          <Button
            className={tableStyles['table__expanded-row-button']}
            variant={'borderless'}
            onClick={toggleClick}
            tabIndex={expanded ? 0 : -1}
          >
            {hideDetailsText}
            <Icon svgIcon={ChevronUp} />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableExpandedRow;
