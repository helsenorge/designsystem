import React from 'react';
import {IconRawProps} from './Icon';

const Pause = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(17 16)">
      <polygon points="10.447 15.959 13.447 15.959 13.447 .04 10.447 .04" />
      <polygon points=".553 15.959 3.553 15.959 3.553 .04 .553 .04" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(17 13)">
      <polygon points="10.447 21.486 13.447 21.486 13.447 .513 10.447 .513" />
      <polygon points=".553 21.486 3.553 21.486 3.553 .513 .553 .513" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M26.8168421,31.8274105 L30.8147368,31.8274105 L30.8147368,15.9090947 L26.8168421,15.9090947 L26.8168421,31.8274105 Z M16.9225263,31.8274105 L20.9204211,31.8274105 L20.9204211,15.9090947 L16.9225263,15.9090947 L16.9225263,31.8274105 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M26.8168421,34.3549895 L30.8147368,34.3549895 L30.8147368,13.3827789 L26.8168421,13.3827789 L26.8168421,34.3549895 Z M16.9225263,34.3549895 L20.9204211,34.3549895 L20.9204211,13.3827789 L16.9225263,13.3827789 L16.9225263,34.3549895 Z"
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

export default Pause;
