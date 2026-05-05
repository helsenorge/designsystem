import { useState, useCallback } from 'react';

export interface UseFilterDrawerReturn<ViewId extends string = string> {
  /** Whether the drawer is currently open */
  isOpen: boolean;
  /** The view to navigate to when the drawer opens */
  initialView: ViewId | undefined;
  /** Open the drawer, optionally navigating directly to a specific view */
  open: (view?: ViewId) => void;
  /** Close the drawer */
  close: () => void;
}

export const useFilterDrawer = <ViewId extends string = string>(): UseFilterDrawerReturn<ViewId> => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialView, setInitialView] = useState<ViewId | undefined>(undefined);

  const open = useCallback((view?: ViewId): void => {
    setInitialView(view);
    setIsOpen(true);
  }, []);

  const close = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return { isOpen, initialView, open, close };
};
