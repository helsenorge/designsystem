import { useState } from 'react';
import { useLayoutEvent } from '../hooks/useLayoutEvent';

const getWindowSize = () => {
  const isClient = typeof window === 'object';
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  };
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleLayoutEvent = () => {
    setWindowSize(getWindowSize());
  };

  useLayoutEvent(handleLayoutEvent, ['resize']);

  return windowSize;
}
