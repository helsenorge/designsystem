import React from 'react';
import {IconRawProps} from './Icon';

const Minus = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="14.225 25 33.775 25 33.775 23 14.225 23"
        transform="matrix(1 0 0 -1 0 48)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon fill={color} fillRule="evenodd" points="12.225 23 35.775 23 35.775 25 12.225 25" />
    </svg>
  );
});

export default Minus;
