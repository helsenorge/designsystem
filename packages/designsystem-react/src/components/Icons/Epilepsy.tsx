import React from 'react';
import {IconRawProps} from './Icon';

const Epilepsy = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M20.8075,7.3631 C26.7985,7.3631 33.1635,11.8221 33.2365,20.0901 L33.2365,20.0901 L35.7315,25.4551 C36.0415,26.1201 35.9905,26.8871 35.5955,27.5061 C35.2005,28.1251 34.5265,28.4941 33.7925,28.4941 L33.7925,28.4941 L33.2375,28.4941 L33.2375,29.2341 C33.2375,32.6541 30.6235,35.4751 27.2875,35.8021 L27.2875,35.8021 L27.2875,41.0181 L12.5455,41.0181 L12.5455,34.3211 C12.5455,32.0301 11.7355,30.4281 10.7975,28.5721 C9.7045,26.4091 8.4645,23.9571 8.4645,20.0151 C8.4645,13.0381 14.0015,7.3631 20.8075,7.3631 Z M20.8075,8.6631 C13.9865,8.6631 9.7645,14.5561 9.7645,20.0151 C9.7645,23.6471 10.8795,25.8531 11.9575,27.9851 C12.9285,29.9061 13.8455,31.7211 13.8455,34.3211 L13.8455,34.3211 L13.8455,39.7191 L25.9875,39.7191 L25.9875,34.5341 L26.6375,34.5341 C29.5605,34.5341 31.9375,32.1561 31.9375,29.2341 L31.9375,29.2341 L31.9375,27.1941 L33.7925,27.1941 C34.0845,27.1941 34.3425,27.0531 34.4995,26.8071 C34.6565,26.5611 34.6755,26.2681 34.5525,26.0031 L34.5525,26.0031 L31.9375,20.3791 L31.9375,20.2351 C31.9375,12.7191 26.2035,8.6631 20.8075,8.6631 Z M24.5389,13.7761 L21.2699,19.2241 L24.5359,19.2241 L18.5249,29.2701 L17.6919,28.9611 L17.7529,28.4911 L18.9939,22.4511 L15.6929,22.4511 L18.6899,13.7761 L24.5389,13.7761 Z M22.7729,14.7761 L19.4019,14.7761 L17.0969,21.4511 L20.2209,21.4511 L19.2599,26.1261 L22.7759,20.2241 L19.5039,20.2241 L22.7729,14.7761 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M20.8075,7.3631 C26.7985,7.3631 33.1635,11.8221 33.2365,20.0901 L33.2365,20.0901 L35.7315,25.4551 C36.0415,26.1201 35.9895,26.8871 35.5955,27.5061 C35.2005,28.1251 34.5265,28.4941 33.7925,28.4941 L33.7925,28.4941 L33.2375,28.4941 L33.2375,29.2341 C33.2375,32.6541 30.6235,35.4751 27.2875,35.8021 L27.2875,35.8021 L27.2875,41.0181 L12.5455,41.0181 L12.5455,34.3211 C12.5455,32.0301 11.7355,30.4281 10.7975,28.5721 C9.7035,26.4091 8.4645,23.9571 8.4645,20.0151 C8.4645,13.0381 14.0015,7.3631 20.8075,7.3631 Z M20.8075,8.6631 C13.9865,8.6631 9.7645,14.5561 9.7645,20.0151 C9.7645,23.6471 10.8795,25.8531 11.9575,27.9851 C12.9285,29.9061 13.8455,31.7211 13.8455,34.3211 L13.8455,34.3211 L13.8455,39.7191 L25.9875,39.7191 L25.9875,34.5341 L26.6375,34.5341 C29.5605,34.5341 31.9375,32.1561 31.9375,29.2341 L31.9375,29.2341 L31.9375,27.1941 L33.7925,27.1941 C34.0845,27.1941 34.3425,27.0531 34.4995,26.8071 C34.6565,26.5611 34.6755,26.2681 34.5525,26.0031 L34.5525,26.0031 L31.9375,20.3791 L31.9375,20.2351 C31.9375,12.7191 26.2035,8.6631 20.8075,8.6631 Z M23.7949,15.0161 L21.2699,19.2241 L24.4939,19.2241 L18.3089,30.5951 L17.4769,30.2861 L17.5369,29.8171 L18.9989,22.4511 L15.6929,22.4511 L18.2409,15.0751 L23.7949,15.0161 Z M22.0179,16.0351 L18.9559,16.0671 L17.0969,21.4511 L20.2159,21.4511 L19.0889,27.1321 L22.8179,20.2241 L19.5039,20.2241 L22.0179,16.0351 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`hnds-style-icon ${className}`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default Epilepsy;
