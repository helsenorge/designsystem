import React from 'react';

/* [START] This is auto-generated by iconGenerator.js */
import AlarmClock from './AlarmClock';
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
import PaperPlane from './PaperPlane';
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
import {PaletteNames} from '../../theme/palette';
import {getColor} from '../../theme/currys/color';

const iconMapping = {
  alarmClock: AlarmClock,
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
  paperPlane: PaperPlane,
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

type IconColors = PaletteNames;

interface IconProps {
  children: string;
  size?: number;
  color?: IconColors;
  isHovered?: boolean;
}

interface IconRawProps {
  color: string;
  hoverColor: string;
  size?: number;
  isHovered?: boolean;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {children = '', size = 38, color = 'black', isHovered = false} = props;
  return React.createElement(iconMapping[children], {
    size,
    color: getColor(color, 600),
    hoverColor: getColor(color, 700),
    isHovered,
    ref: ref,
  });
});

Icon.displayName = 'Icon';

export {Icon, IconProps, IconRawProps};
