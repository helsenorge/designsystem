import React from 'react';

import HealthcarePersonnelMedium from './HealthcarePersonnelMedium';
import HealthcarePersonnelSmall from './HealthcarePersonnelSmall';
import { SvgIllustrationProps } from '../Illustration';
import { getIllustration } from '../Illustration/utils';

const HealthcarePersonnel: React.FC<SvgIllustrationProps> = ({ size = 512, color }) => {
  const medium = <HealthcarePersonnelMedium color={color} />;
  const small = <HealthcarePersonnelSmall color={color} />;

  return getIllustration({ size, medium, small });
};

export default HealthcarePersonnel;
