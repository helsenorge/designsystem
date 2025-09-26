import React from 'react';

export const useEventListenerState = <T>(initial?: T): [valueRef: React.MutableRefObject<T | undefined>, setValue: (x: T) => void] => {
  const [value, _setValue] = React.useState<T | undefined>(initial);

  const valueRef = React.useRef(value);

  const setValue = (x: T): void => {
    valueRef.current = x;
    _setValue(x);
  };

  return [valueRef, setValue];
};
