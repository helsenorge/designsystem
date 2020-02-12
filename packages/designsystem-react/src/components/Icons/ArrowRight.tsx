import React from 'react';
import {IconRawProps} from './Icon';
const ArrowRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="21.434 4.694 20.292 6.07 30.212 18.027 4.694 18.027 4.694 19.975 30.212 19.975 20.292 31.928 21.434 33.306 33.306 19.001"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={hoverColor}
        fillRule="evenodd"
        points="25.434 4.694 24.292 6.07 34.212 18.027 8.694 18.027 8.694 19.975 34.212 19.975 24.292 31.928 25.434 33.306 37.306 19.001"
      />
    </svg>
  );
});
export default ArrowRight;
