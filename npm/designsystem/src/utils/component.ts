import React from 'react';

export const isComponent = <T>(
  element: {} | null | undefined,
  type: React.ForwardRefExoticComponent<T>
): element is React.ReactElement<T> => React.isValidElement<T>(element) && (element as React.ReactElement).type === type;
