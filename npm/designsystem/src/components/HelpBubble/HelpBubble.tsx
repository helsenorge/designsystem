import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { AnalyticsId } from '../../constants';
import AnchorLink from '../AnchorLink';
import Close from '../Close';

import styles from './styles.module.scss';

enum HelpBubbleVariant {
  automatic = 'automatic',
  triggertop = 'triggertop',
  triggerbottom = 'triggerbottom',
}

interface HelpBubbleProps {
  /** Name to display in the avatar. Will be truncated to the first two characters. */
  children: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Determines the placement of the helpbubble */
  variant?: keyof typeof HelpBubbleVariant;
  /** Visible text on the link */
  showBubble?: boolean;
  /** Visible text on the link */
  linkText?: string;
  /** Url the link leads to */
  // TODO: Pass på at denne støtter funksjoner og slik som i hjelpetriggeren i framework
  linkUrl?: string;
  /** Function is called when user clicks the button */
  onClose?: () => void;
  /** Ref for the element the HelpBubble is placed upon */
  controllerRef?: React.RefObject<HTMLElement>;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble: React.FC<HelpBubbleProps> = props => {
  const {
    children,
    className = '',
    variant = HelpBubbleVariant.automatic,
    showBubble,
    linkText,
    linkUrl,
    onClose,
    controllerRef,
    testId,
  } = props;
  let bubblePositionStyle = undefined;
  let arrowPositionStyle = undefined;
  const arrowYOffset = 8;
  const bubbleRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [bubbleWidth, setBubbleWidth] = useState(0);
  const [arrowWidth, setArrowWidth] = useState(0);
  const [controllerWidth, setControllerWidth] = useState(0);
  const [controllerHeight, setControllerHeight] = useState(0);
  const [translateBubbleX, setTranslateBubbleX] = useState(0);
  const [translateBubbleY, setTranslateBubbleY] = useState(0);
  const [translateArrowX, setTranslateArrowX] = useState(0);
  const [translateArrowY, setTranslateArrowY] = useState(0);
  const [bubbleAbove, setBubbleAbove] = useState(variant === HelpBubbleVariant.triggerbottom);

  const helpBubbleClasses = classNames(
    styles.helpbubble,
    { [styles['helpbubble--above']]: bubbleAbove, [styles['helpbubble--below']]: !bubbleAbove },
    className
  );
  const arrowClasses = classNames(styles['helpbubble-arrow'], {
    [styles['helpbubble-arrow--under']]: bubbleAbove,
    [styles['helpbubble-arrow--over']]: !bubbleAbove,
  });

  const checkSpaceAbove = () => {
    if (bubbleRef.current && controllerRef?.current) {
      const controllerBottom = controllerRef.current.getBoundingClientRect().y;
      const bubbleHeight = bubbleRef.current.getBoundingClientRect().height;
      setBubbleAbove(controllerBottom > bubbleHeight);
    }
  };

  const updateTranslate = () => {
    if (controllerRef?.current && bubbleRef.current) {
      setControllerWidth(controllerRef.current.getBoundingClientRect().width);
      setControllerHeight(controllerRef.current.getBoundingClientRect().height);
      const controllerHalf = controllerWidth / 2;
      const bubbleHalf = bubbleWidth / 2;

      // Viewport overlap kalkulering
      const controllerXMiddle = controllerRef.current.getBoundingClientRect().x + controllerHalf;
      const bubbleControllerDifferenceX = controllerXMiddle - bubbleHalf;
      const bubbleRightOverlap = document.documentElement.clientWidth - bubbleControllerDifferenceX;

      // Viewport overlap justering
      const viewportXLeftAdjustment = bubbleControllerDifferenceX < 0 ? bubbleControllerDifferenceX : 0;
      const viewportXRightAdjustment = bubbleRightOverlap < 0 ? bubbleRightOverlap : 0;

      const tempBubbleX = controllerHalf - bubbleHalf;
      setTranslateBubbleX(tempBubbleX - viewportXLeftAdjustment + viewportXRightAdjustment);
      setTranslateBubbleY(!bubbleAbove ? 0 : -controllerHeight);
      setTranslateArrowX(controllerHalf - arrowWidth / 2);
      setTranslateArrowY(!bubbleAbove ? 0 - arrowYOffset : -controllerHeight + arrowYOffset);
    }
  };

  const updateBubbleWidth = () => {
    if (bubbleRef.current) {
      setBubbleWidth(bubbleRef.current.getBoundingClientRect().width);
    }
  };

  const updateArrowWidth = () => {
    if (arrowRef.current) {
      setArrowWidth(arrowRef.current.getBoundingClientRect().width);
    }
  };

  const updatePositionStyle = () => {
    bubblePositionStyle = {
      transform: `translate(${translateBubbleX}px, ${translateBubbleY}px)`,
    };
    arrowPositionStyle = {
      transform: `translate(${translateArrowX}px, ${translateArrowY}px)`,
    };
  };

  const handleScroll = useCallback((): void => {
    checkSpaceAbove();
    updateTranslate();
  }, []);

  const handleResize = useCallback((): void => {
    checkSpaceAbove();
    updateTranslate();
  }, []);

  const handleSetBubbleAbove = () => {
    if (variant !== HelpBubbleVariant.automatic) {
      document.removeEventListener('scroll', handleScroll, false);
      document.removeEventListener('resize', handleResize, false);

      setBubbleAbove(variant === HelpBubbleVariant.triggerbottom);
    } else {
      document.addEventListener('scroll', handleScroll, false);
      document.addEventListener('resize', handleResize, false);
    }
  };

  useEffect(() => {
    updateBubbleWidth();
    updateArrowWidth();
    updateTranslate();
  });

  useEffect(() => {
    if (showBubble) {
      checkSpaceAbove();
      updateBubbleWidth();
      updateArrowWidth();
      updateTranslate();
    }
  }, [showBubble]);

  useEffect(() => {
    handleSetBubbleAbove();
  }, [variant]);

  useEffect(() => {
    return (): void => {
      if (variant === HelpBubbleVariant.automatic) {
        document.removeEventListener('scroll', handleScroll, false);
        document.removeEventListener('resize', handleResize, false);
      }
    };
  }, []);

  updatePositionStyle();

  return showBubble ? (
    <>
      <div
        ref={bubbleRef}
        style={bubblePositionStyle}
        className={helpBubbleClasses}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Avatar}
      >
        <div className={styles['helpbubble__child-wrapper']}>
          {children}
          {linkUrl && <AnchorLink href={linkUrl}>{linkText && linkText !== undefined ? linkText : 'Mer hjelp'}</AnchorLink>}
        </div>
        <div className={styles['helpbubble__close-wrapper']}>
          <Close small onClick={onClose} />
        </div>
      </div>
      <div ref={arrowRef} style={arrowPositionStyle} className={arrowClasses} />
    </>
  ) : null;
};

export default HelpBubble;
