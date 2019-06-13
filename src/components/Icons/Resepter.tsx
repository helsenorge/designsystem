import React from 'react';
import {IconProps} from './';
const Resepter = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 52.014v-27.56c0-.992.077-1.807.18-2.454h19.632c.104.648.18 1.463.18 2.455L28 52.015H8zM30.713 18H5.279S4 19.976 4 24.454v29.56c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2l-.008-29.56c0-4.478-1.279-6.454-1.279-6.454zM51.99 46H41.852l-.796-24h11.73l-.796 24zm5.149-28.046H36.702a2 2 0 1 0 0 4h.35l.864 26.047a2.088 2.088 0 0 0 2.066 2h13.877c1.1 0 2.03-.9 2.067-2l.864-26.047h.349a2 2 0 0 0 0-4zM23.821 35.507H19.5v-4.32a1.5 1.5 0 1 0-3 0v4.32h-4.321a1.5 1.5 0 1 0 0 3H16.5v4.321a1.5 1.5 0 1 0 3 0v-4.32h4.321a1.5 1.5 0 1 0 0-3zm6.903-25.41A3.096 3.096 0 0 0 27.628 7H8.442a3.097 3.097 0 0 0-3.097 3.096V15h25.379v-4.904zm10.197 42.806A3.097 3.097 0 0 0 44.017 56h5.808a3.097 3.097 0 0 0 3.096-3.097V52h-12v.903z"
      />
    </svg>
  ),
);
export default Resepter;
