import React from 'react';
import {IconRawProps} from './Icon';

const ArrowLeft = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fill-rule="evenodd"
        points="27.075 5.929 25.933 7.306 38.977 23.027 5.929 23.027 5.929 24.975 38.977 24.975 25.933 40.692 27.075 42.071 42.071 24.001"
        transform="matrix(-1 0 0 1 48 0)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fill-rule="evenodd"
        points="27.075 5.929 25.933 7.306 38.977 23.027 2.929 23.027 2.929 24.975 38.977 24.975 25.933 40.692 27.075 42.071 42.071 24.001"
        transform="matrix(-1 0 0 1 45 0)"
      />
    </svg>
  );
});

export default ArrowLeft;
