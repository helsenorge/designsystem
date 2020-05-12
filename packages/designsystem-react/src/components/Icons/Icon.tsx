import React from 'react';
import {PaletteNames} from '../../theme/palette';
import {getColor} from '../../theme/currys/color';

import AlarmClock from './AlarmClock';
import AlertSignFill from './AlertSignFill';
import AlertSignStroke from './AlertSignStroke';
import Amputation from './Amputation';
import Anxiety from './Anxiety';
import Apple from './Apple';
import Archive from './Archive';
import ArmFlexing from './ArmFlexing';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowUpRight from './ArrowUpRight';
import Attachment from './Attachment';
import Atv from './Atv';
import Avatar from './Avatar';
import AwakePersonOnPillow from './AwakePersonOnPillow';
import Baby from './Baby';
import BandAid from './BandAid';
import BeerAndPills from './BeerAndPills';
import Bell from './Bell';
import Bike from './Bike';
import BirthdayCake from './BirthdayCake';
import Boat from './Boat';
import Brain from './Brain';
import Breasts from './Breasts';
import BrokenHeart from './BrokenHeart';
import BrokenPuzzle from './BrokenPuzzle';
import Bus from './Bus';
import Calendar from './Calendar';
import CalendarEvent from './CalendarEvent';
import CalendarSave from './CalendarSave';
import Cancer from './Cancer';
import Car from './Car';
import Check from './Check';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronUp from './ChevronUp';
import ChildPlaying from './ChildPlaying';
import Cigarette from './Cigarette';
import Contacts from './Contacts';
import Copy from './Copy';
import Coronavirus from './Coronavirus';
import Cough from './Cough';
import CriticalHealthInfo from './CriticalHealthInfo';
import Depression from './Depression';
import DigestiveSystem from './DigestiveSystem';
import Dizzy from './Dizzy';
import Documents from './Documents';
import Dog from './Dog';
import DonorCard from './DonorCard';
import Draft from './Draft';
import EChat from './EChat';
import EarNoseThroat from './EarNoseThroat';
import ElderlyPerson from './ElderlyPerson';
import EnterFullScreen from './EnterFullScreen';
import Envelope from './Envelope';
import Epilepsy from './Epilepsy';
import Eraser from './Eraser';
import ErrorSignFill from './ErrorSignFill';
import ErrorSignStroke from './ErrorSignStroke';
import EuropeanHealthCard from './EuropeanHealthCard';
import ExitFullScreen from './ExitFullScreen';
import Eye from './Eye';
import Facebook from './Facebook';
import Female from './Female';
import FemaleDoctor from './FemaleDoctor';
import Ferry from './Ferry';
import FingerBleed from './FingerBleed';
import FirstAidKit from './FirstAidKit';
import Football from './Football';
import Form from './Form';
import Forward from './Forward';
import Garden from './Garden';
import GasCan from './GasCan';
import Globe from './Globe';
import HandWaving from './HandWaving';
import HandWithDisease from './HandWithDisease';
import Heart from './Heart';
import HelpSign from './HelpSign';
import Hiker from './Hiker';
import History from './History';
import HivAndAids from './HivAndAids';
import Hormone from './Hormone';
import Hospital from './Hospital';
import ImgFile from './ImgFile';
import Inbox from './Inbox';
import InfoSignFill from './InfoSignFill';
import InfoSignStroke from './InfoSignStroke';
import Instagram from './Instagram';
import JointPain from './JointPain';
import Journal from './Journal';
import JpgFile from './JpgFile';
import Kidney from './Kidney';
import Kjernejournal from './Kjernejournal';
import Laboratory from './Laboratory';
import LaptopBlog from './LaptopBlog';
import LawBook from './LawBook';
import LightBulb from './LightBulb';
import Location from './Location';
import Lock from './Lock';
import Lungs from './Lungs';
import Makeup from './Makeup';
import MaleDoctor from './MaleDoctor';
import MaleDoctorAndPerson from './MaleDoctorAndPerson';
import MaleGenitalia from './MaleGenitalia';
import Medicine from './Medicine';
import MedicineWarning from './MedicineWarning';
import MentalHealthAdult from './MentalHealthAdult';
import MentalHealthChild from './MentalHealthChild';
import Menu from './Menu';
import Microscope from './Microscope';
import Minus from './Minus';
import Mirror from './Mirror';
import MobilePhone from './MobilePhone';
import MotherHoldingBaby from './MotherHoldingBaby';
import MuscleBack from './MuscleBack';
import MuscleLeg from './MuscleLeg';
import Mushroom from './Mushroom';
import NoFilter from './NoFilter';
import Notepad from './Notepad';
import PaintRoll from './PaintRoll';
import PaperPlane from './PaperPlane';
import PatientAndPerson from './PatientAndPerson';
import Pause from './Pause';
import PdfFile from './PdfFile';
import Pencil from './Pencil';
import Person from './Person';
import PersonAndPatient from './PersonAndPatient';
import PersonInXRayMachine from './PersonInXRayMachine';
import PersonOverweight from './PersonOverweight';
import PersonRelaxing from './PersonRelaxing';
import PersonWithBrain from './PersonWithBrain';
import PersonWithBrokenArm from './PersonWithBrokenArm';
import PersonWithCrutches from './PersonWithCrutches';
import PersonWithJaw from './PersonWithJaw';
import PersonWithMagnifyingGlass from './PersonWithMagnifyingGlass';
import PersonWithSenses from './PersonWithSenses';
import PersonWorking from './PersonWorking';
import PizzaSlice from './PizzaSlice';
import Plane from './Plane';
import Plant from './Plant';
import PlusLarge from './PlusLarge';
import PlusSmall from './PlusSmall';
import PngFile from './PngFile';
import PoisonInformation from './PoisonInformation';
import Pregnant from './Pregnant';
import Printer from './Printer';
import Psychosis from './Psychosis';
import Publication from './Publication';
import Puzzle from './Puzzle';
import Receptionist from './Receptionist';
import Referral from './Referral';
import Refresh from './Refresh';
import Refund from './Refund';
import Reply from './Reply';
import Rocket from './Rocket';
import RtfFile from './RtfFile';
import Save from './Save';
import Scale from './Scale';
import Search from './Search';
import ShakingHand from './ShakingHand';
import Share from './Share';
import Skeleton from './Skeleton';
import Skin from './Skin';
import Snake from './Snake';
import Snapchat from './Snapchat';
import Spray from './Spray';
import Taxi from './Taxi';
import TeddyBear from './TeddyBear';
import ThinkingAboutBaby from './ThinkingAboutBaby';
import Ticket from './Ticket';
import Toolbox from './Toolbox';
import Tooth from './Tooth';
import Train from './Train';
import TrashCan from './TrashCan';
import Twitter from './Twitter';
import Upload from './Upload';
import UserOrganization from './UserOrganization';
import Vaccine from './Vaccine';
import VerticalDots from './VerticalDots';
import VideoCamera from './VideoCamera';
import VideoChat from './VideoChat';
import Wallet from './Wallet';
import Window from './Window';
import WordDocument from './WordDocument';
import X from './X';
import XmlFile from './XmlFile';
import YouTube from './YouTube';

