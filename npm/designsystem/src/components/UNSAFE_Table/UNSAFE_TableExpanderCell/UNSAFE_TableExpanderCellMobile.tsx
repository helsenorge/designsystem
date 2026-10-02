import { useContext } from 'react';

import classNames from 'classnames';

import type { Props } from '../UNSAFE_TableRow/UNSAFE_TableRow';

import Button from '../../Button';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import { TableSizes } from '../constants';
import styles from '../styles.module.scss';
import { TableContext } from '../TableContext';

type UNSAFE_TableExpanderCellMobileProps = Pick<Props, 'expanded' | 'onClick' | 'hideDetailsText' | 'showDetailsText'>;

const UNSAFE_TableExpanderCellMobile: React.FC<UNSAFE_TableExpanderCellMobileProps> = ({
  expanded,
  onClick,
  hideDetailsText,
  showDetailsText,
}) => {
  const { size } = useContext(TableContext);
  const cellClass = classNames(styles.table__cell, styles['table__expander-cell-mobile'], {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  return (
    <td className={cellClass}>
      <Button aria-expanded={expanded} variant="borderless" onClick={onClick} wrapperClassName={styles['table__expander-trigger']}>
        <Icon svgIcon={expanded ? ChevronUp : ChevronDown} /> {expanded ? hideDetailsText : showDetailsText}
      </Button>
    </td>
  );
};

export default UNSAFE_TableExpanderCellMobile;
