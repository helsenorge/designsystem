import { useEffect } from 'react';

type OutsideEvents = {
  [K in keyof DocumentEventMap]: DocumentEventMap[K] extends MouseEvent | FocusEvent ? K : never;
}[keyof DocumentEventMap];

/**
 * Custom hook for klikk eller fokus utenfor et gitt element (eller flere elementer)
 * @param ref Sjekker om det klikkes utenfor dette elementet/elementene
 * @param callback Callback-funksjon ved klikk utenfor elementet/elementene
 * @param events Type eventer å lytte på. Default: mousedown
 */
export const useOutsideEvent = (
  ref: React.RefObject<HTMLElement | null> | React.RefObject<HTMLElement | null>[],
  callback: (event: MouseEvent | FocusEvent) => void,
  events: OutsideEvents[] = ['mousedown']
): void => {
  const refArray = Array.isArray(ref) ? ref : [ref];

  const handleOutsideEvent = (event: MouseEvent | FocusEvent): void => {
    if (refArray.every(r => r.current && !event.composedPath().includes(r.current))) {
      callback(event);
    }
  };

  useEffect(() => {
    events.forEach(eventName => document.addEventListener(eventName, handleOutsideEvent));

    return (): void => {
      events.forEach(eventName => document.removeEventListener(eventName, handleOutsideEvent));
    };
  }, [refArray, callback, events]);
};
