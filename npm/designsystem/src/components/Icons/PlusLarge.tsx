import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const PlusLarge: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M24.992 23.008V9.328h-1.983v13.68H9.328v1.983h13.681v13.681h1.983V24.991h13.68v-1.983z" />;

  const normalHover = <path d="M24.992 23.008V7.327h-1.983v15.681H7.327v1.983h15.682v15.681h1.983V24.991h15.68v-1.983z" />;

  const xSmall = <path d="M25.254 22.746V7.993h-2.506v14.753H7.993v2.506h14.755v14.755h2.506V25.252h14.753v-2.506z" />;

  const xSmallHover = <path d="M24.83 22.323V5.043h-2.506v17.28H5.043v2.506h17.281V42.11h2.506V24.829h17.28v-2.506z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default PlusLarge;
