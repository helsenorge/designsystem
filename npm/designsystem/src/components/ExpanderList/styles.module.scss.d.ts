export type Styles = {
  'expander-list': string;
  'expander-list__item': string;
  'expander-list__item--line': string;
  'expander-list__item--outline': string;
  'expander-list-link': string;
  'expander-list-link__chevron': string;
  'expander-list-link__icon': string;
  'expander-list-link__main-content': string;
  'expander-list-link__main-content--expanded': string;
  'expander-list-link__main-content--padding': string;
  'expander-list-link--absolute': string;
  'expander-list-link--banana': string;
  'expander-list-link--blueberry': string;
  'expander-list-link--cherry': string;
  'expander-list-link--closed': string;
  'expander-list-link--fill': string;
  'expander-list-link--kiwi': string;
  'expander-list-link--large': string;
  'expander-list-link--neutral': string;
  'expander-list-link--plum': string;
  'expander-list-link--sticky': string;
  'expander-list-link--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
