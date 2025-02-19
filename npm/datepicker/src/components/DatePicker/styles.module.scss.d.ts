export type Styles = {
  '_day--selected': string;
  button_next: string;
  button_previous: string;
  caption_label: string;
  chevron: string;
  'date-button': string;
  'date-button__inner': string;
  'date-time-picker-wrapper': string;
  'date-time-picker-wrapper__date-picker': string;
  'date-time-picker-wrapper__legend': string;
  'date-time-picker-wrapper__row': string;
  'date-time-picker-wrapper__row-error': string;
  'datepicker-popup-arrow': string;
  'datepicker-popup-arrow--over': string;
  'datepicker-popup-arrow--under': string;
  'datepicker-popup-arrow--visible': string;
  'datepicker-popup-container': string;
  'datepicker-popup-container--visible': string;
  day: string;
  day_button: string;
  'day--disabled': string;
  'day--selected': string;
  'day--today': string;
  dropdown: string;
  dropdown_month: string;
  'footer-wrapper': string;
  month: string;
  month_grid: string;
  root: string;
  'time-separator': string;
  weekday: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
