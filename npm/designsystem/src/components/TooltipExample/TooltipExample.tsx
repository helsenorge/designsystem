import React from 'react';

import longLoremText from '../../utils/loremtext';
import Tooltip, { TooltipProps, TooltipOpenProvider } from '../Tooltip';

const TooltipExample: React.FC<TooltipProps> = props => {
  return (
    <TooltipOpenProvider>
      <>
        <Tooltip {...props}>{'Et tooltip her.'}</Tooltip>
        {' ' + longLoremText}
        <button>{'Knapp'}</button>
        {'Dette er '}
        <Tooltip {...props}>{props.children}</Tooltip>
        {' som skal ha nærmere forklaring.'}
        {longLoremText}
        <Tooltip {...props}>{'Enda et tooltip her.'}</Tooltip>
      </>
    </TooltipOpenProvider>
  );
};

export default TooltipExample;
