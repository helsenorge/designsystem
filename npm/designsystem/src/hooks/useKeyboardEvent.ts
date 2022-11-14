import { useEffect } from 'react';

type KeyboardEvents = keyof PickByValue<HTMLElementEventMap, KeyboardEvent>;

/**
 * Kjør en callback når bruker skriver på tastaturet.
 * @param ref Element som skal lyttes på.
 * @param callback Callback som kjøres når det skjer en event.
 * @param key Knapp, eller liste med knapper, som skal trigge callback
 * @param events Liste med keyboard-events som skal trigge callback. Default: "keydown"
 */
export const useKeyboardEvent = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: HTMLElementEventMap[KeyboardEvents]) => void,
  key: string | string[],
  events: KeyboardEvents[] = ['keydown']
) => {
  useEffect(() => {
    const handleKeyboardEvent = (event: HTMLElementEventMap[KeyboardEvents]) => {
      if (event.key === key || (Array.isArray(key) && key.includes(event.key))) {
        callback(event);
      }
    };

    events.forEach(eventName => ref.current?.addEventListener(eventName, handleKeyboardEvent));

    return () => {
      events.forEach(eventName => ref.current?.removeEventListener(eventName, handleKeyboardEvent));
    };
  }, [ref, callback, events, key]);
};
