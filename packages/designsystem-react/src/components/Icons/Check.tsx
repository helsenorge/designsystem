import React from 'react';
import {IconRawProps} from './Icon';
const Check = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props} viewBox="0 0 48 48">
      <polygon
        fill={color}
        fill-rule="evenodd"
        points="36.863 15 22.198 30.236 13.839 21.549 12.818 22.532 22.198 32.279 37.884 15.982"
      />
    </svg>
    // TODO: Missing hover icon
  );
});
export default Check;
