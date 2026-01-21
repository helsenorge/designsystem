import type React from 'react';

import type { SvgPathProps } from '../Icon';

const XOutline: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      d="m35.068 32.24-2.829 2.828L24 26.828l-8.239 8.24-2.829-2.828 8.24-8.24-8.24-8.24 2.829-2.827L24 21.172l8.239-8.24 2.829 2.829L26.829 24l8.239 8.24zm2.828-16.48-5.657-5.655L24 18.344l-8.239-8.24-5.657 5.657L18.343 24l-8.239 8.24 5.657 5.656L24 29.656l8.239 8.24 5.657-5.656L29.657 24l8.239-8.24z"
      fillRule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="m24 26.828-9.851 9.851-2.83-2.828L21.172 24l-9.858-9.86 2.829-2.828L24 21.172l9.84-9.84 2.829 2.827-9.84 9.84 9.845 9.848-2.83 2.828L24 26.829zM29.657 24l9.84-9.84-5.657-5.656-9.84 9.84-9.858-9.86-5.657 5.656L18.343 24l-9.851 9.852 5.657 5.656 9.85-9.852 9.846 9.846 5.657-5.656L29.657 24z"
      fillRule="evenodd"
    />
  );

  return isHovered ? normalHover : normal;
};

export default XOutline;
