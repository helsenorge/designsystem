type GridLayout = 'helsenorge' | 'padding' | 'none';

interface GridExampleProps {
  gridLayout: GridLayout;
  children?: React.ReactNode;
}

export const GridExample: React.FC<GridExampleProps> = ({ gridLayout = 'helsenorge', children }) => {
  if (gridLayout === 'padding') {
    return <div style={{ padding: '0.5rem' }}>{children}</div>;
  }

  if (gridLayout === 'helsenorge') {
    return <div className="container py-5">{children}</div>;
  }

  return <>{children}</>;
};

export default GridExample;
