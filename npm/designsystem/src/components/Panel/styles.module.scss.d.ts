export type Styles = {
  'panel-wrapper': string;
  panel: string;
  'panel--with-icon': string;
  'panel--normal': string;
  'panel--fill': string;
  'panel--white': string;
  'panel--stroke': string;
  'panel--line': string;
  'panel--new': string;
  'panel--draft': string;
  'panel--error': string;
  'panel--status': string;
  'panel--container': string;
  'panel--button': string;
  'panel__icon': string;
  'panel__content-left': string;
  'panel__content-right': string;
  'panel-content-a__title-container': string;
  'btn-container': string;
  'panel-details': string;
  'panel-details--line': string;
  'panel-details--white': string;
  'status-message': string;
  'status-message--new': string;
  'datetime-container': string;
  'datetime-container__icon': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
