import React from 'react';

import PanelBase, { PanelBaseProps } from './PanelBase';

const SimplePanel: React.FC<PanelBaseProps> & {} = (props: PanelBaseProps) => {
  const panelRef = React.useRef<HTMLDivElement>(null);

  const { content, preContainer, panelLayout, contentContainerLayout, wrapperLayout } = PanelBase(props);

  return (
    <div className={wrapperLayout}>
      <div className={panelLayout} data-testid={props.testId} ref={panelRef}>
        {preContainer}
        <div className={contentContainerLayout}>{content}</div>
      </div>
    </div>
  );
};

export default SimplePanel;
