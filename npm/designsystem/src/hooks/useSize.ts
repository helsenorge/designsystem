import { useState } from 'react';
import { useLayoutEvent } from './useLayoutEvent';

/**
 * Lytt på endringer i størrelse på et element
 *
 * @param ref Element som skal observeres.
 * @returns Object med høyde, bredde, x og y til elementet
 */
export const useSize = (ref?: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState<DOMRect>();

  const handleLayoutEvent = () => {
    ref?.current && setSize(ref.current.getBoundingClientRect());
  };

  useLayoutEvent(handleLayoutEvent);

  return size;
};
