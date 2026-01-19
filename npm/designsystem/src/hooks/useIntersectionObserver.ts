import { useEffect } from 'react';

/**
 * Lytt på endringer i synligheten (intersection) til et HTML-element. F.eks. kan du bruke denne til å kalle en callback
 * når elementet er i ferd med å forsvinne ut av vinduet.
 *
 * @param ref Element som skal observeres
 * @param callback Kalles når en endring i intersection er observert
 * @param options Objekt med options for IntersectionObserver, f.eks. threshold for å bestemme når callbacken skal fyres
 */

export const useIntersectionObserver = (
  ref: React.RefObject<Element | null>,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): void => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(callback, options);

    if (ref?.current) {
      intersectionObserver.observe(ref.current);
    }

    return (): void => {
      if (ref?.current) {
        intersectionObserver.unobserve(ref.current);
      } else {
        intersectionObserver.disconnect();
      }
    };
  }, [ref, options]);
};
