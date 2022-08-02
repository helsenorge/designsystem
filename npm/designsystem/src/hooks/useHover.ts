import { useRef, useEffect, useState, RefObject } from 'react';

/** ref: Reference object for the trigger of the hover state
 *
 *  condition: Additional boolean condition to trigger the useEffect checking for hover.
 *
 *  includeFocus: If focusing the ref should count as a hover or not. True by default.
 */
export const useHover = <T extends HTMLElement | SVGElement>(ref?: RefObject<T>, condition?: boolean, includeFocus: boolean = true) => {
  const hoverRef = ref ? ref : useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const { current: element } = hoverRef;

    const handleInEvent = () => setIsHovered(true);

    const handleOutEvent = () => setIsHovered(false);

    const inEventList = ['mouseenter', includeFocus ? 'focusin' : ''];
    const outEventList = ['mouseleave', includeFocus ? 'focusout' : ''];
    inEventList.forEach(eventName => element?.addEventListener(eventName, handleInEvent));
    outEventList.forEach(eventName => element?.addEventListener(eventName, handleOutEvent));

    return (): void => {
      inEventList.forEach(eventName => element?.removeEventListener(eventName, handleInEvent));
      outEventList.forEach(eventName => element?.removeEventListener(eventName, handleOutEvent));
    };
  }, [hoverRef, condition]);

  return { hoverRef, isHovered };
};
