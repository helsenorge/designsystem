import React from 'react';

interface RoadmapProps {
  size?: number;
  color?: string;
}

function Roadmap(props: RoadmapProps) {
  const {size = 32, color = 'black'} = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 56 56">
      <defs />
      <g id="Layer_3" data-name="Layer 3">
        <path
          fill={color}
          className="cls-1"
          d="M39.41 32.79v-.28a3.05 3.05 0 00-6-.75h-6A3 3 0 0022 30.7a5.23 5.23 0 010-8.38 3 3 0 005.4-1.06h6a3.06 3.06 0 100-1.5h-6a3 3 0 00-2.95-2.31 3.07 3.07 0 00-3.06 3.06v.38a6.79 6.79 0 00-3 5.62 6.71 6.71 0 003 5.63v.37a3.07 3.07 0 003.06 3.06 3 3 0 002.95-2.31h6a3 3 0 005.47 1 5.23 5.23 0 010 8.55 3 3 0 00-2.51-1.33 3.06 3.06 0 00-3 2.3h-6a3 3 0 00-5.9 0h-6a3.06 3.06 0 100 1.5h6a3 3 0 005.9 0h6a3.05 3.05 0 006-.75v-.27a6.73 6.73 0 000-11.46zM36.38 19a1.56 1.56 0 11-1.56 1.56A1.56 1.56 0 0136.38 19zm-11.92 0a1.56 1.56 0 11-1.56 1.56A1.56 1.56 0 0124.46 19zm0 15.12A1.56 1.56 0 1126 32.51a1.56 1.56 0 01-1.54 1.56zm11.92 0a1.56 1.56 0 111.55-1.56 1.56 1.56 0 01-1.55 1.51zm-23.83 12a1.56 1.56 0 111.55-1.56 1.56 1.56 0 01-1.55 1.52zm11.91 0a1.56 1.56 0 111.54-1.6 1.56 1.56 0 01-1.54 1.56zm11.92 0a1.56 1.56 0 111.55-1.56 1.56 1.56 0 01-1.55 1.52z"
        />
        <path
          fill={color}
          className="cls-1"
          d="M12.55 41a.75.75 0 00.63-.35c.52-.82 3.1-5 3.1-6.79a3.74 3.74 0 10-7.47 0c0 1.77 2.58 6 3.1 6.79a.75.75 0 00.64.35zm0-9.38a2.23 2.23 0 012.23 2.24c0 .82-1.16 3.11-2.23 5-1.08-1.84-2.24-4.13-2.24-5a2.24 2.24 0 012.24-2.23zM43.38 7.38h-6.9a.76.76 0 00-.75.75v7.38a.75.75 0 001.5 0V13h6.15a.75.75 0 00.75-.75V8.13a.75.75 0 00-.75-.75zm-.75 4.07h-5.4V8.88h5.4zM34.87 26.28a.75.75 0 000 1.5h3.81a.75.75 0 100-1.5zM22.55 15.76h3.82a.75.75 0 000-1.5h-3.82a.75.75 0 000 1.5zM26.64 39.84a.75.75 0 000-1.5h-3.81a.75.75 0 000 1.5z"
        />
      </g>
    </svg>
  );
}

export default Roadmap;
