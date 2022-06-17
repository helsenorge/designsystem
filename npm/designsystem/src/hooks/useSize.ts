import { useEffect, useState } from 'react';
import { debounce } from '../utils/debounce';

/**
 * Lytt på endringer i størrelse på et element
 *
 * @param ref Element som skal observeres.
 * @returns Object med høyde, bredde, x og y til elementet
 */
export const useSize = (ref?: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState<DOMRect>();
  useEffect(() => {
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(entries => {
        setSize(entries[0].target.getBoundingClientRect());
      });
      if (ref?.current) {
        resizeObserver.observe(ref?.current);
      }
      return resizeObserver.disconnect;
    } else if (typeof window === 'object') {
      // For nettlesere som ikke støtter ResizeObserver (iOS 13 og lavere)
      const handleLayoutEvent = () => {
        ref?.current && setSize(ref.current.getBoundingClientRect());
      };

      const events = ['layoutchange', 'resize', 'orientationchange'];
      const debounceMs = 10;

      const [debouncedCallback, teardown] = debounce(handleLayoutEvent, debounceMs);

      events.forEach(eventName => window.addEventListener(eventName, debouncedCallback));

      debouncedCallback();

      return () => {
        teardown();
        events.forEach(eventName => window.removeEventListener(eventName, debouncedCallback));
      };
    }
  }, [ref]);

  return size;
};
