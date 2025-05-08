export type Styles = {
  'help-trigger': string;
  'help-trigger--hover': string;
  'help-trigger--hovered': string;
  'help-trigger--large': string;
  'help-trigger--medium': string;
  'help-trigger--selected': string;
  'help-trigger--strong': string;
  'help-trigger--xlarge': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
