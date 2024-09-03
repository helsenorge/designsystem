export type Styles = {
  input: string;
  label: string;
  left: string;
  right: string;
  toggle: string;
  toggleContainer: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
