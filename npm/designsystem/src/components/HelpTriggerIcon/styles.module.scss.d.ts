export type Styles = {
  'help-trigger-icon': string;
  'help-trigger-icon--inherit': string;
  'help-trigger-icon--is-button': string;
  'help-trigger-icon--large': string;
  'help-trigger-icon--medium': string;
  'help-trigger-icon--strong': string;
  'help-trigger-icon--xlarge': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
