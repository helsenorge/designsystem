import React from 'react';

import DoctorMedium from './DoctorMedium';
import DoctorSmall from './DoctorSmall';
import { getIllustration } from '../../utils/illustration';
import { SvgIllustrationProps } from '../Illustration';

export interface Palette {
  hair: string;
  shirt: string;
}

const Doctor: React.FC<SvgIllustrationProps> = ({ size = 512, color }) => {
  const medium = <DoctorMedium color={color} />;
  const small = <DoctorSmall color={color} />;

  return getIllustration({ size, medium, small });
};

export default Doctor;
