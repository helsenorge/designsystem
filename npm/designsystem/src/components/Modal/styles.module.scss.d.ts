export type Styles = {
  align: string;
  modal: string;
  modal__afterTitleChildren: string;
  'modal__call-to-action': string;
  'modal__call-to-action--large': string;
  'modal__call-to-action--medium': string;
  modal__closeWrapper: string;
  modal__closeWrapper__close: string;
  modal__contentWrapper: string;
  modal__contentWrapper__imageDescription: string;
  modal__contentWrapper__imageWrapper: string;
  'modal__contentWrapper__scroll--image': string;
  'modal__contentWrapper__scroll--large': string;
  'modal__contentWrapper__scroll--medium': string;
  modal__contentWrapper__title: string;
  'modal__contentWrapper--image': string;
  modal__description: string;
  modal__iconWrapper: string;
  modal__shadow: string;
  'modal__shadow--bottom': string;
  'modal__shadow--show': string;
  'modal__shadow--top': string;
  'modal__title--error': string;
  'modal__title--success': string;
  'modal--error': string;
  'modal--image': string;
  'modal--large': string;
  'modal--medium': string;
  'modal--no-actions': string;
  'modal--normal': string;
  'modal--success': string;
  'modal--warning': string;
  'modal-overlay': string;
  open: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
