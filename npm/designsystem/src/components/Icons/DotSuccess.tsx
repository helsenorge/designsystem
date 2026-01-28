import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotSuccess: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="even-odd"
      d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-16.915 7.913 10.738-12.08-2.99-2.657-7.919 8.91L18 21.17l-2.829 2.828 7.914 7.914Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-16.915 7.913 12.738-14.08-2.99-2.657-9.919 10.91L16 19.17l-2.829 2.828 9.914 9.914Z"
    />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotSuccess;
