export type Styles = {
  'step__button--back': string;
  'step__button--forward': string;
  step__buttons: string;
  'step__buttons--additional': string;
  step__content: string;
  step__navigation: string;
  step__stepper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
