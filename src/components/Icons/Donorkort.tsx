import React from 'react';
import {IconProps} from './';
const Donorkort = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <defs>
        <path id="Donorkort_svg__a" d="M0 0h47v32H0z" />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(9 16)">
        <mask id="Donorkort_svg__b" fill="#fff">
          <use xlinkHref="#Donorkort_svg__a" />
        </mask>
        <g fill={color} mask="url(#Donorkort_svg__b)">
          <path d="M45.498 0H1.908A1.902 1.902 0 0 0 0 1.895v28.417c0 1.046.855 1.895 1.908 1.895h43.59a1.902 1.902 0 0 0 1.908-1.895V1.895A1.902 1.902 0 0 0 45.498 0zM3.446 28.784H43.96V3.422H3.446v25.362z" />
          <path d="M30.925 16.089l-6.454 7.307c-.226.338-.792.338-1.019 0L17 16.09c-3.397-4.16 2.603-8.883 7.019-4.498 4.529-4.61 10.53.563 6.907 4.498" />
        </g>
      </g>
    </svg>
  ),
);
export default Donorkort;
