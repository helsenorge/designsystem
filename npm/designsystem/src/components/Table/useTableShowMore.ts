import { useEffect, useMemo, useRef, useState } from 'react';

export interface UseTableShowMoreOptions<TData> {
  /** All rows */
  data: TData[];
  /** Number of rows to show initially and to reveal per showMore(). Shows all rows when not set. */
  pageSize?: number;
}

export interface UseTableShowMoreReturn<TData, TElement extends HTMLElement> {
  /** The rows that are currently visible */
  visibleData: TData[];
  /** Whether there are more rows to show */
  hasMore: boolean;
  /** Reveal the next page of rows */
  showMore: () => void;
  /** Reset to the initial number of visible rows */
  reset: () => void;
  /** Index of the first row revealed by the last showMore() call */
  newRowsStartIndex?: number;
  /**
   * Attach to a focusable element in the first newly revealed row (index === newRowsStartIndex).
   * The element receives focus when the last page is revealed and the show more button disappears.
   */
  firstNewRowRef: React.RefObject<TElement | null>;
}

/** Progressive disclosure ("show more") of table rows, with focus management when the show more button disappears. */
export const useTableShowMore = <TData, TElement extends HTMLElement = HTMLElement>({
  data,
  pageSize,
}: UseTableShowMoreOptions<TData>): UseTableShowMoreReturn<TData, TElement> => {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [newRowsStartIndex, setNewRowsStartIndex] = useState<number>();
  const firstNewRowRef = useRef<TElement>(null);
  const shouldFocusNewRow = useRef(false);

  const visibleData = useMemo(() => (visibleCount === undefined ? data : data.slice(0, visibleCount)), [data, visibleCount]);
  const hasMore = visibleCount !== undefined && visibleCount < data.length;

  const showMore = (): void => {
    if (visibleCount === undefined || pageSize === undefined) {
      return;
    }
    const newCount = Math.min(visibleCount + pageSize, data.length);
    // Flytt fokus når "vis mer"-knappen forsvinner, slik at fokus ikke går tapt
    shouldFocusNewRow.current = newCount >= data.length;
    setNewRowsStartIndex(visibleCount);
    setVisibleCount(newCount);
  };

  useEffect(() => {
    if (shouldFocusNewRow.current) {
      shouldFocusNewRow.current = false;
      firstNewRowRef.current?.focus();
    }
  }, [visibleCount]);

  const reset = (): void => {
    setVisibleCount(pageSize);
    setNewRowsStartIndex(undefined);
  };

  return { visibleData, hasMore, showMore, reset, newRowsStartIndex, firstNewRowRef };
};
