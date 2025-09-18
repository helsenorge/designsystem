export type Styles = {
  'element-header': string;
  'element-header__avatar': string;
  'element-header__avatar--with-statusdot': string;
  'element-header__badge': string;
  'element-header__badge-container': string;
  'element-header__chevron': string;
  'element-header__content': string;
  'element-header__content--element': string;
  'element-header__content--spacing': string;
  'element-header__icon': string;
  'element-header__icon--with-statusdot': string;
  'element-header__statusdot-container': string;
  'element-header__title': string;
  'text-wrapper': string;
  'text-wrapper__text--emphasised': string;
  'text-wrapper--sub-level': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
