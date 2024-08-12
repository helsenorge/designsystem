export type Styles = {
  'arrow-button': string;
  'arrow-button--left': string;
  'arrow-button--right': string;
  button: string;
  'close-button': string;
  'image-text-box': string;
  'image-text-box__button': string;
  'image-text-box__overflow-border': string;
  'image-text-box__text': string;
  lightBox: string;
  slider: string;
  'zoom-buttons': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
