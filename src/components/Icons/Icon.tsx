import React from 'react';

import Lock from './Lock';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';
import Unlock from './Unlock';
import Bin from './Bin';
import Bin2 from './Bin2';
import Bus from './Bus';
import Envelope from './Envelope';
import Plus from './Plus';
import Printer from './Printer';
import Printer2 from './Printer2';
import Close from './Close';

type IconArt = 'lock' | 'unlock' | 'arrowRight' | string;

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

const IconMapping = {
  lock: Lock,
  unlock: Unlock,
  bin: Bin,
  bin2: Bin2,
  bus: Bus,
  close: Close,
  envelope: Envelope,
  plus: Plus,
  printer: Printer,
  printer2: Printer2,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
};

interface IconProps {
  children?: IconArt;
  size?: IconSize;
  color?: string;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {children = '', size = IconSize.Medium, color = 'black'} = props;
  return React.createElement(IconMapping[children], {size, color, ref: ref});
});

Icon.displayName = 'Icon';

export {Icon, IconSize, IconProps};
