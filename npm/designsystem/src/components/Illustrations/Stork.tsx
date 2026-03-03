import type React from 'react';

import type { SvgIllustrationProps } from '../Illustration';

import StorkMedium from './StorkMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  lines: string;
  stork: string;
  blob: string;
  beak: string;
  bag: string;
}

const Stork: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <StorkMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default Stork;
