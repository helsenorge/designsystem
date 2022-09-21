import { useEffect, useState } from 'react';

/**
 * Lytt på endringer i størrelse på et element. Bruker ResizeObserver-APIet.
 *
 * @param ref Element som skal observeres.
 * @returns Object med høyde, bredde, x og y til elementet
 */
export const useResizeObserver = (ref?: React.RefObject<HTMLElement>): DOMRect | undefined => {
  const [size, setSize] = useState<DOMRect>();
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      setSize(entries[0].target.getBoundingClientRect());
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
