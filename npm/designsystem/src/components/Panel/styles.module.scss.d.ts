export type Styles = {
  panel: string;
  'panel__border--outline': string;
  panel__content: string;
  panel__content__item: string;
  'panel__content__item--a': string;
  'panel__content__item--b': string;
  'panel__content__item--c': string;
  'panel__content--b-first': string;
  'panel__content--bAsRightCol': string;
  'panel__content--combined': string;
  'panel__content--horizontal': string;
  'panel__content--vertical': string;
  'panel__expand-button': string;
  'panel__expanded-content': string;
  'panel__expander-border--blueberry': string;
  'panel__expander-border--expanded': string;
  'panel__expander-border--neutral': string;
  'panel__expander-border--white': string;
  'panel__pre-container': string;
  'panel--blueberry': string;
  'panel--border': string;
  'panel--draft': string;
  'panel--error': string;
  'panel--fill': string;
  'panel--icon': string;
  'panel--line': string;
  'panel--neutral': string;
  'panel--new': string;
  'panel--status': string;
  'panel--white': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
