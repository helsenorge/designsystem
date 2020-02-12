import React from 'react';
import {IconRawProps} from './Icon';
const Minus = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon fill={color} points="11.225 20 26.775 20 26.775 18 11.225 18" transform="matrix(1 0 0 -1 0 38)" />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon fill={hoverColor} points="9.225 18 28.775 18 28.775 20 9.225 20" />
    </svg>
  );
});
export default Minus;
