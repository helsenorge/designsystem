export type Styles = {
  'filter-search__clear-button': string;
  'filter-search__input': string;
  'filter-search__input__label': string;
  'filter-search__input--hovered': string;
  'filter-search__input-wrapper': string;
  'filter-search__search-button': string;
  'filter-search__search-button--inner': string;
  'filter-search__search-button--inner--active': string;
  'filter-search__search-button--inner--focused': string;
  'filter-search__search-button--inner--hovered': string;
  'filter-search__wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
