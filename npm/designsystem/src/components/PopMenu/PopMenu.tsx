import React, { useRef, useState } from 'react';

import classNames from 'classnames';

import type { SvgIcon } from '../Icon';
import type { IconName } from '../Icons/IconNames';
import type { LinkListProps, LinkProps } from '../LinkList';

import { AnalyticsId, IconSize } from '../../constants';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { isComponent } from '../../utils/component';
import Button from '../Button';
import Icon from '../Icon';
import VerticalDots from '../Icons/VerticalDots';
import X from '../Icons/X';
import LazyIcon from '../LazyIcon';
import LinkList from '../LinkList';
import PopOver from '../PopOver';
import { PopMenuLabelPosition, type PopMenuVariant } from './constants';

import styles from './styles.module.scss';

export interface PopMenuProps {
  /** Content shown inside PopOver. Can only be a LinkList */
  children: React.ReactElement<LinkListProps>;
  /** Adds custom classes to the popover element. */
  popOverClassName?: string;
  /** Adds custom classes to the element. */
  popMenuClassName?: string;
  /** @deprecated Changes responsive design for the trigger buttons. */
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
  const iconRef = useRef(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const {
    children,
    popOverClassName,
    popMenuClassName,
    openButtonTestId,
    closeButtonTestId,
    popOverTestId,
    openButtonAriaLabel,
    closeButtonAriaLabel,
    svgIcon,
    labelText,
    labelTextPosition = PopMenuLabelPosition.right,
  } = props;
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

  const toggleOpenOnClick = (): void => {
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
    <Icon ref={iconRef} svgIcon={svgIcon ?? VerticalDots} size={mobileIconSize} isHovered={triggerButtonIsHovered} />
  );

  const closeIcon = <Icon svgIcon={X} ref={iconRef} size={mobileIconSize} isHovered={triggerButtonIsHovered} />;

  return (
    <div ref={outerRef} className={classNames(popMenuClassName)} data-analyticsid={AnalyticsId.PopMenu}>
      <Button
        variant="borderless"
        aria-expanded={isOpen}
        onClick={toggleOpenOnClick}
        ref={triggerButtonRef}
        ariaLabel={isOpen ? closeButtonAriaLabel : openButtonAriaLabel}
        testId={isOpen ? closeButtonTestId : openButtonTestId}
      >
        {labelText && labelTextPosition == PopMenuLabelPosition.left && <span>{labelText}</span>}
        {isOpen ? closeIcon : openIcon}
        {labelText && labelTextPosition == PopMenuLabelPosition.right && <span>{labelText}</span>}
      </Button>
      {isOpen && renderChildren()}
    </div>
  );
};

export default PopMenu;
