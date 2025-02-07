import { useEffect } from 'react';

type OutsideEvents = keyof PickByValue<HTMLElementEventMap, MouseEvent | FocusEvent>;

/**
 * Custom hook for klikk eller fokus utenfor et gitt element (eller flere elementer)
 * @param ref Sjekker om det klikkes utenfor dette elementet/elementene
 * @param callback Callback-funksjon ved klikk utenfor elementet/elementene
 * @param events Type eventer å lytte på. Default: mousedown
 */
export const useOutsideEvent = (
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  callback: (event: HTMLElementEventMap[OutsideEvents]) => void,
  events: OutsideEvents[] = ['mousedown']
): void => {
  const refArray = Array.isArray(ref) ? ref : [ref];

  const handleOutsideEvent = (event: HTMLElementEventMap[OutsideEvents]): void => {
    if (refArray.every(ref => ref.current && !event.composedPath().includes(ref.current))) {
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
