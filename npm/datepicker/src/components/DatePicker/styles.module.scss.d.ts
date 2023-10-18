export type Styles = {
  _day_selected: string;
  caption_label: string;
  'date-button': string;
  'date-time-picker-wrapper': string;
  'date-time-picker-wrapper__date-picker': string;
  'datepicker-popup-arrow': string;
  'datepicker-popup-arrow--over': string;
  'datepicker-popup-arrow--under': string;
  'datepicker-popup-arrow--visible': string;
  'datepicker-popup-container': string;
  'datepicker-popup-container--visible': string;
  day: string;
  day_selected: string;
  'day--disabled': string;
  'day--today': string;
  dropdown: string;
  dropdown_month: string;
  dropdown_year: string;
  'footer-wrapper': string;
  head_cell: string;
  month: string;
  nav_button: string;
  nav_button_next: string;
  root: string;
  table: string;
  'time-separator': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
