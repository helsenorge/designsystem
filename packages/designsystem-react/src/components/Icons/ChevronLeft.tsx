import React from 'react';
import {IconRawProps} from './Icon';
const ChevronLeft = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        points="26.515 24.263 27.935 22.854 19.725 14.58 11.515 22.854 12.935 24.263 19.725 17.42"
        transform="matrix(0 1 1 0 .304 -.304)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={hoverColor}
        points="23.515 24.263 24.935 22.854 16.725 14.58 8.515 22.854 9.935 24.263 16.725 17.42"
        transform="matrix(0 1 1 0 -2.696 2.696)"
      />
    </svg>
  );
});
export default ChevronLeft;
