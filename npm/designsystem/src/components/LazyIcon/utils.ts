/** @deprecated Use the useIsServerSide hook instead */
export const isServerSide = (): boolean => typeof document === 'undefined';
