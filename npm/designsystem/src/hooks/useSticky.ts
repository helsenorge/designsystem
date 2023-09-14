import React, { useState } from 'react';

import { useLayoutEvent } from './useLayoutEvent';

interface UseStickyReturnValues {
  /** Toppen eller bunnen av elementet er utenfor vinduet */
  isOutsideWindow: boolean;
  /** Innholdet er på vei helt ut av vinduet. Fungerer bare med stickyPosition=top. */
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
 * @param stickyPosition Om det sticky elementet er ment å vises øverst eller nederst på skjermen. Default: top
 * @returns Properties som kan brukes til å sette elementet sticky eller absolute
 */
export const useSticky = (
  contentRef: React.RefObject<HTMLElement>,
  stickyRef: React.RefObject<HTMLElement>,
  stickyPosition: 'top' | 'bottom' = 'top'
): UseStickyReturnValues => {
  const [isOutsideWindow, setIsOutsideWindow] = useState<boolean>(false);
  const [isLeavingWindow, setIsLeavingWindow] = useState<boolean>(false);
  const [offsetHeight, setOffsetHeight] = useState<number>();
  const [contentWidth, setContentWidth] = useState<number>();

  const handleLayoutChange = (): void => {
    const {
      top: topOfContentElement = 0,
      width: widthOfContentElement = 0,
      bottom: bottomOfContentElement = 0,
    } = contentRef.current?.getBoundingClientRect() || {};
    const heightOfStickyElement = stickyRef.current?.getBoundingClientRect().height ?? 0;
    setIsOutsideWindow(stickyPosition === 'top' ? topOfContentElement <= 0 : bottomOfContentElement > window.innerHeight);

    setIsLeavingWindow(bottomOfContentElement <= heightOfStickyElement);
    setContentWidth(widthOfContentElement);
    setOffsetHeight(heightOfStickyElement);
  };

  useLayoutEvent(handleLayoutChange, ['resize', 'scroll']);

  return { isOutsideWindow, isLeavingWindow, offsetHeight, contentWidth };
};
