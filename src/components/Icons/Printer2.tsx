import React from 'react';
import {IconProps} from './Icon';

const Printer2 = React.forwardRef((props: IconProps, ref: any) => {
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
        d="M206.7,361.8h99v-12.1h-99V361.8z M206.7,397.2h99V385h-99V397.2z M349.6,224.4
        c-13.6,0-24.7,11.1-24.7,24.7c0,13.6,11.1,24.7,24.7,24.7s24.7-11.1,24.7-24.7C374.3,235.5,363.2,224.4,349.6,224.4z M349.6,261.7
        c-6.9,0-12.6-5.7-12.6-12.6c0-6.9,5.7-12.6,12.6-12.6c7,0,12.6,5.7,12.6,12.6C362.2,256.1,356.5,261.7,349.6,261.7z M359.4,136.2
        v-55H153v55H73.1v190.8H153v113.2h206.4V327.1h79.9V136.2H359.4z M169.2,193.3h174.1V97.4H169.2V193.3z M169.2,424.1h174.1v-97
        H169.2V424.1z M423.2,310.9H89.3V152.4H153v40.9h-22.6v12.1H382v-12.1h-22.6v-40.9h63.8V310.9z"
      />
    </svg>
  );
});

export default Printer2;
