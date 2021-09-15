import React, { useRef, useEffect } from 'react';

export default function useFocusTrap() {
  const elRef = useRef(null);

  function handleFocus(e: KeyboardEvent) {
    const node = (elRef.current as unknown) as HTMLElement;

    const focusElements = node.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      ),
      firstFocusableEl = (focusElements[0] as unknown) as HTMLElement,
      lastFocusableEl =
        focusElements.length === 1 ? firstFocusableEl : ((focusElements[focusElements.length - 1] as unknown) as HTMLElement);

    const isTabPressed = e.key === 'Tab';

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }

  function handleClick(e: MouseEvent) {
    const node = (elRef.current as unknown) as HTMLElement;
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
    return () => {
      node.removeEventListener('keydown', handleFocus);
      node.removeEventListener('click', handleClick);
    };
  }, []);

  return elRef;
}