const iconMapping = {
  alarmClock: AlarmClock,
  alertSignFill: AlertSignFill,
  alertSignStroke: AlertSignStroke,
  amputation: Amputation,
  anxiety: Anxiety,
  apple: Apple,
  archive: Archive,
  armFlexing: ArmFlexing,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  attachment: Attachment,
  atv: Atv,
  avatar: Avatar,
  awakePersonOnPillow: AwakePersonOnPillow,
  baby: Baby,
  bandAid: BandAid,
  beerAndPills: BeerAndPills,
  bell: Bell,
  bike: Bike,
  birthdayCake: BirthdayCake,
  boat: Boat,
  brain: Brain,
  breasts: Breasts,
  brokenHeart: BrokenHeart,
  brokenPuzzle: BrokenPuzzle,
  bus: Bus,
  calendar: Calendar,
  calendarEvent: CalendarEvent,
  calendarSave: CalendarSave,
  cancer: Cancer,
  car: Car,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  childPlaying: ChildPlaying,
  cigarette: Cigarette,
  contacts: Contacts,
  copy: Copy,
  coronavirus: Coronavirus,
  cough: Cough,
  criticalHealthInfo: CriticalHealthInfo,
  depression: Depression,
  digestiveSystem: DigestiveSystem,
  dizzy: Dizzy,
  documents: Documents,
  dog: Dog,
  donorCard: DonorCard,
  draft: Draft,
  eChat: EChat,
  earNoseThroat: EarNoseThroat,
  elderlyPerson: ElderlyPerson,
  enterFullScreen: EnterFullScreen,
  envelope: Envelope,
  epilepsy: Epilepsy,
  eraser: Eraser,
  errorSignFill: ErrorSignFill,
  errorSignStroke: ErrorSignStroke,
  europeanHealthCard: EuropeanHealthCard,
  exitFullScreen: ExitFullScreen,
  eye: Eye,
  facebook: Facebook,
  female: Female,
  femaleDoctor: FemaleDoctor,
  ferry: Ferry,
  fingerBleed: FingerBleed,
  firstAidKit: FirstAidKit,
  football: Football,
  form: Form,
  forward: Forward,
  garden: Garden,
  gasCan: GasCan,
  globe: Globe,
  handWaving: HandWaving,
  handWithDisease: HandWithDisease,
  heart: Heart,
  helpSign: HelpSign,
  hiker: Hiker,
  history: History,
  hivAndAids: HivAndAids,
  hormone: Hormone,
  hospital: Hospital,
  imgFile: ImgFile,
  inbox: Inbox,
  infoSignFill: InfoSignFill,
  infoSignStroke: InfoSignStroke,
  instagram: Instagram,
  jointPain: JointPain,
  journal: Journal,
  jpgFile: JpgFile,
  kidney: Kidney,
  kjernejournal: Kjernejournal,
  laboratory: Laboratory,
  laptopBlog: LaptopBlog,
  lawBook: LawBook,
  lightBulb: LightBulb,
  location: Location,
  lock: Lock,
  lungs: Lungs,
  makeup: Makeup,
  maleDoctor: MaleDoctor,
  maleDoctorAndPerson: MaleDoctorAndPerson,
  maleGenitalia: MaleGenitalia,
  medicine: Medicine,
  medicineWarning: MedicineWarning,
  mentalHealthAdult: MentalHealthAdult,
  mentalHealthChild: MentalHealthChild,
  menu: Menu,
  microscope: Microscope,
  minus: Minus,
  mirror: Mirror,
  mobilePhone: MobilePhone,
  motherHoldingBaby: MotherHoldingBaby,
  muscleBack: MuscleBack,
  muscleLeg: MuscleLeg,
  mushroom: Mushroom,
  noFilter: NoFilter,
  notepad: Notepad,
  paintRoll: PaintRoll,
  paperPlane: PaperPlane,
  patientAndPerson: PatientAndPerson,
  pause: Pause,
  pdfFile: PdfFile,
  pencil: Pencil,
  person: Person,
  personAndPatient: PersonAndPatient,
  personInXRayMachine: PersonInXRayMachine,
  personOverweight: PersonOverweight,
  personRelaxing: PersonRelaxing,
  personWithBrain: PersonWithBrain,
  personWithBrokenArm: PersonWithBrokenArm,
  personWithCrutches: PersonWithCrutches,
  personWithJaw: PersonWithJaw,
  personWithMagnifyingGlass: PersonWithMagnifyingGlass,
  personWithSenses: PersonWithSenses,
  personWorking: PersonWorking,
  pizzaSlice: PizzaSlice,
  plane: Plane,
  plant: Plant,
  plusLarge: PlusLarge,
  plusSmall: PlusSmall,
  pngFile: PngFile,
  poisonInformation: PoisonInformation,
  pregnant: Pregnant,
  printer: Printer,
  psychosis: Psychosis,
  publication: Publication,
  puzzle: Puzzle,
  receptionist: Receptionist,
  referral: Referral,
  refresh: Refresh,
  refund: Refund,
  reply: Reply,
  rocket: Rocket,
  rtfFile: RtfFile,
  save: Save,
  scale: Scale,
  search: Search,
  shakingHand: ShakingHand,
  share: Share,
  skeleton: Skeleton,
  skin: Skin,
  snake: Snake,
  snapchat: Snapchat,
  spray: Spray,
  taxi: Taxi,
  teddyBear: TeddyBear,
  thinkingAboutBaby: ThinkingAboutBaby,
  ticket: Ticket,
  toolbox: Toolbox,
  tooth: Tooth,
  train: Train,
  trashCan: TrashCan,
  twitter: Twitter,
  upload: Upload,
  userOrganization: UserOrganization,
  vaccine: Vaccine,
  verticalDots: VerticalDots,
  videoCamera: VideoCamera,
  videoChat: VideoChat,
  wallet: Wallet,
  window: Window,
  wordDocument: WordDocument,
  x: X,
  xmlFile: XmlFile,
  youTube: YouTube,
};
/* [END] This is auto-generated by iconGenerator.js */

