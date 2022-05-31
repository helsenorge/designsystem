import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { AnalyticsId } from '../../constants';
import { useEventListenerState } from '../../hooks/useEventListenerState';
import { useGetDOMRect } from '../../hooks/useGetDOMRect';
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
  const ARROW_Y_OFFSET = 3;

  let bubblePositionStyle = undefined;
  let arrowPositionStyle = undefined;
  const bubbleRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [controllerDOM, resetControllerDOM] = useGetDOMRect(controllerRef, showBubble, 500);
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
      // Henter ut størrelser og posisjoner som trengs til kalkulering av HelpBubble posisjonering
      const clientWidth = document.documentElement.clientWidth;
      const controllerX = controllerDOM.x > 0 ? controllerDOM.x : controllerRef.current.getBoundingClientRect().x;
      const controllerY = controllerDOM.y > 0 ? controllerDOM.y : controllerRef.current.getBoundingClientRect().y;
      const controllerSize = controllerRef.current.getBoundingClientRect();
      const bubbleSize = bubbleRef.current.getBoundingClientRect();
      const arrowSize = arrowRef.current.getBoundingClientRect();
      const controllerHalfWidth = controllerSize.width / 2;
      const newBubbleX = getBubbleXAdjustment(bubbleSize.width, controllerX, controllerHalfWidth, clientWidth);

      if (!checkBubbleFitsScreenWidth()) {
        setCustomBubbleWidth(clientWidth - WINDOW_MARGIN_PX * 2);
      }

      setTranslateBubble({
        x: newBubbleX,
        y: bubbleAbove.current
          ? controllerY - arrowSize.height - bubbleSize.height + ARROW_Y_OFFSET
          : controllerY + controllerSize.height + arrowSize.height - ARROW_Y_OFFSET,
      });
      setTranslateArrow({
        x: controllerX + controllerHalfWidth - arrowSize.width / 2,
        y: bubbleAbove.current ? controllerY - arrowSize.height : controllerY + controllerSize.height,
      });
    }
  };

  const getBubbleXAdjustment = (bubbleWidth: number, controllerX: number, controllerHalf: number, clientWidth: number) => {
    const bubbleHalfWidth = bubbleWidth / 2;

    // Kalkulerer om HelpBubble går utenfor viewporten
    const controllerXMiddle = controllerX + controllerHalf;
    const bubbleControllerDifferenceX = controllerXMiddle - bubbleHalfWidth;
    const bubbleRightOverlap = clientWidth - controllerXMiddle - bubbleHalfWidth;

    // Justerer x akse posisjon utifra funnene over
    const viewportXLeftAdjustment = bubbleControllerDifferenceX < 0 ? bubbleControllerDifferenceX - WINDOW_MARGIN_PX : 0;
    const viewportXRightAdjustment = bubbleRightOverlap < 0 ? bubbleRightOverlap - WINDOW_MARGIN_PX : 0;

    // Returnerer den justerte x posisjonen
    const tempBubbleX = controllerX + controllerHalf - bubbleHalfWidth;
    return tempBubbleX - viewportXLeftAdjustment + viewportXRightAdjustment;
  };

  const updatePositionStyle = () => {
    if (checkBubbleFitsScreenWidth()) {
      bubblePositionStyle = {
        left: `${translateBubble.x}px`,
        top: `${translateBubble.y}px`,
      };
    } else {
      bubblePositionStyle = {
        left: `${translateBubble.x}px`,
        top: `${translateBubble.y}px`,
        width: `${customBubbleWidth}px`,
      };
    }

    arrowPositionStyle = {
      left: `${translateArrow.x}px`,
      top: `${translateArrow.y}px`,
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
    handleBubbleUpdate();
  }, [controllerDOM]);

  useEffect(() => {
    if (showBubble) {
      setInitialRender(false);
      addEventListeners();
      handleBubbleUpdate();
    } else if (!showBubble) {
      setInitialRender(true);
      removeEventListeners();
      resetControllerDOM();
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
