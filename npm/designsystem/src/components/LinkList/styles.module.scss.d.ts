export type Styles = {
  'link-list': string;
  'link-list__anchor': string;
  'link-list__anchor--banana': string;
  'link-list__anchor--black': string;
  'link-list__anchor--blueberry': string;
  'link-list__anchor--cherry': string;
  'link-list__anchor--kiwi': string;
  'link-list__anchor--large': string;
  'link-list__anchor--medium': string;
  'link-list__anchor--neutral': string;
  'link-list__anchor--plum': string;
  'link-list__anchor--small': string;
  'link-list__anchor--white': string;
  'link-list__chevron': string;
  'link-list__content': string;
  'link-list__icon': string;
  'link-list--hastopborder': string;
  'link-list--nobottomborder': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
