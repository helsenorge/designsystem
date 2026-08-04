import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const ArrowUpRight: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M33.654 29.556h-2V17.793L16.051 33.397l-.247.248-1.414-1.416.248-.247 15.67-15.672H18.412v-2h15.243v15.246Z" />;

  const normalHover = <path d="M36.87 26.432h-2V14.579L15.805 33.645l-1.415-1.416.249-.247 18.794-18.794H21.627v-2H36.87v15.244Z" />;

  const xSmall = <path d="M33.791 29.457h-2.273V18.123L15.97 33.672l-1.609-1.608 15.62-15.619H18.508v-2.273H33.79v15.285Z" />;

  const xSmallHover = <path d="M37.106 26.155h-2.273V14.73L16.071 33.492l-1.431-1.43-.18-.177 18.742-18.741H21.823V10.87h15.283v15.285Z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ArrowUpRight;
