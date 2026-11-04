import { createContext } from 'react';

import type { HNDesignsystemTable } from '../../resources/Resources';

import { ResponsiveTableVariant, TableColors, TableSizes } from './constants';
import nbNO from '../../resources/HN.Designsystem.Table.nb-NO.json';

export interface TableContextValue {
  /** Resolved responsive variant for the current breakpoint. */
  variant: keyof typeof ResponsiveTableVariant;
  /** Header category for styling. */
  color: TableColors;
  /** For display with less space. */
  size: TableSizes;
  /** Whether zebra stripes are enabled. Applied by TableBody, which can also override it. */
  zebraStripes: boolean;
  /** Indexes of the columns marked with hideBehindExpander on their TableHeadCell. */
  hiddenColumns: number[];
  /** Text of each column's TableHeadCell, used as the default heading of cells in the stack variant. */
  headingTexts: string[];
  /** Resource texts of the Table. */
  resources: HNDesignsystemTable;
}

/** Table-wide configuration provided by Table. */
export const TableContext = createContext<TableContextValue>({
  variant: ResponsiveTableVariant.normal,
  color: TableColors.normal,
  size: TableSizes.normal,
  zebraStripes: false,
  hiddenColumns: [],
  headingTexts: [],
  resources: nbNO,
});

/** Heading of the column a cell belongs to. Provided per cell by TableRow. */
export const CellHeadingContext = createContext<string>('');
