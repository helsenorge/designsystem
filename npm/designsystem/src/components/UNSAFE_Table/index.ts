import { UNSAFE_Table } from './UNSAFE_Table';

export { TableCaption } from './TableCaption';

export * from './UNSAFE_Table';
export * from './TableCaption';
export * from './useTableExpandedRows';
export * from './useTableShowMore';

// Re-eksporter useSort slik at UNSAFE_Table kan brukes som ett samlet API
export * from '../../hooks/useSort';

// Re-eksporter Table-primitivene slik at UNSAFE_Table kan brukes som ett samlet API
export { UNSAFE_TableRow } from './UNSAFE_TableRow';
export type { Props as UNSAFE_TableRowProps } from './UNSAFE_TableRow';
export { UNSAFE_TableCell } from './UNSAFE_TableCell';
export type { Props as UNSAFE_TableCellProps } from './UNSAFE_TableCell';
export { UNSAFE_TableExpandedRow } from './UNSAFE_TableExpandedRow';
export type { Props as UNSAFE_TableExpandedRowProps } from './UNSAFE_TableExpandedRow';
export { UNSAFE_TableBody } from './UNSAFE_TableBody';
export type { Props as UNSAFE_TableBodyProps } from './UNSAFE_TableBody';
export { UNSAFE_TableHeadCell } from './UNSAFE_TableHeadCell';
export type { Props as UNSAFE_TableHeadCellProps } from './UNSAFE_TableHeadCell';
export { UNSAFE_TableHead } from './UNSAFE_TableHead';
export type { Props as UNSAFE_TableHeadProps } from './UNSAFE_TableHead';
export { SortDirection, HeaderCategory, TextAlign, ResponsiveTableVariant, ModeType, defaultConfig } from '../Table';
export type { BreakpointConfig } from '../Table';

export default UNSAFE_Table;
