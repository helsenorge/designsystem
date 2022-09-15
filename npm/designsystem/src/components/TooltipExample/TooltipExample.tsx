import React from 'react';

import Tooltip, { TooltipProps, TooltipOpenProvider } from '../Tooltip';
import longLoremText from '../../utils/loremtext';

const TooltipExample: React.FC<TooltipProps> = props => {
  return (
    <TooltipOpenProvider>
      <>
        <Tooltip {...props}>{'Et tooltip her.'}</Tooltip>
        {' ' + longLoremText}
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
