import React from 'react';

import Lock from './Lock';
import Unlock from './Unlock';

const IconMapping = {
  lock: Lock,
  unlock: Unlock,
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
  hover?: {icon: string; onHover: boolean};
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {children = '', size = IconSize.Medium, color = 'black', hover = null, ...restProps} = props;
  return (
    <svg version="1.1" viewBox="0 0 512 512" width={size} height={size} ref={ref} {...restProps}>
      {!hover
        ? React.createElement(IconMapping[children], {color})
        : React.createElement(IconMapping[!hover.onHover ? children : hover.icon], {color})}
    </svg>
  );
});

Icon.displayName = 'Icon';

export {Icon};
