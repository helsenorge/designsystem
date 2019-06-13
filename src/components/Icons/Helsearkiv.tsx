import React from 'react';
import {IconProps} from './';
const Helsearkiv = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M14 21h36v-7H14v7zm3 29h30V25H17v25zm35-40H12a2 2 0 0 0-2 2v13h3v27c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V25h3V12a2 2 0 0 0-2-2zM27.5 32h9a1.5 1.5 0 1 0 0-3h-9a1.5 1.5 0 1 0 0 3z"
      />
    </svg>
  ),
);
export default Helsearkiv;
