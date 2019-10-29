import React from 'react';
import {IconProps} from './Icon';

const Close = React.forwardRef((props: IconProps, ref: any) => {
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
      <path
        fill={color}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M148.4,130.1L256,237.7l107.6-107.6c5.1-5.1,13.2-5.1,18.3,0
			c5.1,5.1,5.1,13.2,0,18.3L274.3,256l107.7,107.7c5.1,5.1,5.1,13.2,0,18.3c-5.1,5.1-13.2,5.1-18.3,0L256,274.3L148.3,381.9
			c-5,5-13.2,5.1-18.3,0c-5.1-5.1-5-13.2,0-18.3L237.7,256L130.1,148.3c-5.1-5.1-5.1-13.2,0-18.3C135.1,125,143.3,125,148.4,130.1"
      />
    </svg>
  );
});

export default Close;
