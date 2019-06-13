import React from 'react';
import {IconProps} from './';
const Meldinger = React.forwardRef(
  ({size = 64, color = 'black', ...props}: IconProps, svgRef: any): JSX.Element => (
    <svg viewBox="0 0 64 64" width={size} height={size} ref={svgRef} {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M55 45.286L40.195 31.299 55 18.056v27.23zM11.021 47l14.494-13.693 5.217 4.667c.285.255.642.382 1 .382s.715-.127 1-.382l5.218-4.668L52.445 47H11.021zM9 18.534l14.271 12.765L9 44.781V18.534zM51.68 17L31.732 34.843 11.785 17H51.68zM57 13H7c-1.1 0-2 .9-2 2v34c0 1.099.9 2 2 2h50c1.1 0 2-.901 2-2V15c0-1.1-.9-2-2-2z"
      />
    </svg>
  ),
);
export default Meldinger;
