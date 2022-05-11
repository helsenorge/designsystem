export type Styles = {
  helpbubble: string;
  'helpbubble__child-wrapper': string;
  'helpbubble__close-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
