import React from 'react';
import {IconRawProps} from './Icon';

const XmlFile = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M12,39.1 L35.999,39.1 L35.999,8.9 L12,8.9 L12,39.1 Z M10.699,40.4 L37.3,40.4 L37.3,7.6 L10.699,7.6 L10.699,40.4 Z M18.181,33.311 L19.218,31.515 L20.26,33.311 L21.215,33.311 L19.692,30.9 L21.159,28.53 L20.216,28.53 L19.205,30.296 L18.206,28.53 L17.272,28.53 L18.74,30.9 L17.239,33.311 L18.181,33.311 Z M22.264,22.835 L19.972,20.543 L22.264,18.251 L21.557,17.544 L18.558,20.543 L21.557,23.542 L22.264,22.835 Z M28.564,28.53 L27.767,28.53 L27.767,33.311 L30.761,33.311 L30.761,32.674 L28.564,32.674 L28.564,28.53 Z M26.444,23.542 L29.442,20.543 L26.444,17.544 L25.737,18.251 L28.028,20.543 L25.737,22.835 L26.444,23.542 Z M21.874,33.311 L22.672,33.311 L22.672,31.682 L22.59,29.59 L22.601,29.59 L24.026,33.311 L24.561,33.311 L25.992,29.581 L26.003,29.581 L25.92,31.682 L25.92,33.311 L26.718,33.311 L26.718,28.53 L25.684,28.53 L24.294,32.233 L22.909,28.53 L21.874,28.53 L21.874,33.311 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M12.001,39.1 L36,39.1 L36,8.9 L12.001,8.9 L12.001,39.1 Z M10.7,40.4 L37.301,40.4 L37.301,7.6 L10.7,7.6 L10.7,40.4 Z M18.18,33.311 L19.218,31.515 L20.26,33.311 L21.215,33.311 L19.692,30.9 L21.16,28.53 L20.216,28.53 L19.206,30.296 L18.207,28.53 L17.272,28.53 L18.74,30.9 L17.239,33.311 L18.18,33.311 Z M21.264,22.835 L18.972,20.543 L21.264,18.251 L20.557,17.544 L17.558,20.543 L20.557,23.542 L21.264,22.835 Z M28.564,28.53 L27.766,28.53 L27.766,33.311 L30.761,33.311 L30.761,32.674 L28.564,32.674 L28.564,28.53 Z M27.444,23.542 L30.442,20.543 L27.444,17.544 L26.737,18.251 L29.028,20.543 L26.737,22.835 L27.444,23.542 Z M21.875,33.311 L22.672,33.311 L22.672,31.682 L22.59,29.59 L22.601,29.59 L24.026,33.311 L24.561,33.311 L25.993,29.581 L26.002,29.581 L25.92,31.682 L25.92,33.311 L26.718,33.311 L26.718,28.53 L25.684,28.53 L24.294,32.233 L22.909,28.53 L21.875,28.53 L21.875,33.311 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default XmlFile;
