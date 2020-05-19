import React from 'react';
import {IconRawProps} from './Icon';

const RtfFile = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M18,15.59 L30,15.59 L30,14.59 L18,14.59 L18,15.59 Z M18,19.781 L30,19.781 L30,18.781 L18,18.781 L18,19.781 Z M18,23.973 L30,23.973 L30,22.973 L18,22.973 L18,23.973 Z M12,39.1 L35.999,39.1 L35.999,8.9 L12,8.9 L12,39.1 Z M10.699,40.4 L37.3,40.4 L37.3,7.6 L10.699,7.6 L10.699,40.4 Z M20.602,30.489 C20.457,30.61 20.222,30.671 19.893,30.671 L18.961,30.671 L18.961,29.145 L19.949,29.145 C20.251,29.145 20.472,29.212 20.611,29.346 C20.749,29.48 20.818,29.672 20.818,29.921 C20.818,30.179 20.745,30.368 20.602,30.489 L20.602,30.489 Z M21.578,32.515 L21.578,32.115 C21.578,31.82 21.521,31.577 21.405,31.388 C21.288,31.199 21.093,31.059 20.815,30.969 C21.081,30.858 21.282,30.716 21.418,30.542 C21.553,30.368 21.621,30.151 21.621,29.891 C21.621,29.434 21.482,29.087 21.204,28.852 C20.927,28.618 20.517,28.5 19.972,28.5 L18.158,28.5 L18.158,33.311 L18.961,33.311 L18.961,31.315 L19.999,31.315 C20.247,31.315 20.441,31.387 20.575,31.528 C20.711,31.671 20.779,31.868 20.779,32.122 L20.779,32.508 C20.779,32.663 20.79,32.816 20.815,32.969 C20.839,33.122 20.897,33.236 20.987,33.311 L21.81,33.311 L21.81,33.225 C21.724,33.15 21.663,33.049 21.63,32.921 C21.595,32.793 21.578,32.658 21.578,32.515 L21.578,32.515 Z M22.1,29.145 L23.6,29.145 L23.6,33.311 L24.404,33.311 L24.404,29.145 L25.906,29.145 L25.906,28.5 L22.1,28.5 L22.1,29.145 Z M26.607,33.311 L27.409,33.311 L27.409,31.259 L29.504,31.259 L29.504,30.615 L27.409,30.615 L27.409,29.145 L29.841,29.145 L29.841,28.5 L26.607,28.5 L26.607,33.311 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M17,15.59 L31.001,15.59 L31.001,14.59 L17,14.59 L17,15.59 Z M17,19.781 L31.001,19.781 L31.001,18.781 L17,18.781 L17,19.781 Z M17,23.973 L31.001,23.973 L31.001,22.973 L17,22.973 L17,23.973 Z M12,39.1 L35.999,39.1 L35.999,8.9 L12,8.9 L12,39.1 Z M10.699,40.4 L37.3,40.4 L37.3,7.6 L10.699,7.6 L10.699,40.4 Z M20.602,30.489 C20.457,30.61 20.222,30.671 19.894,30.671 L18.962,30.671 L18.962,29.145 L19.949,29.145 C20.251,29.145 20.472,29.212 20.61,29.346 C20.749,29.48 20.818,29.672 20.818,29.921 C20.818,30.179 20.746,30.368 20.602,30.489 L20.602,30.489 Z M21.578,32.515 L21.578,32.115 C21.578,31.82 21.521,31.577 21.405,31.388 C21.289,31.199 21.093,31.059 20.815,30.969 C21.081,30.858 21.282,30.716 21.418,30.542 C21.554,30.368 21.621,30.151 21.621,29.891 C21.621,29.434 21.482,29.087 21.205,28.852 C20.928,28.618 20.517,28.5 19.973,28.5 L18.158,28.5 L18.158,33.311 L18.962,33.311 L18.962,31.315 L19.999,31.315 C20.248,31.315 20.44,31.387 20.575,31.528 C20.711,31.671 20.778,31.868 20.778,32.122 L20.778,32.508 C20.778,32.663 20.791,32.816 20.815,32.969 C20.839,33.122 20.896,33.236 20.987,33.311 L21.81,33.311 L21.81,33.225 C21.724,33.15 21.663,33.049 21.63,32.921 C21.595,32.793 21.578,32.658 21.578,32.515 L21.578,32.515 Z M22.101,29.145 L23.601,29.145 L23.601,33.311 L24.403,33.311 L24.403,29.145 L25.906,29.145 L25.906,28.5 L22.101,28.5 L22.101,29.145 Z M26.606,33.311 L27.409,33.311 L27.409,31.259 L29.504,31.259 L29.504,30.615 L27.409,30.615 L27.409,29.145 L29.842,29.145 L29.842,28.5 L26.606,28.5 L26.606,33.311 Z"
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
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default RtfFile;