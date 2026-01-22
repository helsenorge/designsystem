import type { BreakpointConfig } from './Table';

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

export enum HeaderCategory {
  normal = 'normal',
  transparent = 'transparent',
  sortable = 'sortable',
}

export enum TextAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

export enum ResponsiveTableVariant {
  /** No handling responsive behaviour. Default. */
  none = 'none',
  /** Overflow parent container to the left and right while remaining centered horizontally. */
  centeredoverflow = 'centeredoverflow',
  /** Show horizontal scrollbar when table is too big for the screen. */
  horizontalscroll = 'horizontalscroll',
  /** Collapse to two columns. */
  block = 'block',
}
export enum ModeType {
  compact = 'compact',
  normal = 'normal',
}

export const defaultConfig: BreakpointConfig[] = [
  {
    breakpoint: 'xl',
    variant: ResponsiveTableVariant.centeredoverflow,
    fallbackVariant: ResponsiveTableVariant.horizontalscroll,
  },
];

export const simpleConfig: BreakpointConfig[] = [
  {
    breakpoint: 'xl',
    variant: ResponsiveTableVariant.centeredoverflow,
    fallbackVariant: ResponsiveTableVariant.horizontalscroll,
  },
  {
    breakpoint: 'sm',
    variant: ResponsiveTableVariant.centeredoverflow,
    fallbackVariant: ResponsiveTableVariant.block,
  },
];
