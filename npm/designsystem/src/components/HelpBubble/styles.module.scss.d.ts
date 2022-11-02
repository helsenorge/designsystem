export type Styles = {
  anchorlink: string;
  anchorlink__icon: string;
  'anchorlink-wrapper': string;
  helpbubble: string;
  helpbubble__arrow: string;
  'helpbubble__arrow--over': string;
  'helpbubble__arrow--under': string;
  'helpbubble__arrow--visible': string;
  helpbubble__close: string;
  helpbubble__content: string;
  'helpbubble__content--close': string;
  helpbubble__link: string;
  helpbubble__link__icon: string;
  'helpbubble--visible': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
