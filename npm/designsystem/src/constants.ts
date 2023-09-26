export enum IconSize {
  XXSmall = 24,
  XSmall = 38,
  Small = 48,
  Medium = 64,
  Large = 80,
  XLarge = 130,
}

export enum ZIndex {
  Modal = 1300000,
  ExpanderTrigger = 10000,
}

export const AVERAGE_CHARACTER_WIDTH_PX = 12;

export interface HTMLButtonProps {
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: 'submit' | 'reset' | 'button' | string;
  value?: string | string[] | number;
  id?: string;
}

export type AnchorTarget = '_self' | '_blank' | '_parent' | '_top';

export interface HTMLAnchorProps {
  download?: string;
  href?: string;
  hrefLang?: string;
  media?: string;
  ping?: string;
  rel?: AnchorTarget;
  target?: string;
  referrerPolicy?:
    | ''
    | 'same-origin'
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
}

export type ButtonVariant = 'secondary' | 'tertiary' | string | undefined | null;

export enum FormMode {
  onwhite = 'onwhite',
  ongrey = 'ongrey',
  onblueberry = 'onblueberry',
  ondark = 'ondark',
  oninvalid = 'oninvalid',
}

export enum FormVariant {
  normal = 'normal',
  bigform = 'bigform',
}

export enum AnalyticsId {
  AnchorLink = 'anchor-link',
  Avatar = 'avatar',
  Badge = 'badge',
  Button = 'button',
  Checkbox = 'checkbox',
  Close = 'close',
  DictionaryTrigger = 'dictionary-trigger',
  Dropdown = 'dropdown',
  Duolist = 'duolist',
  Expander = 'expander',
  ExpanderHierarchy = 'expander-hierarchy',
  ExpanderHierarchyExpander = 'expander-hierarchy-expander',
  ExpanderList = 'expander-list',
  ExpanderListExpander = 'expander-list-expander',
  FormGroup = 'form-group',
  FormLayout = 'form-layout',
  HelpBubble = 'help-bubble',
  HelpQuestion = 'help-question',
  HighlightBox = 'highlight-box',
  Icon = 'icon',
  Input = 'input',
  Label = 'label',
  Link = 'link',
  LinkList = 'link-list',
  List = 'list',
  Loader = 'loader',
  Logo = 'logo',
  Modal = 'modal',
  NotificationPanel = 'notification-panel',
  Panel = 'panel',
  PanelList = 'panel-list',
  PopMenu = 'pop-menu',
  PopOver = 'pop-over',
  Portal = 'portal',
  RadioButton = 'radio-button',
  RadioGroup = 'radio-group',
  Select = 'select',
  Slider = 'slider',
  Spacer = 'spacer',
  StatusDot = 'status-dot',
  Stepper = 'stepper',
  Sublabel = 'sublabel',
  Table = 'table',
  Tag = 'tag',
  TagList = 'tag-list',
  Textarea = 'textarea',
  Tile = 'tile',
  Title = 'title',
  Tooltip = 'tooltip',
  Trigger = 'trigger',
  Validation = 'validation',
}

export enum KeyboardEventKey {
  Enter = 'Enter',
  Escape = 'Escape',
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  Home = 'Home',
  End = 'End',
}
