import React from 'react';
import {IconProps} from './Icon';
const ChevronUp = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <polygon
        fill="{color}"
        points="26.515 24.263 27.935 22.854 19.725 14.58 11.515 22.854 12.935 24.263 19.725 17.42"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <polygon
        fill="{color}"
        points="26.515 21.263 27.935 19.854 19.725 11.58 11.515 19.854 12.935 21.263 19.725 14.42"
      />
    </svg>
  );
});
export default ChevronUp;
