export type Styles = {
  loader: string;
  loader__dot: string;
  'loader__dot--banana': string;
  'loader__dot--black': string;
  'loader__dot--cherry': string;
  'loader__dot--kiwi': string;
  'loader__dot--large': string;
  'loader__dot--medium': string;
  'loader__dot--neutral': string;
  'loader__dot--normal': string;
  'loader__dot--plum': string;
  'loader__dot--white': string;
  'loader__hidden-text': string;
  'loader--large': string;
  'loader--medium': string;
  'loader--normal': string;
  'loader-wrapper--center': string;
  'loader-wrapper--inline': string;
  'loader-wrapper--overlay': string;
  'loader-wrapper--overlay-parent': string;
  'loader-wrapper--overlay-screen': string;
  scale: string;
  'scale-regular': string;
  'scale-reverse': string;
  translate: string;
  'translate-large': string;
  'translate-medium': string;
  'translate-normal': string;
  'translate-tiny': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
