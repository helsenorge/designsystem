import { useState, useEffect, useRef } from 'react';

/**
 * Hent ut en liste med HTML-elementer. Bruker MutationObserver-APIet.
 * @param ref Element som skal observeres
 * @param selectors Selektorer som sendes til querySelectorAll for å hente ut liste med elementer
 * @param options MutationObserver-options. Default er å lytte på endringer på child-elementer og deres attributter.
 * @returns Liste med HTML-elementer
 */
export const useElementList = (
  ref: React.RefObject<HTMLElement | null>,
  selectors: string,
  options?: MutationObserverInit
): NodeListOf<HTMLElement> | undefined => {
  const [elementList, setElementList] = useState<NodeListOf<HTMLElement>>();
  const previousElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleMutationChange = (): void => {
      const elements = ref.current?.querySelectorAll<HTMLElement>(selectors);
      if (!elements) {
        if (previousElementsRef.current.length > 0) {
          previousElementsRef.current = [];
          setElementList(undefined);
        }
        return;
      }

      // We check if an element has been added/removed to avoid extra state updates on other changes.
      const elementsArray = Array.from(elements);
      const previousElements = previousElementsRef.current;

      const hasChanged = elementsArray.length !== previousElements.length || elementsArray.some((el, i) => el !== previousElements[i]);

      if (hasChanged) {
        previousElementsRef.current = elementsArray;
        setElementList(elements);
      }
    };

    const mutationObserver = new MutationObserver(handleMutationChange);
    if (ref?.current) {
      mutationObserver.observe(ref.current, { subtree: true, childList: true, attributes: true, ...options });
    }

    handleMutationChange();

    return (): void => {
      mutationObserver.disconnect();
    };
  }, [ref, selectors]);

  return elementList;
};
