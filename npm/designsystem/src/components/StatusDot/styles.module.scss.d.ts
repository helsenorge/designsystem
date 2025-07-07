export type Styles = {
  statusdot: string;
  statusdot__dot: string;
  'statusdot__dot--active': string;
  'statusdot__dot--alert': string;
  'statusdot__dot--attachment': string;
  'statusdot__dot--cancelled': string;
  'statusdot__dot--draft': string;
  'statusdot__dot--exception': string;
  'statusdot__dot--group': string;
  'statusdot__dot--hidden': string;
  'statusdot__dot--inactive': string;
  'statusdot__dot--info': string;
  'statusdot__dot--inprocess': string;
  'statusdot__dot--inspected': string;
  'statusdot__dot--login': string;
  'statusdot__dot--noaccess': string;
  'statusdot__dot--on-dark': string;
  'statusdot__dot--pending': string;
  'statusdot__dot--recurring': string;
  'statusdot__dot--success': string;
  'statusdot__dot--transparent': string;
  'statusdot__dot--unknown': string;
  statusdot__label: string;
  'statusdot__label--on-dark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
