import React from 'react';
import {IconRawProps} from './Icon';

const ChevronUp = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="32.951 30.277 34.37 28.868 23.999 18.417 13.63 28.868 15.049 30.277 24 21.257"
        transform="matrix(-1 0 0 1 48 0)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <g fill="none" fillRule="evenodd">
        <polygon
          fill={color}
          points="34.951 24 36.37 22.591 23.999 10.14 11.63 22.591 13.049 24 24 12.979"
          transform="matrix(-1 0 0 1 48 0)"
        />
        <rect width="2" height="22" x="23" y="13" fill={color} />
      </g>
    </svg>
  );
});

export default ChevronUp;
