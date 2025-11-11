export type Styles = {
  toast: string;
  toast__description: string;
  toast__icon: string;
  'toast__icon--check': string;
  'toast__icon--close': string;
  'toast__text-container': string;
  toast__title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
