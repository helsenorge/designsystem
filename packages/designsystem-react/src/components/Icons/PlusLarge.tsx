import React from 'react';
import {IconProps} from './Icon';
const PlusLarge = React.forwardRef((svgProps: IconProps, ref: any) => {
  const {size = 38, color = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <polygon
        fill="{color}"
        fillRule="evenodd"
        points="19.992 18.008 19.992 6.327 18.009 6.327 18.009 18.008 6.327 18.008 6.327 19.991 18.009 19.991 18.009 31.672 19.992 31.672 19.992 19.991 31.672 19.991 31.672 18.008"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} {...props}>
      <polygon
        fill="{color}"
        fillRule="evenodd"
        points="19.657 17.672 19.657 3.992 17.673 3.992 17.673 17.672 3.992 17.672 3.992 19.656 17.673 19.656 17.673 33.337 19.657 33.337 19.657 19.656 33.337 19.656 33.337 17.672"
      />
    </svg>
  );
});
export default PlusLarge;
