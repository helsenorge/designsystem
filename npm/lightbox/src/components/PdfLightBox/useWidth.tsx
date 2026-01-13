import { useEffect, useRef, useState } from 'react';

export type UseWidthOptions = {
  debounceMs?: number;
};

export function useWidth<T extends HTMLElement = HTMLDivElement>(
  options: UseWidthOptions = {}
): { ref: React.RefObject<T | null>; width?: number } {
  const { debounceMs = 120 } = options;
  const ref = useRef<T>(null);
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const getRoundedWidth = () => {
      const rect = el.getBoundingClientRect();
      const w = rect.width;
      return Math.round(w);
    };

    // Initialize immediately
    let last = getRoundedWidth();
    setWidth(last);

    let debounceTimer: number | undefined;

    const emit = (next: number) => {
      if (next === last) {
        return;
      }
      last = next;
      setWidth(next);
    };

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const ro = new ResizeObserver(entries => {
      const entry = entries[0];
      const next = Math.round(entry.contentRect.width);
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(() => {
        emit(next);
      }, debounceMs);
    });

    ro.observe(el);

    return () => {
      if (debounceTimer) {
        window.clearTimeout(debounceTimer);
      }
      ro.disconnect();
    };
  }, [debounceMs]);

  return { ref, width };
}
