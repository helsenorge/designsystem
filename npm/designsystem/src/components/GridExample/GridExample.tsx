import classNames from 'classnames';
import React from 'react';

interface GridExampleProps {
  container?: boolean;
}

export const GridExample: React.FC<GridExampleProps> = ({ children, container = true }) => (
  <div
    className={classNames({
      ['container']: !!container,
    })}
  >
    <div className="row">
      <div className="col">{children}</div>
    </div>
  </div>
);

export default GridExample;
