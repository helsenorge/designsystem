import React from 'react';
import {IconRawProps} from './Icon';

const DonorCard = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M28.2709,20.7681 C29.1249,21.5871 29.1529,22.9481 28.3349,23.8001 L24.1319,28.1471 L19.9309,23.8011 C19.1119,22.9481 19.1399,21.5871 19.9939,20.7681 C20.4089,20.3701 20.9439,20.1711 21.4789,20.1711 C22.0429,20.1711 22.6069,20.3921 23.0269,20.8301 L24.1319,21.9821 L25.2379,20.8301 C26.0569,19.9771 27.4169,19.9491 28.2709,20.7681 L28.2709,20.7681 Z M24.5159,20.1381 L24.1319,20.5381 L23.7489,20.1381 C22.5479,18.8871 20.5529,18.8461 19.3009,20.0461 C18.0499,21.2471 18.0089,23.2431 19.2109,24.4951 L24.1319,29.5851 L29.0549,24.4941 C30.2559,23.2431 30.2149,21.2471 28.9629,20.0461 C27.7119,18.8461 25.7169,18.8871 24.5159,20.1381 L24.5159,20.1381 Z M30.6589,27.2411 L30.9459,28.1991 L33.2959,27.4951 C31.8129,31.3541 28.0659,33.9791 23.8749,33.9791 C19.3679,33.9791 15.3709,30.9461 14.1539,26.6021 L13.1909,26.8721 C14.5279,31.6451 18.9219,34.9791 23.8749,34.9791 C28.3449,34.9791 32.3509,32.2601 34.0739,28.2221 L34.7989,30.2841 L35.7429,29.9521 L34.3949,26.1211 L30.6589,27.2411 Z M41.6369,36.8471 L6.1129,36.8471 L6.1129,10.9031 L36.0399,10.9031 L36.0399,16.5011 L41.6369,16.5011 L41.6369,36.8471 Z M37.3389,11.8221 L40.7179,15.2011 L37.3389,15.2011 L37.3389,11.8221 Z M36.9589,9.6031 L4.8129,9.6031 L4.8129,38.1471 L42.9379,38.1471 L42.9379,15.5811 L36.9589,9.6031 Z M17.0909,20.5091 L16.8039,19.5511 L14.4539,20.2561 C15.9369,16.3961 19.6839,13.7711 23.8749,13.7711 C28.3819,13.7711 32.3789,16.8041 33.5959,21.1471 L34.5589,20.8781 C33.2219,16.1051 28.8289,12.7711 23.8749,12.7711 C19.4049,12.7711 15.3999,15.4901 13.6759,19.5271 L12.9509,17.4651 L12.0079,17.7971 L13.3549,21.6281 L17.0909,20.5091 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M28.2225,13.6763 L30.2845,12.9503 L29.9525,12.0073 L26.1215,13.3553 L27.2405,17.0913 L28.1985,16.8043 L27.4945,14.4533 C31.3545,15.9373 33.9785,19.6843 33.9785,23.8753 C33.9785,28.3823 30.9455,32.3793 26.6025,33.5953 L26.8715,34.5583 C31.6455,33.2213 34.9785,28.8283 34.9785,23.8753 C34.9785,19.4053 32.2595,15.4003 28.2225,13.6763 L28.2225,13.6763 Z M41.6375,36.8473 L6.1125,36.8473 L6.1125,10.9033 L36.0395,10.9033 L36.0395,16.5013 L41.6375,16.5013 L41.6375,36.8473 Z M37.3395,11.8223 L40.7185,15.2013 L37.3395,15.2013 L37.3395,11.8223 Z M36.9585,9.6033 L4.8125,9.6033 L4.8125,38.1473 L42.9375,38.1473 L42.9375,15.5813 L36.9585,9.6033 Z M28.3345,23.8003 L24.1325,28.1473 L19.9305,23.8013 C19.1125,22.9473 19.1395,21.5873 19.9935,20.7683 C20.4095,20.3693 20.9445,20.1713 21.4785,20.1713 C22.0425,20.1713 22.6065,20.3923 23.0275,20.8303 L24.1325,21.9823 L25.2375,20.8303 C26.0565,19.9773 27.4175,19.9483 28.2705,20.7683 C29.1245,21.5873 29.1525,22.9473 28.3345,23.8003 L28.3345,23.8003 Z M28.9635,20.0463 C27.7115,18.8463 25.7165,18.8873 24.5155,20.1383 L24.1325,20.5383 L23.7485,20.1383 C22.5485,18.8873 20.5525,18.8453 19.3015,20.0463 C18.0505,21.2473 18.0085,23.2423 19.2105,24.4953 L24.1325,29.5853 L29.0555,24.4933 C30.2555,23.2423 30.2145,21.2473 28.9635,20.0463 L28.9635,20.0463 Z M19.5515,30.9463 L20.2555,33.2963 C16.3955,31.8133 13.7705,28.0663 13.7705,23.8753 C13.7705,19.3683 16.8045,15.3703 21.1475,14.1543 L20.8785,13.1913 C16.1045,14.5283 12.7705,18.9213 12.7705,23.8753 C12.7705,28.3443 15.4905,32.3503 19.5275,34.0733 L17.4655,34.7993 L17.7975,35.7423 L21.6285,34.3953 L20.5095,30.6583 L19.5515,30.9463 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default DonorCard;
