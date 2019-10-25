import React from 'react';

import Lock from './Lock';
import Wheelchair from './Wheelcair';
import ArrowRight from './ArrowRight';

const IconMapping = {
  lock: Lock,
  wheelchair: Wheelchair,
  arrowRight: ArrowRight,
};

type IconArt = 'lock' | 'unlock' | string;

enum IconSize {
  XXXSmall = 2,
  XXSmall = 4,
  XSmall = 8,
  Small = 16,
  Medium = 32,
  Large = 64,
  XLarge = 128,
  XXLarge = 256,
  XXXLarge = 512,
}

interface IconProps {
  children: IconArt;
  size?: IconSize;
  color?: string;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {children = '', size = IconSize.Medium, color = 'black'} = props;
  return React.createElement(IconMapping[children], {size, color});
});

Icon.displayName = 'Icon';

export {Icon};
