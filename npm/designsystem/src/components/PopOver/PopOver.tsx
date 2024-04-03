import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { getArrowStyle, getBubbleStyle, getVerticalPosition } from './utils';
import { AnalyticsId, ZIndex } from '../../constants';
import { useInterval } from '../../hooks/useInterval';
import { useIsVisible } from '../../hooks/useIsVisible';
import { useLayoutEvent } from '../../hooks/useLayoutEvent';
import { useSize } from '../../hooks/useSize';
import { mergeRefs } from '../../utils/refs';

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
  /** Ref for the element the PopOver is placed upon */
  popOverRef?: React.RefObject<HTMLDivElement>;
  /** Show the popover. Only applies when role=tooltip. Default: false. */
  show?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds custom classes to the arrow element. */
  arrowClassName?: string;
  /** Determines the placement of the popover. Default: automatic positioning. */
  variant?: keyof typeof PopOverVariant;
  /** Sets role of the PopOver element */
  role?: PopOverRole;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Overrides the default z-index of PopOver */
  zIndex?: number;
}

const PopOver = React.forwardRef<HTMLDivElement | SVGSVGElement, PopOverProps>((props, ref) => {
  const {
    id,
    children,
    controllerRef,
    popOverRef,
    show = false,
    className = '',
    variant = PopOverVariant.positionautomatic,
    role,
    testId,
    arrowClassName,
    zIndex = ZIndex.PopOver,
  } = props;

  const bubbleRef = popOverRef || useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const bubbleSize = useSize(bubbleRef);
  const [controllerSize, setControllerSize] = useState<DOMRect>();
  const controllerisVisible = useIsVisible(controllerRef, 0);

  const updateControllerSize = (): void => {
    setControllerSize(controllerRef.current?.getBoundingClientRect());
  };

  useInterval(updateControllerSize, 500);
  useLayoutEvent(updateControllerSize, ['scroll', 'resize'], 10);

  useEffect(() => {
    updateControllerSize();
  }, []);

  const isTooltip = role === 'tooltip';

  const popOverClasses = classNames(styles.popover, { [styles['popover--visible']]: isTooltip ? show : controllerisVisible }, className);
  const verticalPosition = controllerSize && bubbleSize && getVerticalPosition(controllerSize, bubbleSize, variant);
  const arrowClasses = classNames(styles.popover__arrow, arrowClassName, {
    [styles['popover__arrow--over']]: verticalPosition === PopOverVariant.positionbelow,
    [styles['popover__arrow--under']]: verticalPosition === PopOverVariant.positionabove,
  });

  const bubbleStyle = controllerSize && bubbleSize && getBubbleStyle(controllerSize, bubbleSize, variant);
  const arrowStyle = bubbleStyle && controllerSize && verticalPosition && getArrowStyle(bubbleStyle, controllerSize, verticalPosition);

  return (
    <>
      <div
        id={id}
        ref={mergeRefs([ref, bubbleRef])}
        className={popOverClasses}
        style={{ ...bubbleStyle, zIndex }}
        data-testid={testId}
        data-analyticsid={AnalyticsId.PopOver}
        role={role}
      >
        {children}
      </div>
      <div ref={arrowRef} className={arrowClasses} style={{ ...arrowStyle, zIndex }} />
    </>
  );
});

PopOver.displayName = 'PopOver';

export default PopOver;
