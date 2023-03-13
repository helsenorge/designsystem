export type Styles = {
  stepper: string;
  stepper__dot: string;
  'stepper__dot--completed': string;
  'stepper__dot--left': string;
  'stepper__dot--right': string;
  stepper__marker: string;
  stepper__number: string;
  'stepper-wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
