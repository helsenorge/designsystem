import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotLogin: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M20 37.192 38 40V8l-17.898 2.743.606 3.954L34 12.66v22.668L20.617 33.24 20 37.192Z" />
      <path d="M23.16 26H10v-4h13.183l-2.595-2.584 2.823-2.834 7.417 7.388-7.411 7.44-2.834-2.823L23.161 26Z" />
    </>
  );

  const normalHover = (
    <>
      <path d="M18 37.192 36 40V8l-17.898 2.743.606 3.954L32 12.66v22.668L18.617 33.24 18 37.192Z" />
      <path d="M23.16 26H10v-4h13.183l-2.595-2.584 2.823-2.834 7.417 7.388-7.411 7.44-2.834-2.823L23.161 26Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default DotLogin;
