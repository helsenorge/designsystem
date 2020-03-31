import React from 'react';
import {IconRawProps} from './Icon';

const Female = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M23.668,29.0366 C17.676,29.0366 12.801,24.1616 12.801,18.1686 C12.801,12.1756 17.676,7.2996 23.668,7.2996 C29.661,7.2996 34.536,12.1756 34.536,18.1686 C34.536,24.1616 29.661,29.0366 23.668,29.0366 M35.837,18.1686 C35.837,11.4586 30.378,5.9996 23.668,5.9996 C16.959,5.9996 11.5,11.4586 11.5,18.1686 C11.5,24.6586 16.611,29.9626 23.018,30.3036 L23.018,35.0626 L18.51,35.0626 L18.51,36.3626 L23.018,36.3626 L23.018,41.7386 L24.318,41.7386 L24.318,36.3626 L28.826,36.3626 L28.826,35.0626 L24.318,35.0626 L24.318,30.3036 C30.726,29.9626 35.837,24.6586 35.837,18.1686"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}></svg>
  );
});

export default Female;
