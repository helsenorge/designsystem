import React from 'react';
import {IconRawProps} from './Icon';
const ChevronRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={color}
        points="26.515 24.263 27.935 22.854 19.725 14.58 11.515 22.854 12.935 24.263 19.725 17.42"
        transform="rotate(90 19.725 19.422)"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <polygon
        fill={hoverColor}
        points="17.884 26.212 19.293 27.631 27.566 19.421 19.293 11.212 17.884 12.631 24.727 19.421"
      />
    </svg>
  );
});
export default ChevronRight;
