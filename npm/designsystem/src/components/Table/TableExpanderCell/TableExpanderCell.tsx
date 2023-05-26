import React from 'react';

import classNames from 'classnames';

import Button from '../../Button';
import Icon from '../../Icons';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import tableStyles from '../styles.module.scss';
import { CompactDataRendering } from '../Table';

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
  /** For display with less space. Discouraged to use together with interactive elements. */
  compactDataRendering?: CompactDataRendering;
}

export const TableExpanderCell = ({
  expandableRowId,
  hideDetailsText,
  showDetailsText,
  expanded,
  className,
  compactDataRendering = CompactDataRendering.notCompact,
}: Props): React.JSX => {
  const tableCellClass = classNames(tableStyles['table__cell'], tableStyles['table__cell-expander'], className, {
    [tableStyles['table__cell--compact']]: compactDataRendering === CompactDataRendering.compact,
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

export default TableExpanderCell;
