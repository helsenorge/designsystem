import classNames from 'classnames';

import Button from '../../Button';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import { ModeTypeOld } from '../constants';
import tableStyles from '../styles.module.scss';

export interface TableExpanderCellPropsOld {
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
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeTypeOld;
}

export const TableExpanderCellOld = ({
  expandableRowId,
  hideDetailsText,
  showDetailsText,
  expanded,
  className,
  mode = ModeTypeOld.normal,
}: TableExpanderCellPropsOld): React.JSX.Element => {
  const tableCellClass = classNames(tableStyles['table__cell'], tableStyles['table__cell-expander'], className, {
    [tableStyles['table__cell--compact']]: mode === ModeTypeOld.compact,
  });
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

export default TableExpanderCellOld;
