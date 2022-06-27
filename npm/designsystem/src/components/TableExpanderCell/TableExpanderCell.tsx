import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';
import Icon from '../Icons';
import Button from '../Button';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import { palette } from '../../theme/palette';

export interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  /** Row is expanded. */
  expanded: boolean;
  /** Id for expanded row. */
  expandableRowId: string;
  /** Text for hide button as aria label. */
  hideDetailsText: string;
  /** Text for show buttonas aria label. */
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
    <td
      className={tableCellClass}
      data-class={tableCellClass}
      aria-controls={expandableRowId}
      aria-label={expanded ? hideDetailsText : showDetailsText}
    >
      <Button
        variant="borderless"
        aria-expanded={expanded}
        aria-controls={expandableRowId}
        aria-label={expanded ? hideDetailsText : showDetailsText}
      >
        <Icon svgIcon={icon} color={palette.blueberry500}></Icon>
      </Button>
    </td>
  );
};

export default TableExpanderCell;
