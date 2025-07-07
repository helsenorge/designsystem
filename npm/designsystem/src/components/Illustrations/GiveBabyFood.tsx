import React from 'react';

import { SvgIllustrationProps } from '../Illustration';
import GiveBabyFoodMedium from './GiveBabyFoodMedium';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  hair: string;
  skin: string;
  details: string;
  chair: string;
  lines: string;
}

const GiveBabyFood: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <GiveBabyFoodMedium color={color} {...rest} />;

  return getIllustration({ size, medium });
};

export default GiveBabyFood;
