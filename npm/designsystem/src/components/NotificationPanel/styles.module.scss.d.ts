export type Styles = {
  anchorlink: string;
  anchorlink__icon: string;
  'fluid-wrapper': string;
  'fluid-wrapper--alert': string;
  'fluid-wrapper--crisis': string;
  'fluid-wrapper--info': string;
  'fluid-wrapper--shadow': string;
  'fluid-wrapper--warn': string;
  'notification-panel': string;
  'notification-panel__close': string;
  'notification-panel__content': string;
  'notification-panel__content--crisis': string;
  'notification-panel__icon': string;
  'notification-panel__label': string;
  'notification-panel--alert': string;
  'notification-panel--crisis': string;
  'notification-panel--dismissable': string;
  'notification-panel--has-children': string;
  'notification-panel--info': string;
  'notification-panel--label-only': string;
  'notification-panel--large': string;
  'notification-panel--medium': string;
  'notification-panel--shadow': string;
  'notification-panel--small': string;
  'notification-panel--warn': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
