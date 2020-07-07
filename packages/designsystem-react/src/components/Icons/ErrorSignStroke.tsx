import React from 'react';
import {IconRawProps} from './Icon';

const ErrorSignStroke = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M24.0035,31.578 C23.2335,31.578 22.6095,32.202 22.6095,32.972 C22.6095,33.741 23.2335,34.365 24.0035,34.365 C24.7735,34.365 25.3975,33.741 25.3975,32.972 C25.3975,32.202 24.7735,31.578 24.0035,31.578 L24.0035,31.578 Z M24.1005,11.388 L38.7875,38.123 L9.2265,38.123 L24.1005,11.388 Z M24.1085,8.459 L6.8165,39.541 L41.1835,39.541 L24.1085,8.459 Z M24.0035,29.492 C24.4965,29.492 24.8965,29.092 24.8965,28.599 L24.8965,21.371 C24.8965,20.878 24.4965,20.478 24.0035,20.478 C23.5105,20.478 23.1105,20.878 23.1105,21.371 L23.1105,28.599 C23.1105,29.092 23.5105,29.492 24.0035,29.492 L24.0035,29.492 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M24.0035,31.578 C23.2335,31.578 22.6095,32.202 22.6095,32.972 C22.6095,33.741 23.2335,34.365 24.0035,34.365 C24.7735,34.365 25.3975,33.741 25.3975,32.972 C25.3975,32.202 24.7735,31.578 24.0035,31.578 L24.0035,31.578 Z M24.1005,11.388 L38.7875,38.123 L9.2265,38.123 L24.1005,11.388 Z M24.1085,8.459 L6.8165,39.541 L41.1835,39.541 L24.1085,8.459 Z M24.0035,27.492 C24.4965,27.492 24.8965,27.092 24.8965,26.599 L24.8965,19.371 C24.8965,18.878 24.4965,18.478 24.0035,18.478 C23.5105,18.478 23.1105,18.878 23.1105,19.371 L23.1105,26.599 C23.1105,27.092 23.5105,27.492 24.0035,27.492 L24.0035,27.492 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M24.0034926,31.5620463 C23.2351137,31.5620463 22.6124274,32.1847326 22.6124274,32.9531116 C22.6124274,33.7204926 23.2351137,34.3431789 24.0034926,34.3431789 C24.7718716,34.3431789 25.3945579,33.7204926 25.3945579,32.9531116 C25.3945579,32.1847326 24.7718716,31.5620463 24.0034926,31.5620463 L24.0034926,31.5620463 Z M24.1002884,11.4145516 L38.7563684,38.0932674 L9.25760211,38.0932674 L24.1002884,11.4145516 Z M24.1082716,8.49171789 L6.85267579,39.5082821 L41.1473242,39.5082821 L24.1082716,8.49171789 Z M24.0034926,29.4804379 C24.4954547,29.4804379 24.8946126,29.08128 24.8946126,28.5893179 L24.8946126,21.3765347 C24.8946126,20.8845726 24.4954547,20.4854147 24.0034926,20.4854147 C23.5115305,20.4854147 23.1123726,20.8845726 23.1123726,21.3765347 L23.1123726,28.5893179 C23.1123726,29.08128 23.5115305,29.4804379 24.0034926,29.4804379 L24.0034926,29.4804379 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M24.0034926,31.5620463 C23.2351137,31.5620463 22.6124274,32.1847326 22.6124274,32.9531116 C22.6124274,33.7204926 23.2351137,34.3431789 24.0034926,34.3431789 C24.7718716,34.3431789 25.3945579,33.7204926 25.3945579,32.9531116 C25.3945579,32.1847326 24.7718716,31.5620463 24.0034926,31.5620463 L24.0034926,31.5620463 Z M24.1002884,11.4145516 L38.7563684,38.0932674 L9.25760211,38.0932674 L24.1002884,11.4145516 Z M24.1082716,8.49171789 L6.85267579,39.5082821 L41.1473242,39.5082821 L24.1082716,8.49171789 Z M24.0034926,26.9541221 C24.4954547,26.9541221 24.8946126,26.5549642 24.8946126,26.0630021 L24.8946126,18.8502189 C24.8946126,18.3582568 24.4954547,17.9590989 24.0034926,17.9590989 C23.5115305,17.9590989 23.1123726,18.3582568 23.1123726,18.8502189 L23.1123726,26.0630021 C23.1123726,26.5549642 23.5115305,26.9541221 24.0034926,26.9541221 L24.0034926,26.9541221 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`hnds-style-icon ${className}`}
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default ErrorSignStroke;
