import { useEffect, useState } from 'react';

export const useIsVisible = (ref: React.RefObject<HTMLElement>, threshold = 1): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersectChange: IntersectionObserverCallback = entries => {
      setIsVisible(entries[0].intersectionRatio >= threshold);
    };

    const intersectionObserver = new IntersectionObserver(handleIntersectChange, {
      threshold,
    });

    if (ref?.current) {
      intersectionObserver.observe(ref.current);
    }

    return (): void => {
      if (ref?.current) {
        intersectionObserver.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};
