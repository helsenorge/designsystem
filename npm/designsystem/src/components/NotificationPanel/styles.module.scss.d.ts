export type Styles = {
  anchorlink: string;
  anchorlink__icon: string;
  'notification-panel': string;
  'notification-panel__action-column': string;
  'notification-panel__close-button': string;
  'notification-panel__close-button--crisis': string;
  'notification-panel__content': string;
  'notification-panel__content--crisis': string;
  'notification-panel__content--haslabel': string;
  'notification-panel__content--isred': string;
  'notification-panel__fluidwrapper': string;
  'notification-panel__fluidwrapper--alert': string;
  'notification-panel__fluidwrapper--crisis': string;
  'notification-panel__fluidwrapper--info': string;
  'notification-panel__fluidwrapper--shadow': string;
  'notification-panel__fluidwrapper--warn': string;
  'notification-panel__icon': string;
  'notification-panel__label': string;
  'notification-panel--alert': string;
  'notification-panel--crisis': string;
  'notification-panel--haslabel': string;
  'notification-panel--info': string;
  'notification-panel--large': string;
  'notification-panel--medium': string;
  'notification-panel--shadow': string;
  'notification-panel--small': string;
  'notification-panel--warn': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
