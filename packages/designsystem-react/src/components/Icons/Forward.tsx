import React from 'react';
import {IconRawProps} from './Icon';
const Forward = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <polygon
        fill={color}
        fillRule="evenodd"
        points="24.83 8.994 23.809 9.952 31.501 18.149 4.607 18.149 4.607 19.549 31.612 19.549 23.655 27.834 24.665 28.804 34.15 18.927"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <polygon
        fill={hoverColor}
        fillRule="evenodd"
        points="27.831 8.994 26.81 9.952 34.501 18.149 7.607 18.149 7.607 19.549 34.612 19.549 26.655 27.834 27.665 28.804 37.15 18.927"
      />
    </svg>
  );
});
export default Forward;
