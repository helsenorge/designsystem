import type { SvgIllustrationProps } from '../Illustration';

import HealthcarePersonnelMedium from './HealthcarePersonnelMedium';
import HealthcarePersonnelSmall from './HealthcarePersonnelSmall';
import { getIllustration } from '../Illustration/utils';

const HealthcarePersonnel: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <HealthcarePersonnelMedium color={color} {...rest} />;
  const small = <HealthcarePersonnelSmall color={color} {...rest} />;

  return getIllustration({ size, medium, small });
};

export default HealthcarePersonnel;
