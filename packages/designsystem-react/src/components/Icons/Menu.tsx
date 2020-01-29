import React from 'react';
import {IconProps} from './Icon';
const Menu = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        d="M29.9882812,24.7089844 L29.9882812,26.5089844 L8,26.5089844 L8,24.7089844 L29.9882812,24.7089844 Z M29.9882812,17.7089844 L29.9882812,19.5089844 L8,19.5089844 L8,17.7089844 L29.9882812,17.7089844 Z M29.9882812,11 L29.9882812,12.8 L8,12.8 L8,11 L29.9882812,11 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        d="M29.9882812,25.7089844 L29.9882812,27.5089844 L8,27.5089844 L8,25.7089844 L29.9882812,25.7089844 Z M29.9882812,17.7089844 L29.9882812,19.5089844 L8,19.5089844 L8,17.7089844 L29.9882812,17.7089844 Z M29.9882812,10 L29.9882812,11.8 L8,11.8 L8,10 L29.9882812,10 Z"
      />
    </svg>
  );
});
export default Menu;
