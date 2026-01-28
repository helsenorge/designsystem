import type { HelpTooltipProps } from '../../components/HelpTooltip';

import HelpTooltip from '../../components/HelpTooltip';
import longLoremText from '../../utils/loremtext';

const HelpTooltipExample: React.FC<HelpTooltipProps> = props => {
  return (
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
  );
};

export default HelpTooltipExample;
