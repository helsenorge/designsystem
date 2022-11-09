import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { AnalyticsId } from '../../constants';
import { useInterval } from '../../hooks/useInterval';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';
import { useSize } from '../../hooks/useSize';
import AnchorLink from '../AnchorLink';
import Close from '../Close';

import styles from './styles.module.scss';
import { getArrowStyle, getBubbleStyle, getVerticalPosition } from './utils';

export enum HelpBubbleVariant {
  positionautomatic = 'positionautomatic',
  positionbelow = 'positionbelow',
  positionabove = 'positionabove',
}

export interface HelpBubbleProps {
  /** Id of the HelpBubble */
  helpBubbleId?: string;
  /** Name to display in the avatar. Will be truncated to the first two characters. */
  children: React.ReactNode;
  /** Ref for the element the HelpBubble is placed upon */
  controllerRef: React.RefObject<HTMLElement | SVGSVGElement>;
  /** Adds custom classes to the element. */
  className?: string;
  /** Determines the placement of the helpbubble. Default: automatic positioning. */
  variant?: keyof typeof HelpBubbleVariant;
  /** Show the bubble. Default: false. */
  showBubble?: boolean;
  /** Hide the close button in the bubble */
  noCloseButton?: boolean;
  /** Visible text on the link */
  linkText?: string;
  /** Url the link leads to */
  linkUrl?: string;
  /** Function is called when link is clicked */
  onLinkClick?: () => void;
  /** Function is called when user clicks the button */
  onClose?: () => void;
  /** aria-label to be passed onto Close */
  closeAriaLabel?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble: React.FC<HelpBubbleProps> = props => {
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

  if (!showBubble) {
    return null;
  }

  const helpBubbleClasses = classNames(styles.helpbubble, controllerisVisible && styles['helpbubble--visible'], className);
  const verticalPosition = controllerSize && bubbleSize && getVerticalPosition(controllerSize, bubbleSize, variant);
  const arrowClasses = classNames(styles.helpbubble__arrow, {
    [styles['helpbubble__arrow--visible']]: controllerisVisible,
    [styles['helpbubble__arrow--over']]: verticalPosition === HelpBubbleVariant.positionbelow,
    [styles['helpbubble__arrow--under']]: verticalPosition === HelpBubbleVariant.positionabove,
  });
  const contentClasses = classNames(styles.helpbubble__content, {
    [styles['helpbubble__content--close']]: !noCloseButton,
  });

  const bubbleStyle = controllerSize && bubbleSize && getBubbleStyle(controllerSize, bubbleSize, variant);
  const arrowStyle = bubbleStyle && controllerSize && verticalPosition && getArrowStyle(bubbleStyle, controllerSize, verticalPosition);

  const renderLink = (): JSX.Element | undefined => {
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

  return (
    <>
      <div
        id={helpBubbleId}
        ref={bubbleRef}
        className={helpBubbleClasses}
        style={bubbleStyle}
        data-testid={testId}
        data-analyticsid={AnalyticsId.HelpBubble}
        role={'tooltip'}
      >
        <div className={contentClasses}>
          {children}
          {renderLink()}
        </div>
        {!noCloseButton && (
          <div className={styles.helpbubble__close}>
            <Close small onClick={onClose} ariaLabel={closeAriaLabel} />
          </div>
        )}
      </div>
      <div ref={arrowRef} className={arrowClasses} style={arrowStyle} />
    </>
  );
};

export default HelpBubble;
