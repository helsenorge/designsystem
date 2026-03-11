import classNames from 'classnames';

import type { ExpanderListColors, ExpanderListVariant } from '../ExpanderList';
import type { SvgIcon } from '../Icon';
import type { LinkListColors, LinkListVariant } from '../LinkList';

import { IconSize } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import Icon from '../Icon';
import X from '../Icons/X';

import styles from './styles.module.scss';

export interface ListEditModeProps extends ListEditModeItemProps {
  /** Items in the ListEditMode */
  children: React.ReactNode;
  /** Sets visual priority */
  variant?: LinkListVariant | ExpanderListVariant;
  /** Sets color */
  color?: LinkListColors | ExpanderListColors;
  /** Aria label for delete button */
  deleteButtonAriaLabel?: string;
}

export interface ListEditModeItemProps {
  /** Enables ListEditMode */
  editMode?: boolean;
  /** Callback for delete button  */
  onDelete?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  contentId?: string;
}

export const IconButton = ({
  icon,
  color,
  onClick,
  ariaLabel,
  ariaDescribedby,
}: {
  icon: SvgIcon;
  color: 'red' | 'blue';
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ariaLabel?: string;
  ariaDescribedby?: string;
}): React.JSX.Element => {
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement>();

  return (
    <button
      ref={refObject}
      onClick={onClick}
      type="button"
      className={classNames(styles['list-edit-mode__icon-button'])}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    >
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
  const { children, variant = 'line', color = 'neutral', onDelete, deleteButtonAriaLabel, contentId } = props;

  const listClassNames = classNames(styles['list-edit-mode__item'], color && styles[`list-edit-mode__item--${color}`], {
    [styles['list-edit-mode__item--line']]: variant === 'line',
    [styles['list-edit-mode__item--fill']]: variant === 'fill' || variant === 'fill-negative',
  });

  return (
    <li className={listClassNames}>
      {children}
      {onDelete && <IconButton icon={X} onClick={onDelete} color="red" ariaLabel={deleteButtonAriaLabel} ariaDescribedby={contentId} />}
    </li>
  );
};

ListEditModeItem.displayName = 'ListEditModeItem';

export default ListEditModeItem;
