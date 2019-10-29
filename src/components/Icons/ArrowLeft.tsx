import React from 'react';
import {IconProps} from './Icon';

const ArrowLeft = React.forwardRef((props: IconProps, ref: any) => {
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
        points="288.8,63.2 273.4,81.8 407.1,242.9 63.2,242.9 63.2,269.1 407.1,269.1 
        273.4,430.2 288.8,448.8 448.8,256 "
      />
    </svg>
  );
});

export default ArrowLeft;
