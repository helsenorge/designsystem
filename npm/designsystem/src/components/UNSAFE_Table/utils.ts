import React from 'react';

import type { BreakpointConfig } from './UNSAFE_Table';
import type { Props as TableHeadCellProps } from './UNSAFE_TableHeadCell/UNSAFE_TableHeadCell';

import { ResponsiveTableVariant } from './constants';
import UNSAFE_TableHead from './UNSAFE_TableHead/UNSAFE_TableHead';
import { Breakpoint } from '../../hooks/useBreakpoint';
import { isTouchDevice } from '../../utils/device';

import styles from './styles.module.scss';

/**
 * Sjekk om det skal brukes CSS for å bestemme responsivt utseende på dette breakpoint
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns true om breakpoint bruker CSS
 */
const configUsesCss = (config: BreakpointConfig): boolean =>
  config.variant === ResponsiveTableVariant.centeredoverflow || config.variant === ResponsiveTableVariant.stack;

/**
 * Lag klassenavn for CSS-config
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns CSS-klassenavn
 */
const mapConfigToClass = (config: BreakpointConfig): string =>
  config.variant === 'centeredoverflow' || config.variant === 'stack' ? styles[`table--${config.variant}-${config.breakpoint}`] : '';

/**
 * Sorter konfigurasjon etter breakpoints, fra minste til største
 * @param a Konfigurasjon for responsiv oppførsel
 * @param b Konfigurasjon for responsiv oppførsel
 * @returns Sortert liste
 */
const sortByBreakpointsAscending = (a: BreakpointConfig, b: BreakpointConfig): number =>
  Breakpoint[a.breakpoint] - Breakpoint[b.breakpoint];

/**
 * Sjekk om en konfigurasjon skal brukes for nåværende breakpoint
 * @param a Konfigurasjon for responsiv oppførsel
 * @param breakpoint Nåværende breakpoint
 * @returns true dersom config skal brukes for breakpointet
 */
const isValidForCurrentBreakpoint = (config: BreakpointConfig, breakpoint: Breakpoint): boolean =>
  Breakpoint[config.breakpoint] >= breakpoint;

/**
 * Finn konfigurasjon for nåværende breakpoint
 * @param config Konfigurasjon for responsiv oppførsel
 * @param breakpoint Nåværende breakpoint
 * @returns Konfigurasjon for responsiv oppførsel
 */
const getConfigForBreakpoint = (config: BreakpointConfig | BreakpointConfig[], breakpoint: Breakpoint): BreakpointConfig | undefined => {
  if (Array.isArray(config)) {
    return [...config].sort(sortByBreakpointsAscending).find(x => isValidForCurrentBreakpoint(x, breakpoint));
  } else if (config && isValidForCurrentBreakpoint(config, breakpoint)) {
    return config;
  }
};

/**
 * Finn konfigurasjon for nåværende breakpoint og tabellbredde
 * @param config Konfigurasjon for responsiv oppførsel
 * @param breakpoint Nåværende breakpoint
 * @param tableWidth Bredde på tabell i px
 * @returns Konfigurasjon for responsiv oppførsel uten fallbackVariant
 */
