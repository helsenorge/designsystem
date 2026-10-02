import { createContext } from 'react';

import { ResponsiveTableVariant, TableColors, TableSizes } from './constants';

export interface TableContextValue {
  /** Resolved responsive variant for the current breakpoint. */
  variant: keyof typeof ResponsiveTableVariant;
  /** Header category for styling. */
  color: TableColors;
  /** For display with less space. */
  size: TableSizes;
  /** Whether zebra stripes are enabled. Applied by UNSAFE_TableBody, which can also override it. */
  zebraStripes: boolean;
}

/** Table-wide configuration provided by UNSAFE_Table. */
export const TableContext = createContext<TableContextValue>({
  variant: ResponsiveTableVariant.normal,
  color: TableColors.normal,
  size: TableSizes.normal,
  zebraStripes: false,
});
