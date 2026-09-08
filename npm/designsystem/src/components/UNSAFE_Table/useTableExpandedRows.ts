import { useState } from 'react';

export interface UseTableExpandedRowsReturn {
  /** Current expanded state per row key */
  expandedRows: Record<string, boolean>;
  /** Whether a row is expanded */
  isExpanded: (rowKey: string) => boolean;
  /** Toggle the expanded state of a row */
  toggleExpanded: (rowKey: string) => void;
  /** Collapse all rows, e.g. when the table is re-sorted */
  collapseAll: () => void;
}

/** Expanded state per row for tables with expandable rows (TableExpanderCell/TableExpandedRow). */
export const useTableExpandedRows = (): UseTableExpandedRowsReturn => {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const isExpanded = (rowKey: string): boolean => !!expandedRows[rowKey];

  const toggleExpanded = (rowKey: string): void => {
    setExpandedRows(prev => ({ ...prev, [rowKey]: !prev[rowKey] }));
  };

  const collapseAll = (): void => {
    setExpandedRows({});
  };

  return { expandedRows, isExpanded, toggleExpanded, collapseAll };
};
