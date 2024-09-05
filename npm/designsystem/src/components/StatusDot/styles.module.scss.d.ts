export type Styles = {
  statusdot: string;
  statusdot__dot: string;
  'statusdot__dot--active': string;
  'statusdot__dot--alert': string;
  'statusdot__dot--cancelled': string;
  'statusdot__dot--info': string;
  'statusdot__dot--on-dark': string;
  'statusdot__dot--transparent': string;
  'statusdot__dot--warning': string;
  'statusdot__label--on-dark': string;
  'statusdot--cancelled': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
