import { deepContains } from '../utils/deepContains';
import { getDocumentActiveElement } from '../utils/focus';

/**
 * Gir en funksjon som flytter fokus tilbake til trigger-elementet hvis fokus står inne i elementet som lukkes.
 * @param ref Elementet/elementene som utgjør innholdet som lukkes
 * @param triggerRef Trigger-elementet som skal få fokus tilbake
 * @returns Funksjon som flytter fokus til triggeren ved behov
 */
export const useReturnFocusOnClose = (
  ref: React.RefObject<HTMLElement | null> | React.RefObject<HTMLElement | null>[],
  triggerRef: React.RefObject<HTMLElement | null>
): (() => void) => {
  const refArray = Array.isArray(ref) ? ref : [ref];

  return (): void => {
    const focusIsInside = refArray.some(r => {
      const activeElement = r.current ? getDocumentActiveElement(r.current) : null;
      return !!r.current && deepContains(r.current, activeElement);
    });

    if (focusIsInside) {
      triggerRef.current?.focus();
    }
  };
};
