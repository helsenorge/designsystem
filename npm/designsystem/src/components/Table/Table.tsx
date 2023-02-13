import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import { AnalyticsId } from '../../constants';
import HorizontalScroll from '../HorizontalScroll';
import { useSize } from '../../hooks/useSize';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { getBackwardsCompatibleConfig, getCurrentConfig, getBreakpointClass, isOldFormat } from './utils';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';

export enum SmallViewportVariant {
  /** No handling responsive behaviour. This will be the default in v3.0.0. */
  none = 'none',
  /** Overflow parent container to the left and right while remaining centered horizontally. */
  centeredoverflow = 'centeredoverflow',
  /** Show horizontal scrollbar when table is too big for the screen. */
  horizontalscroll = 'horizontalscroll',
  /** Collapse to two columns. */
  block = 'block',
}

export interface BreakpointConfig {
  /** Breakpoint at which responsive behaviour will be applied. The table component uses a "desktop first" approach. */
  breakpoint: keyof typeof Breakpoint;
  /** Desired behaviour on this breakpoint and all smaller screens. */
  variant: keyof typeof SmallViewportVariant;
  /** If variant is horizontallscroll, use a fallback instead of device is not a touch device. */
  fallbackVariant?: keyof typeof SmallViewportVariant;
}

export interface Props {
  /** Unique ID */
  id?: string;
  /** Id used for testing */
  testId?: string;
  /** Customize how the table behaves on various screen widths */
  /** @deprecated Rename to breakpointConfig in v3.0.0 and drop support for SmallViewPortVariant */
  smallViewportVariant?: SmallViewportVariant | BreakpointConfig | BreakpointConfig[];
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table. Use TableHead and TableBody */
  children: React.ReactNode;
}

export const Table: React.FC<Props> = ({
  id,
  testId,
  className,
  children,
  smallViewportVariant: breakpointConfig = SmallViewportVariant.horizontalscroll,
}) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const breakpoint = useBreakpoint();
  const { width: tableWidth = 0 } = useSize(tableRef) || {};
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useLayoutEvent(() => setWindowWidth(window.innerWidth), ['resize'], 100);

  const currentConfig = isOldFormat(breakpointConfig)
    ? getBackwardsCompatibleConfig(breakpointConfig)
    : getCurrentConfig(breakpointConfig, breakpoint, tableWidth, windowWidth);
  const breakpointClass = getBreakpointClass(currentConfig);
  const tableClass = classNames(styles.table, breakpointClass, className);

  const table = (
    <table className={tableClass} id={id} data-testid={testId} data-analyticsid={AnalyticsId.Table} ref={tableRef}>
      {children}
    </table>
  );

  const useHorizontalScroll = currentConfig?.variant === SmallViewportVariant.horizontalscroll && !currentConfig?.fallbackVariant;

  if (useHorizontalScroll) {
    return (
      <HorizontalScroll childWidth={tableWidth} testId="horizontal-scroll">
        {table}
      </HorizontalScroll>
    );
  }

  return table;
};

export default Table;
