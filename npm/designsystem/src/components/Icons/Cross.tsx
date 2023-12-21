import React from 'react';

import { SvgPathProps } from '../Icon';

const Cross: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M20.404 19l8.259-8.259-1.403-1.403-8.259 8.259-8.26-8.26-1.403 1.403 8.26 8.26-8.26 8.26 1.403 1.403 8.26-8.26 8.259 8.259 1.403-1.403z" />
  );

  const normalHover = (
    <path d="M19 17.596L9.327 7.923 7.924 9.326l9.673 9.673-9.674 9.674 1.403 1.403L19 20.402l9.674 9.674 1.403-1.403-9.674-9.674 9.673-9.673-1.403-1.403z" />
  );

  return isHovered ? normalHover : normal;
};

export default Cross;
