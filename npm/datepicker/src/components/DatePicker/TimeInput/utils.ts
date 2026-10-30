/** Parse a time value in `hh:mm` format into its segments. Missing or invalid input yields empty strings. */
export const parseTimeSegments = (value: string | undefined): { hh: string; mm: string } => {
  if (!value) {
    return { hh: '', mm: '' };
  }
  const [hhPart = '', mmPart = ''] = value.split(':');
  return { hh: hhPart, mm: mmPart };
};

/** Combine `hh` and `mm` segments back into an `hh:mm` string. Returns `''` when both segments are empty. */
export const combineTimeSegments = (hh: string, mm: string): string => (hh || mm ? `${hh}:${mm}` : '');
