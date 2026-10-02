import { useId, useLayoutEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

import type { TableContextValue } from './TableContext';

import { ResponsiveTableVariant, defaultConfig, TableColors, TableSizes } from './constants';
import TableCaption from './TableCaption';
import { TableContext } from './TableContext';
import { getBreakpointClass, getCenteredOverflowTableStyle, getCurrentConfig, omitProps } from './utils';
import { useBreakpoint, type Breakpoint } from '../../hooks/useBreakpoint';
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
  /** Width of the head column (dataLabel) in percentage in the stack variant. When not set, the column follows the widest label in the table, but wraps (minimum 30%) when the content needs the space. */
  stackHeadWidth?: number;
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
  stackHeadWidth,
  testId,
  zebraStripes = false,
  ...rest
}) => {
  const captionElementId = useId();

  const [tableWidth, setTableWidth] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth || window.innerWidth);
  const tableRef = useRef<HTMLTableElement>(null);
  const breakpoint = useBreakpoint();

  const currentConfig = useMemo(
    () => getCurrentConfig(breakpointConfig, breakpoint, tableWidth, windowWidth),
    [breakpointConfig, breakpoint, tableWidth, windowWidth]
  );

  useLayoutEffect(() => {
    const tableElement = tableRef.current;
    const parentElement = tableElement?.parentElement;
    if (!tableElement || !parentElement) {
      return;
    }

    const measure = (): void => {
      if (currentConfig?.variant !== ResponsiveTableVariant.stack) {
        setTableWidth(tableElement.getBoundingClientRect().width);
      }
      const parentStyle = getComputedStyle(parentElement);
      const horizontalSpacing = [
        parentStyle.paddingLeft,
        parentStyle.paddingRight,
        parentStyle.borderLeftWidth,
        parentStyle.borderRightWidth,
      ].reduce((total, value) => total + (parseFloat(value) || 0), 0);
      setParentWidth(Math.max(0, parentElement.getBoundingClientRect().width - horizontalSpacing));
      setWindowWidth(document.documentElement.clientWidth || window.innerWidth);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(tableElement, { box: 'border-box' });
    observer.observe(parentElement, { box: 'border-box' });
    return (): void => observer.disconnect();
  }, [currentConfig?.variant]);

  useLayoutEvent(() => setWindowWidth(document.documentElement.clientWidth || window.innerWidth), ['resize'], 100);

  const tableStyle: React.CSSProperties | undefined =
    currentConfig?.variant === ResponsiveTableVariant.centeredoverflow || typeof stackHeadWidth !== 'undefined'
      ? {
          ...(currentConfig?.variant === ResponsiveTableVariant.centeredoverflow
            ? getCenteredOverflowTableStyle(parentWidth, tableWidth)
            : undefined),
          ...(typeof stackHeadWidth !== 'undefined' ? { '--table-stack-columns': `${stackHeadWidth}% minmax(0, 1fr)` } : undefined),
        }
      : undefined;

  const breakpointClass = getBreakpointClass(currentConfig);
  const tableClass = classNames(styles.table, breakpointClass, className);
  const domRest = omitProps(rest as Record<string, unknown>, ['breakpoint', 'variant', 'fallbackVariant', 'headerCategory']);

  const tableContext = useMemo<TableContextValue>(
    () => ({
      variant: currentConfig?.variant ?? ResponsiveTableVariant.normal,
      color: color ?? TableColors.normal,
      size,
      zebraStripes,
    }),
    [currentConfig?.variant, color, size, zebraStripes]
  );

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
      {children}
    </table>
  );

  return (
    <TableContext.Provider value={tableContext}>
      {currentConfig?.variant === ResponsiveTableVariant.horizontalscroll ? (
        <HorizontalScroll childWidth={tableWidth} testId="horizontal-scroll" aria-labelledby={captionElementId}>
          {table}
        </HorizontalScroll>
      ) : (
        table
      )}
    </TableContext.Provider>
  );
};

export default UNSAFE_Table;
