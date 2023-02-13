import React from 'react';
import classNames from 'classnames';
import tableStyles from '../styles.module.scss';
import Icon from '../../Icons';
import Button from '../../Button';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';

export interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  /** Row is expanded. */
  expanded: boolean;
  /** Id for expanded row. */
  expandableRowId: string;
  /** Text for hide button used for aria label. */
  hideDetailsText: string;
  /** Text for show button used for aria label. */
  showDetailsText: string;
}

export const TableExpanderCell = function TableExpanderCell({
  expandableRowId,
  hideDetailsText,
  showDetailsText,
  expanded,
  className,
}: Props) {
  const tableCellClass = classNames(tableStyles['table__cell'], tableStyles['table__cell-expander'], className);
  const icon = expanded ? ChevronUp : ChevronDown;

  return (
    <td className={tableCellClass}>
      <Button
        variant="borderless"
        aria-expanded={expanded}
        aria-controls={expandableRowId}
        ariaLabel={expanded ? hideDetailsText : showDetailsText}
      >
        <Icon svgIcon={icon} />
      </Button>
    </td>
  );
};

export default TableExpanderCell;
