import React from 'react';
import {Palette, IconSize} from '../../constants';

/* [START] This is auto-generated by iconGenerator.js */
import Alarmclock from './Alarmclock';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import CalendarSave from './CalendarSave';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import Cross from './Cross';
import Eye from './Eye';
import FilterOff from './FilterOff';
import Minus from './Minus';
import Paperplane from './Paperplane';
import Pencil from './Pencil';
import PlusLarge from './PlusLarge';
import PlusSmall from './PlusSmall';
import Printer from './Printer';
import Share from './Share';
import VerticalDots from './VerticalDots';
import {Colors, palette} from '../../theme';

const iconMapping = {
  alarmclock: Alarmclock,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  calendarSave: CalendarSave,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  cross: Cross,
  eye: Eye,
  filterOff: FilterOff,
  minus: Minus,
  paperplane: Paperplane,
  pencil: Pencil,
  plusLarge: PlusLarge,
  plusSmall: PlusSmall,
  printer: Printer,
  share: Share,
  verticalDots: VerticalDots,
};
/* [END] This is auto-generated by iconGenerator.js */

type IconColors = Colors;

interface IconProps {
  children?: string;
  size?: IconSize;
  color?: IconColors;
  isHovered?: boolean;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {children = '', size = IconSize.XSmall, color = palette['wheelChair'], isHovered = false} = props;
  return React.createElement(iconMapping[children], {size, color: palette[color], isHovered, ref: ref});
});

Icon.displayName = 'Icon';

export {Icon, IconProps};
