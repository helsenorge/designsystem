import { useEffect, useRef, useState } from 'react';

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
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(ref?.current ?? null);
  });

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
    if (element) {
      resizeObserver.observe(element);
    }
    return (): void => {
      resizeObserver.disconnect();
    };
  }, [element]);

  return size;
};
