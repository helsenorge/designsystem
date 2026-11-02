export type Styles = {
  'date-and-time__date-field': string;
  'date-and-time__fields': string;
  'date-and-time__time-field': string;
  'date-and-time--fieldset': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
