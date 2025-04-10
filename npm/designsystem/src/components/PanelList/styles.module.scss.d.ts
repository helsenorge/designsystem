export type Styles = {
  'panel-list__panel--fill': string;
  'panel-list__panel--line': string;
  'panel-list__panel--outline': string;
  'panel-list--outline': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
