import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotNoAccess: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 21.5h16.5V26H16v-4.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm16-12c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.75 21.5h20.5V26h-20.5v-4.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm16-12c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default DotNoAccess;
