import React from 'react';
import {IconProps} from './';
const Timeavtaler = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M34.088 41.245a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6zM11 50.448h42V25.123H11v25.325zM55 14h-6v3.5c0 2.481-2.019 4.5-4.5 4.5a4.505 4.505 0 0 1-4.5-4.5V14H24v3.5c0 2.481-2.019 4.5-4.5 4.5a4.505 4.505 0 0 1-4.5-4.5V14H9c-1.1 0-2 .9-2 2v36.448c0 1.1.9 2 2 2h46c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2zM40.538 35.131a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6zM44.5 19a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 1 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5zm-25 0a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 1 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5z"
      />
    </svg>
  ),
);
export default Timeavtaler;
