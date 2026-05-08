/** Parse a date value in `dd.mm.yyyy` format into its segments. Missing input yields empty strings. Partial input is preserved per segment. */
export const parseDateSegments = (value: string | undefined): { dd: string; mm: string; yyyy: string } => {
  if (!value) {
    return { dd: '', mm: '', yyyy: '' };
  }
  const [ddPart = '', mmPart = '', yyyyPart = ''] = value.split('.');
  return { dd: ddPart, mm: mmPart, yyyy: yyyyPart };
};

/** Combine `dd`, `mm`, `yyyy` segments back into a `dd.mm.yyyy` string. Returns `''` when all segments are empty. */
export const combineDateSegments = (dd: string, mm: string, yyyy: string): string => (dd || mm || yyyy ? `${dd}.${mm}.${yyyy}` : '');
