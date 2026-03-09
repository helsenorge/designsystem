import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const Minus: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M14.225 23h19.55v2h-19.55z" />;
  const normalHover = <path d="M12.225 23h23.55v2h-23.55z" />;
  const xSmall = <path d="M14.179 22.737h19.642v2.526H14.179z" />;
  const xSmallHover = <path d="M11.653 22.737h24.694v2.526H11.653z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Minus;
