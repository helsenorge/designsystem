import React from 'react';

import { IconSize } from '../constants';

export interface IconConfig {
  size: IconSize;
  isHovered: boolean;
  normal: React.ReactElement;
  normalHover: React.ReactElement;
  xSmall?: React.ReactElement;
  xSmallHover?: React.ReactElement;
  xxSmall?: React.ReactElement;
  xxSmallHover?: React.ReactElement;
}

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
