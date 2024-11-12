import React from 'react';

import { isSupernova } from 'frankenstein-build-tools';

type GridLayout = 'helsenorge' | 'padding' | 'none';

interface GridExampleProps {
  gridLayout: GridLayout;
  children?: React.ReactNode;
}

export const GridExample: React.FC<GridExampleProps> = ({ gridLayout = isSupernova(), children }) => {
  if (isSupernova() || gridLayout === 'padding') {
    return <div style={{ padding: '0.5rem' }}>{children}</div>;
  }

  if (gridLayout === 'helsenorge') {
    return <div className="container py-5">{children}</div>;
  }

  return <>{children}</>;
};

export default GridExample;
