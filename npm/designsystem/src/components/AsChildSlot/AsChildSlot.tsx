import React from 'react';

import { mergeRefs } from '../../utils/refs';

import styles from './styles.module.scss';

export interface AsChildSlotHandle {
  /** Click the child’s DOM node */
  click: () => void;
}

export interface AsChildSlotProps {
  /** Pass one element/component that ultimately maps to a DOM element (AnchorLink, Button, <a>, <button>, React Router <Link>, etc.) */
  children?: React.ReactNode;
  /** Class names to apply to the visible element (eg. radio-label classes) */
  className?: string;
  /** Content to render inside the visible element (dot + label) */
  content?: React.ReactNode;
  /** Disabled state passed down (merged with child’s disabled/aria-disabled) */
  disabled?: boolean;
  /** Called before the child’s onClick when visible */
  onSelect?: (e: React.SyntheticEvent) => void;
  /** Optional states to apply to the DOM element */
  ariaCurrent?: 'page' | 'true' | undefined;
  /** DOM ref for the element we end up rendering */
  elementRef?: React.Ref<HTMLElement>;
}

const isAriaDisabled = (v: unknown): boolean => v === true || v === 'true';

export const AsChildSlot = React.forwardRef<AsChildSlotHandle, AsChildSlotProps>(
  ({ children, className, content, disabled, onSelect, ariaCurrent, elementRef }, forwardedRef) => {
    const childElement = React.Children.toArray(children).filter(React.isValidElement)[0] as React.ReactElement | undefined;

    const nodeRef = React.useRef<HTMLElement | null>(null);
    const childRef = (childElement as unknown as { ref?: React.Ref<HTMLElement> | undefined })?.ref;
    const mergedRef = mergeRefs<HTMLElement>([
      (node): void => {
        nodeRef.current = node;
      },
      childRef,
      elementRef,
    ]);

    const childProps = (childElement?.props as Record<string, any>) || {};
    const childDisabled = !!childProps?.disabled || isAriaDisabled(childProps?.['aria-disabled']);
    const isDisabled = !!disabled || childDisabled;

    React.useImperativeHandle(
      forwardedRef,
      () => ({
        click: (): void => {
          if (isDisabled) return;
          nodeRef.current?.click();
        },
      }),
      [isDisabled]
    );

    if (!childElement) return null;

    const childOnClick = childProps.onClick as (e: React.MouseEvent<any>) => void;
    const wrappedOnClick: React.MouseEventHandler<any> = e => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onSelect?.(e);
      childOnClick?.(e);
    };

    const childOnKeyDown = childProps.onKeyDown as React.KeyboardEventHandler<any> | undefined;
    const wrappedOnKeyDown: React.KeyboardEventHandler<any> = e => {
      childOnKeyDown?.(e);
      if (e.defaultPrevented) return;
      if (e.key === ' ' || e.key === 'Spacebar' || e.code === 'Space') {
        if (isDisabled) {
          e.preventDefault();
          return;
        }
        e.preventDefault();
        nodeRef.current?.click();
      }
    };

    const isButtonLike = typeof childProps?.href === 'undefined';

    return React.cloneElement(childElement, {
      ref: mergedRef,
      className: `${styles['as-child-reset']} ${className ?? ''}`,
      style: undefined,
      'aria-disabled': isDisabled || undefined,
      'aria-current': ariaCurrent,
      ...(isButtonLike && !('type' in childProps) ? { type: 'button' } : null),
      onClick: wrappedOnClick,
      onKeyDown: wrappedOnKeyDown,
      children: content,
    });
  }
);

AsChildSlot.displayName = 'AsChildSlot';

export default AsChildSlot;
