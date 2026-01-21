import type { PropsWithChildren } from 'react';
import React from 'react';

export const isComponent = <T>(
  element: unknown,
  type: React.ForwardRefExoticComponent<T> | React.FunctionComponent<T>
): element is React.ReactElement<T> => React.isValidElement<T>(element) && (element as React.ReactElement).type === type;

export const isComponentWithChildren = <T>(element: unknown): element is React.ReactElement<PropsWithChildren<T>> =>
  React.isValidElement<PropsWithChildren<T>>(element);

export function isComponentWithDisplayName<T>(element: React.ReactNode, displayName: string): element is React.ReactElement<T> {
  if (!React.isValidElement(element) || typeof element.type === 'string') {
    return false;
  }

  const componentType = element.type as React.ComponentType<T> & { displayName?: string };

  return componentType.displayName === displayName;
}
