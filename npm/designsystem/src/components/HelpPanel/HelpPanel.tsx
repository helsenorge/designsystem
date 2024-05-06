import React from 'react';

import classNames from 'classnames';

import HighlightPanel, { HighlightPanelSize } from '../HighlightPanel';
import HandWaving from '../Icons/HandWaving';

import styles from './styles.module.scss';

export interface HelpPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Changes the size. Default: medium */
  size?: keyof typeof HighlightPanelSize;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets title if needed */
  title?: string;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ className, testId, size, children, title }) => {
  const helpPanelClassName = classNames(styles['help-panel'], className);

  return (
    <HighlightPanel
      className={helpPanelClassName}
      contentWrapperClassName={styles['help-panel']}
      testId={testId}
      size={size}
      svgIcon={HandWaving}
      title={title}
    >
      {children}
    </HighlightPanel>
  );
};

export default HelpPanel;
