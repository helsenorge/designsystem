import React from 'react';

export const GridExample: React.FC = ({ children }) => (
  <div className="container">
    <div className="row">
      <div className="col">{children}</div>
    </div>
  </div>
);

export default GridExample;
