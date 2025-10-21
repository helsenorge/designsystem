import React from 'react';

import Toast from '../Toast/Toast';

import styles from './styles.module.scss';

export interface ToastData {
  id: string;
  title: string;
  message?: string;
}

export interface ToastListProps {
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Array of toast data to display */
  toasts?: ToastData[];
}

const DURATION = 8000;
const ANIMATION_DURATION = 300;
const FADE_OUT_DISTANCE = 10;
const FLIP_ANIMATION_DURATION = 150;

const ToastList = React.forwardRef<HTMLElement, ToastListProps>((props, ref) => {
  const { testId, toasts = [] } = props;
  const internalRef = React.useRef<HTMLElement | null>(null);
  const [visibleToasts, setVisibleToasts] = React.useState<ToastData[]>([]);
  const [removedToastIds, setRemovedToastIds] = React.useState<Set<string>>(new Set());
  const timeoutRefs = React.useRef<Map<string, NodeJS.Timeout>>(new Map());

  React.useEffect(() => {
    const newToasts = toasts.filter(toast => !visibleToasts.some(vt => vt.id === toast.id) && !removedToastIds.has(toast.id));
    if (newToasts.length > 0) {
      setVisibleToasts(prev => [...prev, ...newToasts]);
    }
  }, [toasts]);

  // Handle animation when visible toasts change
  React.useEffect(() => {
    const container = internalRef.current;
    if (!container) return;

    // FLIP animation technique
    const first = container.offsetHeight;

    requestAnimationFrame(() => {
      const last = container.offsetHeight;
      const invert = last - first;

      // Animate height changes
      if (invert > 0) {
        container.animate([{ transform: `translateY(-${invert}px)` }, { transform: 'translateY(0)' }], {
          duration: FLIP_ANIMATION_DURATION,
          easing: 'ease-out',
        });
      }
    });
  }, [visibleToasts.length]);

  // Handles manual removal of a toast
  const handleRemoveToast = React.useCallback((id: string): void => {
    const toastElement = document.querySelector(`[data-toast-id="${id}"]`) as HTMLElement;

    if (toastElement) {
      // Animate fade out
      toastElement
        .animate(
          [
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: `translateY(-${FADE_OUT_DISTANCE}px)` },
          ],
          {
            duration: ANIMATION_DURATION,
            easing: 'ease-out',
            fill: 'forwards',
          }
        )
        .addEventListener('finish', () => {
          // Remove from state after animation completes
          setVisibleToasts(prev => prev.filter(t => t.id !== id));
          // Add to removed IDs to prevent re-appearance
          setRemovedToastIds(prev => new Set([...prev, id]));
        });
    } else {
      // Fallback: remove immediately if element not found
      setVisibleToasts(prev => prev.filter(t => t.id !== id));
      // Add to removed IDs to prevent re-appearance
      setRemovedToastIds(prev => new Set([...prev, id]));
    }

    // Clear timeout if exists
    const timeout = timeoutRefs.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(id);
    }
  }, []);

  // Handle auto-removal of toasts after duration
  React.useEffect(() => {
    const timeouts = timeoutRefs.current;

    // Set up timeouts for new visible toasts that does not have timeout yet
    visibleToasts.forEach(toast => {
      if (!timeouts.has(toast.id)) {
        const timeout = setTimeout(() => {
          handleRemoveToast(toast.id);
        }, DURATION);

        timeouts.set(toast.id, timeout);
      }
    });
  }, [visibleToasts.length, handleRemoveToast]);

  // Cleanup timeouts for removed toasts
  React.useEffect(() => {
    const timeouts = timeoutRefs.current;
    const currentToastIds = new Set(visibleToasts.map(t => t.id));

    timeouts.forEach((timeout, id) => {
      if (!currentToastIds.has(id)) {
        clearTimeout(timeout);
        timeouts.delete(id);
      }
    });
  }, [visibleToasts]);

  // Cleanup all timeouts on unmount
  React.useEffect(() => {
    return (): void => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
      timeoutRefs.current.clear();
    };
  }, []);

  const setRefs = React.useCallback(
    (node: HTMLElement | null) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  return (
    <section ref={setRefs} className={styles['toast-list']} data-testid={testId}>
      {visibleToasts.map(toast => (
        <div key={toast.id} data-toast-id={toast.id}>
          <Toast testId={`${testId}-${toast.id}`} title={toast.title} message={toast.message} onClose={() => handleRemoveToast(toast.id)} />
        </div>
      ))}
    </section>
  );
});

ToastList.displayName = 'ToastList';

export default ToastList;
