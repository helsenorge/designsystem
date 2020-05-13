import React from 'react';
import {IconRawProps} from './Icon';

const BeerAndPills = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M22.8535,42.7053 L11.6365,42.7053 L11.6365,21.2213 C11.6365,20.0303 12.1385,18.8853 13.0145,18.0793 L13.1175,17.9853 C13.7015,17.4493 14.1045,16.7253 14.2535,15.9453 L14.6085,14.0903 C14.7675,14.2363 14.9635,14.4243 15.2145,14.6833 C15.7335,15.2173 16.4545,15.5213 17.1965,15.5213 L17.2195,15.5213 C17.9695,15.5153 18.6655,15.2113 19.1765,14.6663 C19.4625,14.3603 19.6825,14.1543 19.8535,14.0063 L20.2365,15.9453 C20.3855,16.7243 20.7895,17.4493 21.3715,17.9843 L21.4745,18.0793 C22.3515,18.8853 22.8535,20.0303 22.8535,21.2213 L22.8535,42.7053 Z M16.0175,6.7103 L18.4155,6.7103 L19.6185,12.8103 C19.3145,13.0003 18.9175,13.3333 18.3745,13.9133 C18.0705,14.2373 17.6575,14.4183 17.2095,14.4213 C17.2055,14.4223 17.2005,14.4223 17.1955,14.4223 C16.7435,14.4223 16.3205,14.2433 16.0035,13.9163 C15.4765,13.3743 15.1145,13.0563 14.8425,12.8613 L16.0175,6.7103 Z M15.6965,4.4343 C15.7405,4.1843 15.9565,4.0033 16.2085,4.0033 L18.2805,4.0033 C18.5345,4.0033 18.7495,4.1843 18.7885,4.3853 L18.8885,5.4113 L15.5995,5.4113 L15.6965,4.4343 Z M22.2535,17.0293 C21.8735,16.6793 21.6105,16.2073 21.5125,15.6973 L19.7405,6.7103 L20.3245,6.7103 L20.0755,4.2083 C19.9205,3.3363 19.1655,2.7033 18.2805,2.7033 L16.2085,2.7033 C15.3235,2.7033 14.5695,3.3363 14.4095,4.2573 L14.1655,6.7103 L14.6935,6.7103 L12.9765,15.7013 C12.8795,16.2083 12.6175,16.6793 12.2385,17.0283 L12.1345,17.1223 C10.9925,18.1733 10.3355,19.6673 10.3355,21.2213 L10.3355,44.0063 L24.1545,44.0063 L24.1545,21.2213 C24.1545,19.6663 23.4985,18.1733 22.3565,17.1243 L22.2535,17.0293 Z M26.7515,30.0583 L38.3395,30.0583 L38.3395,25.7693 L26.7515,25.7693 L26.7515,30.0583 Z M38.3395,42.7053 L26.7515,42.7053 L26.7515,40.7203 L33.8365,40.7203 L33.8365,33.7473 L26.7515,33.7473 L26.7515,31.3583 L38.3395,31.3583 L38.3395,42.7053 Z M26.7515,39.6203 L32.7365,39.6203 L32.7365,34.8473 L26.7515,34.8473 L26.7515,39.6203 Z M25.4515,44.0063 L39.6405,44.0063 L39.6405,24.4693 L25.4515,24.4693 L25.4515,44.0063 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M12.9788 40.8303L1.7618 40.8303 1.7618 19.3463C1.7618 18.1553 2.2638 17.0103 3.1398 16.2043L3.2428 16.1103C3.8268 15.5743 4.2298 14.8503 4.3788 14.0703L4.7338 12.2153C4.8928 12.3613 5.0888 12.5493 5.3398 12.8083 5.8588 13.3423 6.5798 13.6463 7.3218 13.6463L7.3448 13.6463C8.0948 13.6403 8.7908 13.3363 9.3018 12.7913 9.5878 12.4853 9.8078 12.2793 9.9788 12.1313L10.3618 14.0703C10.5108 14.8493 10.9148 15.5743 11.4968 16.1093L11.5998 16.2043C12.4768 17.0103 12.9788 18.1553 12.9788 19.3463L12.9788 40.8303zM8.5408 4.8353L9.7438 10.9353C9.4398 11.1253 9.0428 11.4583 8.4998 12.0383 8.1958 12.3623 7.7828 12.5433 7.3348 12.5463 7.3308 12.5473 7.3258 12.5473 7.3208 12.5473 6.8688 12.5473 6.4458 12.3683 6.1288 12.0413 5.6018 11.4983 5.2398 11.1813 4.9678 10.9863L6.1428 4.8353 8.5408 4.8353zM5.8218 2.5593C5.8658 2.3093 6.0818 2.1283 6.3338 2.1283L8.4058 2.1283C8.6598 2.1283 8.8748 2.3093 8.9138 2.5103L9.0138 3.5363 5.7248 3.5363 5.8218 2.5593zM12.3788 15.1543C11.9988 14.8043 11.7358 14.3323 11.6378 13.8223L9.8658 4.8353 10.4498 4.8353 10.2008 2.3333C10.0458 1.4613 9.2908.8283 8.4058.8283L6.3338.8283C5.4488.8283 4.6948 1.4613 4.5348 2.3823L4.2908 4.8353 4.8188 4.8353 3.1018 13.8263C3.0048 14.3333 2.7428 14.8043 2.3638 15.1533L2.2598 15.2473C1.1178 16.2983.4608 17.7923.4608 19.3463L.4608 42.1313 14.2798 42.1313 14.2798 19.3463C14.2798 17.7913 13.6238 16.2983 12.4818 15.2493L12.3788 15.1543zM28.4651 40.8303L16.8771 40.8303 16.8771 38.8453 23.9621 38.8453 23.9621 31.8723 16.8771 31.8723 16.8771 29.4833 28.4651 29.4833 28.4651 40.8303zM16.8771 37.7453L22.8621 37.7453 22.8621 32.9723 16.8771 32.9723 16.8771 37.7453zM19.1501 20.1823L30.1081 23.9513 28.7121 28.0073 17.7541 24.2373 19.1501 20.1823zM31.7601 23.1443L18.3431 18.5293 16.1021 25.0443 25.2261 28.1833 15.5761 28.1833 15.5761 42.1313 29.7661 42.1313 29.7661 28.9413 31.7601 23.1443z"
      transform="translate(9.88 1.89)"
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

export default BeerAndPills;
