import React from 'react';
import {IconRawProps} from './Icon';

const EnterFullScreen = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fill-rule="evenodd" transform="translate(11 11)">
      <polygon points="1.546 25.373 .627 24.454 7.845 17.236 8.764 18.155" />
      <polygon points="9.18 25.563 .436 25.563 .436 16.861 1.736 16.861 1.736 24.263 9.18 24.263" />
      <polygon points="18.155 8.764 17.236 7.845 24.454 .627 25.373 1.546" />
      <polygon points="25.564 9.139 24.264 9.139 24.264 1.737 16.82 1.737 16.82 .437 25.564 .437" />
    </g>
  );

  const normalHover = (
    <g fill-rule="evenodd" transform="translate(10 10)">
      <polygon points="1.283 27.636 .364 26.717 7.582 19.499 8.501 20.418" />
      <polygon points="8.917 27.827 .173 27.827 .173 19.125 1.473 19.125 1.473 26.527 8.917 26.527" />
      <polygon points="20.418 8.501 19.499 7.582 26.717 .364 27.636 1.283" />
      <polygon points="27.826 8.876 26.526 8.876 26.526 1.474 19.082 1.474 19.082 .174 27.826 .174" />
      <polygon points="2.546 26.373 1.627 25.454 8.845 18.236 9.764 19.155" />
      <polygon points="19.155 9.764 18.236 8.845 25.454 1.627 26.373 2.546" />
    </g>
  );

  const simplified = (
    <path
      fill-rule="evenodd"
      d="M27.6879158,11.0705684 L27.6879158,12.8389895 L33.6462316,12.8389895 L27.9380211,18.5472 L29.1885474,19.7989895 L34.8967579,14.0907789 L34.8967579,20.0074105 L36.6651789,20.0074105 L36.6651789,11.0705684 L27.6879158,11.0705684 Z M19.7982316,29.1893053 L18.5477053,27.9387789 L12.8394947,33.6457263 L12.8394947,27.7290947 L11.0710737,27.7290947 L11.0710737,36.6659368 L20.0483368,36.6659368 L20.0483368,34.8975158 L14.0900211,34.8975158 L19.7982316,29.1893053 Z"
    />
  );

  const simplifiedHover = (
    <path
      fill-rule="evenodd"
      d="M28.9514526,9.80741053 L28.9514526,11.5758316 L34.9097684,11.5758316 L27.9384,18.5472 L29.1889263,19.7989895 L30.4520842,18.5358316 L36.1602947,12.8276211 L36.1602947,18.7442526 L37.9287158,18.7442526 L37.9287158,9.80741053 L28.9514526,9.80741053 Z M18.5480842,27.9387789 L11.5754526,34.9101474 L11.5754526,28.9922526 L9.80703158,28.9922526 L9.80703158,37.9303579 L18.7855579,37.9303579 L18.7855579,36.1606737 L12.8272421,36.1606737 L19.7986105,29.1893053 L18.5480842,27.9387789 Z"
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
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default EnterFullScreen;
