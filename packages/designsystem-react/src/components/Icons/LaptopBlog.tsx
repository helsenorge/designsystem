import React from 'react';
import {IconRawProps} from './Icon';

const LaptopBlog = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = false;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M31.5085,23.6972 C31.5085,24.3932 30.9425,24.9602 30.2445,24.9602 L27.5325,24.9602 L27.5325,26.5142 L25.1155,24.9602 L17.7555,24.9602 C17.0585,24.9602 16.4915,24.3932 16.4915,23.6972 L16.4915,17.9192 C16.4915,17.2222 17.0585,16.6552 17.7555,16.6552 L30.2445,16.6552 C30.9425,16.6552 31.5085,17.2222 31.5085,17.9192 L31.5085,23.6972 Z M30.2445,15.6552 L17.7555,15.6552 C16.5075,15.6552 15.4915,16.6712 15.4915,17.9192 L15.4915,23.6972 C15.4915,24.9452 16.5075,25.9602 17.7555,25.9602 L24.8225,25.9602 L28.5325,28.3462 L28.5325,25.9602 L30.2445,25.9602 C31.4925,25.9602 32.5085,24.9452 32.5085,23.6972 L32.5085,17.9192 C32.5085,16.6712 31.4925,15.6552 30.2445,15.6552 L30.2445,15.6552 Z M42.1755,33.5342 C42.1755,34.6492 41.2695,35.5552 40.1545,35.5552 L7.8455,35.5552 C6.7305,35.5552 5.8235,34.6492 5.8235,33.5342 L5.8235,32.4422 L42.1755,32.4422 L42.1755,33.5342 Z M8.1655,13.8202 C8.1655,12.8402 8.9625,12.0432 9.9425,12.0432 L38.0585,12.0432 C39.0375,12.0432 39.8345,12.8402 39.8345,13.8202 L39.8345,31.1422 L8.1655,31.1422 L8.1655,13.8202 Z M41.1355,31.1422 L41.1355,13.8202 C41.1355,12.1232 39.7545,10.7432 38.0585,10.7432 L9.9425,10.7432 C8.2455,10.7432 6.8645,12.1232 6.8645,13.8202 L6.8645,31.1422 L4.5235,31.1422 L4.5235,33.5342 C4.5235,35.3652 6.0135,36.8552 7.8455,36.8552 L40.1545,36.8552 C41.9865,36.8552 43.4765,35.3652 43.4765,33.5342 L43.4765,31.1422 L41.1355,31.1422 Z M18.9115,22.2932 L25.3075,22.2932 L25.3075,21.2932 L18.9115,21.2932 L18.9115,22.2932 Z M18.9115,19.9662 L28.3075,19.9662 L28.3075,18.9662 L18.9115,18.9662 L18.9115,19.9662 Z"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}></svg>
  );
});

export default LaptopBlog;