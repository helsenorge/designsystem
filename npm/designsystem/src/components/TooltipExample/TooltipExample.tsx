import React from 'react';

import Tooltip, { TooltipProps, TooltipOpenProvider } from '../Tooltip';
import loremText from '../../utils/loremtext';

const TooltipExample: React.FC<TooltipProps> = props => {
  return (
    <TooltipOpenProvider>
      <>
        <Tooltip {...props}>{'Et tooltip her.'}</Tooltip>
        {' ' + loremText}
        {'Dette er '}
        <Tooltip {...props}>{props.children}</Tooltip>
        {' som skal ha nærmere forklaring.'}
        {loremText}
        <Tooltip {...props}>{'Enda et tooltip her.'}</Tooltip>
      </>
    </TooltipOpenProvider>
  );
};

export default TooltipExample;
