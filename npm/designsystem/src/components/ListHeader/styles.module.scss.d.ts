export type Styles = {
  'list-header': string;
  'list-header__avatar': string;
  'list-header__avatar--for-element-content': string;
  'list-header__avatar--for-element-content--large': string;
  'list-header__avatar--for-element-content--medium': string;
  'list-header__avatar--for-string-content': string;
  'list-header__badge': string;
  'list-header__badge--for-string-content': string;
  'list-header__badge--large': string;
  'list-header__badge--medium': string;
  'list-header__badge--right': string;
  'list-header__badge--small': string;
  'list-header__chevron': string;
  'list-header__chevron--for-string-content': string;
  'list-header__chevron--large': string;
  'list-header__chevron--medium': string;
  'list-header__chevron--right': string;
  'list-header__chevron--small': string;
  'list-header__content': string;
  'list-header__content--element': string;
  'list-header__content--spacing': string;
  'list-header__content--string': string;
  'list-header__icon': string;
  'list-header__icon--for-element-content': string;
  'list-header__icon--for-element-content--large': string;
  'list-header__icon--for-element-content--medium': string;
  'list-header__icon--for-string-content': string;
  'list-header__title': string;
  'list-header--for-element-content': string;
  'list-header--top-align-content': string;
  statusDot: string;
  'text-wrapper': string;
  'text-wrapper__text--emphasised': string;
  'text-wrapper--sub-level': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
