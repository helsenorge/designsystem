export type Styles = {
  progressbar: string;
  progressbar__dot: string;
  'progressbar__dot--completed': string;
  'progressbar__dot--left': string;
  'progressbar__dot--right': string;
  progressbar__marker: string;
  progressbar__number: string;
  'progressbar-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
