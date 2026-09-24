import classNames from 'classnames';

import type { Props } from '../UNSAFE_TableRow/UNSAFE_TableRow';

import Button from '../../Button';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import { TableSizes } from '../constants';
import styles from '../styles.module.scss';

type UNSAFE_TableExpanderCellMobileProps = Pick<Props, 'expanded' | 'onClick' | 'hideDetailsText' | 'showDetailsText' | 'size'>;

const UNSAFE_TableExpanderCellMobile: React.FC<UNSAFE_TableExpanderCellMobileProps> = ({
  expanded,
  onClick,
  hideDetailsText,
  showDetailsText,
  size = TableSizes.normal,
}) => {
  const cellClass = classNames(styles.table__cell, styles['table__expander-cell-mobile'], {
    [styles['table__expander-cell-mobile--expanded']]: expanded,
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  return (
    <td className={cellClass}>
      <Button aria-expanded={expanded} variant="borderless" onClick={onClick}>
        <Icon svgIcon={expanded ? ChevronUp : ChevronDown} /> {expanded ? hideDetailsText : showDetailsText}
      </Button>
    </td>
  );
};

export default UNSAFE_TableExpanderCellMobile;
