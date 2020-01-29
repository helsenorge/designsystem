import React from 'react';
import {Palette, IconSize} from '../../constants';
import {Colors, palette} from '../../theme';

/* [START] This is auto-generated by iconGenerator.js */
import Alarmclock from './Alarmclock';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Avatar from './Avatar';
import CalendarSave from './CalendarSave';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import Cross from './Cross';
import EnterFullScreen from './EnterFullScreen';
import Eraser from './Eraser';
import ExitFullScreen from './ExitFullScreen';
import Eye from './Eye';
import FilterOff from './FilterOff';
import Forward from './Forward';
import Lock from './Lock';
import Menu from './Menu';
import Minus from './Minus';
import Paperplane from './Paperplane';
import Pause from './Pause';
import Pencil from './Pencil';
import PlusLarge from './PlusLarge';
import PlusSmall from './PlusSmall';
import Printer from './Printer';
import Reply from './Reply';
import Search from './Search';
import Share from './Share';
import VerticalDots from './VerticalDots';
import X from './X';

const iconMapping = {
  alarmclock: Alarmclock,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  avatar: Avatar,
  calendarSave: CalendarSave,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  cross: Cross,
  enterFullScreen: EnterFullScreen,
  eraser: Eraser,
  exitFullScreen: ExitFullScreen,
  eye: Eye,
  filterOff: FilterOff,
  forward: Forward,
  lock: Lock,
  menu: Menu,
  minus: Minus,
  paperplane: Paperplane,
  pause: Pause,
  pencil: Pencil,
  plusLarge: PlusLarge,
  plusSmall: PlusSmall,
  printer: Printer,
  reply: Reply,
  search: Search,
  share: Share,
  verticalDots: VerticalDots,
  x: X,
};
/* [END] This is auto-generated by iconGenerator.js */

type IconColors = Colors;

interface IconProps {
  children: string;
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
