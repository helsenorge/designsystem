import React from 'react';

import { mergeRefs } from '../../utils/refs';

import styles from './styles.module.scss';
export interface AsChildSlotHandle {
  /** Click the child's DOM node (runs its onClick and link behavior) */
  click: () => void;
}

export interface AsChildSlotProps {
  /** Turn off to stop rendering and triggering events */
  active?: boolean;
  /** Pass one <Button/> or <AnchorLink/> */
  children?: React.ReactNode;
}

export const AsChildSlot = React.forwardRef<AsChildSlotHandle, AsChildSlotProps>(({ active = true, children }, forwardedRef) => {
  const childElement = React.useMemo<React.ReactElement | null>(() => {
    if (!active) return null;
    const arr = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement[];
    return arr[0] ?? null;
  }, [active, children]);

  const nodeRef = React.useRef<HTMLElement | null>(null);
  const childProps = (childElement?.props as { disabled?: boolean; 'aria-disabled'?: boolean | 'true' | 'false' }) || undefined;
  const childDisabled = !!childProps?.disabled || childProps?.['aria-disabled'] || childProps?.['aria-disabled'] === 'true';
  const childRef = (childElement as unknown as { ref?: React.Ref<HTMLElement> | undefined })?.ref;
  const mergedRef = mergeRefs<HTMLElement>([
    (node): void => {
      nodeRef.current = node;
    },
    childRef,
  ]);

  // Exposes click() to parent
  React.useImperativeHandle(
    forwardedRef,
    () => ({
      click: (): void => {
        if (!active || !childElement || childDisabled) return;
        nodeRef.current?.click();
      },
    }),
    [active, childElement, childDisabled]
  );

  if (!active || !childElement) return null;

  return (
    <span aria-hidden hidden className={styles['as-child-slot']}>
      {React.cloneElement(childElement, { ref: mergedRef })}
    </span>
  );
});

AsChildSlot.displayName = 'AsChildSlot';

export default AsChildSlot;
