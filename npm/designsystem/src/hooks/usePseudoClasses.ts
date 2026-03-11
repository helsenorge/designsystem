import type { RefObject } from 'react';
import { useRef, useEffect, useState } from 'react';

/**
 * Få vite når et element hovres over eller mottar fokus.
 * @param ref Element som skal observeres
 * @returns Objekt med ref og om objekt er hovered/focused
 */
export const usePseudoClasses = <T extends HTMLElement | SVGElement | null>(
  ref?: RefObject<T> | null
): { refObject: RefObject<T | null>; isHovered: boolean; isFocused: boolean; isActive: boolean } => {
  const internalRef = useRef<T | null>(null);
  const refObject = ref ?? internalRef;
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = (): void => setIsHovered(true);
    const handleMouseLeave = (): void => setIsHovered(false);
    const handleFocusIn = (): void => setIsFocused(true);
    const handleFocusOut = (): void => setIsFocused(false);
    const handlePointerDown = (): void => setIsActive(true);
    const handlePointerUp = (): void => setIsActive(false);
    const handlePointerLeave = (): void => setIsActive(false);

    refObject.current?.addEventListener('mouseenter', handleMouseEnter);
    refObject.current?.addEventListener('mouseleave', handleMouseLeave);
    refObject.current?.addEventListener('pointerenter', handleMouseEnter);
    refObject.current?.addEventListener('pointerleave', handleMouseLeave);
    refObject.current?.addEventListener('focusin', handleFocusIn);
    refObject.current?.addEventListener('focusout', handleFocusOut);
    refObject.current?.addEventListener('pointerdown', handlePointerDown);
    refObject.current?.addEventListener('pointerup', handlePointerUp);
    refObject.current?.addEventListener('pointerleave', handlePointerLeave);

    return (): void => {
      refObject.current?.removeEventListener('mouseenter', handleMouseEnter);
      refObject.current?.removeEventListener('mouseleave', handleMouseLeave);
      refObject.current?.removeEventListener('pointerenter', handleMouseEnter);
      refObject.current?.removeEventListener('pointerleave', handleMouseLeave);
      refObject.current?.removeEventListener('focusin', handleFocusIn);
      refObject.current?.removeEventListener('focusout', handleFocusOut);
      refObject.current?.removeEventListener('pointerdown', handlePointerDown);
      refObject.current?.removeEventListener('pointerup', handlePointerUp);
      refObject.current?.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [refObject]);

  return { refObject, isHovered, isFocused, isActive };
};
