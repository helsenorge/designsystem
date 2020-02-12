import React from 'react';

interface PrinciplesProps {
  size?: number;
  color?: string;
}

function Principles(props: PrinciplesProps) {
  const {size = 32, color = 'black'} = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 56 56">
      <g id="Layer_3" data-name="Layer 3">
        <path
          fill={color}
          className="cls-1"
          d="M23 12.2h4.68a.75.75 0 000-1.5H23a.75.75 0 000 1.5zM31.55 12.2H35a.75.75 0 000-1.5h-3.45a.75.75 0 000 1.5zM46.2 10.7h-6.9a.75.75 0 000 1.5h6.9a.75.75 0 000-1.5zM23 16.34h7.56a.75.75 0 000-1.5H23a.75.75 0 000 1.5zM41.08 15.59a.74.74 0 00-.75-.75h-6.39a.75.75 0 000 1.5h6.39a.75.75 0 00.75-.75zM31.45 26.35a.75.75 0 00-.75-.75H23a.75.75 0 000 1.5h7.7a.76.76 0 00.75-.75zM38.45 26.35a.75.75 0 00-.75-.75h-3.44a.75.75 0 000 1.5h3.44a.76.76 0 00.75-.75zM45.82 25.6h-4.67a.75.75 0 000 1.5h4.67a.75.75 0 000-1.5zM27.72 29.53H23A.75.75 0 0023 31h4.69a.75.75 0 000-1.5zM31.31 31h4.38a.75.75 0 000-1.5h-4.38a.75.75 0 000 1.5zM39.19 31h3a.75.75 0 100-1.5h-3a.75.75 0 000 1.5zM23 41.43h2.82a.75.75 0 000-1.5H23a.75.75 0 000 1.5zM36.92 41.43a.75.75 0 000-1.5h-7.68a.75.75 0 000 1.5zM26.83 43.63H23a.75.75 0 100 1.5h3.83a.75.75 0 100-1.5zM33.58 43.63H30a.75.75 0 000 1.5h3.59a.75.75 0 000-1.5zM42.49 43.6h-5.63a.75.75 0 000 1.5h5.63a.75.75 0 000-1.5zM13.25 8.63a5 5 0 105 5 5 5 0 00-5-5zm0 8.51a3.51 3.51 0 113.51-3.51 3.51 3.51 0 01-3.51 3.51zM13.25 23.25a5 5 0 105 5 5 5 0 00-5-5zm0 8.52a3.51 3.51 0 113.51-3.51 3.51 3.51 0 01-3.51 3.51zM13.25 37.36a5 5 0 105 5 5 5 0 00-5-5zm0 8.52a3.51 3.51 0 113.51-3.51 3.52 3.52 0 01-3.51 3.51z"
        />
      </g>
    </svg>
  );
}

export default Principles;
