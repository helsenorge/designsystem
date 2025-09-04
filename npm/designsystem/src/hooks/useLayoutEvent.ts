import { useEffect } from 'react';

import { debounce } from '../utils/debounce';

/**
 * Lytt på ulike layout-events som har betydning for rendring og størrelse på elementer.
 *
 * @param callback Kalles for hver event
 * @param events Liste med events som skal lyttes på
 * @param debounceMs Begrens kall til callback til x antall ms
 */
export const useLayoutEvent = (callback: () => void, events = ['layoutchange', 'resize', 'orientationchange'], debounceMs = 10): void => {
  useEffect(() => {
    if (typeof window !== 'object') return;
    const [debouncedCallback, teardown] = debounce(callback, debounceMs);

    events.forEach(eventName => window.addEventListener(eventName, debouncedCallback));

    debouncedCallback();

    return (): void => {
      teardown();
      events.forEach(eventName => window.removeEventListener(eventName, debouncedCallback));
    };
  }, []);
};
