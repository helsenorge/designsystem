import React from 'react';
import {IconProps} from './Icon';

const ArrowRight = React.forwardRef((props: IconProps, ref: any) => {
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
        points="223.2,63.2 238.6,81.8 104.9,242.9 448.8,242.9 448.8,269.1 104.9,269.1 
        238.6,430.2 223.2,448.8 63.2,256 "
      />
    </svg>
  );
});

export default ArrowRight;
