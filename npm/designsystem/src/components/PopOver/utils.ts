import type { CSSProperties } from 'react';

export enum PopOverVariant {
  positionautomatic = 'positionautomatic',
  positionbelow = 'positionbelow',
  positionabove = 'positionabove',
}

type HorizontalPosition = 'left' | 'right' | 'floating';
type BubblePosition = 'leftabove' | 'leftbelow' | 'rightabove' | 'rightbelow' | 'floatingabove' | 'floatingbelow';

/** Bredde på hjelpeboble */
const BUBBLE_WIDTH_PX = 373;
/** Hjelpeboblen skal holde avstand til venstre/høyre kant på vinduet */
const WINDOW_MARGIN_PX = 12;
/** Vertikal avstand fra hjelpeboble til kontroller */
const BUBBLE_VERTICAL_OFFSET_PX = 16;
/** Høyde/bredde på pil */
const ARROW_WIDTH_PX = 20;
/** Avstand fra pil til hjelpeboble */
const ARROW_VERTICAL_OFFSET_PX = 4;
/** Pilen skal holde avstand til venstre/høyre kant av hjelpeboblen */
const ARROW_HORIZONTAL_MARGIN_PX = 12;

/**
 * Beregn om hjelpeboblen skal vises over eller under kontrolleren
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @param variant Ønsket plassering av hjelpeboblen (over/under/automatisk)
 * @returns Om hjelpeboblen skal vises over eller under
 */
export const getVerticalPosition = (
  controllerSize: DOMRect,
  bubbleSize: DOMRect,
  variant: keyof typeof PopOverVariant
): keyof typeof PopOverVariant => {
  if (variant !== PopOverVariant.positionautomatic) {
    return variant;
  }
  if (controllerSize.top > bubbleSize.height + BUBBLE_VERTICAL_OFFSET_PX) {
    return PopOverVariant.positionabove;
  } else {
    return PopOverVariant.positionbelow;
  }
};

/**
 * Finn horisontalt midtpunkt på kontrolleren i forhold til venstre kant av vinduet
 * @param controllerSize DOMRect for controlleren
 * @returns Horisontalt senter av controlleren i px
 */
const getControllerLeftCenterPx = (controllerSize: DOMRect): number => controllerSize.left + controllerSize.width / 2;

/**
 * Finn horisontalt midtpunkt på kontrolleren i forhold til høyre kant av vinduet
 * @param controllerSize DOMRect for controlleren
 * @returns Horisontalt senter av controlleren i px
 */
const getControllerRightCenterPx = (controllerSize: DOMRect): number =>
  document.documentElement.clientWidth - controllerSize.right + controllerSize.width / 2;

/**
 * Finn venstre kant av hjelpeboblen i forhold til kontrolleren
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @returns Venstre kant av hjelpeboblen i px
 */
const getBubbleLeftPx = (controllerSize: DOMRect, bubbleSize: DOMRect): number => {
  const controllerHorizontalCenterPx = getControllerLeftCenterPx(controllerSize);

  return controllerHorizontalCenterPx - bubbleSize.width / 2;
};

/**
 * Finn høyre kant av hjelpeboblen i forhold til kontrolleren
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @returns Høyre kant av hjelpeboblen i px
 */
const getBubbleRightPx = (controllerSize: DOMRect, bubbleSize: DOMRect): number => {
  const bubbleLeftPx = getBubbleLeftPx(controllerSize, bubbleSize);

  return bubbleLeftPx + bubbleSize.width;
};

/**
 * Sjekk om venstre kant av hjelpeboblen er innenfor vinduet
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @returns true dersom venstre kant er innenfor vinduet
 */
const getBubbleLeftVisible = (controllerSize: DOMRect, bubbleSize: DOMRect): boolean => {
  const bubbleLeftPx = getBubbleLeftPx(controllerSize, bubbleSize);

  return bubbleLeftPx > WINDOW_MARGIN_PX;
};

/**
 * Sjekk om høyre kant av hjelpeboblen er innenfor vinduet
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @returns true dersom høyre kant er innenfor vinduet
 */
const getBubbleRightIsVisible = (controllerSize: DOMRect, bubbleSize: DOMRect): boolean => {
  const bubbleRightPx = getBubbleRightPx(controllerSize, bubbleSize);

  return bubbleRightPx < document.documentElement.clientWidth - WINDOW_MARGIN_PX;
};

/**
 * Finn riktig horisontal plassering til hjelpeboblen
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @returns left, right eller floating
 */
const getHorizontalPosition = (controllerSize: DOMRect, bubbleSize: DOMRect): HorizontalPosition => {
  if (!getBubbleRightIsVisible(controllerSize, bubbleSize)) {
    return 'right';
  }
  if (!getBubbleLeftVisible(controllerSize, bubbleSize)) {
    return 'left';
  }

  return 'floating';
};

/**
 * Finn vertikal plassering av hjelpeboblen når den skal vises over
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @returns "Top" for hjelpeboblen i px
 */
const getBubbleAbovePx = (controllerSize: DOMRect, bubbleSize: DOMRect): number =>
  controllerSize.top - BUBBLE_VERTICAL_OFFSET_PX - bubbleSize.height;

/**
 * Finn vertikal plassering av hjelpeboblen når den skal vises under
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @returns "Top" for hjelpeboblen i px
 */
const getBubbleBelowPx = (controllerSize: DOMRect): number => controllerSize.bottom + BUBBLE_VERTICAL_OFFSET_PX;

/**
 * Finn maks bredde på hjelpeboblen i forhold til vinduet
 * @returns Bredde på hjelpeboblen i px
 */
const getBubbleWidth = (): number => document.documentElement.clientWidth - WINDOW_MARGIN_PX * 2;

