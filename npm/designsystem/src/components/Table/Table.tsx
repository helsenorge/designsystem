import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { getCurrentConfig, getBreakpointClass, getCenteredOverflowTableStyle } from './utils';
import { AnalyticsId } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';
import { getAriaLabelAttributes } from '../../utils/accessibility';
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
export enum ModeType {
  compact = 'compact',
  normal = 'normal',
}
export interface BreakpointConfig {
  /** Breakpoint at which responsive behaviour will be applied. The table component uses a "desktop first" approach. */
  breakpoint: keyof typeof Breakpoint;
  /** Desired behaviour on this breakpoint and all smaller screens. */
  variant: keyof typeof ResponsiveTableVariant;
  /** If variant is horizontallscroll, use a fallback instead of device is not a touch device. */
  fallbackVariant?: keyof typeof ResponsiveTableVariant;
}

export interface Props extends Omit<React.ComponentPropsWithoutRef<'table'>, 'style'> {
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
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeType;
  /** Sets aria-label of the horizontal scroll container. scrollAriaLabel or scrollAriaLabelledById MUST be set if horizontal scrolling is enabled! */
  scrollAriaLabel?: string;
  /** Sets aria-labelledby of the horizontal scroll container. scrollAriaLabel or scrollAriaLabelledById MUST be set if horizontal scrolling is enabled! */
  scrollAriaLabelledById?: string;
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

export const Table: React.FC<Props> = ({
  id,
  testId,
  className,
  children,
  breakpointConfig = defaultConfig,
  mode = ModeType.normal,
  scrollAriaLabel,
  scrollAriaLabelledById,
  ...rest
}) => {
  const [currentConfig, setCurrentConfig] = useState<BreakpointConfig>();
  const [tableWidth, setTableWidth] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tableRef = useRef<HTMLTableElement>(null);
  const tableIsVisible = useIsVisible(tableRef, 0);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    setCurrentConfig(getCurrentConfig(breakpointConfig, breakpoint, tableWidth, windowWidth));
  }, [breakpointConfig, breakpoint, tableWidth, windowWidth]);

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

  const table = (
    <table
      className={tableClass}
      id={id}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Table}
      ref={tableRef}
      style={tableStyle}
      {...rest}
    >
      {React.Children.map(children, child => React.isValidElement<{ mode?: ModeType }>(child) && React.cloneElement(child, { mode }))}
    </table>
  );

  const ariaLabelAttributes = getAriaLabelAttributes({ label: scrollAriaLabel, id: scrollAriaLabelledById });

  if (currentConfig?.variant === ResponsiveTableVariant.horizontalscroll) {
    return (
      <HorizontalScroll childWidth={tableWidth} testId="horizontal-scroll" {...ariaLabelAttributes}>
        {table}
      </HorizontalScroll>
    );
  }

  return table;
};

export default Table;
