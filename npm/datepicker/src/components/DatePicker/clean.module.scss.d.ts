export type Styles = {
  caption_label: string;
  'custom_caption-label': string;
  custom_chevron: string;
  custom_dropdown_select: string;
  custom_month_caption: string;
  custom_nav_button: string;
  'date--default': string;
  'date--disabled': string;
  'date--emphasized': string;
  'date--fully': string;
  'date--partial': string;
  'date--selected': string;
  'date--today': string;
  'datepicker-footer': string;
  dropdown_chevron: string;
  dropdown_container: string;
  dropdown_label: string;
  'loading-overlay': string;
  root_override: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
