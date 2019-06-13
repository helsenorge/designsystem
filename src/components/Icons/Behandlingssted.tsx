import React from 'react';
import {IconProps} from './';
const Behandlingssted = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <defs>
        <path id="Behandlingssted_svg__a" d="M8 54.38h47.369V9H8z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill={color}
          d="M28.237 25.69H25.84v-2.395a1.185 1.185 0 1 0-2.37 0v2.395h-2.395a1.185 1.185 0 1 0 0 2.37h2.395v2.395a1.186 1.186 0 0 0 2.37 0V28.06h2.396a1.185 1.185 0 1 0 0-2.37"
        />
        <mask id="Behandlingssted_svg__b" fill="#fff">
          <use xlinkHref="#Behandlingssted_svg__a" />
        </mask>
        <path
          fill={color}
          d="M41.017 51.305H52.11V34.233H41.017v17.072zM37.46 31.77v19.536h-4.79V39.043c0-.655-.53-1.185-1.185-1.185H17.828c-.656 0-1.186.53-1.186 1.185v12.262h-4.79v-32.28h25.61v12.744zm-18.45 19.536h4.46V40.23h-4.46v11.076zm6.83 0h4.46V40.23h-4.46v11.076zM54.76 30.677H41.017V17.43c0-1.083-.73-1.96-1.63-1.96H9.926c-.9 0-1.63.877-1.63 1.96v37.42c0 .007.006.012.012.012H55.654c.007 0 .012-.005.012-.012v-23.08c0-.602-.406-1.092-.907-1.092zM13.759 13.037h21.795a1.778 1.778 0 1 0 0-3.556H13.76a1.778 1.778 0 1 0 0 3.556"
          mask="url(#Behandlingssted_svg__b)"
        />
      </g>
    </svg>
  ),
);
export default Behandlingssted;
