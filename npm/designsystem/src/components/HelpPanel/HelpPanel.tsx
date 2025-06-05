import React from 'react';

import classNames from 'classnames';

import HighlightPanel from '../HighlightPanel';
import HandWaving from '../Icons/HandWaving';

import styles from './styles.module.scss';

export interface HelpPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets title if needed */
  title?: string;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ className, testId, children, title }) => {
  return (
    <HighlightPanel className={classNames([styles['help-panel']], className)} testId={testId} svgIcon={HandWaving} title={title}>
      {children}
    </HighlightPanel>
  );
};

export default HelpPanel;
