import React from 'react';
import { createPortal } from 'react-dom';
import { AnalyticsId } from '../../constants';

export interface PortalProps {
  /** Add custom class to portal, default class is portal-container */
  className?: string;
  /** Content to be displayed in Portal */
  children?: React.ReactNode;
  /** Default is document.body */
  parent?: HTMLElement;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export default function Portal({ children, parent, className, testId }: PortalProps): React.ReactPortal {
  // Create div to contain everything
  const el = React.useMemo(() => document.createElement('div'), []);
  el.setAttribute('data-analyticsid', AnalyticsId.Portal);
  if (testId) {
    el.setAttribute('data-testid', testId);
  }
  // On mount function
  React.useEffect(() => {
    // work out target in the DOM based on parent prop
    const target = parent && parent.appendChild ? parent : document.body;
    // Default classes
    const classList = ['portal-container'];
    // If className prop is present add each class the classList
    if (className) className.split(' ').forEach((item) => classList.push(item));
    classList.forEach((item) => el.classList.add(item));

    target.appendChild(el);
    // On unmount function
    return (): void => {
      // Remove element from dom
      target.removeChild(el);
    };
  }, [el, parent, className]);

  return createPortal(children, el);
}
