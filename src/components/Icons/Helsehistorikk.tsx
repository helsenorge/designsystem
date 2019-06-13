import React from 'react';
import {IconProps} from './';
const Helsehistorikk = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M30.344 33.566a1.5 1.5 0 0 0-1.979-.266l-7.25 4.91a1.5 1.5 0 1 0 1.681 2.484l6.143-4.159 3.356 3.911a1.497 1.497 0 0 0 2 .251l6.317-4.435.002 4.723 2.999-2.175-.003-6.561-6.255-1.974-3.022 2.192 4.459 1.407-5.107 3.586-3.341-3.894zM48 11.848h-6v4h6v39H16v-39h6v-4h-6c-2.205 0-4 1.794-4 4v39c0 2.206 1.795 4 4 4h32c2.206 0 4-1.794 4-4v-39c0-2.206-1.794-4-4-4zm-15.991-.661a1.297 1.297 0 1 1 0-2.595 1.297 1.297 0 0 1 0 2.595zm7.763 1.269a2.703 2.703 0 0 0-2.707-2.695h-1.734v-.439A3.328 3.328 0 0 0 32 6a3.328 3.328 0 0 0-3.33 3.322v.439h-1.734a2.706 2.706 0 0 0-2.707 2.695v4.828h15.543v-4.828z"
      />
    </svg>
  ),
);
export default Helsehistorikk;
