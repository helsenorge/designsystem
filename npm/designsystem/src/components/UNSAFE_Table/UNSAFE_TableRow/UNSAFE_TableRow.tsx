import React, { useContext } from 'react';

import classNames from 'classnames';

import type { PopMenuProps } from '../../PopMenu';
import type { Props as TableCellProps } from '../UNSAFE_TableCell/UNSAFE_TableCell';

import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import Button from '../../Button';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import { ResponsiveTableVariant, TableColors, TableSizes } from '../constants';
import styles from '../styles.module.scss';
import { TableContext } from '../TableContext';
import UNSAFE_TableDetail from '../UNSAFE_TableDetail/UNSAFE_TableDetail';
import UNSAFE_TableExpandedRow from '../UNSAFE_TableExpandedRow/UNSAFE_TableExpandedRow';
import UNSAFE_TableExpanderCellMobile from '../UNSAFE_TableExpanderCell/UNSAFE_TableExpanderCellMobile';
import UNSAFE_TablePopMenuCell from '../UNSAFE_TablePopMenuCell/UNSAFE_TablePopMenuCell';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tr'>, 'style'> {
  /** Renders an expander cell as the first cell in the row. Use 'stack' to only enable the expander in the stack variant. This is the default when a head cell has hideBehindExpander, with the hidden columns shown in an automatic expanded row. With expandable={true} and hideBehindExpander, render the hidden columns with UNSAFE_TableDetail inside your own UNSAFE_TableExpandedRow. */
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
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the cells of the table row element.  */
  children?: React.ReactNode;
  /** PopMenu rendered in an extra cell as the last cell in the row. Fills the entire cell. Outside the stack variant labelText is hidden and used as aria-label instead. */
  popMenu?: React.ReactElement<PopMenuProps>;
}

export const UNSAFE_TableRow: React.FC<Props> = ({
  hideDetailsText,
  showDetailsText,
  expandable: expandableProp,
  expanded,
  expandableRowId,
  onClick,
  className,
  children,
  popMenu,
  ...rest
}) => {
  const { color, size, hiddenColumns, variant } = useContext(TableContext);
  // Kolonner med hideBehindExpander gir automatisk en expander i stack-varianten
  const expandable = expandableProp ?? (hiddenColumns.length > 0 ? 'stack' : undefined);
  // expandable="stack" har ingen expander utenfor stack-varianten, så raden skal ikke se utvidet ut der
  const isExpandedVisible = !!expanded && (expandable !== 'stack' || variant === ResponsiveTableVariant.stack);
  const { refObject, isHovered, isActive } = usePseudoClasses<HTMLTableRowElement>();
  const tableRowClass = classNames(
    styles['table__row'],
    {
      [styles['table__row--transparent']]: color === TableColors.transparent,
      [styles['table__row--expandable']]: expandable,
      [styles['table__row--expanded']]: isExpandedVisible,
    },
    className
  );

  const expanderCellClass = classNames(styles['table__cell'], styles['table__cell-expander'], {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  // Med expandable={true} har hodet en tom celle først for expanderen, som radens celler ikke har
  const indexOffset = expandable === true ? 1 : 0;
  const isHidden = (index: number): boolean => hiddenColumns.includes(index + indexOffset);

  const cells = React.Children.toArray(children).map((child, index) =>
    React.isValidElement<TableCellProps>(child) && isHidden(index)
      ? React.cloneElement(child, { className: classNames(child.props.className, styles['table__cell--behind-expander']) })
      : child
  );
  const hiddenCells = React.Children.toArray(children).filter(
    (child, index): child is React.ReactElement<TableCellProps> => React.isValidElement<TableCellProps>(child) && isHidden(index)
  );

  const row = (
    <tr key="row" className={tableRowClass} {...rest} ref={refObject}>
      {expandable === true && (
        <td className={expanderCellClass}>
          <Button
            variant="borderless"
            wrapperClassName={styles['table__expander-button']}
            className={styles['table__expander-button__content']}
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
                  ? 'var(--color-action-graphics-dark-active)'
                  : isHovered
                    ? 'var(--color-action-graphics-dark-hover)'
                    : 'var(--color-action-graphics-dark-normal)'
              }
              svgIcon={expanded ? ChevronUp : ChevronDown}
            />
          </Button>
        </td>
      )}
      {cells}
      {popMenu && <UNSAFE_TablePopMenuCell>{popMenu}</UNSAFE_TablePopMenuCell>}
      {expandable && (
        <UNSAFE_TableExpanderCellMobile
          expanded={expanded}
          onClick={onClick}
          hideDetailsText={hideDetailsText}
          showDetailsText={showDetailsText}
          expandableRowId={expandableRowId}
        />
      )}
    </tr>
  );

  // Med expandable={true} rendrer forbruker selv UNSAFE_TableDetail i sin egen UNSAFE_TableExpandedRow
  if (expandable !== 'stack' || hiddenCells.length === 0) {
    return row;
  }

  return (
    <>
      {row}
      <UNSAFE_TableExpandedRow
        key="expanded-row"
        stackOnly
        id={expandableRowId}
        expanded={!!expanded}
        hideDetailsText={hideDetailsText ?? ''}
        toggleClick={(): void => onClick?.()}
      >
        {hiddenCells.map((cell, index) => (
          <UNSAFE_TableDetail key={cell.key ?? index} label={cell.props.dataLabel ?? ''}>
            {cell.props.children}
          </UNSAFE_TableDetail>
        ))}
      </UNSAFE_TableExpandedRow>
    </>
  );
};

export default UNSAFE_TableRow;
