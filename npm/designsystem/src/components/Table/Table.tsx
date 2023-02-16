import React, { useRef, useState } from 'react';

import classNames from 'classnames';

import { getCurrentConfig, getBreakpointClass } from './utils';
import { AnalyticsId } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';
import { useSize } from '../../hooks/useSize';
import HorizontalScroll from '../HorizontalScroll';

import styles from './styles.module.scss';

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

export interface BreakpointConfig {
  /** Breakpoint at which responsive behaviour will be applied. The table component uses a "desktop first" approach. */
  breakpoint: keyof typeof Breakpoint;
  /** Desired behaviour on this breakpoint and all smaller screens. */
  variant: keyof typeof ResponsiveTableVariant;
  /** If variant is horizontallscroll, use a fallback instead of device is not a touch device. */
  fallbackVariant?: keyof typeof ResponsiveTableVariant;
}

export interface Props {
  /** Unique ID */
  id?: string;
  /** Id used for testing */
  testId?: string;
  /** Customize how the table behaves on various screen widths */
  breakpointConfig?: BreakpointConfig | BreakpointConfig[];
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
  breakpointConfig = { variant: ResponsiveTableVariant.none, breakpoint: 'xl' },
}) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const breakpoint = useBreakpoint();
  const { width: tableWidth = 0 } = useSize(tableRef) || {};
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useLayoutEvent(() => setWindowWidth(window.innerWidth), ['resize'], 100);

  const currentConfig = getCurrentConfig(breakpointConfig, breakpoint, tableWidth, windowWidth);
  const breakpointClass = getBreakpointClass(currentConfig);
  const tableClass = classNames(styles.table, breakpointClass, className);

  const table = (
    <table className={tableClass} id={id} data-testid={testId} data-analyticsid={AnalyticsId.Table} ref={tableRef}>
      {children}
    </table>
  );

  const useHorizontalScroll = currentConfig?.variant === ResponsiveTableVariant.horizontalscroll && !currentConfig?.fallbackVariant;

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
