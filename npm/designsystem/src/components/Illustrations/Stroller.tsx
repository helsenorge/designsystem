import React from 'react';

import { SvgIllustrationProps } from '../Illustration';
import StrollerMedium from './StrollerMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  feet: string;
  handle: string;
  stroller1: string;
  stroller2: string;
  stroller3: string;
  wheels: string;
}

const Stroller: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <StrollerMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default Stroller;
