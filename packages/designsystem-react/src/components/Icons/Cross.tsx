import React from 'react';
import {IconRawProps} from './Icon';
const Cross = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="20.404 19 28.663 10.741 27.26 9.338 19.001 17.597 10.741 9.337 9.338 10.74 17.598 19 9.338 27.26 10.741 28.663 19.001 20.403 27.26 28.662 28.663 27.259"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={hoverColor}
        fillRule="evenodd"
        points="19 17.596 9.327 7.923 7.924 9.326 17.597 18.999 7.923 28.673 9.326 30.076 19 20.402 28.674 30.076 30.077 28.673 20.403 18.999 30.076 9.326 28.673 7.923"
      />
    </svg>
  );
});
export default Cross;
