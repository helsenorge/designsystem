import React, { useRef, useState } from 'react';
import Icon from '../Icons';
import VerticalDots from '../Icons/VerticalDots';

import { AnalyticsId, IconSize } from '../../constants';
import Close from '../Close';

import PopOver from '../PopOver';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { getColor } from '../../theme/currys';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { breakpoints } from '../../theme/grid';
import LinkList, { LinkListProps } from '../LinkList';
import { isComponent } from '../../utils/component';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { useHover } from '../../hooks/useHover';

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

  const renderChildren = () => {
    if (isComponent<LinkListProps>(children, LinkList)) {
      return (
        <PopOver
          children={children}
          testId={popOverTestId}
          className={classNames(styles['pop-menu__pop-over'], popOverClassName)}
          arrowClassName={styles['pop-menu__pop-over-arrow']}
          controllerRef={closeRef}
          closeOnClickOutside
          popOverRef={popOverRef}
        />
      );
    }
  };
  const openButton = () => {
    const openButtonIsHovered = useHover(openRef).isHovered;
    const mobileIconSize = mobile ? IconSize.XSmall : IconSize.Small;
    return (
      <button
        ref={openRef}
        data-testid={openButtonTestId}
        className={buttonClasses}
        aria-label={openButtonAriaLabel || 'Se mer'}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Icon svgIcon={VerticalDots} className="test" color={getColor('black')} size={mobileIconSize} isHovered={openButtonIsHovered} />
      </button>
    );
  };
  const closeButton = () => {
    const closeIsHovered = useHover(closeRef).isHovered;
    return (
      <Close
        ariaLabel={closeButtonAriaLabel}
        color="black"
        className={buttonClasses}
        testId={closeButtonTestId}
        ref={closeRef}
        onClick={() => setIsOpen(false)}
        small={mobile}
        isHovered={closeIsHovered}
      />
    );
  };
  return (
    <div className={classNames(styles['pop-menu-button'], popMenuClassName)} data-analyticsid={AnalyticsId.PopMenu}>
      {!isOpen ? openButton() : closeButton()}
      {isOpen && renderChildren()}
    </div>
  );
};

export default PopMenu;
