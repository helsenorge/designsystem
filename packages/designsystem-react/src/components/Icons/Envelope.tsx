import React from 'react';
import {IconProps} from './Icon';

const Envelope = React.forwardRef((props: IconProps, ref: any) => {
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
        d="M302.6,251.5l111.5,112H94.4l111.5-112l48.3,43.2L302.6,251.5z M84.9,143.2
			l108.3,96.8L84.9,348.8V143.2z M315.3,240.1l111.7-100v212.2L315.3,240.1z M93.3,127.8h321.8L254.2,271.7L93.3,127.8z M425.8,127.8
			h1.2v1.4L425.8,127.8z M76.5,110.7l-8.6,0.1V372l0.1,8.6h367.6l8.6-0.1V119.3l-0.1-8.6H76.5z"
      />
    </svg>
  );
});

export default Envelope;
