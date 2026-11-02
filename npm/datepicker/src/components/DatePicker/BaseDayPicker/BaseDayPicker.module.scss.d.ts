export type Styles = {
  'calendar-button': string;
  'clear-button': string;
  'custom_caption-label': string;
  custom_chevron: string;
  custom_day_button: string;
  custom_month_caption: string;
  custom_nav_button: string;
  custom_nav_button__circle: string;
  'date--default': string;
  'date--disabled': string;
  'date--emphasized': string;
  'date--fully': string;
  'date--partial': string;
  'date--selected': string;
  'date--today': string;
  'datepicker-footer': string;
  'datepicker-footer--with-today-button': string;
  dropdown_chevron: string;
  dropdown_container: string;
  dropdown_label: string;
  dropdown_root_custom: string;
  'loading-overlay': string;
  root_override: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
