import { useEffect, useState } from 'react';

/**
 * Lytt på endringer i størrelse på et element
 *
 * @param ref Element som skal observeres.
 * @returns Object med høyde, bredde, x og y til elementet
 */
export const useSize = (ref?: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState<DOMRect>();
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      setSize(entries[0].target.getBoundingClientRect());
    });
    if (ref?.current) {
      resizeObserver.observe(ref?.current);
    }
    return resizeObserver.disconnect;
  }, [ref]);

  return size;
};
