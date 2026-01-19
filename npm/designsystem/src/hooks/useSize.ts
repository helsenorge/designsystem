import { useEffect, useRef, useState } from 'react';

import { debounce } from '../utils/debounce';

/**
 * Lytt på endringer i størrelse på et element
 *
 * @param ref Element som skal observeres.
 * @returns Object med høyde, bredde, x og y til elementet. Merk at objektet bare oppdates når høyde eller bredde endres, ikke når
 * posisjonen (x og y) endres.
 */
export const useSize = (ref?: React.RefObject<HTMLElement | null>): DOMRect | undefined => {
  const ticking = useRef(false);
  const [size, setSize] = useState<DOMRect>();
  useEffect(() => {
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(entries => {
        if (!ticking.current) {
          window.requestAnimationFrame(() => {
            setSize(entries[0].target.getBoundingClientRect());
            ticking.current = false;
          });
        }
        ticking.current = true;
      });
      if (ref?.current) {
        resizeObserver.observe(ref?.current);
      }
      return (): void => {
        if (ref?.current) {
          resizeObserver.unobserve(ref.current);
        } else {
          resizeObserver.disconnect();
        }
      };
    } else if (typeof window === 'object') {
      // For nettlesere som ikke støtter ResizeObserver (iOS 13 og lavere)
      const handleLayoutEvent = (): void => {
        if (ref?.current) setSize(ref.current.getBoundingClientRect());
      };

      const events = ['layoutchange', 'resize', 'orientationchange'];
      const debounceMs = 10;

      const [debouncedCallback, teardown] = debounce(handleLayoutEvent, debounceMs);

      events.forEach(eventName => window.addEventListener(eventName, debouncedCallback));

      debouncedCallback();

      return (): void => {
        teardown();
        events.forEach(eventName => window.removeEventListener(eventName, debouncedCallback));
      };
    }
  }, [ref?.current]);

  return size;
};
