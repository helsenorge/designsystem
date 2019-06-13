import React from 'react';
import {IconProps} from './';
const Helseregister = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <defs>
        <path id="Helseregister_svg__a" d="M0 46.222h45.09V0H0z" />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(9.481 9.481)">
        <path
          fill={color}
          d="M35.79 31.604H23a1.185 1.185 0 1 1 0-2.37H35.79a1.185 1.185 0 1 1 0 2.37M35.79 37.264H23a1.185 1.185 0 1 1 0-2.37H35.79a1.185 1.185 0 1 1 0 2.37"
        />
        <mask id="Helseregister_svg__b" fill="#fff">
          <use xlinkHref="#Helseregister_svg__a" />
        </mask>
        <path
          fill={color}
          d="M18.388 42.667h23.147V3.556H18.388v39.11zM42.488 0H7.773a2.602 2.602 0 0 0-2.601 2.601v4.704h3.002a3.555 3.555 0 1 1 0 7.112H5.171v17.389h3.002a3.555 3.555 0 1 1 0 7.11H5.171v4.705a2.602 2.602 0 0 0 2.601 2.601H42.49a2.602 2.602 0 0 0 2.601-2.601V2.6A2.602 2.602 0 0 0 42.49 0z"
          mask="url(#Helseregister_svg__b)"
        />
        <path
          fill={color}
          d="M8.174 33.584H1.778a1.778 1.778 0 1 0 0 3.555h6.396a1.778 1.778 0 1 0 0-3.555M8.174 9.083H1.778a1.778 1.778 0 1 0 0 3.555h6.396a1.778 1.778 0 1 0 0-3.555M34.858 19.854c0-1.33-.711-2.512-1.816-3.328-.883 1.047-2.079 1.755-3.477 1.755-1.402 0-2.602-.713-3.486-1.764-1.112.816-1.829 2-1.829 3.337l.015 4.524h10.614s-.021-4.23-.021-4.524M29.565 8.66c-1.75 0-3.155 1.567-3.155 3.487 0 1.326.627 2.69 1.52 3.493.485.435 1.046.712 1.635.712.586 0 1.145-.276 1.63-.709.895-.8 1.525-2.167 1.525-3.496 0-1.92-1.406-3.488-3.155-3.488"
          mask="url(#Helseregister_svg__b)"
        />
      </g>
    </svg>
  ),
);
export default Helseregister;
