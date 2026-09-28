import classNames from 'classnames';

import type { PopMenuProps } from '../../PopMenu';
import type { TableColors } from '../constants';

import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import { TableSizes } from '../constants';
import styles from '../styles.module.scss';
import UNSAFE_TableExpanderCellMobile from '../UNSAFE_TableExpanderCell/UNSAFE_TableExpanderCellMobile';
import UNSAFE_TablePopMenuCell from '../UNSAFE_TablePopMenuCell/UNSAFE_TablePopMenuCell';
import { mapChildren } from '../utils';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tr'>, 'style'> {
  /** Sets if expanded row can be expanded. Renders an expander cell as the first cell in the row. */
  expandable?: boolean;
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
  /** PopMenu rendered in an extra cell as the last cell in the row. Fills the entire cell. */
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
    styles['table-row'],
    {
      [styles['table__row--expanded']]: expanded,
    },
    className
  );

  const expanderCellClass = classNames(styles['table__cell'], styles['table__cell-expander'], {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  return (
    <tr className={tableRowClass} key={rowKey} {...rest} ref={refObject}>
      {expandable && (
        <td className={expanderCellClass}>
          <button
            type="button"
            className={styles['table__expander-button']}
            arizxa-expanded={expanded}
            aria-controls={expandableRowId}
            aria-label={expanded ? hideDetailsText : showDetailsText}
            onClick={(e): void => {
              // Unngå dobbel toggling via raden
              e.stopPropagation();
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
          </button>
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
};

export default UNSAFE_TableRow;
