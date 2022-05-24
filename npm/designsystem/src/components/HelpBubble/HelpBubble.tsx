import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { AnalyticsId } from '../../constants';
import AnchorLink from '../AnchorLink';
import Close from '../Close';

import styles from './styles.module.scss';
import { debounce } from '../../utils/debounce';

export enum HelpBubbleVariant {
  automatic = 'automatic',
  triggertop = 'triggertop',
  triggerbottom = 'triggerbottom',
}

export interface HelpBubbleProps {
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
  linkUrl?: string;
  /** Function is called when link is clicked */
  onLinkClick?: () => void;
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
    onLinkClick,
    onClose,
    controllerRef,
    testId,
  } = props;

  /* Bredde på HelpBubble */
  const BUBBLE_WIDTH_PX = 373;
  /* Hjelpeboblen skal holde avstand til venstre/høyre kant på vinduet */
  const WINDOW_MARGIN_PX = 12;
  /* Hvor ofte skal størrelsen på hjelpeboblen oppdateres når vinduet endrer størrelse */
  const DEBOUNCE_MS = 100;
  /* Y akse Offset på HelpBubble arrow */
  const ARROW_Y_OFFSET = 8;

  let bubblePositionStyle = undefined;
  let arrowPositionStyle = undefined;
  const bubbleRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [bubbleFitsScreenWidth, setBubbleFitsScreenWidth] = useState(false);
  const [bubbleWidth, setBubbleWidth] = useState(0);
  const [arrowWidth, setArrowWidth] = useState(0);
  const [controllerWidth, setControllerWidth] = useState(0);
  const [controllerHeight, setControllerHeight] = useState(0);
  const [bubbleLeft, setBubbleLeft] = useState(0);
  const [bubbleRight, setBubbleRight] = useState(0);
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

  const checkBubbleFitsScreenWidth = () => {
    const windowWidth = document.documentElement.clientWidth;
    setBubbleFitsScreenWidth(windowWidth > BUBBLE_WIDTH_PX + WINDOW_MARGIN_PX * 2);
  };

  const updateXTranslate = () => {
    if (controllerRef?.current && bubbleRef.current) {
      const clientWidth = document.documentElement.clientWidth;
      const controllerX = controllerRef.current.getBoundingClientRect().x;
      const controllerHalf = controllerWidth / 2;

      if (!bubbleFitsScreenWidth) {
        setBubbleLeft(-controllerX + WINDOW_MARGIN_PX);
        setBubbleRight(clientWidth - WINDOW_MARGIN_PX * 2);
      } else {
        const bubbleHalf = bubbleWidth / 2;

        // Viewport overlap kalkulering
        const controllerXMiddle = controllerX + controllerHalf;
        const bubbleControllerDifferenceX = controllerXMiddle - bubbleHalf;
        const bubbleRightOverlap = clientWidth - controllerXMiddle - bubbleHalf;

        // Viewport overlap justering
        const viewportXLeftAdjustment = bubbleControllerDifferenceX < 0 ? bubbleControllerDifferenceX - WINDOW_MARGIN_PX : 0;
        const viewportXRightAdjustment = bubbleRightOverlap < 0 ? bubbleRightOverlap - WINDOW_MARGIN_PX : 0;

        const tempBubbleX = controllerHalf - bubbleHalf;
        setTranslateBubbleX(tempBubbleX - viewportXLeftAdjustment + viewportXRightAdjustment);
        setTranslateArrowX(controllerHalf - arrowWidth / 2);
      }
    }
  };

  const updateYTranslate = () => {
    setTranslateBubbleY(!bubbleAbove ? 0 : -controllerHeight);
    setTranslateArrowY(!bubbleAbove ? 0 - ARROW_Y_OFFSET : -controllerHeight + ARROW_Y_OFFSET);
  };

  const updateControllerSize = () => {
    if (controllerRef?.current) {
      setControllerWidth(controllerRef.current.getBoundingClientRect().width);
      setControllerHeight(controllerRef.current.getBoundingClientRect().height);
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
    if (!bubbleFitsScreenWidth) {
      bubblePositionStyle = {
        left: `${bubbleLeft}px`,
        width: `${bubbleRight}px`,
        transform: `translateY(${translateBubbleY}px)`,
      };
    } else {
      bubblePositionStyle = {
        transform: `translate(${translateBubbleX}px, ${translateBubbleY}px)`,
      };
    }

    arrowPositionStyle = {
      transform: `translate(${translateArrowX}px, ${translateArrowY}px)`,
    };
  };

  const handleScroll = useCallback((): void => {
    checkSpaceAbove();
    updateXTranslate();
  }, []);

  const handleResize = useCallback((): void => {
    checkSpaceAbove();
    updateXTranslate();
  }, []);

  const handleSetBubbleAbove = () => {
    if (variant !== HelpBubbleVariant.automatic) {
      window.removeEventListener('scroll', handleScroll, false);
      window.removeEventListener('resize', handleResize, false);

      setBubbleAbove(variant === HelpBubbleVariant.triggerbottom);
    } else {
      window.addEventListener('scroll', handleScroll, false);
      window.addEventListener('resize', handleResize, false);
    }
  };

  useEffect(() => {
    updateBubbleWidth();
    checkBubbleFitsScreenWidth();
    updateArrowWidth();
    updateXTranslate();
    updateYTranslate();
  });

  useEffect(() => {
    if (showBubble) {
      updateBubbleWidth();
      checkBubbleFitsScreenWidth();
      updateArrowWidth();
      updateXTranslate();
      checkSpaceAbove();
    }
  }, [showBubble]);

  useEffect(() => {
    handleSetBubbleAbove();
  }, [variant]);

  useEffect(() => {
    updateControllerSize();

    return (): void => {
      if (variant === HelpBubbleVariant.automatic) {
        window.removeEventListener('scroll', handleScroll, false);
        window.removeEventListener('resize', handleResize, false);
      }
    };
  }, []);

  const renderMoreHelp = () => {
    return onLinkClick ? (
      <button className={styles['helpbubble__link-button']} onClick={onLinkClick}>
        {linkText && linkText !== undefined ? linkText : 'Mer hjelp'}
      </button>
    ) : (
      linkUrl && <AnchorLink href={linkUrl}>{linkText && linkText !== undefined ? linkText : 'Mer hjelp'}</AnchorLink>
    );
  };

  updatePositionStyle();

  return showBubble ? (
    <>
      <div
        ref={bubbleRef}
        style={bubblePositionStyle}
        className={helpBubbleClasses}
        data-testid={testId}
        data-analyticsid={AnalyticsId.HelpBubble}
      >
        <div className={styles['helpbubble__child-wrapper']}>
          {children}
          {renderMoreHelp()}
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
