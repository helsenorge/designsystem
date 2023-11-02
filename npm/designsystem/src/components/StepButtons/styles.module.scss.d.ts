export type Styles = {
  stepbuttons: string;
  'stepbuttons__button--back': string;
  'stepbuttons__button--forward': string;
  stepbuttons__buttons: string;
  'stepbuttons__buttons--additional': string;
  'stepbuttons--has-sticky-buttons': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
