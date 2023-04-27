import { useRef, useEffect, useState, RefObject } from 'react';

/**
 * Få vite når et element hovres over eller mottar fokus.
 * @param ref Element som skal observeres
 * @returns Objekt med ref og om objekt er hovered/focused
 */
export const usePseudoClasses = <T extends HTMLElement | SVGElement>(
  ref?: RefObject<T> | null
): { refObject: RefObject<T>; isHovered: boolean; isFocused: boolean } => {
  const refObject = ref ? ref : useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleMouseEnter = (): void => setIsHovered(true);
    const handleMouseLeave = (): void => setIsHovered(false);
    const handleFocusIn = (): void => setIsFocused(true);
    const handleFocusOut = (): void => setIsFocused(false);

    refObject.current?.addEventListener('mouseenter', handleMouseEnter);
    refObject.current?.addEventListener('mouseleave', handleMouseLeave);
    refObject.current?.addEventListener('focusin', handleFocusIn);
    refObject.current?.addEventListener('focusout', handleFocusOut);

    return (): void => {
      refObject.current?.removeEventListener('mouseenter', handleMouseEnter);
      refObject.current?.removeEventListener('mouseleave', handleMouseLeave);
      refObject.current?.removeEventListener('focusin', handleFocusIn);
      refObject.current?.removeEventListener('focusout', handleFocusOut);
    };
  }, [refObject]);

  return { refObject, isHovered, isFocused };
};
