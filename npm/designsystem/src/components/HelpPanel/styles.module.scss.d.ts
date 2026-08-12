export type Styles = {
  'help-panel': string;
  'help-panel__content': string;
  'help-panel__content--compact': string;
  'help-panel__icon': string;
  'help-panel__icon--compact': string;
  'help-panel__title-wrapper': string;
  'help-panel--compact': string;
  'help-panel--subdued': string;
  'help-panel--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
