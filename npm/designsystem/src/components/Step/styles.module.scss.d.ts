export type Styles = {
  'step__button--back': string;
  'step__button--forward': string;
  step__buttons: string;
  'step__buttons--additional': string;
  'step__content--no-navigation': string;
  step__navigation: string;
  'step__navigation--has-sticky-buttons': string;
  'step__navigation--hidden': string;
  'step__navigation--is-sticky': string;
  step__stepper: string;
  'step--has-sticky-buttons': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
