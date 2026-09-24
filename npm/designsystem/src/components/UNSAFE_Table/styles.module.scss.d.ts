export type Styles = {
  table: string;
  table__cell: string;
  'table__cell--center': string;
  'table__cell--compact': string;
  'table__cell--nowrap': string;
  'table__cell--right': string;
  'table__cell--transparent': string;
  'table__cell-expander': string;
  'table__cell-pop-menu': string;
  'table__expanded-row': string;
  'table__expanded-row--expanded': string;
  'table__expanded-row-container': string;
  'table__expanded-row-container--open': string;
  'table__expander-button': string;
  'table__expander-cell-mobile': string;
  'table__head-cell': string;
  'table__head-cell--compact': string;
  'table__head-cell--transparent': string;
  'table__pop-menu': string;
  table__row: string;
  'table__row--expanded': string;
  'table--block-lg': string;
  'table--block-md': string;
  'table--block-sm': string;
  'table--block-xl': string;
  'table--block-xs': string;
  'table--block-xxs': string;
  'table-caption': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
