import React from 'react';
import classNames from 'classnames';

import Button from '../../Button';
import Icon from '../../Icons';
import ChevronUp from '../../Icons/ChevronUp';
import ChevronDown from '../../Icons/ChevronDown';
import { Props } from '../TableRow/TableRow';

import tableStyles from '../styles.module.scss';

type TableExpanderCellMobileProps = Pick<Props, 'expanded' | 'onClick' | 'hideDetailsText' | 'showDetailsText'>;

const TableExpanderCellMobile: React.FC<TableExpanderCellMobileProps> = ({ expanded, onClick, hideDetailsText, showDetailsText }) => {
  const cellClass = classNames(tableStyles.table__cell, tableStyles['table__expander-cell-mobile'], {
    [tableStyles['table__expander-cell-mobile--expanded']]: expanded,
  });

  return (
    <td className={cellClass}>
      <Button aria-expanded={expanded} variant="borderless" onClick={onClick}>
        <Icon svgIcon={expanded ? ChevronUp : ChevronDown} /> {expanded ? hideDetailsText : showDetailsText}
      </Button>
    </td>
  );
};

export default TableExpanderCellMobile;
