import type { SvgIllustrationProps } from '../Illustration';

import HealthInformationMedium from './HealthInformationMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  blob: string;
  book: string;
  accent: string;
  carrot: string;
  strong: string;
  tone: string;
  light: string;
  mid: string;
  skin: string;
  dark: string;
}

const HealthInformation: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <HealthInformationMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default HealthInformation;
