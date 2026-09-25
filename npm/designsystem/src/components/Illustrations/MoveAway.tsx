import type { SvgIllustrationProps } from '../Illustration';

import MoveAwayMedium from './MoveAwayMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  background: string;
  door: string;
  sweater: string;
  pants: string;
  arrow: string;
  skin: string;
}

const MoveAway: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <MoveAwayMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default MoveAway;
