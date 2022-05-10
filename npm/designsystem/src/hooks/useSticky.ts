import React, { useState } from 'react';
import { useLayoutEvent } from './useLayoutEvent';

interface UseStickReturnValues {
  /** Toppen av elementet er utenfor vinduet */
  isOutsideWindow: boolean;
  /** Innholdet er på vei helt ut av vinduet   */
  isLeavingWindow: boolean;
  /** Høyde på det sticky elementet i pixler */
  offsetHeight: number | undefined;
  /** Bredden til innholdet i pixler */
  contentWidth: number | undefined;
}
/**
 * Sett et element til sticky hvis et annet element er delvis utenfor vinduet
 *
 * @param contentRef Element som sjekkes om det er utenfor eller innenfor vinduet
 * @param stickyRef Element som skal bli sticky
 * @returns Properties som kan brukes til å sette elementet sticky eller absolute
 */
export const useSticky = (contentRef: React.RefObject<HTMLElement>, stickyRef: React.RefObject<HTMLElement>): UseStickReturnValues => {
  const [isOutsideWindow, setIsOutsideWindow] = useState<boolean>(false);
  const [isLeavingWindow, setIsLeavingWindow] = useState<boolean>(false);
  const [offsetHeight, setOffsetHeight] = useState<number>();
  const [contentWidth, setContentWidth] = useState<number>();

  const handleLayoutChange = () => {
    const {
      top: topOfContentElement = 0,
      width: widthOfContentElement = 0,
      bottom: bottomOfContentElement = 0,
    } = contentRef.current?.getBoundingClientRect() || {};
    const heightOfStickyElement = stickyRef.current?.getBoundingClientRect().height ?? 0;
    setIsOutsideWindow(topOfContentElement <= 0);
    setIsLeavingWindow(bottomOfContentElement <= heightOfStickyElement);
    setContentWidth(widthOfContentElement);
    setOffsetHeight(heightOfStickyElement);
  };

  useLayoutEvent(handleLayoutChange, ['resize', 'scroll']);

  return { isOutsideWindow, isLeavingWindow, offsetHeight, contentWidth };
};
