import React, { useRef, useState } from 'react';

import { arrow, FloatingArrow, autoUpdate, useFloating, offset, size } from '@floating-ui/react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const BUBBLE_WIDTH_OFFSET = 26;
const BUBBLE_Y_OFFSET = 1;

export interface HelpDetailsProps {
  /** Sets the text content of the HelpDetails. */
  children: React.ReactNode;
  /** Ref for the element the HelpDetails is placed upon */
  controllerRef?: React.RefObject<HTMLButtonElement>;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpDetails = React.forwardRef<HTMLDivElement, HelpDetailsProps>(({ children, controllerRef, testId }, ref) => {
  const arrowRef = useRef(null);
  const [bubbleMinWidth, setBubbleMinWidth] = React.useState<number | null>(null);
  const [arrowYOffsetValue, setArrowYOffsetValue] = useState<number>();

  const { refs, context, floatingStyles } = useFloating({
    middleware: [
      offset(arrowYOffsetValue),
      controllerRef && arrow({ element: arrowRef }),
      size({
        apply({ rects }) {
          // Vi setter minimum bredde på bubble basert på controllerRef sin x posisjon
          setBubbleMinWidth(rects.reference.x);

          // Vi kalkulerer pilens y-offset basert på avstand mellom controllerRef og bubble
          const { reference, floating } = rects;
          const controllerBottom = reference.y + reference.height;
          const bubbleTop = floating.y;
          const distance = bubbleTop - controllerBottom + BUBBLE_Y_OFFSET;
          setArrowYOffsetValue(distance);
        },
      }),
    ],
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    elements: {
      reference: controllerRef?.current,
    },
  });

  const helpDetailsClasses = classNames(
    styles['help-details'],
    controllerRef ? styles['help-details--inline'] : styles['help-details--standalone']
  );
  const contentClasses = classNames(controllerRef ? styles['help-details__content--inline'] : styles['help-details__content--standalone']);

  return (
    <div
      className={helpDetailsClasses}
      data-testid={testId}
      ref={ref}
      style={{ minWidth: bubbleMinWidth ? `${bubbleMinWidth + BUBBLE_WIDTH_OFFSET}px` : undefined }}
    >
      <div style={floatingStyles} ref={refs.setFloating}>
        {controllerRef && typeof arrowYOffsetValue !== 'undefined' && (
          <FloatingArrow
            ref={arrowRef}
            context={context}
            fill={'var(--core-color-plum-50)'}
            stroke={'var(--core-color-plum-400)'}
            strokeWidth={1}
          />
        )}
      </div>
      <div className={contentClasses}>{children}</div>
    </div>
  );
});

HelpDetails.displayName = 'HelpDetails';

export default HelpDetails;
