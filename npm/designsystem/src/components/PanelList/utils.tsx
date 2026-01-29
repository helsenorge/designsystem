import { createContext } from 'react';

import type { PanelVariant } from '../Panel/constants';

export interface PanelListContextValue {
  variant: PanelVariant;
  highlightText?: string;
  applyPanelClassName: (existingClassName?: string) => string;
}

export const PanelListContext = createContext<PanelListContextValue | null>(null);
