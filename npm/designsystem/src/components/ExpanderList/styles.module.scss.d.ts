export type Styles = {
  'expander-list': string;
  'expander-list__item': string;
  'expander-list__item--no-bottom': string;
  'expander-list__item--top': string;
  'expander-list-link': string;
  'expander-list-link__chevron': string;
  'expander-list-link__icon': string;
  'expander-list-link__main-content': string;
  'expander-list-link__main-content--padding': string;
  'expander-list-link__title': string;
  'expander-list-link--banana': string;
  'expander-list-link--blueberry': string;
  'expander-list-link--cherry': string;
  'expander-list-link--closed': string;
  'expander-list-link--kiwi': string;
  'expander-list-link--large': string;
  'expander-list-link--neutral': string;
  'expander-list-link--plum': string;
  'expander-list-link--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
