import React from 'react';

import classNames from 'classnames';

import { IconSize } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { ExpanderListColors, ExpanderListVariant } from '../ExpanderList';
import Icon, { SvgIcon } from '../Icon';
import X from '../Icons/X';
import { LinkListColors, LinkListVariant } from '../LinkList';

import styles from './styles.module.scss';

export interface ListEditModeProps extends ListEditModeItemProps {
  /** Items in the ListEditMode */
  children: React.ReactNode;
  /** Sets visual priority */
  variant?: LinkListVariant | ExpanderListVariant;
  /** Sets color */
  color?: LinkListColors | ExpanderListColors;
}

export interface ListEditModeItemProps {
  /** Enables ListEditMode */
  editMode?: boolean;
  /** Callback for delete button  */
  onDelete?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const listEditModeWrapperClassnames = classNames([styles[`list-edit-mode`]]);

export const IconButton = ({
  icon,
  color,
  onClick,
}: {
  icon: SvgIcon;
  color: 'red' | 'blue';
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}): React.JSX.Element => {
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement>();

  return (
    <button ref={refObject} onClick={onClick} type="button" className={classNames(styles['list-edit-mode__icon-button'])}>
      <Icon
        isHovered={isHovered}
        svgIcon={icon}
        size={IconSize.Small}
        color={color === 'blue' ? 'var(--color-action-graphics-onlight)' : 'var(--color-destructive-graphics-normal'}
      />
    </button>
  );
};

export const ListEditModeItem = (props: ListEditModeProps): React.JSX.Element => {
  const { children, variant = 'line', color = 'neutral', onDelete } = props;

  const listClassNames = classNames(styles['list-edit-mode__item'], color && styles[`list-edit-mode__item--${color}`], {
    [styles['list-edit-mode__item--line']]: variant === 'line',
    [styles['list-edit-mode__item--fill']]: variant === 'fill' || variant === 'fill-negative',
  });

  return (
    <div className={listClassNames}>
      {onDelete && <IconButton icon={X} onClick={onDelete} color="red" />}
      {children}
    </div>
  );
};

ListEditModeItem.displayName = 'ListEditModeItem';

export default ListEditModeItem;
