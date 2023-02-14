export type Styles = {
  'date-time': string;
  'date-time__date-picker': string;
  'date-time__time-separator': string;
  'date-time__time-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