/**
 * Sjekk om hjelpeboblen har plass i vinduet
 * @returns true dersom det er plass til hjelpeboblen i vinduet
 */
const getBubbleFitsInWindow = (): boolean => {
  return document.documentElement.clientWidth > BUBBLE_WIDTH_PX + WINDOW_MARGIN_PX * 2;
};

/**
 * Finn vertikal plassering av pilen når den skal vises over
 * @param controllerSize DOMRect for controlleren
 * @returns "Top" for pilen i px
 */
const getArrowTopxPx = (controllerSize: DOMRect): number => controllerSize.top - BUBBLE_VERTICAL_OFFSET_PX - ARROW_VERTICAL_OFFSET_PX;

/**
 * Finn horisontal plassering av pilen i forhold til venstre kant av vinduet
 * @param controllerSize DOMRect for controlleren
 * @returns Venstre kant av pilen i px
 */
const getArrowLeftPx = (controllerSize: DOMRect): number => getControllerLeftCenterPx(controllerSize) - ARROW_WIDTH_PX / 2;

/**
 * Finn horisontal plassering av pilen
 * @param controllerSize DOMRect for controlleren
 * @returns Venstre kant av pilen i px
 */
const getArrowRightPx = (controllerSize: DOMRect): number => getControllerRightCenterPx(controllerSize) - ARROW_WIDTH_PX / 2;

/**
 * Finn riktig plassering av hjelpeboblen
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @param variant Ønsket plassering av hjelpeboblen (over/under)
 * @returns Beste mulige plassering av hjelpeboblen
 */
const getBubblePosition = (controllerSize: DOMRect, bubbleSize: DOMRect, variant: keyof typeof PopOverVariant): BubblePosition => {
  const horizontalPosition = getHorizontalPosition(controllerSize, bubbleSize);
  const verticalPosition = getVerticalPosition(controllerSize, bubbleSize, variant);

  if (horizontalPosition === 'left') {
    if (verticalPosition === PopOverVariant.positionabove) {
      return 'leftabove';
    }
    return 'leftbelow';
  }

  if (horizontalPosition === 'right') {
    if (verticalPosition === PopOverVariant.positionabove) {
      return 'rightabove';
    }
    return 'rightbelow';
  }

  if (verticalPosition === PopOverVariant.positionabove) {
    return 'floatingabove';
  }

  return 'floatingbelow';
};

/**
 * Finn riktig plassering av hjelpeboblen
 * @param controllerSize DOMRect for controlleren
 * @param bubbleSize DOMRect for hjelpeboblen
 * @param variant Ønsket plassering av hjelpeboblen (over/under)
 * @returns CSSProperties som plasserer hjelpeboblen riktig
 */
export const getBubbleStyle = (controllerSize: DOMRect, bubbleSize: DOMRect, variant: keyof typeof PopOverVariant): CSSProperties => {
  const bubblePosition = getBubblePosition(controllerSize, bubbleSize, variant);
  const bubbleWidth = !getBubbleFitsInWindow() ? getBubbleWidth() : undefined;

  if (bubblePosition === 'leftabove') {
    return {
      left: WINDOW_MARGIN_PX,
      top: getBubbleAbovePx(controllerSize, bubbleSize),
      width: bubbleWidth,
    };
  }
  if (bubblePosition === 'leftbelow') {
    return { left: WINDOW_MARGIN_PX, top: getBubbleBelowPx(controllerSize), width: bubbleWidth };
  }
  if (bubblePosition === 'rightabove') {
    return { right: WINDOW_MARGIN_PX, top: getBubbleAbovePx(controllerSize, bubbleSize), width: bubbleWidth };
  }
  if (bubblePosition === 'rightbelow') {
    return { right: WINDOW_MARGIN_PX, top: getBubbleBelowPx(controllerSize), width: bubbleWidth };
  }

  if (bubblePosition === 'floatingbelow') {
    return { left: getBubbleLeftPx(controllerSize, bubbleSize), top: getBubbleBelowPx(controllerSize), width: bubbleWidth };
  }

  return { left: getBubbleLeftPx(controllerSize, bubbleSize), top: getBubbleAbovePx(controllerSize, bubbleSize), width: bubbleWidth };
};

/**
 * Finn riktig plassering av pilen
 * @param bubbleStyle CSSProperties for hjelpeboblen
 * @param controllerSize DOMRect for kontrolleren
 * @param verticalPosition Ønsket plassering av hjelpeboblen (over/under)
 * @returns CSSProperties som plasserer pilen riktig
 */
export const getArrowStyle = (
  bubbleStyle: CSSProperties,
  controllerSize: DOMRect,
  verticalPosition: keyof typeof PopOverVariant
): CSSProperties => {
  const leftPx = getArrowLeftPx(controllerSize);
  const rightPx = getArrowRightPx(controllerSize);
  const minLeftPx = (bubbleStyle.left as number) + ARROW_HORIZONTAL_MARGIN_PX;
  const minRightPx = (bubbleStyle.right as number) + ARROW_HORIZONTAL_MARGIN_PX;

  if (bubbleStyle.right) {
    if (verticalPosition === PopOverVariant.positionabove) {
      return {
        right: rightPx > minRightPx ? rightPx : minRightPx,
        top: getArrowTopxPx(controllerSize),
      };
    }

    return {
      right: rightPx > minRightPx ? rightPx : minRightPx,
      top: controllerSize.bottom,
    };
  }

  if (verticalPosition === PopOverVariant.positionabove) {
    return {
      left: leftPx > minLeftPx ? leftPx : minLeftPx,
      top: getArrowTopxPx(controllerSize),
    };
  }

  return {
    left: leftPx > minLeftPx ? leftPx : minLeftPx,
    top: controllerSize.bottom,
  };
};
