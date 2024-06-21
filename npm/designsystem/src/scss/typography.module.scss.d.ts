export type Styles = {
  'anchorlink-wrapper': string;
  'focused-content': string;
  form: string;
  'image-caption': string;
  'image-credit': string;
  label: string;
  legend: string;
  preamble: string;
  strong: string;
  'table-cell': string;
  time: string;
  'title-feature': string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
