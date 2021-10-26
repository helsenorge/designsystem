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
  'loader__dot--plum': string;
  'loader__dot--small': string;
  'loader__dot--white': string;
  'loader--large': string;
  'loader--medium': string;
  'loader--small': string;
  scale: string;
  'scale-regular': string;
  'scale-reverse': string;
  translate: string;
  'translate-large': string;
  'translate-medium': string;
  'translate-small': string;
  'translate-tiny': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
