import React from 'react';

import type { ModeTypeOld } from './constants';
import type { BreakpointConfigOld } from './TableOld';

import { ResponsiveTableVariantOld } from './constants';
import { Breakpoint } from '../../hooks/useBreakpoint';
import { isTouchDevice } from '../../utils/device';

import styles from './styles.module.scss';

/**
 * Sjekk om det skal brukes CSS for å bestemme responsivt utseende på dette breakpoint
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns true om breakpoint bruker CSS
 */
const configUsesCss = (config: BreakpointConfigOld): boolean =>
  config.variant === ResponsiveTableVariantOld.centeredoverflow || config.variant === ResponsiveTableVariantOld.block;

/**
 * Lag klassenavn for CSS-config
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns CSS-klassenavn
 */
const mapConfigToClass = (config: BreakpointConfigOld): string =>
  config.variant === 'centeredoverflow' || config.variant === 'block' ? styles[`table--${config.variant}-${config.breakpoint}`] : '';

/**
 * Sorter konfigurasjon etter breakpoints, fra største til minste
 * @param a Konfigurasjon for responsiv oppførsel
 * @param b Konfigurasjon for responsiv oppførsel
 * @returns Sortert liste
 */
const sortByBreakpointsDescending = (a: BreakpointConfigOld, b: BreakpointConfigOld): number =>
  Breakpoint[a.breakpoint] - Breakpoint[b.breakpoint];

/**
 * Sjekk om en konfigurasjon skal brukes for nåværende breakpoint
 * @param a Konfigurasjon for responsiv oppførsel
 * @param breakpoint Nåværende breakpoint
 * @returns true dersom config skal brukes for breakpointet
 */
const isValidForCurrentBreakpoint = (config: BreakpointConfigOld, breakpoint: Breakpoint): boolean =>
  Breakpoint[config.breakpoint] >= breakpoint;

/**
 * Finn konfigurasjon for nåværende breakpoint
 * @param config Konfigurasjon for responsiv oppførsel
 * @param breakpoint Nåværende breakpoint
 * @returns Konfigurasjon for responsiv oppførsel
 */
const getConfigForBreakpoint = (
  config: BreakpointConfigOld | BreakpointConfigOld[],
  breakpoint: Breakpoint
): BreakpointConfigOld | undefined => {
  if (Array.isArray(config)) {
    config.sort(sortByBreakpointsDescending);

    return config.find(x => isValidForCurrentBreakpoint(x, breakpoint));
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
export const getCurrentConfigOld = (
  config: BreakpointConfigOld | BreakpointConfigOld[],
  breakpoint: Breakpoint,
  tableWidth: number,
  windowWidth: number
): Omit<BreakpointConfigOld, 'fallbackVariant'> | undefined => {
  const breakpointConfig = getConfigForBreakpoint(config, breakpoint);
  const canUseHorizontalScroll = isTouchDevice();
  const canUseCenteredOverflow = tableWidth <= windowWidth;

  if (!breakpointConfig) {
    return;
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariantOld.centeredoverflow &&
    !canUseCenteredOverflow &&
    breakpointConfig.fallbackVariant === ResponsiveTableVariantOld.horizontalscroll
  ) {
    return {
      variant: canUseHorizontalScroll ? ResponsiveTableVariantOld.horizontalscroll : ResponsiveTableVariantOld.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariantOld.centeredoverflow &&
    !canUseCenteredOverflow &&
    breakpointConfig.fallbackVariant !== ResponsiveTableVariantOld.centeredoverflow
  ) {
    return {
      variant: breakpointConfig.fallbackVariant ?? ResponsiveTableVariantOld.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariantOld.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant === ResponsiveTableVariantOld.centeredoverflow
  ) {
    return {
      variant: canUseCenteredOverflow ? ResponsiveTableVariantOld.centeredoverflow : ResponsiveTableVariantOld.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariantOld.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant !== ResponsiveTableVariantOld.horizontalscroll
  ) {
    return {
      variant: breakpointConfig.fallbackVariant ?? ResponsiveTableVariantOld.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  return breakpointConfig;
};

/**
 * Finn klassenavn for responsiv oppførsel
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns Klassenavn
 */
export const getBreakpointClassOld = (config?: BreakpointConfigOld): string | undefined =>
  config && configUsesCss(config) ? mapConfigToClass(config) : undefined;

/**
 * Finn riktig posisjon for horisontal sentrering av tabell som skal vises "centeredoverflow"
 * @param parentWidth Bredde på element som tabellen ligger i
 * @param tableWidth Bredde på tabellen
 * @returns Styling som posisjonerer tabellen riktig
 */
export const getCenteredOverflowTableStyleOld = (parentWidth: number, tableWidth: number): React.CSSProperties | undefined => {
  if (parentWidth >= tableWidth) {
    return;
  }

  const COLUMN_GUTTER_WIDTH_PX = 8;

  return { left: `${(parentWidth - tableWidth) / 2 - COLUMN_GUTTER_WIDTH_PX}px` };
};

/**
 * Map children and inject the `mode` prop into element children, but never on React.Fragment.
 * If a Fragment is encountered, its children are mapped and updated, while the Fragment wrapper is preserved.
 */
export const mapChildrenWithModeOld = (children: React.ReactNode, mode: ModeTypeOld | undefined): React.ReactNode =>
  React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    if (child.type === React.Fragment) {
      const fragmentChildren = (child.props as { children?: React.ReactNode }).children;
      const mapped = React.Children.map(fragmentChildren, gc =>
        React.isValidElement<{ mode?: ModeTypeOld }>(gc) ? React.cloneElement(gc, { mode }) : gc
      );
      return React.cloneElement(child, undefined, mapped);
    }
    return React.cloneElement(child as React.ReactElement<{ mode?: ModeTypeOld }>, { mode });
  });

/**
 * Create a shallow copy of an object with specific keys omitted.
 */
export const omitPropsOld = <T extends Record<PropertyKey, unknown>>(obj: T, keys: Array<keyof T>): Partial<T> => {
  const clone: Partial<T> = { ...obj };
  for (const k of keys) {
    delete clone[k];
  }
  return clone;
};
