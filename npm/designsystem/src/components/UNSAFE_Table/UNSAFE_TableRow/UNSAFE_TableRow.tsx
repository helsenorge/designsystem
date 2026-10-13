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
import { CellHeadingContext, TableContext } from '../TableContext';
import UNSAFE_TableCell from '../UNSAFE_TableCell/UNSAFE_TableCell';
import UNSAFE_TableDetail from '../UNSAFE_TableDetail/UNSAFE_TableDetail';
import UNSAFE_TableExpandedRow from '../UNSAFE_TableExpandedRow/UNSAFE_TableExpandedRow';
import UNSAFE_TableExpanderCellMobile from '../UNSAFE_TableExpanderCell/UNSAFE_TableExpanderCellMobile';
import UNSAFE_TablePopMenuCell from '../UNSAFE_TablePopMenuCell/UNSAFE_TablePopMenuCell';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tr'>, 'style'> {
  /** Content to be rendered in an expandable row. Make sure to add an empty TableHeadCell to the beginning of the Table. This content renders below the column content with hideBehindExpander set in the stack variant. */
  expandedContent?: React.ReactNode;
  /** Sets if expanded row is expanded */
  expanded?: boolean;
  /** Id of the expanded row this row controls. For use with aria-controls on the expander button. */
  expandableRowId?: string;
  /** When hide/show button for expanded row is clicked. */
  onClick?: () => void;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the cells of the table row element.  */
  children?: React.ReactNode;
  /** PopMenu rendered in an extra cell as the last cell in the row. Fills the entire cell. Outside the stack variant labelText is hidden and used as aria-label instead. */
  popMenu?: React.ReactElement<PopMenuProps>;
}

export const UNSAFE_TableRow: React.FC<Props> = ({
  expandedContent,
  expanded,
  expandableRowId,
  onClick,
  className,
  children,
  popMenu,
  ...rest
}) => {
  const { color, size, hiddenColumns, headingTexts, variant, resources } = useContext(TableContext);
  const expandable = expandedContent ? true : hiddenColumns.length > 0 ? 'stack' : undefined;
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

  // Tar hensyn til en hidden expander cell for visning i normal variant
  const indexOffset = expandable === true ? 1 : 0;
  const isHidden = (index: number): boolean => hiddenColumns.includes(index + indexOffset);

  // Gir hver celle teksten fra kolonnens headText, som vises foran innholdet i stack-varianten
  const withHeading = (child: React.ReactNode, index: number): React.ReactNode =>
    React.isValidElement(child) && child.type === UNSAFE_TableCell ? (
      <CellHeadingContext.Provider key={child.key} value={headingTexts[index + indexOffset] ?? ''}>
        {child}
      </CellHeadingContext.Provider>
    ) : (
      child
    );

  const childArray = React.Children.toArray(children);
  const cells = childArray.map((child, index) =>
    withHeading(
      React.isValidElement<TableCellProps>(child) && isHidden(index)
        ? React.cloneElement(child, { className: classNames(child.props.className, styles['table__cell--behind-expander']) })
        : child,
      index
    )
  );
  const hiddenCells = childArray.flatMap((child, index) =>
    React.isValidElement<TableCellProps>(child) && isHidden(index)
      ? [{ cell: child, heading: headingTexts[index + indexOffset] ?? '' }]
      : []
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
            ariaLabel={expanded ? resources.collapseRowButton : resources.expandRowButton}
            onClick={onClick}
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
      {expandable && <UNSAFE_TableExpanderCellMobile expanded={expanded} onClick={onClick} expandableRowId={expandableRowId} />}
    </tr>
  );

  const hasAutomaticExpandedRow = !!expandable && (!!expandedContent || hiddenCells.length > 0);
  if (!hasAutomaticExpandedRow) {
    return row;
  }

  return (
    <>
      {row}
      <UNSAFE_TableExpandedRow
        key="expanded-row"
        stackOnly={!expandedContent}
        id={expandableRowId}
        expanded={!!expanded}
        toggleClick={(): void => onClick?.()}
      >
        {hiddenCells.map(({ cell, heading }, index) => (
          <UNSAFE_TableDetail key={cell.key ?? index} headingText={heading}>
            {cell.props.children}
          </UNSAFE_TableDetail>
        ))}
        {expandedContent}
      </UNSAFE_TableExpandedRow>
    </>
  );
};

export default UNSAFE_TableRow;
