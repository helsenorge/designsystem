import { useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

import type { Breakpoint } from '../../hooks/useBreakpoint';

import { defaultConfigOld, ModeTypeOld, ResponsiveTableVariantOld } from './constants';
import {
  getCurrentConfigOld,
  getBreakpointClassOld,
  getCenteredOverflowTableStyleOld,
  mapChildrenWithModeOld,
  omitPropsOld,
} from './utils';
import { AnalyticsId } from '../../constants';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import HorizontalScroll from '../HorizontalScroll';

import styles from './styles.module.scss';

export interface BreakpointConfigOld {
  /** Breakpoint at which responsive behaviour will be applied. The table component uses a "desktop first" approach. */
  breakpoint: keyof typeof Breakpoint;
  /** Desired behaviour on this breakpoint and all smaller screens. */
  variant: keyof typeof ResponsiveTableVariantOld;
  /** If variant is horizontallscroll, use a fallback instead of device is not a touch device. */
  fallbackVariant?: keyof typeof ResponsiveTableVariantOld;
}

export interface TablePropsOld extends Omit<React.ComponentPropsWithoutRef<'table'>, 'style'> {
  /** Unique ID */
  id?: string;
  /** Id used for testing */
  testId?: string;
  /** Customize how the table behaves on various screen widths */
  breakpointConfig?: BreakpointConfigOld | BreakpointConfigOld[];
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table. Use TableHeadOld and TableBodyOld */
  children: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeTypeOld;
  /** Sets aria-label of the horizontal scroll container. scrollAriaLabel or scrollAriaLabelledById MUST be set if horizontal scrolling is enabled! */
  scrollAriaLabel?: string;
  /** Sets aria-labelledby of the horizontal scroll container. scrollAriaLabel or scrollAriaLabelledById MUST be set if horizontal scrolling is enabled! */
  scrollAriaLabelledById?: string;
}

export const TableOld: React.FC<TablePropsOld> = ({
  id,
  testId,
  className,
  children,
  breakpointConfig = defaultConfigOld,
  mode = ModeTypeOld.normal,
  scrollAriaLabel,
  scrollAriaLabelledById,
  ...rest
}) => {
  const [tableWidth, setTableWidth] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tableRef = useRef<HTMLTableElement>(null);
  const tableIsVisible = useIsVisible(tableRef, 0);
  const breakpoint = useBreakpoint();

  const currentConfig = useMemo(
    () => getCurrentConfigOld(breakpointConfig, breakpoint, tableWidth, windowWidth),
    [breakpointConfig, breakpoint, tableWidth, windowWidth]
  );

  useEffect(() => {
    if (
      currentConfig?.variant === ResponsiveTableVariantOld.centeredoverflow ||
      currentConfig?.variant === ResponsiveTableVariantOld.horizontalscroll
    ) {
      setTableWidth(tableRef.current?.getBoundingClientRect().width ?? 0);
    }
    if (currentConfig?.variant === ResponsiveTableVariantOld.centeredoverflow) {
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
    currentConfig?.variant === ResponsiveTableVariantOld.centeredoverflow
      ? getCenteredOverflowTableStyleOld(parentWidth, tableWidth)
      : undefined;

  const breakpointClass = getBreakpointClassOld(currentConfig);
  const tableClass = classNames(styles.table, breakpointClass, className);
  const domRest = omitPropsOld(rest as Record<string, unknown>, ['breakpoint', 'variant', 'fallbackVariant', 'headerCategory']);

  const table = (
    <table
      className={tableClass}
      id={id}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Table}
      ref={tableRef}
      style={tableStyle}
      {...(domRest as React.ComponentPropsWithoutRef<'table'>)}
    >
      {mapChildrenWithModeOld(children, mode)}
    </table>
  );

  const ariaLabelAttributes = getAriaLabelAttributes({ label: scrollAriaLabel, id: scrollAriaLabelledById });

  if (currentConfig?.variant === ResponsiveTableVariantOld.horizontalscroll) {
    return (
      <HorizontalScroll testId="horizontal-scroll" {...ariaLabelAttributes}>
        {table}
      </HorizontalScroll>
    );
  }

  return table;
};

export default TableOld;
