import { createContext, useContext } from 'react';

export interface NavigateProps<ViewId extends string = string> {
  goToView: (id: ViewId) => void;
  goBack: () => void;
  goToViewAndClearStack: (id: ViewId) => void;
}

export const DrawerNavigationContext = createContext<NavigateProps | null>(null);

export function useDrawerNavigation<ViewId extends string = string>(): NavigateProps<ViewId> {
  const context = useContext(DrawerNavigationContext);
  if (!context) {
    throw new Error('useDrawerNavigation must be used inside a <DrawerNavigation> component');
  }
  return context as NavigateProps<ViewId>;
}
