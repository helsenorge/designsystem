import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { AnalyticsId } from '../../constants';
import { useInterval } from '../../hooks/useInterval';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';
import { useSize } from '../../hooks/useSize';
import { mergeRefs } from '../../utils/refs';
import AnchorLink from '../AnchorLink';
import Close from '../Close';

import styles from './styles.module.scss';
import { getArrowStyle, getBubbleStyle, getVerticalPosition } from './utils';

export enum HelpBubbleVariant {
  positionautomatic = 'positionautomatic',
  positionbelow = 'positionbelow',
  positionabove = 'positionabove',
}

type HelpBubbleRole = 'tooltip';

export interface HelpBubbleProps {
  /** Id of the HelpBubble */
  helpBubbleId?: string;
  /** Content shown inside HelpBubble. Note that if role="tooltip", you must not include interactive/focusable elements. */
  children: React.ReactNode;
  /** Ref for the element the HelpBubble is placed upon */
  controllerRef: React.RefObject<HTMLElement | SVGSVGElement>;
  /** Adds custom classes to the element. */
  className?: string;
  /** Determines the placement of the helpbubble. Default: automatic positioning. */
  variant?: keyof typeof HelpBubbleVariant;
  /** Show the bubble. Default: false. */
  showBubble?: boolean;
  /** Hide the close button in the bubble. Close button is never rendered if role="tooltip". */
  noCloseButton?: boolean;
  /** Visible text on the link. Link is never rendered if role="tooltip". */
  linkText?: string;
  /** Url the link leads to */
  linkUrl?: string;
  /** Function is called when link is clicked */
  onLinkClick?: () => void;
  /** Function is called when user clicks the button */
  onClose?: () => void;
  /** aria-label to be passed onto Close */
  closeAriaLabel?: string;
  /** Sets role of the HelpBubble element. If set to "tooltip",  */
  role?: HelpBubbleRole;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble = React.forwardRef<HTMLDivElement, HelpBubbleProps>((props, ref) => {
  const {
    helpBubbleId,
    children,
    controllerRef,
    className = '',
    variant = HelpBubbleVariant.positionautomatic,
    showBubble,
    noCloseButton,
    linkText = 'Mer hjelp',
    linkUrl,
    onLinkClick,
    onClose,
    closeAriaLabel,
    role,
    testId,
  } = props;

  const bubbleRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const bubbleSize = useSize(bubbleRef);
  const [controllerSize, setControllerSize] = useState<DOMRect>();
  const controllerisVisible = useIsVisible(controllerRef, 0);

  const updateControllerSize = (): void => {
    setControllerSize(controllerRef.current?.getBoundingClientRect());
  };

  useInterval(updateControllerSize, 500);
  useLayoutEvent(updateControllerSize, ['scroll', 'resize'], 10);

  useEffect(() => {
    if (showBubble) {
      updateControllerSize();
    }
  }, [showBubble]);

  const isTooltip = role === 'tooltip';

  if (!showBubble && !isTooltip) {
    return null;
  }

  const helpBubbleClasses = classNames(
    styles.helpbubble,
    { [styles['helpbubble--visible']]: (!isTooltip && controllerisVisible) || (isTooltip && showBubble) },
    className
  );
  const verticalPosition = controllerSize && bubbleSize && getVerticalPosition(controllerSize, bubbleSize, variant);
  const arrowClasses = classNames(styles.helpbubble__arrow, {
    [styles['helpbubble__arrow--over']]: verticalPosition === HelpBubbleVariant.positionbelow,
    [styles['helpbubble__arrow--under']]: verticalPosition === HelpBubbleVariant.positionabove,
  });
  const contentClasses = classNames(styles.helpbubble__content, {
    [styles['helpbubble__content--close']]: !noCloseButton && !isTooltip,
  });

  const bubbleStyle = controllerSize && bubbleSize && getBubbleStyle(controllerSize, bubbleSize, variant);
  const arrowStyle = bubbleStyle && controllerSize && verticalPosition && getArrowStyle(bubbleStyle, controllerSize, verticalPosition);

  const renderLink = (): JSX.Element | undefined => {
    // Det er ikke tillatt med interaktive/fokuserbare elementer i role="tooltip"
    if (isTooltip) {
      return;
    }
    if (onLinkClick && linkText) {
      return (
        <button className={styles.helpbubble__link} onClick={onLinkClick} type="button">
          {linkText}
        </button>
      );
    } else if (linkUrl && linkText) {
      return <AnchorLink href={linkUrl}>{linkText}</AnchorLink>;
    }
  };

  const renderCloseButton = (): JSX.Element | undefined => {
    if (noCloseButton || isTooltip) {
      return;
    }
    return (
      <div className={styles.helpbubble__close}>
        <Close small onClick={onClose} ariaLabel={closeAriaLabel} />
      </div>
    );
  };

  return (
    <>
      <div
        id={helpBubbleId}
        ref={mergeRefs([ref, bubbleRef])}
        className={helpBubbleClasses}
        style={bubbleStyle}
        data-testid={testId}
        data-analyticsid={AnalyticsId.HelpBubble}
        role={role}
      >
        {renderCloseButton()}
        <div className={contentClasses}>
          {children}
          {renderLink()}
        </div>
      </div>
      <div ref={arrowRef} className={arrowClasses} style={arrowStyle} />
    </>
  );
});

HelpBubble.displayName = 'HelpBubble';

export default HelpBubble;
