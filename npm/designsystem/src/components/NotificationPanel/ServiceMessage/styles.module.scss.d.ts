export type Styles = {
  'service-message__bottom-row': string;
  'service-message__bottom-row__button': string;
  'service-message__bottom-row__close-button': string;
  'service-message__bottom-row__read-more-btn--spacing': string;
  'service-message__content': string;
  'service-message__content--smaller': string;
  'service-message__expander-button': string;
  'service-message__expander-button--close': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
