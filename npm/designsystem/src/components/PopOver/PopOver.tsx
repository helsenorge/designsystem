import React, { useRef } from 'react';

import {
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  FloatingArrow,
  arrow,
  hide,
  FloatingFocusManager,
  useMergeRefs,
} from '@floating-ui/react';
import classNames from 'classnames';

import { AnalyticsId, ZIndex } from '../../constants';
import { getAriaLabelAttributes } from '../../utils/accessibility';

import styles from './styles.module.scss';

export enum PopOverVariant {
  positionautomatic = 'positionautomatic',
  positionbelow = 'positionbelow',
  positionabove = 'positionabove',
}

export type PopOverRole = 'tooltip' | 'dialog';

export type PopOverPlacement = 'top' | 'bottom';

export interface PopOverProps {
  /** Sets aria-label of the bubble. If role is set to dialog ariaLabel or ariaLabelledById MUST be set! */
  ariaLabel?: string;
  /** Sets aria-labelledby of the bubble. If role is set to dialog ariaLabel or ariaLabelledById MUST be set! */
  ariaLabelledById?: string;
  /** Id of the PopOver */
  id?: string;
  /** Content shown inside PopOver. Note that if role="tooltip", you must not include interactive/focusable elements. */
  children: React.ReactNode;
  /** Ref for the element the PopOver is placed upon */
  controllerRef: React.RefObject<HTMLElement | SVGSVGElement>;
  /** Show the popover. Only applies when role=tooltip. Default: false. */
  show?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** @deprecated Adds custom classes to the arrow element. */
  arrowClassName?: string;
  /** @deprecated use placement instead. Determines the placement of the popover. Default: automatic positioning. */
  variant?: keyof typeof PopOverVariant;
  /** Sets the placement of the popover relative to the trigger if there is space, otherwise automatic. */
  placement?: PopOverPlacement;
  /** Sets role of the PopOver element */
  role?: PopOverRole;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Overrides the default z-index of PopOver */
  zIndex?: number;
}

const PopOver = React.forwardRef<HTMLDivElement | SVGSVGElement | HTMLElement, PopOverProps>((props, ref) => {
  const {
    ariaLabel,
    ariaLabelledById,
    id,
    children,
    controllerRef,
    show = false,
    className = '',
    variant = PopOverVariant.positionautomatic,
    role = 'dialog',
    testId,
    zIndex = ZIndex.PopOver,
    placement,
  } = props;

  const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });

  const placementProp = placement ?? (variant === PopOverVariant.positionabove ? 'top' : 'bottom');

  const arrowRef = useRef(null);
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    middleware: [offset(10), flip(), shift({ padding: 8 }), hide(), arrow({ element: arrowRef })],
    placement: placementProp,
    whileElementsMounted: autoUpdate,
    elements: {
      reference: controllerRef.current,
    },
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([click, dismiss]);

  const isVisible = show && !middlewareData.hide?.referenceHidden;

  const mergedRef = useMergeRefs<HTMLElement | SVGSVGElement>([refs.setFloating, ref]);

  return (
    <FloatingFocusManager context={context} modal={false}>
      <div
        id={id}
        ref={mergedRef}
        style={{ ...floatingStyles, visibility: isVisible ? 'visible' : 'hidden', zIndex: zIndex }}
        className={classNames(styles.popover, className)}
        {...getFloatingProps()}
        role={role}
        data-testid={testId}
        data-analyticsid={AnalyticsId.PopOver}
        {...ariaLabelAttributes}
      >
        {children}
        <FloatingArrow
          ref={arrowRef}
          context={context}
          fill={'var(--core-color-white)'}
          stroke={'var(--color-base-border-onlight)'}
          strokeWidth={1}
        />
      </div>
    </FloatingFocusManager>
  );
});

PopOver.displayName = 'PopOver';

export default PopOver;
