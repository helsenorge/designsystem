import React from 'react';

import HealthcarePersonnelMedium from './HealthcarePersonnelMedium';
import HealthcarePersonnelSmall from './HealthcarePersonnelSmall';
import { getIllustration } from '../../utils/illustration';
import { SvgIllustrationProps } from '../Illustration';

const HealthcarePersonnel: React.FC<SvgIllustrationProps> = ({ size = 512, color }) => {
  const medium = <HealthcarePersonnelMedium color={color} />;
  const small = <HealthcarePersonnelSmall color={color} />;

  return getIllustration({ size, medium, small });
};

export default HealthcarePersonnel;