export type IconColors = PaletteNames;
export type IconTypes =
  | 'alarmClock'
  | 'alertSignFill'
  | 'alertSignStroke'
  | 'amputation'
  | 'anxiety'
  | 'apple'
  | 'archive'
  | 'armFlexing'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUpRight'
  | 'attachment'
  | 'atv'
  | 'avatar'
  | 'awakePersonOnPillow'
  | 'baby'
  | 'bandAid'
  | 'beerAndPills'
  | 'bell'
  | 'bike'
  | 'birthdayCake'
  | 'boat'
  | 'brain'
  | 'breasts'
  | 'brokenHeart'
  | 'brokenPuzzle'
  | 'bus'
  | 'calendar'
  | 'calendarEvent'
  | 'calendarSave'
  | 'cancer'
  | 'car'
  | 'check'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'childPlaying'
  | 'cigarette'
  | 'contacts'
  | 'copy'
  | 'coronavirus'
  | 'cough'
  | 'criticalHealthInfo'
  | 'depression'
  | 'digestiveSystem'
  | 'dizzy'
  | 'documents'
  | 'dog'
  | 'donorCard'
  | 'draft'
  | 'eChat'
  | 'earNoseThroat'
  | 'elderlyPerson'
  | 'enterFullScreen'
  | 'envelope'
  | 'epilepsy'
  | 'eraser'
  | 'errorSignFill'
  | 'errorSignStroke'
  | 'europeanHealthCard'
  | 'exitFullScreen'
  | 'eye'
  | 'facebook'
  | 'female'
  | 'femaleDoctor'
  | 'ferry'
  | 'fingerBleed'
  | 'firstAidKit'
  | 'football'
  | 'form'
  | 'forward'
  | 'garden'
  | 'gasCan'
  | 'globe'
  | 'handWaving'
  | 'handWithDisease'
  | 'heart'
  | 'helpSign'
  | 'hiker'
  | 'history'
  | 'hivAndAids'
  | 'hormone'
  | 'hospital'
  | 'imgFile'
  | 'inbox'
  | 'infoSignFill'
  | 'infoSignStroke'
  | 'instagram'
  | 'jointPain'
  | 'journal'
  | 'jpgFile'
  | 'kidney'
  | 'kjernejournal'
  | 'laboratory'
  | 'laptopBlog'
  | 'lawBook'
  | 'lightBulb'
  | 'location'
  | 'lock'
  | 'lungs'
  | 'makeup'
  | 'maleDoctor'
  | 'maleDoctorAndPerson'
  | 'maleGenitalia'
  | 'medicine'
  | 'medicineWarning'
  | 'mentalHealthAdult'
  | 'mentalHealthChild'
  | 'menu'
  | 'microscope'
  | 'minus'
  | 'mirror'
  | 'mobilePhone'
  | 'motherHoldingBaby'
  | 'muscleBack'
  | 'muscleLeg'
  | 'mushroom'
  | 'noFilter'
  | 'notepad'
  | 'paintRoll'
  | 'paperPlane'
  | 'patientAndPerson'
  | 'pause'
  | 'pdfFile'
  | 'pencil'
  | 'person'
  | 'personAndPatient'
  | 'personInXRayMachine'
  | 'personOverweight'
  | 'personRelaxing'
  | 'personWithBrain'
  | 'personWithBrokenArm'
  | 'personWithCrutches'
  | 'personWithJaw'
  | 'personWithMagnifyingGlass'
  | 'personWithSenses'
  | 'personWorking'
  | 'pizzaSlice'
  | 'plane'
  | 'plant'
  | 'plusLarge'
  | 'plusSmall'
  | 'pngFile'
  | 'poisonInformation'
  | 'pregnant'
  | 'printer'
  | 'psychosis'
  | 'publication'
  | 'puzzle'
  | 'receptionist'
  | 'referral'
  | 'refresh'
  | 'refund'
  | 'reply'
  | 'rocket'
  | 'rtfFile'
  | 'save'
  | 'scale'
  | 'search'
  | 'shakingHand'
  | 'share'
  | 'skeleton'
  | 'skin'
  | 'snake'
  | 'snapchat'
  | 'spray'
  | 'taxi'
  | 'teddyBear'
  | 'thinkingAboutBaby'
  | 'ticket'
  | 'toolbox'
  | 'tooth'
  | 'train'
  | 'trashCan'
  | 'twitter'
  | 'upload'
  | 'userOrganization'
  | 'vaccine'
  | 'verticalDots'
  | 'videoCamera'
  | 'videoChat'
  | 'wallet'
  | 'window'
  | 'wordDocument'
  | 'x'
  | 'xmlFile'
  | 'youTube';

interface IconProps {
  type: IconTypes;
  size?: number;
  color?: IconColors;
  classNames?: string;
  isHovered?: boolean;
}

interface IconRawProps {
  color: string;
  classNames?: string;
  hoverColor: string;
  size?: number;
  isHovered?: boolean;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {type, classNames = '', size = 48, color = 'black', isHovered = false} = props;
  return React.createElement(iconMapping[type], {
    size,
    color: getColor(color, 600),
    classNames,
    hoverColor: getColor(color, 700),
    isHovered,
    ref: ref,
  });
});

Icon.displayName = 'Icon';

export {Icon, IconProps, IconRawProps};
