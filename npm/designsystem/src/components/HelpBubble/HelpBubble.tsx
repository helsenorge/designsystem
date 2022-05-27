import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { AnalyticsId } from '../../constants';
import { useEventListenerState } from '../../hooks/useEventListenerState';
import AnchorLink from '../AnchorLink';
import Close from '../Close';

import styles from './styles.module.scss';

export enum HelpBubbleVariant {
  positionautomatic = 'positionautomatic',
  positionbelow = 'positionbelow',
  positionabove = 'positionabove',
}

export interface HelpBubbleProps {
  /** Name to display in the avatar. Will be truncated to the first two characters. */
  children: React.ReactNode;
  /** Ref for the element the HelpBubble is placed upon */
  controllerRef: React.RefObject<HTMLElement | SVGSVGElement>;
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
  /** aria-label to be passed onto Close */
  closeAriaLabel?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpBubble: React.FC<HelpBubbleProps> = props => {
  const {
    children,
    controllerRef,
    className = '',
    variant = HelpBubbleVariant.positionautomatic,
    showBubble,
    linkText = 'Mer hjelp',
    linkUrl,
    onLinkClick,
    onClose,
    closeAriaLabel,
    testId,
  } = props;

  /* Bredde på HelpBubble */
  const BUBBLE_WIDTH_PX = 373;
  /* Hjelpeboblen skal holde avstand til venstre/høyre kant på vinduet */
  const WINDOW_MARGIN_PX = 12;
  /* Y akse Offset på HelpBubble arrow */
  const ARROW_Y_OFFSET = 8;

  let bubblePositionStyle = undefined;
  let arrowPositionStyle = undefined;
  const bubbleRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [initialRender, setInitialRender] = useState(true);
  const [eventListenerVariant, setEventListenerVariant] = useEventListenerState(variant);
  const [customBubbleWidth, setCustomBubbleWidth] = useState(0);
  const [translateBubble, setTranslateBubble] = useState({ x: 0, y: 0 });
  const [translateArrow, setTranslateArrow] = useState({ x: 0, y: 0 });
  const [bubbleAbove, setBubbleAbove] = useEventListenerState(variant !== HelpBubbleVariant.positionbelow);

  const helpBubbleClasses = classNames(
    styles.helpbubble,
    {
      [styles['helpbubble--initial-render']]: initialRender,
      [styles['helpbubble--above']]: bubbleAbove.current,
      [styles['helpbubble--below']]: !bubbleAbove.current,
    },
    className
  );
  const arrowClasses = classNames(styles['helpbubble-arrow'], {
    [styles['helpbubble-arrow--initial-render']]: initialRender,
    [styles['helpbubble-arrow--under']]: bubbleAbove.current,
    [styles['helpbubble-arrow--over']]: !bubbleAbove.current,
  });

  const checkSpaceAbove = () => {
    if (eventListenerVariant.current === HelpBubbleVariant.positionautomatic && bubbleRef.current && controllerRef.current) {
      const controllerBottom = controllerRef.current.getBoundingClientRect().y;
      const bubbleHeight = bubbleRef.current.getBoundingClientRect().height;
      setBubbleAbove(controllerBottom > bubbleHeight);
    }
  };

  const checkBubbleFitsScreenWidth = () => {
    const windowWidth = document.documentElement.clientWidth;
    return windowWidth > BUBBLE_WIDTH_PX + WINDOW_MARGIN_PX * 2;
  };

  const updateTranslate = () => {
    if (controllerRef.current && bubbleRef.current && arrowRef.current) {
      const clientWidth = document.documentElement.clientWidth;
      const controllerX = controllerRef.current.getBoundingClientRect().x;
      const controllerSize = controllerRef.current.getBoundingClientRect();
      const bubbleWidth = bubbleRef.current.getBoundingClientRect().width;
      const arrowWidth = arrowRef.current.getBoundingClientRect().width;
      const controllerHalf = controllerSize.width / 2;
      let newBubbleX = 0;

      if (!checkBubbleFitsScreenWidth()) {
        newBubbleX = -controllerX + WINDOW_MARGIN_PX;
        setCustomBubbleWidth(clientWidth - WINDOW_MARGIN_PX * 2);
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
        newBubbleX = tempBubbleX - viewportXLeftAdjustment + viewportXRightAdjustment;
      }

      setTranslateBubble({ x: newBubbleX, y: !bubbleAbove.current ? 0 : -controllerSize.height });
      setTranslateArrow({
        x: controllerHalf - arrowWidth / 2,
        y: !bubbleAbove.current ? 0 - ARROW_Y_OFFSET : -controllerSize.height + ARROW_Y_OFFSET,
      });
    }
  };

  const updatePositionStyle = () => {
    if (!checkBubbleFitsScreenWidth()) {
      bubblePositionStyle = {
        left: `${translateBubble.x}px`,
        width: `${customBubbleWidth}px`,
        transform: `translateY(${translateBubble.y}px)`,
      };
    } else {
      bubblePositionStyle = {
        transform: `translate(${translateBubble.x}px, ${translateBubble.y}px)`,
      };
    }

    arrowPositionStyle = {
      transform: `translate(${translateArrow.x}px, ${translateArrow.y}px)`,
    };
  };

  const handleBubbleUpdate = () => {
    checkSpaceAbove();
    updateTranslate();
  };

  const handleScroll = useCallback((): void => {
    handleBubbleUpdate();
  }, []);

  const handleResize = useCallback((): void => {
    handleBubbleUpdate();
  }, []);

  const addEventListeners = () => {
    window.addEventListener('scroll', handleScroll, false);
    window.addEventListener('resize', handleResize, false);
  };

  const removeEventListeners = () => {
    window.removeEventListener('scroll', handleScroll, false);
    window.removeEventListener('resize', handleResize, false);
  };

  useEffect(() => {
    updateTranslate();

    return (): void => {
      removeEventListeners();
    };
  }, []);

  useEffect(() => {
    if (showBubble) {
      setInitialRender(false);
      addEventListeners();
      handleBubbleUpdate();
    } else if (!showBubble) {
      setInitialRender(true);
      removeEventListeners();
    }
  }, [showBubble]);

  useEffect(() => {
    setEventListenerVariant(variant);
    setBubbleAbove(variant !== HelpBubbleVariant.positionbelow);
    handleBubbleUpdate();
  }, [variant]);

  updatePositionStyle();

  const renderLink = () => {
    if (onLinkClick && linkText) {
      return (
        <button className={styles['helpbubble__link-button']} onClick={onLinkClick}>
          {linkText}
        </button>
      );
    } else if (linkUrl && linkText) {
      return <AnchorLink href={linkUrl}>{linkText}</AnchorLink>;
    }
  };

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
          {renderLink()}
        </div>
        <div className={styles['helpbubble__close-wrapper']}>
          <Close small onClick={onClose} ariaLabel={closeAriaLabel} />
        </div>
      </div>
      <div ref={arrowRef} style={arrowPositionStyle} className={arrowClasses} />
    </>
  ) : null;
};

export default HelpBubble;
