import { useEffect } from 'react';

import { useFocusableElements } from './useFocusableElements';
import { getDocumentActiveElement } from '../utils/focus';

/**
 * Lås fokus til et bestemt element. Bruker vil bare kunne tabbe mellom fokuserbare elementer innenfor elementet.
 * @param ref Alle barn av dette elementet vil være fokuserbare, elementer utenfor vil ikke det
 * @param trapFocus Om fokus skal "trappes" innenfor elementet eller ikke. Default=true.
 */
export const useFocusTrap = (ref: React.RefObject<HTMLElement | null>, trapFocus = true): void => {
  const focusableElementList = useFocusableElements(ref);

  const handleKeyboardEvent = (e: KeyboardEvent): void => {
    if (trapFocus && ref.current && focusableElementList?.length && e.key === 'Tab') {
      const activeElement = getDocumentActiveElement(ref.current);
      const firstElement = focusableElementList[0];
      const lastElement = focusableElementList.length === 1 ? firstElement : focusableElementList[focusableElementList.length - 1];

      // Handles non-listed elements inside the trap (an element with tabindex="-1") that was focused programmatically)
      const isAtOrBeforeFirst =
        activeElement === firstElement ||
        (!!activeElement && (firstElement.compareDocumentPosition(activeElement) & Node.DOCUMENT_POSITION_PRECEDING) !== 0);
      const isAtOrAfterLast =
        activeElement === lastElement ||
        (!!activeElement && (lastElement.compareDocumentPosition(activeElement) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0);

      if (e.shiftKey && isAtOrBeforeFirst) {
        /* shift + tab */
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && isAtOrAfterLast) {
        /* tab */
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    ref.current?.addEventListener('keydown', handleKeyboardEvent);

    return (): void => {
      ref.current?.removeEventListener('keydown', handleKeyboardEvent);
    };
  }, [ref, trapFocus, focusableElementList]); // focusableElementList må være med som dependency for at handleKeyboardEvent skal få oppdatert state
};

export default useFocusTrap;
