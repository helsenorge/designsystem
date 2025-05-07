import React, { useContext, useState, useEffect, useRef } from 'react';

import HelpTooltipWord from './HelpTooltipWord';
import { useDelayedState } from '../../hooks/useDelayedState';
import { useUuid } from '../../hooks/useUuid';
import PopOver from '../PopOver';

const HOVER_DELAY_MS = 200;

export interface HelpTooltipProps {
  /** Ordet som skal ha en tilhørende tooltip */
  children: string;
  /** Teksten som skal vises i boblen som åpnes */
  description: React.ReactNode;
  /** Valgfri test-id */
  testId?: string;
}

export const HelpTooltip: React.FC<HelpTooltipProps> = ({ children, description, testId }) => {
  const helpBubbleId = useUuid();
  const wordRef = useRef<HTMLButtonElement>(null);
  const { currentHelpTooltip, setCurrentHelpTooltip } = useContext(HelpTooltipOpenContext);
  const [{ showTooltip, keepOpen }, setShowTooltipDelayed, setShowTooltip] = useDelayedState(
    { showTooltip: false, keepOpen: false },
    HOVER_DELAY_MS
  );

  useEffect(() => {
    if (!setCurrentHelpTooltip) {
      return;
    }
    if (showTooltip) {
      setCurrentHelpTooltip(helpBubbleId);
    } else {
      setCurrentHelpTooltip(undefined);
    }
  }, [showTooltip]);

  useEffect(() => {
    if (currentHelpTooltip !== helpBubbleId && typeof currentHelpTooltip !== 'undefined') {
      setShowTooltip(prevState => ({ showTooltip: false, keepOpen: prevState.keepOpen }));
    }
  }, [currentHelpTooltip]);

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
    if (!currentHelpTooltip) {
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
      <HelpTooltipWord
        ref={wordRef}
        onClick={handleTooltipClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        ariaDescribedById={helpBubbleId}
        testId={testId}
      >
        {children}
      </HelpTooltipWord>
      <PopOver id={helpBubbleId} controllerRef={wordRef} role="tooltip" show={showTooltip || keepOpen}>
        {description}
      </PopOver>
    </>
  );
};

export type HelpTooltipContext = {
  currentHelpTooltip?: string;
  setCurrentHelpTooltip?: (id?: string) => void;
};

const HelpTooltipOpenContext = React.createContext<HelpTooltipContext>({
  currentHelpTooltip: undefined,
});

interface HelpTooltipOpenProviderProps {
  children?: React.ReactNode;
}

export const HelpTooltipOpenProvider: React.FC<HelpTooltipOpenProviderProps> = ({ children }) => {
  const [currentHelpTooltip, setCurrentHelpTooltip] = useState<string>();

  return (
    <HelpTooltipOpenContext.Provider value={{ currentHelpTooltip, setCurrentHelpTooltip }}>{children}</HelpTooltipOpenContext.Provider>
  );
};

export default HelpTooltip;
