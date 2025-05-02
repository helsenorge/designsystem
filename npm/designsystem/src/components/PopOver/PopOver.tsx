import React, { useRef } from 'react';

import {
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  FloatingArrow,
  arrow,
  hide,
} from '@floating-ui/react';
import { FloatingFocusManager } from '@floating-ui/react';
import classNames from 'classnames';

import { AnalyticsId, ZIndex } from '../../constants';

import styles from './styles.module.scss';

export enum PopOverVariant {
  positionautomatic = 'positionautomatic',
  positionbelow = 'positionbelow',
  positionabove = 'positionabove',
}

export type PopOverRole = 'tooltip';

export interface PopOverProps {
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
  /** Adds custom classes to the arrow element. */
  arrowClassName?: string;
  /** @deprecated Determines the placement of the popover. Default: automatic positioning. */
  variant?: keyof typeof PopOverVariant;
  /** Sets the placement of the popover relative to the trigger. */
  placement?: Placement;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Overrides the default z-index of PopOver */
  zIndex?: number;
}

const PopOver = React.forwardRef<HTMLDivElement | SVGSVGElement, PopOverProps>(props => {
  const {
    id,
    children,
    controllerRef,
    className = '',
    variant = PopOverVariant.positionautomatic,
    placement,
    testId,
    zIndex = ZIndex.PopOver,
  } = props;

  const placementProp = placement ?? (variant === PopOverVariant.positionabove ? 'top' : 'bottom');

  const arrowRef = useRef(null);
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    middleware: [offset(8), flip(), shift(), hide(), arrow({ element: arrowRef })],
    placement: placementProp,
    whileElementsMounted: autoUpdate,
    elements: {
      reference: controllerRef.current,
    },
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([click, dismiss, role]);

  return (
    <FloatingFocusManager context={context} modal={false}>
      <div
        id={id}
        ref={refs.setFloating}
        style={{ ...floatingStyles, visibility: middlewareData.hide?.referenceHidden ? 'hidden' : 'visible', zIndex: zIndex }}
        className={classNames(styles.popover, className)}
        {...getFloatingProps()}
        data-testid={testId}
        data-analyticsid={AnalyticsId.PopOver}
      >
        {children}
        <FloatingArrow
          ref={arrowRef}
          context={context}
          fill={'var(--core-color-white)'}
          stroke={'var(--core-color-neutral-600)'}
          strokeWidth={1}
        />
      </div>
    </FloatingFocusManager>
  );
});

PopOver.displayName = 'PopOver';

export default PopOver;
