export type Styles = {
  align: string;
  modal: string;
  iconWrapper: string;
  'modal__shadow-top': string;
  'modal__shadow-bottom': string;
  modal__closeWrapper: string;
  modal__closeWrapper__close: string;
  'modal__closeWrapper__close--padding': string;
  'modal__close--image': string;
  modal__contentWrapper: string;
  'modal__contentWrapper--large': string;
  'modal__contentWrapper--medium': string;
  'modal__contentWrapper--small': string;
  modal__contentWrapper__content: string;
  'modal__contentWrapper__content--image': string;
  modal__contentWrapper__title: string;
  'modal__contentWrapper--image': string;
  'title--error': string;
  modal__description: string;
  modal__lukkekryss: string;
  'modal--error': string;
  'modal--image': string;
  'modal--image__img': string;
  'modal--image__text': string;
  'modal--large': string;
  'modal--medium': string;
  'modal--small': string;
  'modal--normal': string;
  'modal--warning': string;
  'modal--warning__title': string;
  'modal-overlay': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
