import React from 'react';
import {PaletteNames} from '../../theme/palette';
import {getColor} from '../../theme/currys/color';

/* [START] This is auto-generated by iconGenerator.js */
import AlarmClock from './AlarmClock';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Avatar from './Avatar';
import CalendarSave from './CalendarSave';
import Check from './Check';
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

import AlertSignFill from './AlertSignFill';
import AlertSignStroke from './AlertSignStroke';
import ArmFlexing from './ArmFlexing';
import AwakePersonOnPillow from './AwakePersonOnPillow';
import Baby from './Baby';
import BandAid from './BandAid';
import BeerAndPills from './BeerAndPills';
import Bell from './Bell';
import CalendarEvent from './CalendarEvent';
import Car from './Car';
import Dog from './Dog';
import Draft from './Draft';
import EChat from './EChat';
import Female from './Female';
import FemaleDoctor from './FemaleDoctor';
import Form from './Form';
import Globe from './Globe';
import HandWaving from './HandWaving';
import Heart from './Heart';
import Hormone from './Hormone';
import InfoSignFill from './InfoSignFill';
import InfoSignStroke from './InfoSignStroke';
import Instagram from './Instagram';
import JointPain from './JointPain';
import LaptopBlog from './LaptopBlog';
import LawBook from './LawBook';
import LightBulb from './LightBulb';
import Location from './Location';
import PaintRoller from './PaintRoller';
import PatientAndPerson from './PatientAndPerson';
import Person from './Person';
import PersonInXRayMachine from './PersonInXRayMachine';
import PersonWithBrokenArm from './PersonWithBrokenArm';
import Plane from './Plane';
import Pregnant from './Pregnant';
import Publication from './Publication';
import Puzzle from './Puzzle';
import Receptionist from './Receptionist';
import Rocket from './Rocket';
import Skin from './Skin';
import Snapchat from './Snapchat';
import Taxi from './Taxi';
import TeddyBear from './TeddyBear';
import Ticket from './Ticket';
import Train from './Train';
import TrashCan from './TrashCan';
import Twitter from './Twitter';
import VideoCamera from './VideoCamera';
import WarningSignFill from './WarningSignFill';
import WarningSignStroke from './WarningSignStroke';
import YouTube from './YouTube';

import Archive from './Archive';
import Bus from './Bus';
import CriticalHealthInfo from './CriticalHealthInfo';
import Contacts from './Contacts';
import Documents from './Documents';
import DonorCard from './DonorCard';
import Calendar from './Calendar';
import Envelope from './Envelope';
import EuropeanHealthCard from './EuropeanHealthCard';
import Hospital from './Hospital';
import Journal from './Journal';
import Kjernejournal from './Kjernejournal';
import Laboratory from './Laboratory';
import MaleDoctor from './MaleDoctor';
import Medicine from './Medicine';
import MedicineWarning from './MedicineWarning';
import Microscope from './Microscope';
import Referral from './Referral';
import Refund from './Refund';
import Scale from './Scale';
import Toolbox from './Toolbox';
import Vaccine from './Vaccine';
import Wallet from './Wallet';

