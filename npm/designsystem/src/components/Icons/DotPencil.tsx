import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotPencil: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.326 9.147a4 4 0 0 0-5.617.01l-17.2 17.019L8 38.555l12.152-1.803 17.13-17.066A4 4 0 0 0 37.263 14l-4.937-4.853ZM29.522 12l4.937 4.853-2.338 2.329-4.902-4.903L29.522 12Zm-5.146 5.093L13.31 28.04l-.705 5.787 5.656-.84 11.026-10.983-4.913-4.912Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.043 6.492a4 4 0 0 0-4.86 2.817l-6.387 23.339 4.883 11.474 9.623-7.637 6.303-23.344a4 4 0 0 0-2.86-4.915l-6.702-1.734Zm-1.002 3.872 6.702 1.734-.86 3.186-6.697-1.794.855-3.126Zm-1.911 6.984-4.108 15.014 2.282 5.364 4.48-3.555 4.056-15.025-6.71-1.798Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default DotPencil;
