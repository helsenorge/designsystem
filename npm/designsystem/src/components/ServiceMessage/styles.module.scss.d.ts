export type Styles = {
  'service-message': string;
  'service-message__action': string;
  'service-message__action--close': string;
  'service-message__actions': string;
  'service-message__close': string;
  'service-message__col': string;
  'service-message__container': string;
  'service-message__content': string;
  'service-message__info': string;
  'service-message__info--extra': string;
  'service-message__label': string;
  'service-message__label-container': string;
  'service-message__label-container--has-expander': string;
  'service-message__row': string;
  'service-message__title': string;
  'service-message__toggle': string;
  'service-message--error': string;
  'service-message--info': string;
  'service-message--success': string;
  'service-message--warn': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
