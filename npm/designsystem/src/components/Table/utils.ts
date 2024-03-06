import React from 'react';

import { BreakpointConfig, ResponsiveTableVariant } from './Table';
import { Breakpoint } from '../../hooks/useBreakpoint';
import { isTouchDevice } from '../../utils/device';

import styles from './styles.module.scss';

/**
 * Sjekk om det skal brukes CSS for å bestemme responsivt utseende på dette breakpoint
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns true om breakpoint bruker CSS
 */
const configUsesCss = (config: BreakpointConfig): boolean =>
  config.variant === ResponsiveTableVariant.centeredoverflow || config.variant === ResponsiveTableVariant.block;

/**
 * Lag klassenavn for CSS-config
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns CSS-klassenavn
 */
const mapConfigToClass = (config: BreakpointConfig): string =>
  config.variant === 'centeredoverflow' || config.variant === 'block' ? styles[`table--${config.variant}-${config.breakpoint}`] : '';

/**
 * Sorter konfigurasjon etter breakpoints, fra største til minste
 * @param a Konfigurasjon for responsiv oppførsel
 * @param b Konfigurasjon for responsiv oppførsel
 * @returns Sortert liste
 */
const sortByBreakpointsDescending = (a: BreakpointConfig, b: BreakpointConfig): number =>
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
export const getCurrentConfig = (
  config: BreakpointConfig | BreakpointConfig[],
  breakpoint: Breakpoint,
  tableWidth: number,
  windowWidth: number
): Omit<BreakpointConfig, 'fallbackVariant'> | undefined => {
  const breakpointConfig = getConfigForBreakpoint(config, breakpoint);
  const canUseHorizontalScroll = isTouchDevice();
  const canUseCenteredOverflow = tableWidth <= windowWidth;

  if (!breakpointConfig) {
    return;
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariant.centeredoverflow &&
    !canUseCenteredOverflow &&
    breakpointConfig.fallbackVariant === ResponsiveTableVariant.horizontalscroll
  ) {
    return {
      variant: canUseHorizontalScroll ? ResponsiveTableVariant.horizontalscroll : ResponsiveTableVariant.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariant.centeredoverflow &&
    !canUseCenteredOverflow &&
    breakpointConfig.fallbackVariant !== ResponsiveTableVariant.centeredoverflow
  ) {
    return {
      variant: breakpointConfig.fallbackVariant ?? ResponsiveTableVariant.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariant.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant === ResponsiveTableVariant.centeredoverflow
  ) {
    return {
      variant: canUseCenteredOverflow ? ResponsiveTableVariant.centeredoverflow : ResponsiveTableVariant.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === ResponsiveTableVariant.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant !== ResponsiveTableVariant.horizontalscroll
  ) {
    return {
      variant: breakpointConfig.fallbackVariant ?? ResponsiveTableVariant.none,
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

  const COLUMN_GUTTER_WIDTH_PX = 8;

  return { left: `${(parentWidth - tableWidth) / 2 - COLUMN_GUTTER_WIDTH_PX}px` };
};