const iconMapping = {
  alertSignFill: AlertSignFill,
  alertSignStroke: AlertSignStroke,
  armFlexing: ArmFlexing,
  awakePersonOnPillow: AwakePersonOnPillow,
  baby: Baby,
  bandAid: BandAid,
  beerAndPills: BeerAndPills,
  bell: Bell,
  calendarEvent: CalendarEvent,
  car: Car,
  dog: Dog,
  draft: Draft,
  eChat: EChat,
  female: Female,
  femaleDoctor: FemaleDoctor,
  form: Form,
  globe: Globe,
  handWaving: HandWaving,
  heart: Heart,
  hormone: Hormone,
  infoSignFill: InfoSignFill,
  infoSignStroke: InfoSignStroke,
  instagram: Instagram,
  jointPain: JointPain,
  laptopBlog: LaptopBlog,
  lawBook: LawBook,
  lightBulb: LightBulb,
  location: Location,
  paintRoller: PaintRoller,
  patientAndPerson: PatientAndPerson,
  person: Person,
  personInXRayMachine: PersonInXRayMachine,
  personWithBrokenArm: PersonWithBrokenArm,
  plane: Plane,
  pregnant: Pregnant,
  publication: Publication,
  puzzle: Puzzle,
  receptionist: Receptionist,
  rocket: Rocket,
  skin: Skin,
  snapchat: Snapchat,
  taxi: Taxi,
  teddyBear: TeddyBear,
  ticket: Ticket,
  train: Train,
  trashCan: TrashCan,
  twitter: Twitter,
  videoCamera: VideoCamera,
  warningSignFill: WarningSignFill,
  warningSignStroke: WarningSignStroke,
  youTube: YouTube,
  alarmClock: AlarmClock,
  archive: Archive,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  avatar: Avatar,
  bus: Bus,
  calendar: Calendar,
  calendarSave: CalendarSave,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  criticalHealthInfo: CriticalHealthInfo,
  contacts: Contacts,
  cross: Cross,
  documents: Documents,
  donorCard: DonorCard,
  enterFullScreen: EnterFullScreen,
  envelope: Envelope,
  eraser: Eraser,
  europeanHealthCard: EuropeanHealthCard,
  exitFullScreen: ExitFullScreen,
  eye: Eye,
  filterOff: FilterOff,
  forward: Forward,
  hospital: Hospital,
  journal: Journal,
  kjernejournal: Kjernejournal,
  laboratory: Laboratory,
  lock: Lock,
  maleDoctor: MaleDoctor,
  medicine: Medicine,
  medicineWarning: MedicineWarning,
  menu: Menu,
  microscope: Microscope,
  minus: Minus,
  paperPlane: PaperPlane,
  pause: Pause,
  pencil: Pencil,
  plusLarge: PlusLarge,
  plusSmall: PlusSmall,
  printer: Printer,
  referral: Referral,
  refund: Refund,
  reply: Reply,
  scale: Scale,
  search: Search,
  toolbox: Toolbox,
  vaccine: Vaccine,
  share: Share,
  verticalDots: VerticalDots,
  wallet: Wallet,
  x: X,
};
/* [END] This is auto-generated by iconGenerator.js */

export type IconColors = PaletteNames;
export type IconTypes =
  | 'alertSignFill'
  | 'alertSignStroke'
  | 'armFlexing'
  | 'awakePersonOnPillow'
  | 'baby'
  | 'bandAid'
  | 'beerAndPills'
  | 'bell'
  | 'calendarEvent'
  | 'car'
  | 'dog'
  | 'draft'
  | 'eChat'
  | 'female'
  | 'femaleDoctor'
  | 'form'
  | 'globe'
  | 'handWaving'
  | 'heart'
  | 'hormone'
  | 'infoSignFill'
  | 'infoSignStroke'
  | 'instagram'
  | 'jointPain'
  | 'laptopBlog'
  | 'lawBook'
  | 'lightBulb'
  | 'location'
  | 'paintRoller'
  | 'patientAndPerson'
  | 'person'
  | 'personInXRayMachine'
  | 'personWithBrokenArm'
  | 'plane'
  | 'pregnant'
  | 'publication'
  | 'puzzle'
  | 'receptionist'
  | 'rocket'
  | 'skin'
  | 'snapchat'
  | 'taxi'
  | 'teddyBear'
  | 'ticket'
  | 'train'
  | 'trashCan'
  | 'twitter'
  | 'videoCamera'
  | 'warningSignFill'
  | 'warningSignStroke'
  | 'youTube'
  | 'alertSignFill'
  | 'alarmClock'
  | 'archive'
  | 'arrowLeft'
  | 'arrowRight'
  | 'avatar'
  | 'bus'
  | 'calendar'
  | 'calendarSave'
  | 'check'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'criticalHealthInfo'
  | 'contacts'
  | 'cross'
  | 'documents'
  | 'donorCard'
  | 'enterFullScreen'
  | 'envelope'
  | 'eraser'
  | 'europeanHealthCard'
  | 'exitFullScreen'
  | 'eye'
  | 'filterOff'
  | 'forward'
  | 'hospital'
  | 'journal'
  | 'kjernejournal'
  | 'laboratory'
  | 'lock'
  | 'maleDoctor'
  | 'medicine'
  | 'medicineWarning'
  | 'menu'
  | 'microscope'
  | 'minus'
  | 'paperPlane'
  | 'pause'
  | 'pencil'
  | 'plusLarge'
  | 'plusSmall'
  | 'printer'
  | 'referral'
  | 'refund'
  | 'reply'
  | 'scale'
  | 'search'
  | 'share'
  | 'toolbox'
  | 'vaccine'
  | 'verticalDots'
  | 'wallet'
  | 'x';

interface IconProps {
  type: IconTypes;
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
  const {type, size = 48, color = 'black', isHovered = false} = props;
  return React.createElement(iconMapping[type], {
    size,
    color: getColor(color, 600),
    hoverColor: getColor(color, 700),
    isHovered,
    ref: ref,
  });
});

Icon.displayName = 'Icon';

export {Icon, IconProps, IconRawProps};
