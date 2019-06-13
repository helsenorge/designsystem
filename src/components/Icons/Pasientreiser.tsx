import React from 'react';
import {IconProps} from './';
const Pasientreiser = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M25.5 16.191h13a1.5 1.5 0 0 0 0-3h-13a1.5 1.5 0 0 0 0 3zm-10 21.059h33v-26h-33v26zm30.432 8.404a2.5 2.5 0 1 1 .002-5.002 2.5 2.5 0 0 1-.002 5.002zm-27.865 0a2.5 2.5 0 1 1 .002-5.002 2.5 2.5 0 0 1-.002 5.002zM50.5 7.25h-37c-1.1 0-2 .9-2 2v39.621c0 1.1.9 2 2 2h1.567v2.879a3 3 0 0 0 6 0v-2.879h21.865v2.879a3 3 0 0 0 6 0v-2.879H50.5c1.1 0 2-.9 2-2V9.25c0-1.1-.9-2-2-2z"
      />
    </svg>
  ),
);
export default Pasientreiser;
