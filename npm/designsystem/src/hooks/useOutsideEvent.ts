import { useEffect } from 'react';

type OutsideEvents = {
  [K in keyof DocumentEventMap]: DocumentEventMap[K] extends MouseEvent | FocusEvent ? K : never;
}[keyof DocumentEventMap];

/**
 * Custom hook for klikk eller fokus utenfor et gitt element (eller flere elementer)
 *
 * Fokus-eventer som er bieffekter av et pekertrykk (scrollbar, focus trap, `<dialog>`) ignoreres.
 *
 * @param ref Sjekker om det klikkes utenfor dette elementet/elementene
 * @param callback Callback-funksjon ved klikk utenfor elementet/elementene
 * @param events Type eventer å lytte på. Default: mousedown
 */
export const useOutsideEvent = (
  ref: React.RefObject<HTMLElement | null> | React.RefObject<HTMLElement | null>[],
  callback: (event: MouseEvent | FocusEvent) => void,
  events: OutsideEvents[] = ['mousedown']
): void => {
  const refArray = Array.isArray(ref) ? ref : [ref];

  const handleOutsideEvent = (event: MouseEvent | FocusEvent): void => {
    if (refArray.every(r => r.current && !event.composedPath().includes(r.current))) {
      callback(event);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    // Holder styr på om pekeren er trykket ned, slik at fokus-eventer utløst av selve trykket kan ignoreres.
    // setTimeout holder guarden aktiv for fokus-eventer nettleseren sender rett etter pointerup/pointercancel.
    let isPointerDown = false;
    const releasePointer = (): void => {
      setTimeout(() => (isPointerDown = false));
    };
    document.addEventListener('pointerdown', () => (isPointerDown = true), { capture: true, signal });
    document.addEventListener('pointerup', releasePointer, { capture: true, signal });
    document.addEventListener('pointercancel', releasePointer, { capture: true, signal });

    events.forEach(eventName =>
      document.addEventListener(
        eventName,
        event => {
          if (!(event instanceof FocusEvent && isPointerDown)) {
            handleOutsideEvent(event);
          }
        },
        { signal }
      )
    );

    return (): void => controller.abort();
  }, [refArray, callback, events]);
};
