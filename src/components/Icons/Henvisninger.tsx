import React from 'react';
import {IconProps} from './';
const Henvisninger = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M38.636 41.484H22.605a1.5 1.5 0 1 0 0 3h16.031a1.5 1.5 0 1 0 0-3zM45 50H15V14h30v6.734h4V12c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v40c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V37.234h-4V50zm-6.364-15.516H22.605a1.5 1.5 0 1 0 0 3h16.031a1.5 1.5 0 1 0 0-3zm10.062-.25l3.828-5.281-3.867-5.219h-3.733l2.778 3.75H30a1.5 1.5 0 1 0 0 3h17.711l-2.717 3.75h3.704z"
      />
    </svg>
  ),
);
export default Henvisninger;
