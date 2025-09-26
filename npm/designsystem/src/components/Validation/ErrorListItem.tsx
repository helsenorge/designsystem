import React from 'react';

import { ErrorDetails, FocusableElement } from './types';
import AnchorLink, { AnchorLinkOnClickEvent } from '../AnchorLink';

interface ErrorElementProps {
  name: string;
  error: ErrorDetails;
}

const ErrorListItem: React.FC<ErrorElementProps> = props => {
  const handleClick = (event?: AnchorLinkOnClickEvent, element?: FocusableElement): void => {
    event?.preventDefault();
    if (element?.focus) element?.focus();
  };

  if (props.error.ref) {
    return (
      <AnchorLink href={`#${props.name}`} onClick={(e): void => handleClick(e, props.error.ref)}>
        {props.error.message}
      </AnchorLink>
    );
  }

  return <>{props.error.message}</>;
};

export default ErrorListItem;
