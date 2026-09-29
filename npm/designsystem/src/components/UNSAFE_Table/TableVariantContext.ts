import { createContext } from 'react';

import type { ResponsiveTableVariant } from './constants';

/** Resolved responsive variant for the current breakpoint, provided by UNSAFE_Table. */
export const TableVariantContext = createContext<keyof typeof ResponsiveTableVariant>('normal');
