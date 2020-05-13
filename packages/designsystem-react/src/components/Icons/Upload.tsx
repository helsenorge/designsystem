import React from 'react';
import {IconRawProps} from './Icon';

const Upload = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(10 8)">
      <polygon points=".791 29.839 27.209 29.839 27.209 28.539 .791 28.539" />
      <polygon points="13.372 21.496 14.672 21.496 14.672 1.881 13.372 1.881" />
      <polygon points="22.165 10.539 14.083 2.777 5.959 10.4 5.07 9.452 14.094 .985 23.065 9.602" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(10 11)">
      <polygon points=".791 26.839 27.209 26.839 27.209 25.539 .791 25.539" />
      <polygon points="13.372 21.023 14.672 21.023 14.672 1.408 13.372 1.408" />
      <polygon points="22.165 10.065 14.082 2.303 5.959 9.926 5.07 8.978 14.093 .511 23.065 9.128" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M14.9627368,18.8223158 L16.0781053,19.9856842 L23.3071579,13.0421053 L23.3071579,30.8298947 L24.9176842,30.8298947 L24.9176842,13.1381053 L32.0684211,19.8467368 L33.1711579,18.672 L24.0410526,10.1052632 L14.9627368,18.8223158 Z M10.7905263,38.2193684 L37.2094737,38.2193684 L37.2094737,36.6088421 L10.7905263,36.6088421 L10.7905263,38.2193684 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M24.0423158,7.57894737 L14.964,16.296 L16.0781053,17.4581053 L23.3084211,10.5170526 L23.3084211,28.3035789 L24.9202105,28.3035789 L24.9202105,10.6105263 L32.0709474,17.3204211 L33.1736842,16.1456842 L24.0423158,7.57894737 Z M10.7917895,38.2193684 L37.2082105,38.2193684 L37.2082105,36.6088421 L10.7917895,36.6088421 L10.7917895,38.2193684 Z"
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

export default Upload;
