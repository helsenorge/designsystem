export type Styles = {
  anchorlink: string;
  anchorlink__icon: string;
  'anchorlink-wrapper': string;
  'fluid-wrapper': string;
  'notification-panel': string;
  'notification-panel__children': string;
  'notification-panel__close': string;
  'notification-panel__compact': string;
  'notification-panel__compact--basic': string;
  'notification-panel__compact--outline': string;
  'notification-panel__content': string;
  'notification-panel__icon': string;
  'notification-panel__label': string;
  'notification-panel__label__compact': string;
  'notification-panel__label__compact--basic': string;
  'notification-panel__label--no-content': string;
  'notification-panel__label-and-content--spacing': string;
  'notification-panel--alert': string;
  'notification-panel--dismissable': string;
  'notification-panel--info': string;
  'notification-panel--large': string;
  'notification-panel--medium': string;
  'notification-panel--small': string;
  'notification-panel--success': string;
  'notification-panel--warn': string;
  'notification-panel--with-content': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
