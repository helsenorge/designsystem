export type Styles = {
  'list-header': string;
  'list-header__avatar': string;
  'list-header__badge': string;
  'list-header__badge-container': string;
  'list-header__chevron': string;
  'list-header__content': string;
  'list-header__content--element': string;
  'list-header__content--spacing': string;
  'list-header__icon': string;
  'list-header__title': string;
  'text-wrapper': string;
  'text-wrapper__text--emphasised': string;
  'text-wrapper--sub-level': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
