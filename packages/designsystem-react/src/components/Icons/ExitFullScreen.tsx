import React from 'react';
import {IconRawProps} from './Icon';

const ExitFullScreen = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(12 12)">
      <polygon points="1.421 23.539 .502 22.62 7.721 15.402 8.639 16.321" />
      <polygon points="8.83 23.913 7.53 23.913 7.53 16.511 .086 16.511 .086 15.211 8.83 15.211" />
      <polygon points="16.279 8.598 15.36 7.679 22.578 .461 23.497 1.38" />
      <polygon points="23.914 8.789 15.17 8.789 15.17 .087 16.47 .087 16.47 7.489 23.914 7.489" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(12 12)">
      <polygon points="2.685 22.276 1.766 21.357 8.984 14.139 9.903 15.057" />
      <polygon points="10.094 22.65 8.794 22.65 8.794 15.248 1.35 15.248 1.35 13.948 10.094 13.948" />
      <polygon points="15.016 9.861 14.097 8.943 21.315 1.724 22.234 2.643" />
      <polygon points="22.65 10.052 13.906 10.052 13.906 1.35 15.206 1.35 15.206 8.752 22.65 8.752" />
      <polygon points="1.422 23.539 .503 22.62 7.721 15.402 8.64 16.321" />
      <polygon points="16.279 8.598 15.36 7.679 22.578 .461 23.497 1.38" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M29.8234105,19.1225684 L35.5316211,13.4143579 L34.2810947,12.1638316 L28.5728842,17.8720421 L28.5728842,11.9554105 L26.8032,11.9554105 L26.8032,20.8909895 L35.7817263,20.8909895 L35.7817263,19.1225684 L29.8234105,19.1225684 Z M11.9547789,28.6139368 L17.9130947,28.6139368 L12.2061474,34.3221474 L13.4566737,35.5726737 L19.1636211,29.8657263 L19.1636211,35.7810947 L20.9333053,35.7810947 L20.9333053,26.8455158 L11.9547789,26.8455158 L11.9547789,28.6139368 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M33.0049263,15.9409263 L35.5312421,13.4146105 L34.2807158,12.1640842 L33.0175579,13.4272421 L31.7544,14.6904 L27.3093474,19.1354526 L27.3093474,13.2175579 L25.5409263,13.2175579 L25.5409263,22.1556632 L34.5181895,22.1556632 L34.5181895,20.3859789 L28.5598737,20.3859789 L33.0049263,15.9409263 Z M13.2188211,27.3510316 L19.1771368,27.3510316 L13.4676632,33.0592421 L12.2045053,34.3224 L13.4550316,35.5729263 L20.4276632,28.6015579 L20.4276632,34.5181895 L22.1960842,34.5181895 L22.1960842,25.5826105 L13.2188211,25.5826105 L13.2188211,27.3510316 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default ExitFullScreen;
