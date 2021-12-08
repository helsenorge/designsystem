export type Styles = {
  align: string;
  modal: string;
  modal__actions: string;
  modal__close: string;
  'modal__close--image': string;
  modal__contentWrapper: string;
  modal__contentWrapper__content: string;
  'modal__contentWrapper__content--image': string;
  modal__contentWrapper__title: string;
  'modal__contentWrapper--image': string;
  modal__description: string;
  modal__lukkekryss: string;
  'modal--error': string;
  'modal--error__title': string;
  'modal--image': string;
  'modal--image__img': string;
  'modal--image__text': string;
  'modal--large': string;
  'modal--normal': string;
  'modal--warning': string;
  'modal--warning__title': string;
  'modal-overlay': string;
  'modal-overlay--lowerzindex': string;
  open: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
