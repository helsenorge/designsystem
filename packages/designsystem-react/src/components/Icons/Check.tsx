import React from 'react';
import {IconRawProps} from './Icon';

const Check = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fill-rule="evenodd"
        points="36.863 15 22.198 30.236 13.839 21.549 12.818 22.532 22.198 32.279 37.884 15.982"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}></svg>
  );
});

export default Check;
