import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';
import Icon from '../Icons';
import Button from '../Button';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import { palette } from '../../theme/palette';

interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  expanded: boolean;
  expandableRowId: string;
  hideDetailsText: string;
  showDetailsText: string;
}

export const TableCell = function TableCell({ expandableRowId, hideDetailsText, showDetailsText, expanded, className }: Props) {
  const tableCellClass = classNames(tableStyles['table__cell'], tableStyles['table__cell-expander'], className);
  const icon = expanded ? ChevronUp : ChevronDown;

  return (
    <td
      className={tableCellClass}
      data-class={tableCellClass}
      onClick={this.toggleClick}
      aria-expanded={!isTwoDimensional ? expanded : undefined}
      aria-controls={expandableRowId}
      aria-label={expanded ? hideDetailsText : showDetailsText}
    >
      <Button
        variant="borderless"
        hoverEffect="never"
        aria-expanded={expanded}
        aria-controls={expandableRowId}
        aria-label={expanded ? hideDetailsText : showDetailsText}
      >
        <Icon svgIcon={icon} color={palette.blueberry500}></Icon>
      </Button>
    </td>
  );
};

export default TableCell;
