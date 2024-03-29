import React, { useRef, useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, IconSize } from '../../constants';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { getColor } from '../../theme/currys';
import { breakpoints } from '../../theme/grid';
import { isComponent } from '../../utils/component';
import Close from '../Close';
import Icon from '../Icon';
import VerticalDots from '../Icons/VerticalDots';
import LinkList, { LinkListProps, LinkProps } from '../LinkList';
import PopOver from '../PopOver';

import styles from './styles.module.scss';

export enum PopMenuVariant {
  onWhite = 'on-white',
  onGray = 'on-gray',
  onBlueberry = 'on-blueberry',
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
}

export const PopMenu: React.FC<PopMenuProps> = (props: PopMenuProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const popOverRef = useRef<HTMLDivElement>(null);
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
  } = props;
  const buttonClasses = classNames(styles['pop-menu-button'], {
    [styles[`pop-menu-button--${popMenuVariant}`]]: popMenuVariant,
  });
  const breakpoint = useBreakpoint();
  const mobile = breakpoint < breakpoints.md;
  useOutsideEvent(popOverRef, () => setIsOpen(!isOpen));
  const { isHovered: openButtonIsHovered } = useHover(openRef);
  const mobileIconSize = mobile ? IconSize.XSmall : IconSize.Small;

  const handleClick = (cb?: () => void): void => {
    setIsOpen(false);
    cb && cb();
  };

  const renderChildren = () => {
    if (isComponent<LinkListProps>(children, LinkList)) {
      return (
        <PopOver
          testId={popOverTestId}
          className={classNames(styles['pop-menu__pop-over'], popOverClassName)}
          arrowClassName={styles['pop-menu__pop-over-arrow']}
          controllerRef={closeRef}
          popOverRef={popOverRef}
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

  const handleOnClick = (isOpen: boolean, e?: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e && e.stopPropagation();
    setIsOpen(isOpen);
  };

  const openButton = (
    <button
      ref={openRef}
      data-testid={openButtonTestId}
      className={buttonClasses}
      aria-label={openButtonAriaLabel || 'Se mer'}
      onClick={(e): void => handleOnClick(true, e)}
      type="button"
    >
      <Icon svgIcon={VerticalDots} className="test" color={getColor('black')} size={mobileIconSize} isHovered={openButtonIsHovered} />
    </button>
  );

  const closeButton = (
    <Close
      ariaLabel={closeButtonAriaLabel}
      color="black"
      className={buttonClasses}
      testId={closeButtonTestId}
      ref={closeRef}
      onClick={(e): void => handleOnClick(false, e)}
      small={mobile}
    />
  );

  return (
    <div className={classNames(styles['pop-menu-button'], popMenuClassName)} data-analyticsid={AnalyticsId.PopMenu}>
      {!isOpen ? openButton : closeButton}
      {isOpen && renderChildren()}
    </div>
  );
};

export default PopMenu;
