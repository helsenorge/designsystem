export type Styles = {
  trigger: string;
  'trigger--help': string;
  'trigger--info': string;
  'trigger--large': string;
  'trigger--medium': string;
  'trigger--ondark': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
