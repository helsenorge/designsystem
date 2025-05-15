export type Styles = {
  infoteaser: string;
  infoteaser__button: string;
  infoteaser__icon: string;
  infoteaser__text: string;
  infoteaser__title: string;
  'infoteaser--collapsed': string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
