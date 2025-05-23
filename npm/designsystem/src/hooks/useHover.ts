import { RefObject } from 'react';

import { usePseudoClasses } from './usePseudoClasses';

/**
 * Få vite når et element hovres over eller mottar fokus.
 * @param ref Element som skal observeres
 * @returns Objekt med ref og om objekt er hovered/focused
 */
export const useHover = <T extends HTMLElement | SVGElement>(
  ref?: RefObject<T>,
  includeFocus: boolean = true
): { hoverRef: RefObject<T>; isHovered: boolean } => {
  const { refObject, isHovered, isFocused } = usePseudoClasses(ref);

  return { hoverRef: refObject, isHovered: isHovered || (includeFocus && isFocused) };
};
