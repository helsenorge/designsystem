import type { SvgIllustrationProps } from '../Illustration';

import SkinToSkinMedium from './SkinToSkinMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  hair: string;
  skin: string;
  clothes: string;
}

const SkinToSkin: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <SkinToSkinMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default SkinToSkin;