export const getCurrentConfig = (
  config: BreakpointConfig | BreakpointConfig[],
  breakpoint: Breakpoint,
  tableWidth: number,
  windowWidth: number
): Omit<BreakpointConfig, 'fallbackVariant'> | undefined => {
  const breakpointConfig = getConfigForBreakpoint(config, breakpoint);
  const canUseHorizontalScroll = isTouchDevice();
  const canUseCenteredOverflow = tableWidth <= windowWidth;
  const needsFallback =
    !canUseCenteredOverflow &&
    (breakpointConfig?.variant === ResponsiveTableVariant.normal || breakpointConfig?.variant === ResponsiveTableVariant.centeredoverflow);

  if (!breakpointConfig) {
    return;
  }

  if (needsFallback && breakpointConfig.fallbackVariant === ResponsiveTableVariant.horizontalscroll) {
    return {
      variant: canUseHorizontalScroll ? ResponsiveTableVariant.horizontalscroll : ResponsiveTableVariant.normal,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (needsFallback && breakpointConfig.fallbackVariant !== breakpointConfig.variant) {
    return {
      variant: breakpointConfig.fallbackVariant ?? ResponsiveTableVariant.normal,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariant.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant === ResponsiveTableVariant.centeredoverflow
  ) {
    return {
      variant: canUseCenteredOverflow ? ResponsiveTableVariant.centeredoverflow : ResponsiveTableVariant.normal,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariant.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant !== ResponsiveTableVariant.horizontalscroll
  ) {
    return {
      variant: breakpointConfig.fallbackVariant ?? ResponsiveTableVariant.normal,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  return breakpointConfig;
};

/** Attributt som overordnede komponenter setter for å si at tabeller inni ikke skal flyte utenfor dem. */
const OVERFLOW_BOUNDARY_SELECTOR = '[data-overflow-boundary]';

/**
 * Finn bredden tabellen kan bruke. Innholdsbredden til nærmeste overordnede element merket med data-overflow-boundary,
 * eller skjermbredden om ingen er merket.
 * @param element Elementet det søkes fra, vanligvis tabellens overordnede element
 * @returns Tilgjengelig bredde i px
 */
export const getAvailableWidth = (element: HTMLElement): number => {
  const boundary = element.closest<HTMLElement>(OVERFLOW_BOUNDARY_SELECTOR);
  if (!boundary) {
    return document.documentElement.clientWidth || window.innerWidth;
  }
  const style = getComputedStyle(boundary);
  const spacing = [style.paddingLeft, style.paddingRight, style.borderLeftWidth, style.borderRightWidth].reduce(
    (total, value) => total + (Number.parseFloat(value) || 0),
    0
  );
  return Math.max(0, boundary.getBoundingClientRect().width - spacing);
};

/**
 * Finn klassenavn for responsiv oppførsel
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns Klassenavn
 */
export const getBreakpointClass = (config?: BreakpointConfig): string | undefined =>
  config && configUsesCss(config) ? mapConfigToClass(config) : undefined;

/**
 * Finn riktig posisjon for horisontal sentrering av tabell som skal vises "centeredoverflow"
 * @param parentWidth Bredde på element som tabellen ligger i
 * @param tableWidth Bredde på tabellen
 * @returns Styling som posisjonerer tabellen riktig
 */
export const getCenteredOverflowTableStyle = (parentWidth: number, tableWidth: number): React.CSSProperties | undefined => {
  if (parentWidth >= tableWidth) {
    return;
  }

  return { left: `${(parentWidth - tableWidth) / 2}px` };
};

/**
 * Create a shallow copy of an object with specific keys omitted.
 */
export const omitProps = <T extends Record<PropertyKey, unknown>>(obj: T, keys: Array<keyof T>): Partial<T> => {
  const clone: Partial<T> = { ...obj };
  for (const k of keys) {
    delete clone[k];
  }
  return clone;
};

/**
 * Finn indeksene til kolonnene som er markert med hideBehindExpander i første rad i UNSAFE_TableHead.
 * @param children Innholdet i UNSAFE_Table
 * @returns Kolonneindekser som skjules bak expander i stack-varianten
 */
export const getHiddenColumns = (children: React.ReactNode): number[] => {
  const head = React.Children.toArray(children).find(
    (child): child is React.ReactElement<{ children?: React.ReactNode }> => React.isValidElement(child) && child.type === UNSAFE_TableHead
  );
  const headRow = React.Children.toArray(head?.props.children).find(React.isValidElement) as
    React.ReactElement<{ children?: React.ReactNode }> | undefined;

  return React.Children.toArray(headRow?.props.children).flatMap((cell, index) =>
    React.isValidElement<TableHeadCellProps>(cell) && cell.props.hideBehindExpander ? [index] : []
  );
};
