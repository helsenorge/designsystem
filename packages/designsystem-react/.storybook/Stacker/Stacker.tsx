import React, {CSSProperties} from 'react';

import './Stacker.scss';

interface StackerProps {
  children: React.ReactNode;
  vertical?: boolean;
}

function Stacker(props: StackerProps) {
  const {children, vertical = false} = props;
  const style: CSSProperties = {
    gridTemplateColumns: vertical ? 'auto' : `repeat(${React.Children.count(children)}, 1fr)`,
  };
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">{children}</div>
    </div>
  );
}

export default Stacker;
