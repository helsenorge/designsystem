import { useEffect, useRef } from 'react';

import { getDocumentActiveElement } from '../utils/focus';

/**
 * A hook that stores the currently focused element when the component mounts,
 * and returns focus to it when the component unmounts.
 */
export const useReturnFocusOnUnmount = (ref: React.RefObject<HTMLElement>): void => {
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Captures which element was focused on mount
    // const activeElement = document.activeElement;
    const activeElement = ref.current ? getDocumentActiveElement(ref.current) : null;
    if (activeElement instanceof HTMLElement) {
      previouslyFocusedElementRef.current = activeElement;
    }

    // Restores focus to the stored element on unmount
    return (): void => {
      if (previouslyFocusedElementRef.current instanceof HTMLElement && document.contains(previouslyFocusedElementRef.current)) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, []);
};
