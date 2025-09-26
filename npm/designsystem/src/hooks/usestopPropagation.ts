import { useEffect } from 'react';

/**
 * Stopp eventer fra å boble opp videre i DOMen
 * @param ref Element som skal overvåkes
 * @param events Navn på eventer som ikke skal boble opp
 */
export const useStopPropagation = (ref: React.RefObject<HTMLElement>, events: string[]): void => {
  const handleEvent = (e: Event): void => e.stopPropagation();

  useEffect(() => {
    events.forEach(name => ref?.current?.addEventListener(name, handleEvent));

    return (): void => events.forEach(name => ref.current?.removeEventListener(name, handleEvent));
  }, [ref]);
};
