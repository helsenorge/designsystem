import type { BreakpointConfig } from './UNSAFE_Table';

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

export enum TableColors {
  normal = 'normal',
  transparent = 'transparent',
}

export enum TextAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}
// normal
// stack
// centeredoverflow
// horizontalscroll
export enum ResponsiveTableVariant {
  /** Normal table grid */
  normal = 'normal',
  /** Collapse to two columns. */
  stack = 'stack',
  /** Overflow parent container to the left and right while remaining centered horizontally. */
  centeredoverflow = 'centeredoverflow',
  /** Show horizontal scrollbar when table is too big for the screen. */
  horizontalscroll = 'horizontalscroll',
}
export enum TableSizes {
  normal = 'normal',
  compact = 'compact',
}

export const defaultConfig: BreakpointConfig[] = [
  {
    breakpoint: 'xl',
    variant: ResponsiveTableVariant.centeredoverflow,
    fallbackVariant: ResponsiveTableVariant.stack,
  },
];
