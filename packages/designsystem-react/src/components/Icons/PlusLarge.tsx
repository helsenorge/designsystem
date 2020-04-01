import React from 'react';
import {IconRawProps} from './Icon';

const PlusLarge = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="24.992 23.008 24.992 9.328 23.009 9.328 23.009 23.008 9.328 23.008 9.328 24.991 23.009 24.991 23.009 38.672 24.992 38.672 24.992 24.991 38.672 24.991 38.672 23.008"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="24.992 23.008 24.992 7.327 23.009 7.327 23.009 23.008 7.327 23.008 7.327 24.991 23.009 24.991 23.009 40.672 24.992 40.672 24.992 24.991 40.672 24.991 40.672 23.008"
      />
    </svg>
  );
});

export default PlusLarge;
