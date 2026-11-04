export { TableCaption } from './TableCaption';

export * from './Table';
export * from './TableCaption';
export * from './useTableExpandedRows';
export * from './useTableShowMore';

// Re-eksporter useSort slik at Table kan brukes som ett samlet API
export * from '../../hooks/useSort';

// Re-eksporter Table-primitivene slik at Table kan brukes som ett samlet API
export { TableRow } from './TableRow';
export type { Props as TableRowProps } from './TableRow';
export { TableCell } from './TableCell';
export type { Props as TableCellProps } from './TableCell';
export { TableBody } from './TableBody';
export type { Props as TableBodyProps } from './TableBody';
export { TableHeadCell } from './TableHeadCell';
export type { Props as TableHeadCellProps } from './TableHeadCell';
export { TableHead } from './TableHead';
export type { Props as TableHeadProps } from './TableHead';
export { SortDirection, TableColors, TableSizes, TextAlign, ResponsiveTableVariant, defaultConfig } from './constants';
export type { BreakpointConfig } from './Table';

export { Table as default } from './Table';
