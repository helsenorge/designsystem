import React from 'react';

import { isSupernova } from '../../docs';

export const GridExample: React.FC = ({ children }) => {
  if (isSupernova()) {
    return <>{children}</>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </div>
  );
};

export default GridExample;
