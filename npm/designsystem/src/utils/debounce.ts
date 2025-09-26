/**
 * debounce limits time a function can be executed
 * @param func function to debounce
 * @param wait wait for x time
 */

export function debounce<A = unknown, R = void>(func: (args?: A) => R, wait: number): [(args?: A) => Promise<R>, () => void] {
  let timeout: ReturnType<typeof setTimeout> | null;

  const debouncedFunc = (args?: A): Promise<R> =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout((): void => {
        resolve(func(args));
      }, wait);
    });

  const teardown = (): void => {
    if (timeout) clearTimeout(timeout);
  };

  return [debouncedFunc, teardown];
}
