import type { SvgIllustrationProps } from '../Illustration';

import ChildMedium from './ChildMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  hair: string;
  body: string;
  block1: string;
  block2: string;
  block3: string;
  block4: string;
}

const Child: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <ChildMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default Child;
