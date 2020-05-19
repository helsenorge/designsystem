import React from 'react';
import {IconRawProps} from './Icon';

const Save = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(10 9)">
      <polygon points="27.859 28.839 .141 28.839 .141 18.928 1.441 18.928 1.441 27.539 26.559 27.539 26.559 18.928 27.859 18.928" />
      <polygon points="13.372 20.496 14.672 20.496 14.672 .881 13.372 .881" />
      <polygon points="14.093 21.392 5.07 12.926 5.959 11.977 14.082 19.6 22.165 11.838 23.065 12.776" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(10 12)">
      <polygon points="13.372 20.023 14.672 20.023 14.672 .408 13.372 .408" />
      <polygon points="14.093 20.919 5.07 12.453 5.959 11.504 14.082 19.127 22.165 11.365 23.065 12.303" />
      <polygon points="27.859 25.839 .141 25.839 .141 15.928 1.441 15.928 1.441 24.539 26.559 24.539 26.559 15.928 27.859 15.928" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M23.2155789,9.47343158 L23.2155789,27.1664842 L16.0661053,20.4578526 L14.9633684,21.6325895 L24.0947368,30.2018526 L33.1717895,21.4810105 L32.0564211,20.3189053 L24.8273684,27.2624842 L24.8273684,9.47343158 L23.2155789,9.47343158 Z M36.4042105,27.5214316 L36.4042105,35.9770105 L11.5957895,35.9770105 L11.5957895,27.5214316 L9.98526316,27.5214316 L9.98526316,37.5875368 L38.0147368,37.5875368 L38.0147368,27.5214316 L36.4042105,27.5214316 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M23.2174737,11.9997474 L23.2174737,29.6940632 L16.0667368,22.9841684 L14.964,24.1589053 L24.0941053,32.7281684 L33.1724211,24.0073263 L32.0583158,22.8452211 L24.828,29.7875368 L24.828,11.9997474 L23.2174737,11.9997474 Z M36.4035789,27.5214316 L36.4035789,35.9770105 L11.5976842,35.9770105 L11.5976842,27.5214316 L9.98589474,27.5214316 L9.98589474,37.5875368 L38.0141053,37.5875368 L38.0141053,27.5214316 L36.4035789,27.5214316 Z"
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

export default Save;