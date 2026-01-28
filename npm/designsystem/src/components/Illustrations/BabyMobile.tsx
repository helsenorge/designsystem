import type { SvgIllustrationProps } from '../Illustration';

import BabyMobileMedium from './BabyMobileMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  details1: string;
  details2: string;
}

const BabyMobile: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <BabyMobileMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default BabyMobile;
