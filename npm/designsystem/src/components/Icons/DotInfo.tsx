import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotInfo: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm0 4c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 33.266v-10h-4v10h4Z" />
      <path d="M21.8 18.302a2.3 2.3 0 1 1 4.6 0 2.3 2.3 0 0 1-4.6 0Z" />
    </>
  );

  const xxSmallHover = (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm0 4c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 33.266v-10h-4v10h4Z" />
      <path d="M21.8 18.302a2.3 2.3 0 1 1 4.6 0 2.3 2.3 0 0 1-4.6 0Z" />
    </>
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotInfo;
