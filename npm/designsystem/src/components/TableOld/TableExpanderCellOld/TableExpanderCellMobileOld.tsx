import classNames from 'classnames';

import type { TableRowPropsOld } from '../TableRowOld/TableRowOld';

import Button from '../../Button';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import { ModeTypeOld } from '../constants';
import tableStyles from '../styles.module.scss';

type TableExpanderCellMobilePropsOld = Pick<TableRowPropsOld, 'expanded' | 'onClick' | 'hideDetailsText' | 'showDetailsText' | 'mode'>;

const TableExpanderCellMobileOld: React.FC<TableExpanderCellMobilePropsOld> = ({
  expanded,
  onClick,
  hideDetailsText,
  showDetailsText,
  mode = ModeTypeOld.normal,
}) => {
  const cellClass = classNames(tableStyles.table__cell, tableStyles['table__expander-cell-mobile'], {
    [tableStyles['table__expander-cell-mobile--expanded']]: expanded,
    [tableStyles['table__cell--compact']]: mode === ModeTypeOld.compact,
  });

  return (
    <td className={cellClass}>
      <Button aria-expanded={expanded} variant="borderless" onClick={onClick}>
        <Icon svgIcon={expanded ? ChevronUp : ChevronDown} /> {expanded ? hideDetailsText : showDetailsText}
      </Button>
    </td>
  );
};

export default TableExpanderCellMobileOld;
