import React from 'react';
import {IconProps} from './Icon';

const Printer = React.forwardRef((props: IconProps, ref: any) => {
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
        d="M305.6,361.7h-99.1v-12.1h99.1V361.7z M305.6,397.1h-99.1v-12.1h99.1V397.1z
        M162.6,224.1c13.6,0,24.7,11.1,24.7,24.8c0,13.6-11.1,24.7-24.7,24.7c-13.6,0-24.8-11.1-24.8-24.7
        C137.8,235.2,148.9,224.1,162.6,224.1z M162.6,261.5c6.9,0,12.6-5.7,12.6-12.6c0-7-5.7-12.6-12.6-12.6c-7,0-12.6,5.7-12.6,12.6
        C149.9,255.8,155.6,261.5,162.6,261.5z M152.7,135.9V80.9h206.5v55.1h80v191h-80v113.3H152.7V326.9h-80v-191H152.7z M343.1,193
        H168.9V97h174.2V193z M343.1,424H168.9v-97.1h174.2V424z M88.9,310.8h334.2V152.1h-63.8V193h22.6v12.1H130.1V193h22.6v-40.9H88.9
        V310.8z"
      />
    </svg>
  );
});

export default Printer;
