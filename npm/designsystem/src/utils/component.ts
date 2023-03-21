import React, { PropsWithChildren } from 'react';

export const isComponent = <T>(
  element: {} | null | undefined,
  type: React.ForwardRefExoticComponent<T> | React.FunctionComponent<T>
): element is React.ReactElement<T> => React.isValidElement<T>(element) && (element as React.ReactElement).type === type;

export const isComponentWithChildren = <T>(element: {} | null | undefined): element is React.ReactElement<PropsWithChildren<T>> =>
  React.isValidElement<PropsWithChildren<T>>(element) &&
  Object.prototype.hasOwnProperty.call((element as React.ReactElement<PropsWithChildren<T>>).props, 'children');
