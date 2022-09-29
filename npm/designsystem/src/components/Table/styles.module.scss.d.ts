export type Styles = {
  'expandable-container': string;
  table: string;
  table__cell: string;
  'table__cell--center': string;
  'table__cell--nowrap': string;
  'table__cell--right': string;
  'table__cell-expander': string;
  'table__expanded-row': string;
  'table__expanded-row--expanded': string;
  'table__expanded-row-button': string;
  'table__expanded-row-container': string;
  'table__expanded-row-container--open': string;
  'table__expander-button-mobile': string;
  'table__expander-button-mobile--expanded': string;
  'table__expander-cell-mobile': string;
  'table__expander-cell-mobile--expanded': string;
  table__head: string;
  'table__head--normal': string;
  'table__head--sortable': string;
  'table__head--transparent': string;
  'table__head-cell': string;
  'table__head-cell--sortable': string;
  'table__head-cell--sorted': string;
  'table__head-cell-sort-icon-wrapper': string;
  'table__row--expandable': string;
  'table__row--expandable--selected': string;
  'table__sort-button': string;
  'table--collapse2col': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
