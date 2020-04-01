import React from 'react';
import {IconRawProps} from './Icon';

const X = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="25.403 24 35.662 13.741 34.259 12.338 24 22.597 13.741 12.337 12.338 13.74 22.597 24 12.338 34.26 13.741 35.663 24 25.403 34.259 35.662 35.662 34.259"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="24 22.597 12.327 10.924 10.924 12.326 22.597 24 10.923 35.674 12.326 37.076 24 25.403 35.674 37.076 37.077 35.674 25.403 24 37.076 12.326 35.673 10.924"
      />
    </svg>
  );
});

export default X;
