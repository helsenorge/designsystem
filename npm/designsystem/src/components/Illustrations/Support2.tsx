import type { SvgIllustrationProps } from '../Illustration';

import Support2Medium from './Support2Medium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  details1: string;
  details2: string;
  lines: string;
}

const Support2: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <Support2Medium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default Support2;
