import React from 'react';
import {IconRawProps} from './Icon';

// TODO: This should be removed. This will cause a breaking change if people use it.
// Want to wait with removing this untill we have more breaking changes in v1.1 for example
const Cross = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fillRule="evenodd"
      points="20.404 19 28.663 10.741 27.26 9.338 19.001 17.597 10.741 9.337 9.338 10.74 17.598 19 9.338 27.26 10.741 28.663 19.001 20.403 27.26 28.662 28.663 27.259"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="19 17.596 9.327 7.923 7.924 9.326 17.597 18.999 7.923 28.673 9.326 30.076 19 20.402 28.674 30.076 30.077 28.673 20.403 18.999 30.076 9.326 28.673 7.923"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 38 38"
      ref={ref}
      className={`hnds-style-icon ${className}`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default Cross;
