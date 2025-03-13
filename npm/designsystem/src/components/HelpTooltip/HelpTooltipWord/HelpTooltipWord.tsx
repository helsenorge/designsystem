import React from 'react';

import { AnalyticsId } from '../../../constants';

import styles from './styles.module.scss';

export interface HelpTooltipWordProps {
  /** Ordet som skal ha en tilhørende tooltip */
  children: string;
  /** Callback når ordet klikkes på */
  onClick: () => void;
  /** Callback når ordet får fokus eller hovres over */
  onFocus: () => void;
  /** Callback når ordet mister fokus eller hover forsvinner */
  onBlur: () => void;
  /** Callback når det skrives på tastaturet */
  onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  /** ID til element som beskriver ordet */
  ariaDescribedById: string;
  /** Valgfri test-id */
  testId?: string;
}

const HelpTooltipWord = React.forwardRef<HTMLButtonElement, HelpTooltipWordProps>(
  ({ children, onClick, onFocus, onBlur, onKeyDown, testId, ariaDescribedById }, ref) => (
    <button
      className={styles.word}
      ref={ref}
      onClick={onClick}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      aria-describedby={ariaDescribedById}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Tooltip}
    >
      {children}
    </button>
  )
);

HelpTooltipWord.displayName = 'TooltipWord';

export default HelpTooltipWord;
