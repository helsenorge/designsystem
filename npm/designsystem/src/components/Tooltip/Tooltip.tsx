import React, { useContext, useState, useEffect, useRef } from 'react';

import TooltipWord from './TooltipWord';
import { useDelayedState } from '../../hooks/useDelayedState';
import { useUuid } from '../../hooks/useUuid';
import HelpBubble from '../HelpBubble';


const HOVER_DELAY_MS = 200;

export interface TooltipProps {
  /** Ordet som skal ha en tilhørende tooltip */
  children: string;
  /** Teksten som skal vises i tooltip */
  description: React.ReactNode;
  /** Valgfri test-id */
  testId?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, description, testId }) => {
  const helpBubbleId = useUuid();
  const wordRef = useRef<HTMLSpanElement>(null);
  const { currentTooltip, setCurrentTooltip } = useContext(TooltipOpenContext);
  const [{ showTooltip, keepOpen }, setShowTooltipDelayed, setShowTooltip] = useDelayedState(
    { showTooltip: false, keepOpen: false },
    HOVER_DELAY_MS
  );

  useEffect(() => {
    if (!setCurrentTooltip) {
      return;
    }
    if (showTooltip) {
      setCurrentTooltip(helpBubbleId);
    } else {
      setCurrentTooltip(undefined);
    }
  }, [showTooltip]);

  useEffect(() => {
    if (currentTooltip !== helpBubbleId && typeof currentTooltip !== 'undefined') {
      setShowTooltip(prevState => ({ showTooltip: false, keepOpen: prevState.keepOpen }));
    }
  }, [currentTooltip]);

  const handleDocumentClick = (): void => {
    if (!showTooltip) {
      setShowTooltip({ showTooltip: false, keepOpen: false });
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleDocumentClick);
    return (): void => {
      document.removeEventListener('mouseup', handleDocumentClick);
    };
  }, []);

  const handleTooltipClick = (): void => {
    setShowTooltip(prevState => ({ showTooltip: !prevState.showTooltip, keepOpen: !prevState.keepOpen }));
  };

  const handleFocus = (): void => {
    if (!currentTooltip) {
      setShowTooltipDelayed(prevState => ({ showTooltip: true, keepOpen: prevState.keepOpen }));
    }
  };

  const handleBlur = (): void => {
    setShowTooltip(prevState => ({ showTooltip: false, keepOpen: prevState.keepOpen }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.key === 'Enter') {
      setShowTooltip(prevState => ({ showTooltip: !prevState.showTooltip, keepOpen: !prevState.keepOpen }));
    }
    if (e.key === 'Escape') {
      setShowTooltip({ showTooltip: false, keepOpen: false });
    }
  };

  return (
    <>
      <TooltipWord
        ref={wordRef}
        onClick={handleTooltipClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        ariaDescribedById={helpBubbleId}
        testId={testId}
      >
        {children}
      </TooltipWord>
      <HelpBubble helpBubbleId={helpBubbleId} controllerRef={wordRef} role="tooltip" showBubble={showTooltip || keepOpen}>
        {description}
      </HelpBubble>
    </>
  );
};

export type TooltipContext = {
  currentTooltip?: string;
  setCurrentTooltip?: (id?: string) => void;
};

const TooltipOpenContext = React.createContext<TooltipContext>({
  currentTooltip: undefined,
});

export const TooltipOpenProvider: React.FC = ({ children }) => {
  const [currentTooltip, setCurrentTooltip] = useState<string>();

  return <TooltipOpenContext.Provider value={{ currentTooltip, setCurrentTooltip }}>{children}</TooltipOpenContext.Provider>;
};

export default Tooltip;
