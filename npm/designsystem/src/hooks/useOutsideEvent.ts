import { useEffect } from 'react';

type OutsideEvents = keyof PickByValue<HTMLElementEventMap, MouseEvent | FocusEvent>;

/**
 * Custom hook for klikk eller fokus utenfor et gitt element
 * @param ref Sjekker om det klikkes utenfor dette elementet
 * @param handleClick Callback-funksjon ved klikk utenfor elementet
 * @param events Type eventer å lytte på. Default: mousedown
 */
export const useOutsideEvent = (
  ref: React.RefObject<HTMLElement>,
  handleClick: (event: HTMLElementEventMap[OutsideEvents]) => void,
  events: OutsideEvents[] = ['mousedown']
): void => {
  const handleOutsideEvent = (event: HTMLElementEventMap[OutsideEvents]): void => {
    if (ref.current && !event.composedPath().includes(ref.current)) {
      handleClick(event);
    }
  };

  useEffect(() => {
    events.forEach(eventName => document.addEventListener(eventName, handleOutsideEvent));

    return (): void => {
      events.forEach(eventName => document.removeEventListener(eventName, handleOutsideEvent));
    };
  }, [ref, handleClick, events]);
};
