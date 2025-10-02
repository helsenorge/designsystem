import React, { useRef, useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, IconSize } from '../../constants';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getColor } from '../../theme/currys';
import { isComponent } from '../../utils/component';
import Icon, { SvgIcon } from '../Icon';
import { IconName } from '../Icons/IconNames';
import VerticalDots from '../Icons/VerticalDots';
import X from '../Icons/X';
import LazyIcon from '../LazyIcon';
import LinkList, { LinkListProps, LinkProps } from '../LinkList';
import PopOver from '../PopOver';

import styles from './styles.module.scss';

export enum PopMenuVariant {
  onWhite = 'on-white',
  onGray = 'on-gray',
  onBlueberry = 'on-blueberry',
}

export enum PopMenuLabelPosition {
  right = 'right',
  left = 'left',
}

export interface PopMenuProps {
  /** Content shown inside PopOver. Can only be a LinkList */
  children: React.ReactElement<LinkListProps>;
  /** Adds custom classes to the popover element. */
  popOverClassName?: string;
  /** Adds custom classes to the element. */
  popMenuClassName?: string;
  /** Changes responsive design for the trigger buttons. */
  popMenuVariant?: PopMenuVariant;
  /** Sets the data-testid attribute for the button that opens. */
  openButtonTestId?: string;
  /** Sets the data-testid attribute for the button that closes. */
  closeButtonTestId?: string;
  /** Sets the data-testid attribute for the popover. */
  popOverTestId?: string;
  /** Sets the arial-label attribute for the openButton. */
  openButtonAriaLabel?: string;
  /** Sets the arial-label attribute for the closeButton. */
  closeButtonAriaLabel?: string;
  /** Sets the icon on the trigger button. */
  svgIcon?: SvgIcon | IconName;
  /** Optional text next to the trigger button. */
  labelText?: string;
  /** Placement of the label text relative to the trigger button. */
  labelTextPosition?: PopMenuLabelPosition;
}

export const PopMenu: React.FC<PopMenuProps> = (props: PopMenuProps) => {
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const {
    children,
    popOverClassName,
    popMenuClassName,
    openButtonTestId,
    closeButtonTestId,
    popOverTestId,
    popMenuVariant = PopMenuVariant.onWhite,
    openButtonAriaLabel,
    closeButtonAriaLabel,
    svgIcon,
    labelText,
    labelTextPosition = PopMenuLabelPosition.right,
  } = props;
  const buttonClasses = classNames(styles['pop-menu-button'], {
    [styles[`pop-menu-button--${popMenuVariant}`]]: popMenuVariant,
  });
  const isMobile = useIsMobileBreakpoint();

  useOutsideEvent(outerRef, () => {
    setIsOpen(false);
  });

  const { isHovered: triggerButtonIsHovered } = usePseudoClasses(triggerButtonRef);
  const mobileIconSize = isMobile ? IconSize.XSmall : IconSize.Small;

  const handleClick = (cb?: () => void): void => {
    setIsOpen(false);
    if (cb) cb();
  };

  const renderChildren = (): React.ReactElement | undefined => {
    if (isComponent<LinkListProps>(children, LinkList)) {
      return (
        <PopOver
          testId={popOverTestId}
          className={classNames(styles['pop-menu__pop-over'], popOverClassName)}
          controllerRef={iconRef}
          role="dialog"
          show={isOpen}
        >
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              children: React.Children.map(child.props.children, child =>
                isComponent<LinkProps>(child, LinkList.Link)
                  ? React.cloneElement(child, {
                      onClick: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
                        handleClick(() => child.props.onClick && child.props.onClick(event)),
                    })
                  : child
              ),
            })
          )}
        </PopOver>
      );
    }
  };

  const toggleOpenOnClick = (e?: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (e) e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const iconComponent =
    svgIcon && typeof svgIcon === 'string' ? (
      <LazyIcon iconName={svgIcon} size={IconSize.XSmall} isHovered={triggerButtonIsHovered} />
    ) : (
      svgIcon && <Icon svgIcon={svgIcon} size={IconSize.XSmall} isHovered={triggerButtonIsHovered} />
    );

  const openIcon = svgIcon ? (
    iconComponent
  ) : (
    <Icon svgIcon={svgIcon ?? VerticalDots} color={getColor('black')} size={mobileIconSize} isHovered={triggerButtonIsHovered} />
  );

  const closeIcon = <Icon svgIcon={X} color={getColor('black')} size={mobileIconSize} isHovered={triggerButtonIsHovered} />;

  const triggerButton = (
    <button
      ref={triggerButtonRef}
      data-testid={isOpen ? closeButtonTestId : openButtonTestId}
      className={buttonClasses}
      aria-label={isOpen ? closeButtonAriaLabel : openButtonAriaLabel}
      aria-expanded={isOpen}
      onClick={toggleOpenOnClick}
      type="button"
    >
      {labelText && labelTextPosition == PopMenuLabelPosition.left && <span>{labelText}</span>}
      {
        <div className={styles['pop-menu-button__icon-wrapper']} ref={iconRef}>
          {isOpen ? closeIcon : openIcon}
        </div>
      }
      {labelText && labelTextPosition == PopMenuLabelPosition.right && <span>{labelText}</span>}
    </button>
  );

  return (
    <div ref={outerRef} className={classNames(styles['pop-menu-button'], popMenuClassName)} data-analyticsid={AnalyticsId.PopMenu}>
      {triggerButton}
      {isOpen && renderChildren()}
    </div>
  );
};

export default PopMenu;
