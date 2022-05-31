export type Styles = {
  anchorlink: string;
  anchorlink__icon: string;
  helpbubble: string;
  'helpbubble__child-wrapper': string;
  'helpbubble__close-wrapper': string;
  'helpbubble__link-button': string;
  'helpbubble__link-button__icon': string;
  'helpbubble--initial-render': string;
  'helpbubble-arrow': string;
  'helpbubble-arrow--initial-render': string;
  'helpbubble-arrow--over': string;
  'helpbubble-arrow--under': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
