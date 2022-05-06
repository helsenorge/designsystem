import { useEffect } from 'react';

type PickByValue<T, V> = Pick<T, { [K in keyof T]: T[K] extends V ? K : never }[keyof T]>;

type OutsideEvents = keyof PickByValue<HTMLElementEventMap, MouseEvent | FocusEvent>;

/**
 * Custom hook for klikk eller fokus utenfor et gitt element
 * @param ref Sjekker om det klikkes utenfor dette elementet
 * @param handleClick Callback-funksjon ved klikk utenfor elementet
 * @param events Type eventer å lytte på. Default: mousedown
 */
export const useOutsideEvent = (
  ref: React.RefObject<HTMLElement>,
  handleClick: () => void,
  events: OutsideEvents[] = ['mousedown']
): void => {
  const handleOutsideEvent = (event: HTMLElementEventMap[OutsideEvents]): void => {
    if (!ref.current?.contains(event.target as Node)) {
      handleClick();
    }
  };

  useEffect(() => {
    events.forEach((eventName) => document.addEventListener(eventName, handleOutsideEvent));

    return () => {
      events.forEach((eventName) => document.removeEventListener(eventName, handleOutsideEvent));
    };
  });
};
