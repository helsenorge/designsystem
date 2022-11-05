import { useState, useEffect } from 'react';

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
 * Overvåk et element og finn alle fokuserbare elementer inne i elementet. Bruker MutationObserver slik at eventuelle
 * nye elementer som legges til også vil inkluderes i listen.
 * @param ref Element som skal observeres
 * @returns Liste med fokuserbare HTML-elementer
 */
export const useFocusableElements = (ref: React.RefObject<HTMLElement>): NodeListOf<HTMLElement> | undefined => {
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

  return focusableElementList;
};
