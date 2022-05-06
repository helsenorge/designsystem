import React, { useEffect, useState } from 'react';

// Fra https://github.com/KittyGiraudel/focusable-selectors
export const FOCUSABLE_SELECTORS = [
  'a[href]:not([tabindex^="-"])',
  'area[href]:not([tabindex^="-"])',
  'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])',
  'input[type="radio"]:not([disabled]):not([tabindex^="-"])',
  'select:not([disabled]):not([tabindex^="-"])',
  'textarea:not([disabled]):not([tabindex^="-"])',
  'button:not([disabled]):not([tabindex^="-"])',
  'iframe:not([tabindex^="-"])',
  'audio[controls]:not([tabindex^="-"])',
  'video[controls]:not([tabindex^="-"])',
  '[contenteditable]:not([tabindex^="-"])',
  '[tabindex]:not([tabindex^="-"])',
].join(',');

/**
 * Skru av og på fokus på fokuserbare elementer slik at de kan være en del av DOMen, men samtidig
 * ikke kunne fokuseres/tabbes til med tastaturet.
 *
 * Bruker MutationObserver slik at eventuelle nye elementer som legges til også vil miste/få fokus.
 *
 * @param ref Alle barn av dette elementet vil sjekkes for om de er fokuserbare
 * @param allowFocus Om elementene skal være fokuserbare eller ikke
 * @returns Liste med potensielt fokuserbare elementer
 */
export const useFocusToggle = (ref: React.RefObject<HTMLElement>, allowFocus?: boolean): NodeListOf<HTMLElement> | undefined => {
  const [focusableElementList, setFocusableElementList] = useState<NodeListOf<HTMLElement>>();

  useEffect(() => {
    const handleMutationChange = () => {
      const elementList = ref.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
      setFocusableElementList(elementList);
    };

    const mutationObserver = new MutationObserver(handleMutationChange);
    if (ref?.current) {
      mutationObserver.observe(ref.current, { subtree: true, childList: true });
    }

    handleMutationChange();

    return (): void => {
      mutationObserver.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    const TABINDEX_ATTRIBUTE_NAME = 'tabindex';
    const PREVIOUS_TABINDEX_ATTRIBUTE_NAME = 'data-tabindex';
    if (allowFocus) {
      focusableElementList?.forEach((el) => {
        // Sett tabIndex tilbake til verdien den hadde før, eller fjern tabIndex
        // slik at elementet kan tabbes til igjen.
        const prevTabIndex = el.getAttribute(PREVIOUS_TABINDEX_ATTRIBUTE_NAME);
        if (prevTabIndex) {
          el.setAttribute(TABINDEX_ATTRIBUTE_NAME, prevTabIndex);
        } else {
          el.removeAttribute(TABINDEX_ATTRIBUTE_NAME);
        }
      });
    } else {
      focusableElementList?.forEach((el) => {
        // Hvis elementet allerede har tabIndex, ta vare på den før vi gjør det umulig å
        // tabbe til det.
        if (el.hasAttribute(TABINDEX_ATTRIBUTE_NAME)) {
          el.setAttribute(PREVIOUS_TABINDEX_ATTRIBUTE_NAME, `${el.tabIndex}`);
        }
        el.tabIndex = -1;
      });
    }
  }, [allowFocus, focusableElementList]);

  return focusableElementList;
};
