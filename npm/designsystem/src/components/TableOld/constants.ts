import type { BreakpointConfigOld } from './TableOld';

export enum SortDirectionOld {
  asc = 'asc',
  desc = 'desc',
}

export enum HeaderCategoryOld {
  normal = 'normal',
  transparent = 'transparent',
  sortable = 'sortable',
}

export enum TextAlignOld {
  left = 'left',
  center = 'center',
  right = 'right',
}

export enum ResponsiveTableVariantOld {
  /** No handling responsive behaviour. Default. */
  none = 'none',
  /** Overflow parent container to the left and right while remaining centered horizontally. */
  centeredoverflow = 'centeredoverflow',
  /** Show horizontal scrollbar when table is too big for the screen. */
  horizontalscroll = 'horizontalscroll',
  /** Collapse to two columns. */
  block = 'block',
}
export enum ModeTypeOld {
  compact = 'compact',
  normal = 'normal',
}

export const defaultConfigOld: BreakpointConfigOld[] = [
  {
    breakpoint: 'xl',
    variant: ResponsiveTableVariantOld.centeredoverflow,
    fallbackVariant: ResponsiveTableVariantOld.horizontalscroll,
  },
];

export const simpleConfigOld: BreakpointConfigOld[] = [
  {
    breakpoint: 'xl',
    variant: ResponsiveTableVariantOld.centeredoverflow,
    fallbackVariant: ResponsiveTableVariantOld.horizontalscroll,
  },
  {
    breakpoint: 'sm',
    variant: ResponsiveTableVariantOld.centeredoverflow,
    fallbackVariant: ResponsiveTableVariantOld.block,
  },
];
