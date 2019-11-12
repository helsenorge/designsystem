import React from 'react';
import {IconProps} from './Icon';

const Lock = React.forwardRef((props: IconProps, ref: any) => {
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
        d="M336.6,206.2v-37.6c0-44.4-36.1-80.6-80.6-80.6c-44.4,0-80.6,36.2-80.6,80.6v37.6
        h-30.5V397h222.2V206.2H336.6z M198.4,168.6c0-31.8,25.9-57.7,57.6-57.7c31.8,0,57.7,25.9,57.7,57.7v37.6H198.4V168.6z M167.8,374.1
        h176.3v-145H167.8V374.1z"
      />
    </svg>
  );
});

export default Lock;
