import React from 'react';

import classNames from 'classnames';

import { A, B, C, ContentProps, PanelProps, PreContainer } from './PanelBase';
import PanelBase from './PanelBase';

import styles from './styles.module.scss';

export interface ExpandablePanelProps extends PanelProps {
  /** Control the expanded state for an expandable panel */
  expanded?: boolean;
  /** Opt-out boolean for turning off the expander button when expandable content is used */
  showExpandButton?: boolean;
}

const ExpandablePanel: React.FC<ExpandablePanelProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
  ExpandedContent: React.FC<ContentProps>;
} = (props: PanelProps) => {
  const panelRef = React.useRef<HTMLDivElement>(null);

  const { content, preContainer, outerLayout, contentContainerLayout, todoRenameVariable } = PanelBase(props);

  return (
    <div className={todoRenameVariable}>
      <div className={outerLayout} data-testid={props.testId} ref={panelRef}>
        {preContainer}
        <div className={contentContainerLayout}>{content}</div>
      </div>
    </div>
  );
};

export const ExpandedContent: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__expander__content']);
  return <div className={styling}>{children}</div>;
};

ExpandablePanel.PreContainer = PreContainer;
ExpandablePanel.A = A;
ExpandablePanel.B = B;
ExpandablePanel.C = C;
ExpandablePanel.ExpandedContent = ExpandedContent;

export default ExpandablePanel;
