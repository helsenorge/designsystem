import type { SvgIllustrationProps } from '../Illustration';

import EyeContactMedium from './EyeContactMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  skin: string;
  mother: string;
  baby: string;
}

const EyeContact: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <EyeContactMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default EyeContact;
