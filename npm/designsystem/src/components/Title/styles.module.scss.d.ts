export type Styles = {
  title: string;
  'title--feature': string;
  'title--title1': string;
  'title--title2': string;
  'title--title3': string;
  'title--title4': string;
  'title--title5': string;
  'title--title6': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
