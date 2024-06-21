export type Styles = {
  'progressbar__progress-circle': string;
  progressbar__svg: string;
  'progressbar--overlay': string;
  'progressbar--overlay-parent': string;
  'progressbar--overlay-screen': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
