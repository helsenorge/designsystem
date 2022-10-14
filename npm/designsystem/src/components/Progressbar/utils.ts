/**
 * Minimum avstand fra markør til prikk
 */
const MARKER_DOT_MIN_DISTANCE_PX = 4;

/**
 * Bredde på markør
 */
const MARKER_WIDTH_PX = 24;

/**
 * Horisontal padding på progressbar
 */
export const PROGRESS_BAR_PADDING_X_PX = 8;

/**
 * Valider at minimum-verdi er innenfor gyldig område
 * @param min Mimimum-verdi
 * @param max Maksimum-verdi
 * @returns Mimimum-verdi, ikke større enn eller lik maksimum-verdi
 */
export const getValidatedMin = (min: number, max: number): number => (min < max ? min : max - 1);

/**
 * Valider at maksimum-verdi er innenfor gyldig område
 * @param min Mimimum-verdi
 * @param max Maksimum-verdi
 * @returns Maksimum-verdi, ikke mindre enn minimum-verdi
 */
export const getValidatedMax = (min: number, max: number): number => (max < min ? min : max);

/**
 * Valider at verdi er innenfor gyldig område
 * @param value Nåværende verdi
 * @param min Mimimum-verdi
 * @param max Maksimum-verdi
 * @returns Verdi, ikke mindre enn 0, ikke mer enn max
 */
export const getValidatedValue = (value: number | undefined, min: number, max: number): number => {
  if (typeof value === 'undefined' || value < min) {
    return min;
  }

  return value > max ? max : value;
};

/**
 * Finn antall prikker det er plass til
 * @param progressbarWidth Bredde på progressbar
 * @returns Antall prikker
 */
export const getMaximumDots = (progressbarWidth: number): number =>
  Math.floor(progressbarWidth / (MARKER_WIDTH_PX + MARKER_DOT_MIN_DISTANCE_PX));

/**
 * Beregn riktig distance mellom prikker
 * @param progressbarWidth Bredde på progressbar
 * @param dots Antall prikker som skal vises
 * @returns Distanse mellom prikker
 */
export const getDistanceBetweenDots = (progressbarWidth: number, dots: number): number => (progressbarWidth - MARKER_WIDTH_PX) / (dots - 1);

/**
 * Beregn riktig plassering av markør
 * @param distanceBetweenDots Distanse mellom prikker
 * @param index Nåværende verdi i progressbar
 * @returns Plassering til markør fra venstre
 */
export const getMarkerPosition = (distanceBetweenDots: number, index: number): number => distanceBetweenDots * index;

/**
 * Lag liste med tillate verdier fra min til maks
 * @param min Mimimum-verdi
 * @param max Maksimum-verdi
 * @returns Liste med verdier
 */
export const getAllowedValues = (min: number, max: number): number[] => Array.from(Array(max - min + 1), (_, index) => index + min);

/**
 * Valider props som skal brukes til beregning av posisjon m.m.
 * @param value Nåværende verdi
 * @param min Mimimum-verdi
 * @param max Maksimum-verdi
 * @returns Objekt med gyldige verdier
 */
export const getValidatedProps = (
  value: number | undefined,
  min: number,
  max: number
): { validatedValue: number; validatedMin: number; validatedMax: number } => {
  const validatedMin = getValidatedMin(min, max);
  const validatedMax = getValidatedMax(validatedMin, max);
  const validatedValue = getValidatedValue(value, validatedMin, validatedMax);

  return { validatedValue, validatedMin, validatedMax };
};
