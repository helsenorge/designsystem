import type React from 'react';

import classNames from 'classnames';

import HighlightPanel from '../HighlightPanel';
import HandWaving from '../Icons/HandWaving';

import styles from './styles.module.scss';

export type HelpPanelVariants = 'normal' | 'compact';

export interface HelpPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** If set the compact styling will be used */
  variant?: HelpPanelVariants;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets title if needed */
  title?: string;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ className, variant = 'normal', testId, children, title }) => {
  return (
    <HighlightPanel
      className={classNames([styles['help-panel']], className)}
      testId={testId}
      svgIcon={HandWaving}
      title={title}
      variant={variant}
    >
      {children}
    </HighlightPanel>
  );
};

export default HelpPanel;
