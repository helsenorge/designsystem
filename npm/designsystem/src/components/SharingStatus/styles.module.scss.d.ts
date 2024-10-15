export type Styles = {
  'sharing-status': string;
  'sharing-status__dot': string;
  'sharing-status__dot--cherry': string;
  'sharing-status__dot--kiwi': string;
  'sharing-status__dot--neutral': string;
  'sharing-status__label': string;
  'sharing-status__label--cherry': string;
  'sharing-status__label--kiwi': string;
  'sharing-status__label--neutral': string;
  'sharing-status__label--wrap': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
