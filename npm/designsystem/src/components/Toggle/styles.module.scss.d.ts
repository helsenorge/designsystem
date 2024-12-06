export type Styles = {
  'toggle-container': string;
  'toggle-container__input': string;
  'toggle-container__label': string;
  'toggle-container__label__text--subdued': string;
  'toggle-container__label--toggle-right': string;
  'toggle-container__row': string;
  'toggle-container__row--right': string;
  'toggle-container__sublabel': string;
  'toggle-container__sublabel--toggle-right': string;
  'toggle-container__toggle': string;
  'toggle-container__toggle__dot': string;
  'toggle-container__toggle__dot__icon': string;
  'toggle-container__toggle__dot--ignore-hover': string;
  'toggle-container__toggle--ignore-hover': string;
  'toggle-container__toggle--on-white': string;
  'toggle-container__toggle-group': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
