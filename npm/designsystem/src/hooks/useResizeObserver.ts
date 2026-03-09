import { useEffect, useState, useRef } from 'react';

/**
 * Lytt på endringer i størrelse på et element. Bruker ResizeObserver-APIet.
 *
 * @param ref Element som skal observeres.
 * @returns Object med høyde, bredde, x og y til elementet
 */
export const useResizeObserver = (ref?: React.RefObject<HTMLElement | null>): DOMRect | undefined => {
  const ticking = useRef(false);
  const [size, setSize] = useState<DOMRect>();
  useEffect(() => {
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
  }, [ref]);

  return size;
};
