import React, { useRef, useEffect } from 'react';
import { getDocumentActiveElement } from './focus-utils';
import { FOCUSABLE_SELECTORS } from './useFocusToggle';

export function useFocusTrap(): React.MutableRefObject<HTMLDivElement | null> {
  const elRef = useRef<HTMLDivElement>(null);

  function handleFocus(e: KeyboardEvent): void {
    const node = elRef.current;
    const isTabPressed = e.key === 'Tab';

    if (!node || !isTabPressed) {
      return;
    }

    const activeElement = getDocumentActiveElement(node);

    const focusElements = node?.querySelectorAll(FOCUSABLE_SELECTORS),
      firstFocusableEl = (focusElements[0] as unknown) as HTMLElement,
      lastFocusableEl =
        focusElements.length === 1 ? firstFocusableEl : ((focusElements[focusElements.length - 1] as unknown) as HTMLElement);

    if (e.shiftKey) {
      /* shift + tab */
      if (activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } /* tab */ else {
      if (activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }

  function handleClick(e: MouseEvent): void {
    const node = elRef.current;

    if (!node) {
      return;
    }

    const focusElements = (node.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    ) as unknown) as HTMLElement[];
    if (focusElements.length === 1) {
      focusElements[0].focus();
      e.preventDefault();
    }
  }

  useEffect(() => {
    const node = (elRef.current as unknown) as HTMLElement;
    node.addEventListener('keydown', handleFocus);
    node.addEventListener('click', handleClick);
    return (): void => {
      node.removeEventListener('keydown', handleFocus);
      node.removeEventListener('click', handleClick);
    };
  }, []);

  return elRef;
}

export default useFocusTrap;
