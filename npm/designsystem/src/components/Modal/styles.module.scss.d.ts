export type Styles = {
  actions: string;
  align: string;
  close: string;
  content: string;
  contentWrapper: string;
  description: string;
  error: string;
  large: string;
  lukkekryss: string;
  modal: string;
  'modal-overlay': string;
  'modal-overlay--lowerzindex': string;
  normal: string;
  open: string;
  title: string;
  warning: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
