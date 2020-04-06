import React from 'react';
import {IconRawProps} from './Icon';

const Ticket = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, classNames, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M28.0196,27.1783 L28.0276,28.7733 L29.3286,28.7673 L29.3196,27.1723 L28.0196,27.1783 Z M29.3406,31.2423 L29.3406,31.1583 L28.0406,31.1643 L28.0406,31.2493 L11.3726,31.3363 L11.3576,28.5293 C12.3116,28.3863 13.1916,27.9423 13.8826,27.2433 C14.7276,26.3903 15.1896,25.2573 15.1836,24.0563 C15.1776,22.8543 14.7036,21.7273 13.8496,20.8813 C13.1506,20.1913 12.2676,19.7563 11.3116,19.6233 L11.2966,16.8163 L27.9656,16.7303 L27.9656,16.8143 L29.2656,16.8083 L29.2656,16.7233 L36.6276,16.6853 L36.6426,19.5773 C34.4706,19.9063 32.8056,21.7903 32.8166,24.0493 C32.8286,26.3103 34.5136,28.1773 36.6886,28.4823 L36.7036,31.2043 L29.3406,31.2423 Z M37.9826,27.2223 L37.3326,27.2253 L37.3156,27.2253 C35.5596,27.2253 34.1256,25.8013 34.1166,24.0433 C34.1076,22.2803 35.5356,20.8373 37.2996,20.8273 L37.9496,20.8243 L37.9206,15.3783 L9.9906,15.5233 L10.0186,20.8843 L10.6676,20.8813 L10.6866,20.8813 C11.5346,20.8813 12.3316,21.2083 12.9346,21.8063 C13.5416,22.4073 13.8786,23.2083 13.8836,24.0623 C13.8876,24.9173 13.5596,25.7223 12.9576,26.3293 C12.3576,26.9373 11.5556,27.2743 10.7016,27.2783 L10.0516,27.2823 L10.0796,32.6433 L38.0096,32.4973 L37.9826,27.2223 Z M29.2786,19.1993 L27.9786,19.2053 L27.9866,20.8003 L29.2866,20.7943 L29.2786,19.1993 Z M29.2986,23.1863 L27.9986,23.1923 L28.0076,24.7863 L29.3076,24.7813 L29.2986,23.1863 Z"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${classNames} hnds-style-icon`}
      {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M38.6473,20.691 C37.6833,20.711 36.7543,21.039 35.9803,21.643 C35.0323,22.382 34.4303,23.446 34.2833,24.639 C34.1363,25.832 34.4623,27.01 35.2023,27.958 C35.8063,28.732 36.6273,29.276 37.5583,29.529 L37.2253,32.231 L29.9183,31.331 L31.6953,16.912 L39.0013,17.82 L38.6473,20.691 Z M28.4613,31.25 L11.8723,31.337 L11.8573,28.529 C12.8123,28.386 13.6913,27.942 14.3823,27.244 C15.2273,26.39 15.6893,25.257 15.6833,24.056 C15.6773,22.854 15.2033,21.727 14.3493,20.881 C13.6513,20.191 12.7673,19.756 11.8113,19.624 L11.7963,16.816 L28.4613,16.73 L28.4613,31.25 Z M30.5643,15.461 L29.7623,21.971 L29.7623,15.423 L10.4903,15.523 L10.5183,20.884 L11.1683,20.881 L11.1863,20.881 C12.0343,20.881 12.8323,21.209 13.4353,21.806 C14.0423,22.407 14.3793,23.209 14.3833,24.062 C14.3883,24.918 14.0593,25.722 13.4583,26.33 C12.8573,26.937 12.0553,27.274 11.2013,27.278 L10.5513,27.282 L10.5793,32.643 L29.1523,32.545 L38.3573,33.68 L39.0023,28.444 L38.3573,28.364 C37.5093,28.259 36.7523,27.832 36.2263,27.158 C35.7013,26.484 35.4683,25.646 35.5733,24.797 C35.6773,23.95 36.1063,23.193 36.7803,22.668 C37.4533,22.142 38.2913,21.907 39.1393,22.015 L39.7843,22.094 L40.4503,16.689 L30.5643,15.461 Z"
      />
    </svg>
  );
});

export default Ticket;
