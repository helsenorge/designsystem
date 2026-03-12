/**
 * Slår sammen to refs, typisk ref via prop og useRef slik at begge deler kan brukes som en felles ref
 * Fra https://github.com/gregberge/react-merge-refs
 * @param refs array med refs som skal slås sammen
 * @returns refcallback som kan brukes på komponent
 */
export const mergeRefs = <T>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | null | undefined>): React.RefCallback<T> => {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null && ref !== undefined) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
};

/**
 * Sjekker om ref er et objekt (og ikke en funksjon)
 * @param ref
 * @returns type predicate
 */
export const isMutableRefObject = <T>(ref: React.Ref<T> | undefined): ref is React.MutableRefObject<T> => {
  return !!ref && typeof ref !== 'function' && 'current' in ref;
};
