import { Breakpoint } from '../../hooks/useBreakpoint';
import { isTouchDevice } from '../../utils/device';
import { BreakpointConfig, SmallViewportVariant } from './Table';

import styles from './styles.module.scss';

/**
 * Sjekk om det skal brukes CSS for å bestemme responsivt utseende på dette breakpoint
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns true om breakpoint bruker CSS
 */
const configUsesCss = (config: BreakpointConfig): boolean =>
  config.variant === SmallViewportVariant.centeredoverflow || config.variant === SmallViewportVariant.block;

/**
 * Lag klassenavn for CSS-config
 * @param config Konfigurasjon for responsiv oppførsel
 * @returns CSS-klassenavn
 */
const mapConfigToClass = (config: BreakpointConfig): string => styles[`table--${config.variant}-${config.breakpoint}`];

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
 * @returns Konfigurasjon for responsiv oppførsel
 */
export const getCurrentConfig = (
  config: BreakpointConfig | BreakpointConfig[],
  breakpoint: Breakpoint,
  tableWidth: number,
  windowWidth: number
): BreakpointConfig | undefined => {
  const breakpointConfig = getConfigForBreakpoint(config, breakpoint);
  const canUseHorizontalScroll = isTouchDevice();
  const canUseCenteredOverflow = tableWidth <= windowWidth;

  if (!breakpointConfig) {
    return;
  }

  if (
    breakpointConfig.variant === SmallViewportVariant.centeredoverflow &&
    !canUseCenteredOverflow &&
    breakpointConfig.fallbackVariant === SmallViewportVariant.horizontalscroll
  ) {
    return {
      variant: canUseHorizontalScroll ? SmallViewportVariant.horizontalscroll : SmallViewportVariant.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === SmallViewportVariant.centeredoverflow &&
    !canUseCenteredOverflow &&
    breakpointConfig.fallbackVariant !== SmallViewportVariant.centeredoverflow
  ) {
    return {
      variant: breakpointConfig.fallbackVariant ?? SmallViewportVariant.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === SmallViewportVariant.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant === SmallViewportVariant.centeredoverflow
  ) {
    return {
      variant: canUseCenteredOverflow ? SmallViewportVariant.centeredoverflow : SmallViewportVariant.none,
      breakpoint: breakpointConfig.breakpoint,
    };
  }

  if (
    breakpointConfig.variant === SmallViewportVariant.horizontalscroll &&
    !canUseHorizontalScroll &&
    breakpointConfig.fallbackVariant !== SmallViewportVariant.horizontalscroll
  ) {
    return {
      variant: breakpointConfig.fallbackVariant ?? SmallViewportVariant.none,
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

/** @deprecated Midlertidig, fjernes i v3.0.0 */
export const isOldFormat = (x: unknown): x is SmallViewportVariant =>
  (x as SmallViewportVariant) === SmallViewportVariant.block || (x as SmallViewportVariant) === SmallViewportVariant.horizontalscroll;

/** @deprecated Midlertidig, fjernes i v3.0.0 */
export const getBackwardsCompatibleConfig = (variant: SmallViewportVariant): BreakpointConfig => {
  return {
    breakpoint: 'sm',
    variant,
  };
};
