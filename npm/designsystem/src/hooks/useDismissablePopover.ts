import { useEffect } from 'react';

import { KeyboardEventKey } from '../constants';
import { useOutsideEvent } from './useOutsideEvent';
import { useReturnFocusOnClose } from './useReturnFocusOnClose';
import { deepContains } from '../utils/deepContains';
import { getDocumentActiveElement } from '../utils/focus';

interface UseDismissablePopover {
  /** Elementet/elementene som utgjør popoveren */
  popoverRef: React.RefObject<HTMLElement | null> | React.RefObject<HTMLElement | null>[];
  /** Trigger-elementet som får fokus tilbake når fokus ellers ville gått tapt */
  triggerRef: React.RefObject<HTMLElement | null>;
  /** Om popoveren er åpen */
  isOpen: boolean;
  /** Lukker popoveren (oppdaterer komponentens state) */
  onClose: () => void;
}

/**
 * Lukkeatferd for popovers: klikk utenfor, Escape og Tab ut av komponenten lukker.
 * Fokus fortsetter til neste element (WCAG 2.4.3), og flyttes bare tilbake til
 * trigger når det ellers ville gått tapt.
 * @returns Lukkefunksjon som også kan brukes av komponentens egne lukkeknapper/valg
 */
export const useDismissablePopover = ({ popoverRef, triggerRef, isOpen, onClose }: UseDismissablePopover): (() => void) => {
  const refs = [...(Array.isArray(popoverRef) ? popoverRef : [popoverRef]), triggerRef];
  const returnFocusOnClose = useReturnFocusOnClose(refs, triggerRef);

  const close = (): void => {
    if (!isOpen) return;

    onClose();
    returnFocusOnClose();
  };

  useOutsideEvent(refs, close, ['click']);

  useEffect(() => {
    const allElements = [...new Set(refs.flatMap(r => (r.current ? [r.current] : [])))];
    // Elementer som ligger inni et annet dekkes av forelderens listener via bobling
    const elements = allElements.filter(el => !allElements.some(other => other !== el && other.contains(el)));

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (!isOpen) return;

      if (event.key === KeyboardEventKey.Escape) {
        event.preventDefault();
        // Ikke la Escape boble videre til omkringliggende lukkbare elementer (f.eks. Drawer)
        event.stopPropagation();
        close();
      } else if (event.key === KeyboardEventKey.Tab) {
        // Etter at nettleseren har flyttet fokus: lukk hvis fokus forlot komponenten
        setTimeout(() => {
          const focusIsInside = elements.some(el => deepContains(el, getDocumentActiveElement(el)));
          if (!document.hasFocus() || !focusIsInside) {
            close();
          }
        });
      }
    };

    elements.forEach(el => el.addEventListener('keydown', handleKeyDown));

    return (): void => {
      elements.forEach(el => el.removeEventListener('keydown', handleKeyDown));
    };
  });

  return close;
};
