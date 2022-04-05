import { useEffect } from 'react';

export const useKeyboardEvent = <E extends keyof Pick<HTMLElementEventMap, 'keydown' | 'keypress' | 'keyup'>>(
  eventName: E,
  ref: React.RefObject<HTMLElement>,
  key: string | string[],
  callback: (event: HTMLElementEventMap[E]) => void
) => {
  useEffect(() => {
    const handleKeyboardEvent = (event: HTMLElementEventMap[E]) => {
      if (event.key === key || (Array.isArray(key) && key.includes(event.key))) {
        callback(event);
      }
    };
    ref.current?.addEventListener(eventName, handleKeyboardEvent);

    return () => {
      ref.current?.removeEventListener(eventName, handleKeyboardEvent);
    };
  }, [ref, callback]);
};
