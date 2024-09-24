export type Styles = {
  'panel-wrapper': string;
  'panel-wrapper--blueberry': string;
  'panel-wrapper--neutral': string;
  'panel-wrapper--white': string;
  'tab-list-wrapper': string;
  'tab-list-wrapper--sticky': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
