import { useRef, useEffect, useState, RefObject } from 'react';

export const useHover = <T extends HTMLElement>(ref?: RefObject<T>, condition?: boolean) => {
  const hoverRef = ref ? ref : useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const { current: element } = hoverRef;

    const handleInEvent = () => setIsHovered(true);

    const handleOutEvent = () => setIsHovered(false);

    const inEventList = ['mouseenter', 'focusin'];
    inEventList.forEach((eventName) => element && element.addEventListener(eventName, handleInEvent));

    const outEventList = ['mouseleave', 'focusout'];
    outEventList.forEach((eventName) => element && element.addEventListener(eventName, handleOutEvent));

    return () => {
      [...inEventList, ...outEventList].forEach(
        (eventName) =>
          element && element.removeEventListener(eventName, handleInEvent) && element.removeEventListener(eventName, handleOutEvent)
      );
    };
  }, [hoverRef, condition]);

  return { hoverRef, isHovered };
};
