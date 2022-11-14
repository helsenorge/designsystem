import React, { useEffect } from 'react';
import { useElementList } from './useElementList';
import { FOCUSABLE_SELECTORS } from './useFocusableElements';

/**
 * Skru av og på fokus på fokuserbare elementer slik at de kan være en del av DOMen, men samtidig
 * ikke kunne fokuseres/tabbes til med tastaturet.
 * @param ref Alle barn av dette elementet vil sjekkes for om de er fokuserbare
 * @param allowFocus Om elementene skal være fokuserbare eller ikke
 * @returns void
 */
export const useFocusToggle = (ref: React.RefObject<HTMLElement>, allowFocus?: boolean): void => {
  // Kan ikke lytte på endringer i attributter, fordi det vil føre til en loop når vi endrer dem etterpå
  const focusableElementList = useElementList(ref, FOCUSABLE_SELECTORS, { attributes: false });

  useEffect(() => {
    const TABINDEX_ATTRIBUTE_NAME = 'tabindex';
    const PREVIOUS_TABINDEX_ATTRIBUTE_NAME = 'data-tabindex';
    if (allowFocus) {
      focusableElementList?.forEach(el => {
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
      focusableElementList?.forEach(el => {
        // Hvis elementet allerede har tabIndex, ta vare på den før vi gjør det umulig å
        // tabbe til det.
        if (el.hasAttribute(TABINDEX_ATTRIBUTE_NAME)) {
          el.setAttribute(PREVIOUS_TABINDEX_ATTRIBUTE_NAME, `${el.tabIndex}`);
        }
        el.tabIndex = -1;
      });
    }
  }, [ref, allowFocus, focusableElementList]);
};
