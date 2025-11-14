import { useEffect } from 'react';

type KeyboardEvents = {
  [K in keyof HTMLElementEventMap]: HTMLElementEventMap[K] extends KeyboardEvent ? K : never;
}[keyof HTMLElementEventMap];

/**
 * Kjør en callback når bruker skriver på tastaturet.
 * @param ref Element som skal lyttes på.
 * @param callback Callback som kjøres når det skjer en event.
 * @param key Knapp, eller liste med knapper, som skal trigge callback
 * @param events Liste med keyboard-events som skal trigge callback. Default: "keydown"
 */
export const useKeyboardEvent = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: KeyboardEvent) => void,
  key: string | string[],
  events: KeyboardEvents[] = ['keydown']
): void => {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const handleKeyboardEvent = (event: KeyboardEvent): void => {
      if (event.key === key || (Array.isArray(key) && key.includes(event.key))) {
        callback(event);
      }
    };

    events.forEach(eventName => element.addEventListener(eventName, handleKeyboardEvent));

    return (): void => {
      events.forEach(eventName => element.removeEventListener(eventName, handleKeyboardEvent));
    };
  }, [ref, callback, events, key]);
};
