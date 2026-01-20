export type Styles = {
  'calendar-button': string;
  'clear-button': string;
  'clear-button__placeholder': string;
  'date-field': string;
  'date-field__soft-error-text': string;
  'date-picker': string;
  'date-picker__inputs': string;
  'date-picker--clear-button-focused': string;
  'date-picker--with-clear-button': string;
  'date-segment': string;
  'date-segment--error': string;
  'date-segment--year': string;
  legend: string;
  legend__sublabel: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
