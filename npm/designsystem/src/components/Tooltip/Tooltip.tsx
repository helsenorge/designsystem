import React, { useContext, useState, useEffect, useRef, ReactChild, ReactChildren, ReactNode } from 'react';
import { AnalyticsId } from '../../constants';
import { useUuid } from '../../hooks/useUuid';

import HelpBubble from '../HelpBubble';

import tooltipstyles from './styles.module.scss';

export interface TooltipProps {
  /**Ordet som skal ha en tilhørende hjelpeblubb */
  children: ReactNode;
  /**Teksten som skal vises i hjelpeblubben */
  description: ReactNode;
  /**Valgfri test-id */
  testId?: string;
}

export const Tooltip: React.FC<TooltipProps> = (props: TooltipProps): JSX.Element => {
  const { children, description, testId } = props;

  const HOVER_DELAY = 200;

  const ariaDescribedBy = `help-bubble-${useUuid()}`;
  const node = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const anyTooltipIsOpen = useTooltipOpen();
  const toggleTooltipIsOpen = useTooltipOpenToggle();
  const [visTooltip, setVisTooltip] = useState(false);
  const [hoverVisTooltip, setHoverVisTooltip] = useState(false);
  const [delayHandler, setDelayHandler] = useState<number | null>(null);

  useEffect(() => {
    if (!firstRender.current) toggleTooltipIsOpen();
    if (firstRender.current) firstRender.current = false;
  }, [visTooltip]);

  const handleClick = (): void => {
    if (!hoverVisTooltip) {
      setVisTooltip(false);
    }
  };

  const handleMouseEnter = (): void => {
    if (!anyTooltipIsOpen) {
      setDelayHandler(
        window.setTimeout(() => {
          setHoverVisTooltip(true);
        }, HOVER_DELAY)
      );
    }
  };

  const handleMouseLeave = (): void => {
    setHoverVisTooltip(false);
    delayHandler && clearTimeout(delayHandler);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleClick);
    return (): void => {
      document.removeEventListener('mouseup', handleClick);
      delayHandler && clearTimeout(delayHandler);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      hoverVisTooltip ? setVisTooltip(false) : setVisTooltip(!visTooltip);
      setHoverVisTooltip(false);
    }
    if (e.key === 'Escape') {
      setVisTooltip(false);
      setHoverVisTooltip(false);
    }
  };

  const handleTooltipClick = () => {
    setVisTooltip(!visTooltip);
    setHoverVisTooltip(false);
  };

  return (
    <>
      <span
        className={tooltipstyles.word}
        ref={node}
        tabIndex={0}
        onClick={(): void => handleTooltipClick()}
        onMouseEnter={(): void => handleMouseEnter()}
        onMouseLeave={(): void => handleMouseLeave()}
        onFocus={(): void => handleMouseEnter()}
        onBlur={(): void => handleMouseLeave()}
        onKeyDown={handleKeyDown}
        aria-describedby={ariaDescribedBy}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Tooltip}
      >
        {children}
      </span>
      <HelpBubble helpBubbleId={ariaDescribedBy} controllerRef={node} showBubble={visTooltip || hoverVisTooltip} noCloseButton>
        {description}
      </HelpBubble>
    </>
  );
};

const TooltipOpenContext = React.createContext(false);
const TooltipOpenToggleContext = React.createContext(() => {});

interface ContextProps {
  children: ReactChild | ReactChildren;
}
export const useTooltipOpen = () => {
  return useContext(TooltipOpenContext);
};
export const useTooltipOpenToggle = () => {
  return useContext(TooltipOpenToggleContext);
};

export const TooltipOpenProvider = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const tooltipIsOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <TooltipOpenContext.Provider value={isOpen}>
      <TooltipOpenToggleContext.Provider value={tooltipIsOpen}>{children}</TooltipOpenToggleContext.Provider>
    </TooltipOpenContext.Provider>
  );
};

export default Tooltip;
