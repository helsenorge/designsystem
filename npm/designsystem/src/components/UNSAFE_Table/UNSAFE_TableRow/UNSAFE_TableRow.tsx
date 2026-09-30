import React from 'react';

import classNames from 'classnames';

import type { PopMenuProps } from '../../PopMenu';
import type { TableColors } from '../constants';
import type { Props as TableCellProps } from '../UNSAFE_TableCell/UNSAFE_TableCell';

import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import Button from '../../Button';
import Duolist, { DuolistGroup } from '../../Duolist';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import { TableSizes } from '../constants';
import styles from '../styles.module.scss';
import UNSAFE_TableExpandedRow from '../UNSAFE_TableExpandedRow/UNSAFE_TableExpandedRow';
import UNSAFE_TableExpanderCellMobile from '../UNSAFE_TableExpanderCell/UNSAFE_TableExpanderCellMobile';
import UNSAFE_TablePopMenuCell from '../UNSAFE_TablePopMenuCell/UNSAFE_TablePopMenuCell';
import { mapChildren } from '../utils';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tr'>, 'style'> {
  /** Renders an expander cell as the first cell in the row. Use 'stack' to only enable the expander in the stack variant, e.g. together with hideBehindExpander on cells. */
  expandable?: boolean | 'stack';
  /** Sets if expanded row is expanded */
  expanded?: boolean;
  /** Id of the expanded row this row controls. For use with aria-controls on the expander button. */
  expandableRowId?: string;
  /** When hide/show button for expanded row is clicked. */
  onClick?: () => void;
  /** Text for expanded row hide button. */
  hideDetailsText?: string;
  /** Text for expanded row show button. */
  showDetailsText?: string;
  /** Key attribute for row */
  rowKey?: string;
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the cells of the table row element.  */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
  /** PopMenu rendered in an extra cell as the last cell in the row. Fills the entire cell. Outside the stack variant labelText is hidden and used as aria-label instead. */
  popMenu?: React.ReactElement<PopMenuProps>;
}

export const UNSAFE_TableRow: React.FC<Props> = ({
  rowKey,
  hideDetailsText,
  showDetailsText,
  expandable,
  expanded,
  expandableRowId,
  onClick,
  className,
  children,
  color,
  size = TableSizes.normal,
  popMenu,
  ...rest
}) => {
  const { refObject, isHovered, isActive } = usePseudoClasses<HTMLTableRowElement>();
  const tableRowClass = classNames(
    styles['table__row'],
    {
      [styles['table__row--transparent']]: color === 'transparent',
      [styles['table__row--expandable']]: expandable,
      [styles['table__row--expanded']]: expanded,
    },
    className
  );

  const expanderCellClass = classNames(styles['table__cell'], styles['table__cell-expander'], {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  const hiddenCells = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TableCellProps> => React.isValidElement<TableCellProps>(child) && !!child.props.hideBehindExpander
  );

  const row = (
    <tr className={tableRowClass} key={rowKey} {...rest} ref={refObject}>
      {expandable === true && (
        <td className={expanderCellClass}>
          <Button
            variant="borderless"
            wrapperClassName={styles['table__expander-button']}
            aria-expanded={expanded}
            aria-controls={expandableRowId}
            ariaLabel={expanded ? hideDetailsText : showDetailsText}
            onClick={(e): void => {
              // Unngå dobbel toggling via raden
              e?.stopPropagation();
              onClick?.();
            }}
          >
            <Icon
              color={
                isActive
                  ? 'var(--color-action-graphics-dark-onlight-active, #08667C)'
                  : isHovered
                    ? 'var(--color-action-graphics-dark-onlight-hover, #126F87)'
                    : 'var(--color-action-graphics-dark-onlight-normal, #188097)'
              }
              svgIcon={expanded ? ChevronUp : ChevronDown}
            />
          </Button>
        </td>
      )}
      {mapChildren(children, size, color)}
      {popMenu && <UNSAFE_TablePopMenuCell size={size}>{popMenu}</UNSAFE_TablePopMenuCell>}
      {expandable && (
        <UNSAFE_TableExpanderCellMobile
          expanded={expanded}
          onClick={onClick}
          hideDetailsText={hideDetailsText}
          showDetailsText={showDetailsText}
          size={size}
        />
      )}
    </tr>
  );

  if (!expandable || hiddenCells.length === 0) {
    return row;
  }

  // Antall celler i raden, slik at colSpan dekker hele bredden
  const numberOfColumns = React.Children.count(children) + (expandable === true ? 1 : 0) + 1 + (popMenu ? 1 : 0);

  return (
    <>
      {row}
      <UNSAFE_TableExpandedRow
        stackOnly
        id={expandableRowId}
        expanded={!!expanded}
        numberOfColumns={numberOfColumns}
        hideDetailsText={hideDetailsText ?? ''}
        toggleClick={(): void => onClick?.()}
        size={size}
      >
        <Duolist useCollapsedFromAndBelowBreakpoint={'sm'}>
          {hiddenCells.map(cell => (
            <DuolistGroup term={cell.props.dataLabel} description={cell.props.children} />
          ))}
        </Duolist>
      </UNSAFE_TableExpandedRow>
    </>
  );
};

export default UNSAFE_TableRow;
