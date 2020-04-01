import React from 'react';
import {IconRawProps} from './Icon';

const ChevronRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="34.052 29.93 35.472 28.521 25.101 18.07 14.731 28.521 16.151 29.93 25.101 20.91"
        transform="rotate(90 25.101 24)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <g fill="none" fillRule="evenodd">
        <polygon
          fill={color}
          points="40.951 30.93 42.37 29.521 29.999 17.07 17.63 29.521 19.049 30.93 30 19.91"
          transform="rotate(90 30 24)"
        />
        <rect width="22" height="2" x="13" y="23" fill={color} />
      </g>
    </svg>
  );
});

export default ChevronRight;
