import React from 'react';
import {IconRawProps} from './Icon';

const Draft = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M42.3655,15.045 L42.0665,15.344 L38.2695,11.547 L38.5685,11.248 C39.5825,10.232 41.3515,10.233 42.3655,11.248 C42.8735,11.755 43.1525,12.429 43.1525,13.147 C43.1525,13.863 42.8735,14.538 42.3655,15.045 L42.3655,15.045 Z M40.4945,16.916 L36.6975,13.119 L37.3665,12.45 L41.1635,16.247 L40.4945,16.916 Z M29.9645,27.446 L28.4935,25.975 L38.1895,16.416 L39.5925,17.818 L29.9645,27.446 Z M32.7585,38.035 L10.9895,38.035 L10.9895,9.965 L32.7585,9.965 L32.7585,15.254 L24.8135,23.198 C24.7575,23.255 24.7125,23.321 24.6795,23.396 L21.0575,31.729 C20.9535,31.969 21.0075,32.249 21.1925,32.434 C21.3145,32.556 21.4775,32.62 21.6425,32.62 C21.7285,32.62 21.8155,32.603 21.8975,32.567 L30.2195,28.934 C30.2925,28.901 30.3585,28.857 30.4155,28.8 L32.7585,26.457 L32.7585,38.035 Z M24.3345,30.111 L22.8745,30.749 L23.5105,29.286 L24.3345,30.111 Z M24.0565,28.029 L25.4765,24.764 L28.8515,28.139 L25.5915,29.563 L24.0565,28.029 Z M35.7955,14.022 L37.3405,15.567 L27.6445,25.127 L26.1675,23.649 L35.7955,14.022 Z M43.2675,10.346 C41.7725,8.851 39.1635,8.849 37.6665,10.346 L34.1765,13.836 L34.1765,8.547 L9.5715,8.547 L9.5715,39.453 L34.1765,39.453 L34.1765,25.039 L43.2675,15.947 C44.0155,15.199 44.4285,14.204 44.4285,13.147 C44.4285,12.088 44.0155,11.094 43.2675,10.346 L43.2675,10.346 Z"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M39.3655,15.045 L39.0665,15.344 L35.2695,11.547 L35.5685,11.248 C36.5825,10.232 38.3515,10.233 39.3655,11.248 C39.8735,11.755 40.1525,12.429 40.1525,13.147 C40.1525,13.863 39.8735,14.538 39.3655,15.045 L39.3655,15.045 Z M37.4945,16.916 L33.6975,13.119 L34.3665,12.45 L38.1635,16.247 L37.4945,16.916 Z M26.9645,27.446 L25.4935,25.975 L35.1895,16.416 L36.5925,17.818 L26.9645,27.446 Z M29.7585,38.035 L7.9895,38.035 L7.9895,9.965 L29.7585,9.965 L29.7585,15.254 L21.8135,23.198 C21.7575,23.255 21.7125,23.321 21.6795,23.396 L18.0575,31.729 C17.9535,31.969 18.0075,32.249 18.1925,32.434 C18.3145,32.556 18.4775,32.62 18.6425,32.62 C18.7285,32.62 18.8155,32.603 18.8975,32.567 L27.2195,28.934 C27.2925,28.901 27.3585,28.857 27.4155,28.8 L29.7585,26.457 L29.7585,38.035 Z M21.3345,30.111 L19.8745,30.749 L20.5105,29.286 L21.3345,30.111 Z M21.0565,28.029 L22.4765,24.764 L25.8515,28.139 L22.5915,29.563 L21.0565,28.029 Z M32.7955,14.022 L34.3405,15.567 L24.6445,25.127 L23.1675,23.649 L32.7955,14.022 Z M40.2675,10.346 C38.7725,8.851 36.1635,8.849 34.6665,10.346 L31.1765,13.836 L31.1765,8.547 L6.5715,8.547 L6.5715,39.453 L31.1765,39.453 L31.1765,25.039 L40.2675,15.947 C41.0155,15.199 41.4285,14.204 41.4285,13.147 C41.4285,12.088 41.0155,11.094 40.2675,10.346 L40.2675,10.346 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default Draft;
