import React from 'react';
import {IconRawProps} from './Icon';

const Reply = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fillRule="evenodd" transform="translate(6 6)">
      <path d="M35.2906,31.6779 L33.2906,31.6779 L33.2906,26.4779 C33.2906,19.6879 27.7676,14.1639 20.9776,14.1639 L1.7086,14.1639 L1.7086,12.1639 L20.9776,12.1639 C28.8696,12.1639 35.2906,18.5849 35.2906,26.4779 L35.2906,31.6779 Z" />
      <polygon points="12.388 25.819 .33 13.263 12.179 .637 13.637 2.005 3.088 13.248 13.83 24.433" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(2 6)">
      <path d="M39.2909,28.1608 L37.2909,28.1608 L37.2909,26.4778 C37.2909,19.6878 31.7669,14.1638 24.9779,14.1638 L2.1919,14.1638 L2.1919,12.1638 L24.9779,12.1638 C32.8699,12.1638 39.2909,18.5848 39.2909,26.4778 L39.2909,28.1608 Z" />
      <polygon points="12.87 25.819 .814 13.263 12.662 .637 14.12 2.005 3.571 13.248 14.313 24.433" />
    </g>
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M27.2539666,17.3630295 L10.8007667,17.3630295 L20.0227878,7.7157422 L18.1584496,6 L6,18.718817 L18.3718454,31.3636364 L20.2157385,29.6253186 L10.671707,19.8714245 L27.2539666,19.8714245 C33.9752955,19.8714245 39.4443616,25.2393899 39.4443616,31.8364688 L39.4443616,37 L42,37 L42,31.8364688 C42,23.85601 35.3847301,17.3630295 27.2539666,17.3630295"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M26.4617696,17.5666606 L6.73311367,17.5666606 L15.8251769,7.74648915 L13.9871112,6 L2,18.9467445 L14.1974998,31.8181652 L16.0154085,30.048696 L6.60587266,20.1200073 L26.4617696,20.1200073 C33.0883807,20.1200073 38.480376,25.5841693 38.480376,32.2994711 L38.480376,34 L41,34 L41,32.2994711 C41,24.1759985 34.4779533,17.5666606 26.4617696,17.5666606"
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

export default Reply;
