import React from 'react';

import ExpandablePanel, { ExpandablePanelProps, ExpandedContent } from './ExpandablePanel';
import { A, B, C, ContentProps, PanelBaseProps, PreContainer } from './PanelBase';
import SimplePanel from './SimplePanel';

interface PanelProps extends PanelBaseProps, ExpandablePanelProps {}

const Panel: React.FC<PanelProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
  ExpandedContent: React.FC<ContentProps>;
} = (props: PanelProps) => {
  let isExpandable = false;

  React.Children.forEach(props.children, child => {
    if (React.isValidElement(child)) {
      if (child.type === ExpandedContent) {
        isExpandable = true;
      }
    }
  });
  return isExpandable ? <ExpandablePanel {...props} /> : <SimplePanel {...props} />;
};

Panel.PreContainer = PreContainer;
Panel.A = A;
Panel.B = B;
Panel.C = C;
Panel.ExpandedContent = ExpandedContent;

export default Panel;
