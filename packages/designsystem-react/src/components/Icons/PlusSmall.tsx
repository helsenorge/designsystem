import React from 'react';
import {IconRawProps} from './Icon';
const PlusSmall = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        d="M19,11.2251246 L18.9991246,17.9991246 L25.7748756,18 L25.7748756,20 L18.9991246,19.9991246 L19,26.7748754 L17,26.7748754 L16.9991246,19.9991246 L10.2251246,20 L10.2251246,18 L16.9991246,17.9991246 L17,11.2251246 L19,11.2251246 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={hoverColor}
        d="M19,9.22512463 L18.9991246,17.9991246 L27.7748756,18 L27.7748756,20 L18.9991246,19.9991246 L19,28.7748754 L17,28.7748754 L16.9991246,19.9991246 L8.22512463,20 L8.22512463,18 L16.9991246,17.9991246 L17,9.22512463 L19,9.22512463 Z"
      />
    </svg>
  );
});
export default PlusSmall;
