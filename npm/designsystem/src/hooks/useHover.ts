import { useRef, useEffect, useState, RefObject } from 'react';

/**
 * Få vite når et element hovres over eller mottar fokus.
 * @param ref Element som skal observeres
 * @returns Objekt med ref og om objekt er hovered/focused
 */
export const useHover = <T extends HTMLElement | SVGElement>(ref?: RefObject<T>): { hoverRef: RefObject<T>; isHovered: boolean } => {
  const hoverRef = ref ? ref : useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleFocusIn = () => setIsFocused(true);
    const handleFocusOut = () => setIsFocused(false);

    hoverRef.current?.addEventListener('mouseenter', handleMouseEnter);
    hoverRef.current?.addEventListener('mouseleave', handleMouseLeave);
    hoverRef.current?.addEventListener('focusin', handleFocusIn);
    hoverRef.current?.addEventListener('focusout', handleFocusOut);

    return (): void => {
      hoverRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      hoverRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      hoverRef.current?.removeEventListener('focusin', handleFocusIn);
      hoverRef.current?.removeEventListener('focusout', handleFocusOut);
    };
  }, [hoverRef]);

  return { hoverRef, isHovered: isHovered || isFocused };
};
