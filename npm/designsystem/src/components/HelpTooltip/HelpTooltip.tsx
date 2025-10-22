import React, { useState, useRef, useId } from 'react';

import { useFloating, useHover, useFocus, useDismiss, useInteractions, FloatingDelayGroup } from '@floating-ui/react';

import DictionaryTrigger from '../DictionaryTrigger';
import PopOver from '../PopOver';

export interface HelpTooltipProps {
  /** Ordet som skal ha en tilhørende tooltip. Det skal bare sendes inn string som children. Er satt til ReactNode for å kunne brukes i CMSet. */
  children: React.ReactNode;
  /** Teksten som skal vises i boblen som åpnes */
  description: React.ReactNode;
  /** Valgfri test-id */
  testId?: string;
}

export const HelpTooltip: React.FC<HelpTooltipProps> = ({ children, description, testId }) => {
  const popoverId = useId();
  const [showTooltip, setShowTooltip] = useState(false);

  const wordRef = useRef<HTMLButtonElement>(null);
  const { refs, context } = useFloating({
    open: showTooltip,
    elements: {
      reference: wordRef.current,
    },
    onOpenChange: setShowTooltip,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps } = useInteractions([hover, focus, dismiss]);

  return (
    <>
      <DictionaryTrigger ref={wordRef} {...getReferenceProps()} selected={showTooltip} aria-describedby={popoverId} data-testid={testId}>
        {children}
      </DictionaryTrigger>
      <PopOver role="tooltip" ref={refs.setFloating} id={popoverId} show={showTooltip} testId={testId} controllerRef={wordRef}>
        {description}
      </PopOver>
    </>
  );
};

export const HelpTooltipDelayGroup = FloatingDelayGroup;

export default HelpTooltip;
