import React from 'react';
import {IconProps} from './Icon';
const ArrowLeft = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="21.434 4.694 20.292 6.07 30.212 18.027 4.694 18.027 4.694 19.975 30.212 19.975 20.292 31.928 21.434 33.306 33.306 19.001"
        transform="matrix(-1 0 0 1 38 0)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="17.434 4.694 16.292 6.07 26.212 18.027 .694 18.027 .694 19.975 26.212 19.975 16.292 31.928 17.434 33.306 29.306 19.001"
        transform="matrix(-1 0 0 1 30 0)"
      />
    </svg>
  );
});
export default ArrowLeft;
