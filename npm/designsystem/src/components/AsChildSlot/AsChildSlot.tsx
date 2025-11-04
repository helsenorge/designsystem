import React from 'react';

import { mergeRefs } from '../../utils/refs';

import styles from './styles.module.scss';

export interface AsChildSlotHandle {
  /** Click the child’s DOM node */
  click: () => void;
}

export interface AsChildSlotProps {
  /** Pass one element/component that we will map to a DOM element (<a>, <button>, React Router <Link>) */
  children?: React.ReactNode;
  /** Class names to apply to the visible element */
  className?: string;
  /** Content to render inside the visible element - For example the text and icons of the parent component that renders AsChildSlot */
  content?: React.ReactNode;
  /** Disabled state passed down (merged with child’s disabled/aria-disabled) */
  disabled?: boolean;
  /** Called before the child’s onClick when visible */
  onSelect?: (e: React.SyntheticEvent) => void;
  /** Optional states to apply to the DOM element */
  ariaCurrent?: 'page' | 'true';
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

    const childProps =
      (childElement?.props as Partial<React.DOMAttributes<HTMLElement>> &
        Partial<React.AnchorHTMLAttributes<HTMLElement>> &
        Partial<React.ButtonHTMLAttributes<HTMLElement>> & { disabled?: boolean; href?: unknown }) || {};
    const childDisabled = !!childProps.disabled || isAriaDisabled((childProps as React.AriaAttributes)['aria-disabled']);
    const isDisabled = !!disabled || childDisabled;

    // Exposes a callable click() to the parents.
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

    // Actual user mouse interaction
    const childOnClick = childProps.onClick as React.MouseEventHandler<HTMLElement> | undefined;
    const wrappedOnClick: React.MouseEventHandler<HTMLElement> = e => {
      if (isDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onSelect?.(e);
      childOnClick?.(e);
    };

    // Actual user keyboard interaction
    const childOnKeyDown = childProps.onKeyDown as React.KeyboardEventHandler<HTMLElement> | undefined;
    const wrappedOnKeyDown: React.KeyboardEventHandler<HTMLElement> = e => {
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

    const isButtonLike = typeof childProps.href === 'undefined';

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
