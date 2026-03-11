import type { SvgIllustrationProps } from '../Illustration';

import FacialRecognitionFingerprintMedium from './FacialRecognitionFingerprintMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  hair: string;
  shirt: string;
}

const FacialRecognitionFingerprint: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <FacialRecognitionFingerprintMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default FacialRecognitionFingerprint;
