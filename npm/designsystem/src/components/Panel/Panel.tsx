import React from 'react';

import PanelBase, { A, B, C, ContentProps, PanelProps, PreContainer } from './PanelBase';

const Panel: React.FC<PanelProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
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

Panel.PreContainer = PreContainer;
Panel.A = A;
Panel.B = B;
Panel.C = C;

export default Panel;
