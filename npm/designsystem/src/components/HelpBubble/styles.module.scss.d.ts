export type Styles = {
  helpbubble: string;
  'helpbubble__child-wrapper': string;
  'helpbubble__close-wrapper': string;
  'helpbubble--above': string;
  'helpbubble--below': string;
  'helpbubble-arrow': string;
  'helpbubble-arrow--over': string;
  'helpbubble-arrow--under': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
