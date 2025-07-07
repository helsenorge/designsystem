export type Styles = {
  drawer: string;
  drawer__container: string;
  drawer__container__inner: string;
  'drawer__container--right': string;
  drawer__content: string;
  drawer__footer: string;
  drawer__header: string;
  'drawer__header__close-button': string;
  'drawer__header--no-close-button': string;
  drawer__overlay: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
