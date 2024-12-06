export type Styles = {
  panel: string;
  panel__content: string;
  'panel__content--a': string;
  'panel__content--b': string;
  'panel__content--bAsRightCol': string;
  'panel__content--c': string;
  'panel__content--combined': string;
  'panel__content--horizontal': string;
  'panel__content--vertical': string;
  'panel__pre-container': string;
  'panel--blueberry': string;
  'panel--border': string;
  'panel--draft': string;
  'panel--error': string;
  'panel--fill': string;
  'panel--line': string;
  'panel--neutral': string;
  'panel--new': string;
  'panel--status': string;
  'panel--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
