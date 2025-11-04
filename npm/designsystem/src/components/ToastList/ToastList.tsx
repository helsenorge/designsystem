import React from 'react';

import { AnimatePresence, motion } from 'motion/react';

import { mergeRefs } from '../../utils/refs';
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
  }, [toasts, visibleToasts, removedToastIds]);

  // Handles removal of a toast
  const handleRemoveToast = React.useCallback((id: string): void => {
    setVisibleToasts(prev => prev.filter(t => t.id !== id));
    // Add to removed IDs to prevent re-appearance
    setRemovedToastIds(prev => new Set([...prev, id]));

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

    // Set up timeouts for new visible toasts that don't have timeout yet
    visibleToasts.forEach(toast => {
      if (!timeouts.has(toast.id)) {
        const timeout = setTimeout(() => {
          handleRemoveToast(toast.id);
        }, DURATION);

        timeouts.set(toast.id, timeout);
      }
    });
  }, [visibleToasts, handleRemoveToast]);

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

  const setRefs = mergeRefs([internalRef, ref]);

  return (
    <section ref={setRefs} className={styles['toast-list']} data-testid={testId}>
      <AnimatePresence mode="popLayout">
        {visibleToasts.map(toast => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              layout: { type: 'spring', duration: 0.4, bounce: 0.1 },
            }}
          >
            <Toast
              testId={`${testId}-${toast.id}`}
              title={toast.title}
              message={toast.message}
              onClose={() => handleRemoveToast(toast.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
});

ToastList.displayName = 'ToastList';

export default ToastList;
