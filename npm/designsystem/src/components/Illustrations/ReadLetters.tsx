import React from 'react';

import { SvgIllustrationProps } from '../Illustration';
import ReadLettersMedium from './ReadLettersMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  letter: string;
  sweater: string;
  lines: string;
}

const ReadLetters: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <ReadLettersMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default ReadLetters;
