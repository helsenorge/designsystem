import React from 'react';
import {IconProps} from './Icon';

const Plus = React.forwardRef((props: IconProps, ref: any) => {
  const {color, size} = props;
  return (
    <svg
      className="icon"
      ref={ref}
      version="1.1"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      enable-background="new 0 0 512 512">
      <polygon
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
        points="269.4,242.6 269.4,85.3 242.6,85.3 242.6,242.6 85.3,242.6 85.3,269.4 
        242.6,269.4 242.6,426.7 269.4,426.7 269.4,269.4 426.7,269.4 426.7,242.6 "
      />
    </svg>
  );
});

export default Plus;
