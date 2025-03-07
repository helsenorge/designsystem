export type Styles = {
  'help-trigger': string;
  'help-trigger--help': string;
  'help-trigger--hovered': string;
  'help-trigger--large': string;
  'help-trigger--medium': string;
  'help-trigger--ondark': string;
  'help-trigger--selected': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
