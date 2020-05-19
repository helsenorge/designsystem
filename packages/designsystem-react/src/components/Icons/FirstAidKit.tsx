import React from 'react';
import {IconRawProps} from './Icon';

const FirstAidKit = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M27.9938,8.3363 C30.0688,8.3363 31.7578,10.0243 31.7578,12.1003 L31.7578,12.1003 L31.7578,13.9193 L38.2958,13.9193 C39.8758,13.9193 41.1608,15.2043 41.1608,16.7833 L41.1608,16.7833 L41.1608,36.7993 C41.1608,38.3793 39.8758,39.6643 38.2958,39.6643 L38.2958,39.6643 L9.7648,39.6643 C8.1848,39.6643 6.8998,38.3793 6.8998,36.7993 L6.8998,36.7993 L6.8998,16.7833 C6.8998,15.2043 8.1848,13.9193 9.7648,13.9193 L9.7648,13.9193 L16.3028,13.9193 L16.3028,12.1003 C16.3028,10.0243 17.9908,8.3363 20.0668,8.3363 L20.0668,8.3363 Z M38.2958,15.2183 L9.7648,15.2183 C8.9018,15.2183 8.1998,15.9213 8.1998,16.7833 L8.1998,16.7833 L8.1998,36.7993 C8.1998,37.6623 8.9018,38.3643 9.7648,38.3643 L9.7648,38.3643 L38.2958,38.3643 C39.1588,38.3643 39.8608,37.6623 39.8608,36.7993 L39.8608,36.7993 L39.8608,16.7833 C39.8608,15.9213 39.1588,15.2183 38.2958,15.2183 L38.2958,15.2183 Z M26.474,21.1459 L26.474,24.3519 L29.677,24.3519 L29.677,29.2369 L26.474,29.2369 L26.474,32.4379 L21.587,32.4379 L21.587,29.2369 L18.384,29.2369 L18.384,24.3519 L21.587,24.3519 L21.587,21.1459 L26.474,21.1459 Z M25.173,22.4459 L22.887,22.4459 L22.887,25.6519 L19.684,25.6519 L19.684,27.9369 L22.887,27.9369 L22.887,31.1379 L25.173,31.1379 L25.173,27.9369 L28.377,27.9369 L28.377,25.6519 L25.173,25.6519 L25.173,22.4459 Z M27.9938,9.6353 L20.0668,9.6353 C18.7078,9.6353 17.6028,10.7413 17.6028,12.1003 L17.6028,12.1003 L17.6028,13.9193 L30.4578,13.9193 L30.4578,12.1003 C30.4578,10.7413 29.3528,9.6353 27.9938,9.6353 L27.9938,9.6353 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M27.9938,8.3363 C30.0688,8.3363 31.7578,10.0243 31.7578,12.1003 L31.7578,12.1003 L31.7578,13.9193 L38.2958,13.9193 C39.8758,13.9193 41.1608,15.2043 41.1608,16.7833 L41.1608,16.7833 L41.1608,36.7993 C41.1608,38.3793 39.8758,39.6643 38.2958,39.6643 L38.2958,39.6643 L9.7648,39.6643 C8.1858,39.6643 6.9008,38.3793 6.9008,36.7993 L6.9008,36.7993 L6.9008,16.7833 C6.9008,15.2043 8.1858,13.9193 9.7648,13.9193 L9.7648,13.9193 L16.3028,13.9193 L16.3028,12.1003 C16.3028,10.0243 17.9908,8.3363 20.0668,8.3363 L20.0668,8.3363 Z M38.2958,15.2183 L9.7648,15.2183 C8.9028,15.2183 8.1998,15.9213 8.1998,16.7833 L8.1998,16.7833 L8.1998,36.7993 C8.1998,37.6623 8.9028,38.3643 9.7648,38.3643 L9.7648,38.3643 L38.2958,38.3643 C39.1588,38.3643 39.8608,37.6623 39.8608,36.7993 L39.8608,36.7993 L39.8608,16.7833 C39.8608,15.9213 39.1588,15.2183 38.2958,15.2183 L38.2958,15.2183 Z M26.7959,20.2471 L26.7959,24.0301 L30.5759,24.0301 L30.5759,29.5591 L26.7959,29.5591 L26.7959,33.3361 L21.2649,33.3361 L21.2649,29.5591 L17.4849,29.5591 L17.4849,24.0301 L21.2649,24.0301 L21.2649,20.2471 L26.7959,20.2471 Z M25.4959,21.5471 L22.5649,21.5471 L22.5649,25.3301 L18.7849,25.3301 L18.7849,28.2601 L22.5649,28.2601 L22.5649,32.0361 L25.4959,32.0361 L25.4959,28.2601 L29.2759,28.2601 L29.2759,25.3301 L25.4959,25.3301 L25.4959,21.5471 Z M27.9938,9.6353 L20.0668,9.6353 C18.7078,9.6353 17.6028,10.7413 17.6028,12.1003 L17.6028,12.1003 L17.6028,13.9193 L30.4578,13.9193 L30.4578,12.1003 C30.4578,10.7413 29.3528,9.6353 27.9938,9.6353 L27.9938,9.6353 Z"
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

export default FirstAidKit;