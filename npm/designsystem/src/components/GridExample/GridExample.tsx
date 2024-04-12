import React from 'react';

import { isSupernova } from '../../docs';

type GridLayout = 'helsenorge' | 'padding' | 'none';
interface GridExampleProps {
  gridLayout: GridLayout;
}

export const GridExample: React.FC<GridExampleProps> = ({ gridLayout, children }) => {
  const returnWithPadding = isSupernova() || gridLayout === 'padding';

  return (
    <>
      {returnWithPadding && <div style={{ padding: '0.5rem' }}>{children}</div>}
      {gridLayout === 'helsenorge' && (
        <div className="container py-5">
          <div className="row">
            <div className="col">{children}</div>
          </div>
        </div>
      )}
      {gridLayout === 'none' && children}
    </>
  );
};

export default GridExample;
