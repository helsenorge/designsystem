import React from 'react';
import {SvgPathProps} from './Icon';

const FloppyDisk: React.FC<SvgPathProps> = ({isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M17.134 33.418h13.732v-1.301H17.134v1.301zm0-5.405h13.732v-1.301H17.134v1.301zm9.095-13.693h1.3v-4.256h-1.3v4.256zm13.61 25.518h-3.348V20.953H11.509v18.885H8.161V8.162h8.483v9.616h14.712V8.162h5.84a2.646 2.646 0 012.643 2.642v29.034zm-27.029 0h22.381V22.254H12.81v17.584zm5.135-23.36h12.111V8.163H17.945v8.315zm19.251-9.617H6.861v34.278h34.278V10.804a3.948 3.948 0 00-3.943-3.943z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M15.417 33.418h17.166v-1.301H15.417v1.301zm0-5.405h17.166v-1.301H15.417v1.301zM26.229 14.32h1.3v-4.256h-1.3v4.256zm13.609 25.518h-3.347V20.953H11.509v18.885H8.161V8.162h8.483v9.616h14.712V8.162h5.84a2.645 2.645 0 012.642 2.642v29.034zm-27.029 0H35.19V22.254H12.809v17.584zm5.135-23.36h12.112V8.163H17.944v8.315zm19.252-9.617H6.861v34.278h34.277V10.804a3.947 3.947 0 00-3.942-3.943z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default FloppyDisk;
