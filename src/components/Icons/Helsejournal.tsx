import React from 'react';
import {IconProps} from './';
const Helsejournal = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M48 11.849h-6v4h6v39H16v-39h6v-4h-6c-2.206 0-4 1.794-4 4v39c0 2.206 1.794 4 4 4h32c2.206 0 4-1.794 4-4v-39c0-2.206-1.794-4-4-4zm-7.067 33.446H23.067a1.5 1.5 0 1 0 0 3h17.866a1.5 1.5 0 1 0 0-3zm-17.866-2.388h17.866a1.5 1.5 0 1 0 0-3H23.067a1.5 1.5 0 1 0 0 3zm8.942-31.72a1.297 1.297 0 1 1 0-2.594 1.297 1.297 0 0 1 0 2.594zm7.763 1.269a2.703 2.703 0 0 0-2.708-2.695h-1.733v-.439A3.328 3.328 0 0 0 32 6a3.329 3.329 0 0 0-3.331 3.322v.439h-1.733a2.706 2.706 0 0 0-2.707 2.695v4.828h15.543v-4.828zM32 34.723a1.5 1.5 0 0 0 1.5-1.5v-3.299h3.299a1.5 1.5 0 0 0 0-3H33.5v-3.299a1.5 1.5 0 1 0-3 0v3.299h-3.299a1.5 1.5 0 0 0 0 3H30.5v3.299a1.5 1.5 0 0 0 1.5 1.5z"
      />
    </svg>
  ),
);
export default Helsejournal;
