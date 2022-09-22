/**
 * Slår sammen refs fra forwardRef og useRef slik at begge deler kan brukes
 * Fra https://github.com/gregberge/react-merge-refs
 * @param refs array med refs som skal slås sammen
 * @returns refcallback som kan brukes på komponent
 */
export const mergeRefs = <T>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T> => {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
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
export const isMutableRefObject = <T>(ref: React.ForwardedRef<T>): ref is React.MutableRefObject<T> => {
  return typeof ref !== 'function' && ref !== null;
};
