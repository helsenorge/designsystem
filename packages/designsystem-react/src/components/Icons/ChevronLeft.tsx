import React from 'react';
import {IconRawProps} from './Icon';

const ChevronLeft = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="33.681 29.93 35.101 28.521 24.73 18.07 14.36 28.521 15.78 29.93 24.73 20.91"
        transform="matrix(0 1 1 0 .73 -.73)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <g fill="none" fillRule="evenodd">
        <polygon
          fill={color}
          points="28.951 30.93 30.37 29.521 17.999 17.07 5.63 29.521 7.049 30.93 18 19.91"
          transform="matrix(0 1 1 0 -6 6)"
        />
        <rect width="22" height="2" x="13" y="23" fill={color} />
      </g>
    </svg>
  );
});

export default ChevronLeft;
