import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotGroup: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.573 18.98a8 8 0 1 1 13.277 2.478c3.665 2.01 6.15 5.898 6.15 10.367v7.033h-4v-7.033C36 27.512 32.49 24 28.144 24a7.82 7.82 0 0 0-4.146 1.177 6.972 6.972 0 0 1-1.745 4.45C24.523 31.199 26 33.764 26 36.661V39h-4v-2.339C22 34.23 19.908 32 17 32s-5 2.23-5 4.661V39H8v-2.339c0-2.897 1.478-5.462 3.747-7.034a7 7 0 0 1 8.826-10.648ZM24 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm-7 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 16c0 1.835.618 3.526 1.657 4.876-.808.33-1.57.746-2.278 1.237a7.001 7.001 0 1 0-10.707 8.389C9.022 32.072 8 34.252 8 36.662V39h4v-2.339C12 34.23 14.092 32 17 32s5 2.23 5 4.661V39h4v-2.339c0-3.455-2.102-6.437-5.142-7.827.105-.161.204-.326.296-.496l1.002-1.578A7.843 7.843 0 0 1 28.144 24C32.49 24 36 27.512 36 31.825v7.033h4v-7.033c0-3.964-1.955-7.47-4.955-9.616A8 8 0 1 0 22 16Zm8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm-18 5a3 3 0 0 0 5.358 1.855l.327-.515A3 3 0 1 0 12 25Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default DotGroup;
