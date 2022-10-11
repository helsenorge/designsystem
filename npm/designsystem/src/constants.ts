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
  Dropdown = 'dropdown',
  Duolist = 'duolist',
  Expander = 'expander',
  ExpanderList = 'expander-list',
  ExpanderListExpander = 'expander-list-expander',
  FormGroup = 'form-group',
  FormLayout = 'form-layout',
  HelpBubble = 'help-bubble',
  HighlightBox = 'highlight-box',
  Icon = 'icon',
  Input = 'input',
  Link = 'link',
  LinkList = 'link-list',
  List = 'list',
  Loader = 'loader',
  Logo = 'logo',
  Modal = 'modal',
  NotificationPanel = 'notification-panel',
  Panel = 'panel',
  PanelList = 'panel-list',
  Portal = 'portal',
  RadioButton = 'radio-button',
  Slider = 'slider',
  Spacer = 'spacer',
  StatusDot = 'status-dot',
  Table = 'table',
  Tag = 'tag',
  TagList = 'tag-list',
  Textarea = 'textarea',
  Tile = 'tile',
  Title = 'title',
  Tooltip = 'tooltip',
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
