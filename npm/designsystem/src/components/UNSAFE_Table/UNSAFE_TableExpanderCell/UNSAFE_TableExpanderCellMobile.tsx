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

type UNSAFE_TableExpanderCellMobileProps = Pick<Props, 'expanded' | 'onClick' | 'expandableRowId'>;

const UNSAFE_TableExpanderCellMobile: React.FC<UNSAFE_TableExpanderCellMobileProps> = ({ expanded, onClick, expandableRowId }) => {
  const { size, resources } = useContext(TableContext);
  const cellClass = classNames(styles.table__cell, styles['table__expander-cell-mobile'], {
    [styles['table__cell--compact']]: size === TableSizes.compact,
  });

  return (
    <td className={cellClass}>
      <Button
        aria-expanded={expanded}
        aria-controls={expandableRowId}
        variant="borderless"
        onClick={onClick}
        wrapperClassName={styles['table__expander-trigger']}
        className={styles['table__expander-trigger__content']}
      >
        <Icon svgIcon={expanded ? ChevronUp : ChevronDown} /> {expanded ? resources.collapseRowButton : resources.expandRowButton}
      </Button>
    </td>
  );
};

export default UNSAFE_TableExpanderCellMobile;
