import React, { useEffect, useState } from 'react';

import { arrow, FloatingArrow, autoUpdate, useFloating, useMergeRefs, offset, size } from '@floating-ui/react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const BUBBLE_WIDTH_OFFSET = 26;
const BUBBLE_Y_OFFSET = 1;

export interface HelpDetailsProps {
  /** Sets the text content of the HelpDetails. */
  children: React.ReactNode;
  /** Ref for the element the HelpDetails is placed upon */
  controllerRef?: React.RefObject<HTMLButtonElement | null>;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref passed to the component */
  ref?: React.Ref<HTMLDivElement | null>;
}
const HelpDetails: React.FC<HelpDetailsProps> = props => {
  const { children, controllerRef, testId, ref } = props;
  const [arrowElement, setArrowElement] = useState<SVGSVGElement | null>(null);
  const [bubbleMinWidth, setBubbleMinWidth] = React.useState<number | null>(null);
  const [arrowYOffsetValue, setArrowYOffsetValue] = useState<number>();

  const { refs, context, floatingStyles } = useFloating({
    middleware: [
      offset(arrowYOffsetValue),
      controllerRef && arrow({ element: arrowElement }),
      size({
        apply({ rects }) {
          // Vi setter minimum bredde på bubble basert på controllerRef sin x posisjon og halve bredden
          setBubbleMinWidth(rects.reference.x + rects.reference.width / 2);

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
  });

  const floatingRef = useMergeRefs([refs.setFloating]);

  useEffect(() => {
    refs.setReference(controllerRef?.current ?? null);
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
      <div style={floatingStyles} ref={floatingRef}>
        {controllerRef && typeof arrowYOffsetValue !== 'undefined' && (
          <FloatingArrow
            ref={setArrowElement}
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
};

HelpDetails.displayName = 'HelpDetails';

export default HelpDetails;
