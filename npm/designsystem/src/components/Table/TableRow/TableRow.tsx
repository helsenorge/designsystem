import React from 'react';
import classNames from 'classnames';
import tableStyles from '../styles.module.scss';

import Button from '../../Button';
import Icon from '../../Icons';
import ChevronUp from '../../Icons/ChevronUp';
import ChevronDown from '../../Icons/ChevronDown';

export interface Props {
  /** Sets if expanded row can be expanded */
  expandable?: boolean;
  /** Sets if expanded row is expanded */
  expanded?: boolean;
  /** When hide/show button for expanded row is clicked. */
  onClick?: () => void;
  /** Text for expanded row hide button. */
  hideDetailsText?: string;
  /** Text for expanded row show button. */
  showDetailsText?: string;
  /** Key attribute for row */
  rowKey?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the cells of the table row element.  */
  children?: React.ReactNode;
}

export const TableRow = function TableRow({
  rowKey,
  hideDetailsText,
  showDetailsText,
  expandable,
  expanded,
  onClick,
  className,
  children,
}: Props) {
  const tableRowClass = classNames(
    tableStyles['table-row'],
    {
      [tableStyles['table__row--expandable']]: expandable,
      [tableStyles['table__row--expanded']]: expanded,
    },
    className
  );
  let expandablerButtonMobile: JSX.Element | null = null;
  if (expandable) {
    const expandableKeyMobile = `expandableMobile`;
    // Extra column to appear on smaller screens
    const expanderCellMobileClass = classNames(tableStyles['table__cell'], tableStyles['table__expander-cell-mobile'], {
      [tableStyles['table__expander-cell-mobile--expanded']]: expanded,
    });

    const expanderButtonMobileClass = classNames(tableStyles['table__expander-button-mobile'], {
      [tableStyles['table__expander-button-mobile--expanded']]: expanded,
    });
    expandablerButtonMobile = (
      <td key={expandableKeyMobile} className={expanderCellMobileClass}>
        <Button
          aria-expanded={expanded}
          variant="borderless"
          className={expanderButtonMobileClass}
          onClick={() => {
            onClick && onClick();
          }}
        >
          <Icon svgIcon={expanded ? ChevronUp : ChevronDown} /> {expanded ? hideDetailsText : showDetailsText}
        </Button>
      </td>
    );
  }

  return (
    <tr className={tableRowClass} onClick={onClick} key={rowKey}>
      {children}
      {expandablerButtonMobile}
    </tr>
  );
};

export default TableRow;
