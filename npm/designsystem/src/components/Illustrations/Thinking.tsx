import type React from 'react';

import type { SvgIllustrationProps } from '../Illustration';

import ThinkingMedium from './ThinkingMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  lines: string;
  shapes1: string;
  shapes2: string;
}

const Thinking: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <ThinkingMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default Thinking;
