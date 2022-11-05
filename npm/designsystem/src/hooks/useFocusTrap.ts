import React, { useEffect } from 'react';
import { getDocumentActiveElement } from './focus-utils';
import { useFocusableElements } from './useFocusableElements';

/**
 * Lås fokus til et bestemt element. Bruker vil bare kunne tabbe mellom fokuserbare elementer innenfor elementet.
 * @param ref Alle barn av dette elementet vil være fokuserbare, elementer utenfor vil ikke det
 * @param trapFocus Om fokus skal "trappes" innenfor elementet eller ikke. Default=true.
 * @param autofocus Om fokus automatisk skal settes til første fokuserbare element. Default=false.
 */
export const useFocusTrap = (ref: React.RefObject<HTMLElement>, trapFocus: boolean = true, autofocus: boolean = false): void => {
  const focusableElementList = useFocusableElements(ref);

  const handleKeyboardEvent = (e: KeyboardEvent): void => {
    if (trapFocus && ref.current && focusableElementList?.length && e.key === 'Tab') {
      const activeElement = getDocumentActiveElement(ref.current);
      const firstElement = focusableElementList[0];
      const lastElement = focusableElementList.length === 1 ? firstElement : focusableElementList[focusableElementList.length - 1];

      if (e.shiftKey && activeElement === firstElement) {
        /* shift + tab */
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && activeElement === lastElement) {
        /* tab */
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (autofocus && trapFocus && focusableElementList?.length) {
      focusableElementList[0].focus();
    }

    ref.current?.addEventListener('keydown', handleKeyboardEvent);

    return (): void => {
      ref.current?.removeEventListener('keydown', handleKeyboardEvent);
    };
  }, [ref, trapFocus, autofocus, focusableElementList]); // focusableElementList må være med som dependency for at handleKeyboardEvent skal få oppdatert state
};

export default useFocusTrap;
