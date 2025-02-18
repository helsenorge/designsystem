export type Styles = {
  duolist: string;
  duolist__dd: string;
  'duolist__dd--bold': string;
  'duolist__dd--non-formatted': string;
  duolist__dt: string;
  'duolist__dt--bold': string;
  'duolist__dt--non-formatted': string;
  'duolist--collapsed': string;
  'duolist--line': string;
  'duolist--non-formatted': string;
  'duolist--not-collapsed': string;
  'duolist-wrapper--border': string;
  'duolist-wrapper--extra-padding-top': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
