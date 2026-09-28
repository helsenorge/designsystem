import { useEffect, useId, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

import type { TableColors } from './constants';

import { ResponsiveTableVariant, defaultConfig, TableSizes } from './constants';
import TableCaption from './TableCaption';
import { getBreakpointClass, getCenteredOverflowTableStyle, getCurrentConfig, mapChildren, omitProps } from './utils';
import { useBreakpoint, type Breakpoint } from '../../hooks/useBreakpoint';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';
import HorizontalScroll from '../HorizontalScroll';

import styles from './styles.module.scss';

export interface BreakpointConfig {
  /** Breakpoint at which responsive behaviour will be applied. The table component uses a "desktop first" approach. */
  breakpoint: keyof typeof Breakpoint;
  /** Desired behaviour on this breakpoint and all smaller screens. */
  variant: keyof typeof ResponsiveTableVariant;
  /** If variant is horizontallscroll, use a fallback instead of device is not a touch device. */
  fallbackVariant?: keyof typeof ResponsiveTableVariant;
}

export interface UNSAFE_TableProps extends Omit<React.ComponentPropsWithoutRef<'table'>, 'style'> {
  /** Customize how the table behaves on various screen widths */
  breakpointConfig?: BreakpointConfig | BreakpointConfig[];
  /** Description of the table for screen readers. Rendered as a visually hidden caption and used to label the scroll container. */
  caption: string;
  /** Sets the content of the table. Use TableHead and UNSAFE_TableBody */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** Unique ID */
  id?: string;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
  /** Id used for testing */
  testId?: string;
  /** Applies zebra stripes to every other row. Default: false */
  zebraStripes?: boolean;
}

export const UNSAFE_Table: React.FC<UNSAFE_TableProps> = ({
  breakpointConfig = defaultConfig,
  caption,
  id,
  children,
  className,
  color,
  size = TableSizes.normal,
  testId,
  zebraStripes = false,
  ...rest
}) => {
  const captionElementId = useId();

  const [tableWidth, setTableWidth] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tableRef = useRef<HTMLTableElement>(null);
  const tableIsVisible = useIsVisible(tableRef, 0);
  const breakpoint = useBreakpoint();

  const currentConfig = useMemo(
    () => getCurrentConfig(breakpointConfig, breakpoint, tableWidth, windowWidth),
    [breakpointConfig, breakpoint, tableWidth, windowWidth]
  );

  useEffect(() => {
    if (
      currentConfig?.variant === ResponsiveTableVariant.centeredoverflow ||
      currentConfig?.variant === ResponsiveTableVariant.horizontalscroll
    ) {
      setTableWidth(tableRef.current?.getBoundingClientRect().width ?? 0);
    }
    if (currentConfig?.variant === ResponsiveTableVariant.centeredoverflow) {
      setParentWidth(tableRef.current?.parentElement?.getBoundingClientRect().width ?? 0);
    }
  }, [currentConfig, breakpoint]);

  useLayoutEvent(() => setWindowWidth(window.innerWidth), ['resize'], 100);

  useEffect(() => {
    if (tableWidth === 0 && tableIsVisible) {
      setTableWidth(tableRef.current?.getBoundingClientRect().width ?? 0);
    }
  }, [tableWidth, tableIsVisible]);

  const tableStyle =
    currentConfig?.variant === ResponsiveTableVariant.centeredoverflow ? getCenteredOverflowTableStyle(parentWidth, tableWidth) : undefined;

  const breakpointClass = getBreakpointClass(currentConfig);
  const tableClass = classNames(styles.table, breakpointClass, className);
  const domRest = omitProps(rest as Record<string, unknown>, ['breakpoint', 'variant', 'fallbackVariant', 'headerCategory']);

  const table = (
    <table
      className={tableClass}
      id={id}
      data-testid={testId}
      ref={tableRef}
      style={tableStyle}
      {...(domRest as React.ComponentPropsWithoutRef<'table'>)}
    >
      <TableCaption id={captionElementId}>{caption}</TableCaption>
      {mapChildren(children, size, color, zebraStripes)}
    </table>
  );

  if (currentConfig?.variant === ResponsiveTableVariant.horizontalscroll) {
    return (
      <HorizontalScroll childWidth={tableWidth} testId="horizontal-scroll" aria-labelledby={captionElementId}>
        {table}
      </HorizontalScroll>
    );
  }

  return table;
};

export default UNSAFE_Table;
