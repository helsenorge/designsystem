import type { IconConfig } from './Icon';

import { IconSize } from '../../constants';

export const getIcon = ({
  size,
  isHovered,
  normal,
  normalHover,
  xSmall,
  xSmallHover,
  xxSmall,
  xxSmallHover,
}: IconConfig): React.ReactElement => {
  if (size <= IconSize.XXSmall && xxSmall && xxSmallHover) {
    return isHovered ? xxSmallHover : xxSmall;
  }
  if (size <= IconSize.XSmall && xSmall && xSmallHover) {
    return isHovered ? xSmallHover : xSmall;
  }

  return isHovered ? normalHover : normal;
};
