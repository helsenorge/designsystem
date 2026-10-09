import { useLayoutEffect, type RefObject } from 'react';

import { flushSync } from 'react-dom';

/**
 * Kjører measure før første paint og hver gang elementet eller dets overordnede element endrer størrelse.
 * State-oppdateringer i measure rendres synkront, slik at elementet ikke vises en frame med utdatert layout
 * (for eksempel når en overordnet komponent åpnes).
 *
 * @param ref Elementet som observeres, sammen med dets overordnede element
 * @param measure Leser størrelser og setter state
 * @param deps Når disse endres settes observeren opp på nytt
 */
export const useSynchronousResizeObserver = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  measure: (element: T, parentElement: HTMLElement) => void,
  deps: ReadonlyArray<unknown> = []
): void => {
  useLayoutEffect(() => {
    const element = ref.current;
    const parentElement = element?.parentElement;
    if (!element || !parentElement) {
      return;
    }

    const run = (): void => flushSync(() => measure(element, parentElement));

    run();
    const observer = new ResizeObserver(run);
    observer.observe(element, { box: 'border-box' });
    observer.observe(parentElement, { box: 'border-box' });
    return (): void => observer.disconnect();
  }, deps);
};
