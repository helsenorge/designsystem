import type { SvgIllustrationProps } from '../Illustration';

import TechnicalAidsMedium from './TechnicalAidsMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  blob: string;
  panel: string;
  detail: string;
  light: string;
  strong: string;
  mid: string;
  dark: string;
  grey: string;
}

const TechnicalAids: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <TechnicalAidsMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default TechnicalAids;
