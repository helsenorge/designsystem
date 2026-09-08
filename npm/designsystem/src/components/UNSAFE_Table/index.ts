import { UNSAFE_Table } from './UNSAFE_Table';

export { TableCaption } from './TableCaption';

export * from './UNSAFE_Table';
export * from './TableCaption';
export * from './useTableExpandedRows';
export * from './useTableShowMore';

// Re-eksporter useSort slik at UNSAFE_Table kan brukes som ett samlet API
export * from '../../hooks/useSort';

// Re-eksporter Table-primitivene slik at UNSAFE_Table kan brukes som ett samlet API
export { TableBody, TableCell, TableExpandedRow, TableExpanderCell, TableHead, TableHeadCell, TableRow } from '../Table';
export { SortDirection, HeaderCategory, TextAlign, ResponsiveTableVariant, ModeType, defaultConfig, simpleConfig } from '../Table';
export type { BreakpointConfig } from '../Table';

export default UNSAFE_Table;
