import React from 'react';
import {IconProps} from './Icon';
const ChevronDown = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        points="26.515 24.263 27.935 22.854 19.725 14.58 11.515 22.854 12.935 24.263 19.725 17.42"
        transform="matrix(1 0 0 -1 0 38.843)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        points="26.515 17.58 27.935 18.989 19.725 27.263 11.515 18.989 12.935 17.58 19.725 24.423"
      />
    </svg>
  );
});
export default ChevronDown;
