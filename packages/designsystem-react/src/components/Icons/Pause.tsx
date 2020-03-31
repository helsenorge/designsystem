import React from 'react';
import {IconRawProps} from './Icon';
const Pause = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M21.23,25.1967 L24.395,25.1967 L24.395,12.5947 L21.23,12.5947 L21.23,25.1967 Z M13.397,25.1967 L16.562,25.1967 L16.562,12.5947 L13.397,12.5947 L13.397,25.1967 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M21.23,27.1977 L24.395,27.1977 L24.395,10.5947 L21.23,10.5947 L21.23,27.1977 Z M13.397,27.1977 L16.562,27.1977 L16.562,10.5947 L13.397,10.5947 L13.397,27.1977 Z"
      />
    </svg>
  );
});
export default Pause;
