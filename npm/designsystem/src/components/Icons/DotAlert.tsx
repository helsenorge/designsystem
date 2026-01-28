import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotAlert: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-1.8-24v10h4V16h-4Zm1.9 17.264a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-1.8-27v13h4V13h-4Zm1.9 22.264a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z"
    />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotAlert;
