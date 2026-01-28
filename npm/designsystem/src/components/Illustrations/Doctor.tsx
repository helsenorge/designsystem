import type { SvgIllustrationProps } from '../Illustration';

import DoctorMedium from './DoctorMedium';
import DoctorSmall from './DoctorSmall';
import { getIllustration } from '../Illustration/utils';

export interface Palette {
  hair: string;
  shirt: string;
}

const Doctor: React.FC<SvgIllustrationProps> = ({ size = 512, color, ...rest }) => {
  const medium = <DoctorMedium color={color} {...rest} />;
  const small = <DoctorSmall color={color} {...rest} />;

  return getIllustration({ size, medium, small });
};

export default Doctor;
