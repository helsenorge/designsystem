import React from 'react';

import HelpTooltip, { HelpTooltipProps, HelpTooltipOpenProvider } from '../../components/HelpTooltip';
import longLoremText from '../../utils/loremtext';

const HelpTooltipExample: React.FC<HelpTooltipProps> = props => {
  return (
    <HelpTooltipOpenProvider>
      <>
        <HelpTooltip {...props}>{'Et tooltip her.'}</HelpTooltip>
        {' ' + longLoremText}
        <button>{'Knapp'}</button>
        {'Dette er '}
        <HelpTooltip {...props}>{props.children}</HelpTooltip>
        {' som skal ha nærmere forklaring.'}
        {longLoremText}
        <HelpTooltip {...props}>{'Enda et tooltip her.'}</HelpTooltip>
      </>
    </HelpTooltipOpenProvider>
  );
};

export default HelpTooltipExample;
