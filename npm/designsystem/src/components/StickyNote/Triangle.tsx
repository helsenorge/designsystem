interface TriangleProps {
  type: 'default' | 'active' | 'error';
}

export interface Palette {
  border: string;
  background: string;
}

const Triangle: React.FC<TriangleProps> = ({ type }) => {
  const palette = ((): Palette => {
    switch (type) {
      case 'active':
        return {
          border: '#C59302',
          background: '#F5E080',
        };
      case 'error':
        return {
          border: '#C83521',
          background: '#EEC0A5',
        };
      default:
        return {
          border: '#F5E080',
          background: '#F5E080',
        };
    }
  })();
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_1_44" fill="white">
        <path d="M22 0L1.80043e-06 22L2.83099e-06 -8.97354e-07L22 0Z" />
      </mask>
      <path d="M22 0L1.80043e-06 22L2.83099e-06 -8.97354e-07L22 0Z" fill={palette.background} />
      <path
        d="M22 0L22.7071 0.707107L24.4142 -1L22 -1L22 0ZM1.80043e-06 22L-0.999998 22L-0.999998 24.4142L0.707109 22.7071L1.80043e-06 22ZM2.83099e-06 -8.97354e-07L2.87783e-06 -1L-0.999997 -1L-0.999997 -9.38143e-07L2.83099e-06 -8.97354e-07ZM21.2929 -0.707107L-0.707105 21.2929L0.707109 22.7071L22.7071 0.707107L21.2929 -0.707107ZM1 22L1 -8.56565e-07L-0.999997 -9.38143e-07L-0.999998 22L1 22ZM2.78414e-06 0.999999L22 1L22 -1L2.87783e-06 -1L2.78414e-06 0.999999Z"
        fill={palette.border}
        mask="url(#path-1-inside-1_1_44)"
      />
    </svg>
  );
};

export default Triangle;
