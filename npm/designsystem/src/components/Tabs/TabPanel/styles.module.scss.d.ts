export type Styles = {
  'tab-panel': string;
  'tab-panel--blueberry': string;
  'tab-panel--first': string;
  'tab-panel--neutral': string;
  'tab-panel--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
