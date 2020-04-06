import React from 'react';
import {IconRawProps} from './Icon';

const ArrowRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="27.075 5.929 25.933 7.306 38.977 23.027 5.929 23.027 5.929 24.975 38.977 24.975 25.933 40.692 27.075 42.071 42.071 24.001"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="30.075 5.929 28.933 7.306 41.977 23.027 5.929 23.027 5.929 24.975 41.977 24.975 28.933 40.692 30.075 42.071 45.071 24.001"
      />
    </svg>
  );
});

export default ArrowRight;
