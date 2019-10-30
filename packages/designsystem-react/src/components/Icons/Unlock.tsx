import React from 'react';
import {IconProps} from './Icon';

const Unlock = React.forwardRef((props: IconProps, ref: any) => {
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
        d="M336.5,206.2c0-0.1,0.1-0.2,0.1-0.3V145c0-44.4-36.1-80.6-80.6-80.6
        c-44.4,0-80.6,36.1-80.6,80.6v13.6c0,6.3,5.1,11.5,11.5,11.5c6.3,0,11.5-5.1,11.5-11.5V145c0-31.8,25.9-57.6,57.6-57.6
        c31.8,0,57.7,25.9,57.7,57.6v60.8c0,0.1,0.1,0.2,0.1,0.3H144.9V397h222.2V206.2H336.5z M167.8,374.1h176.3v-145H167.8V374.1z"
      />
    </svg>
  );
});

export default Unlock;
