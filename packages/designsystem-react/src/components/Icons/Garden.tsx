import React from 'react';
import {IconRawProps} from './Icon';

const Garden = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M18.2293,26.8535 C20.3513,26.8535 22.1143,28.4285 22.4093,30.4705 C24.4133,30.7605 25.9673,32.4625 26.0243,34.5315 C27.3593,35.2705 28.1993,36.6735 28.1993,38.2245 C28.1993,40.5525 26.3053,42.4475 23.9763,42.4475 L23.9763,42.4475 L12.2403,42.4475 C9.9113,42.4475 8.0163,40.5525 8.0163,38.2245 C8.0163,36.7755 8.7643,35.4405 9.9653,34.6715 C9.8213,34.2455 9.7483,33.8095 9.7483,33.3685 C9.7483,31.0395 11.6433,29.1455 13.9723,29.1455 C14.1363,29.1455 14.3013,29.1565 14.4723,29.1795 C15.1823,27.7685 16.6283,26.8535 18.2293,26.8535 Z M31.2855,7.6097 C32.4945,7.6097 33.5255,8.3057 33.9775,9.4277 L33.9775,9.4277 L39.7715,23.8247 C40.1315,24.7207 40.0245,25.7327 39.4835,26.5327 C38.9435,27.3317 38.0445,27.8097 37.0795,27.8097 L37.0795,27.8097 L31.9355,27.8097 L31.9355,41.7977 L30.6355,41.7977 L30.6355,27.8097 L25.4915,27.8097 C24.5255,27.8097 23.6275,27.3317 23.0865,26.5327 C22.5465,25.7327 22.4385,24.7207 22.7995,23.8247 L22.7995,23.8247 L28.5935,9.4277 C29.0445,8.3057 30.0765,7.6097 31.2855,7.6097 Z M36.2361,35.1489 L37.2621,35.9469 C35.7611,37.8769 35.4461,40.1939 35.4461,41.7969 L35.4461,41.7969 L34.1461,41.7969 C34.1461,39.9899 34.5081,37.3699 36.2361,35.1489 L36.2361,35.1489 Z M38.4469,38.0304 L38.6449,39.3154 C38.0859,39.4014 37.3989,40.7694 37.3989,41.7974 L37.3989,41.7974 L36.0989,41.7974 C36.0989,40.4084 37.0139,38.2504 38.4469,38.0304 L38.4469,38.0304 Z M18.2293,28.1535 C16.9913,28.1535 15.8853,28.9485 15.4783,30.1325 L15.4783,30.1325 L15.2823,30.7005 L14.7003,30.5505 C14.4233,30.4785 14.1913,30.4445 13.9723,30.4445 C12.3603,30.4445 11.0483,31.7565 11.0483,33.3685 C11.0483,33.8085 11.1573,34.2465 11.3713,34.6705 L11.3713,34.6705 L11.6773,35.2795 L11.0553,35.5575 C9.9983,36.0275 9.3163,37.0745 9.3163,38.2245 C9.3163,39.8355 10.6273,41.1475 12.2403,41.1475 L12.2403,41.1475 L23.9763,41.1475 C25.5883,41.1475 26.8993,39.8355 26.8993,38.2245 C26.8993,37.0405 26.1923,35.9815 25.0983,35.5255 L25.0983,35.5255 L24.6633,35.3445 L24.7173,34.7305 C24.7263,33.0385 23.4143,31.7275 21.8023,31.7275 L21.8023,31.7275 L21.1523,31.7275 L21.1523,31.0775 C21.1523,29.4645 19.8413,28.1535 18.2293,28.1535 Z M31.2855,8.9087 C30.7615,8.9087 30.0965,9.1727 29.7995,9.9127 L29.7995,9.9127 L24.0055,24.3097 C23.8035,24.8117 23.8615,25.3567 24.1635,25.8047 C24.4665,26.2527 24.9505,26.5097 25.4915,26.5097 L25.4915,26.5097 L30.6355,26.5097 L30.6355,20.8937 L27.9195,18.6097 L28.7555,17.6147 L30.6355,19.1957 L30.6355,16.0177 L31.9355,16.0177 L31.9355,22.0957 L33.8145,20.5147 L34.6515,21.5097 L31.9355,23.7937 L31.9355,26.5097 L37.0795,26.5097 C37.6205,26.5097 38.1035,26.2527 38.4065,25.8047 C38.7095,25.3567 38.7665,24.8117 38.5655,24.3097 L38.5655,24.3097 L32.7715,9.9127 C32.4735,9.1727 31.8085,8.9087 31.2855,8.9087 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M18.2299,26.8535 C20.3519,26.8535 22.1149,28.4285 22.4099,30.4705 C24.4139,30.7605 25.9669,32.4625 26.0249,34.5315 C27.3599,35.2705 28.1999,36.6735 28.1999,38.2245 C28.1999,40.5525 26.3059,42.4475 23.9769,42.4475 L23.9769,42.4475 L12.2409,42.4475 C9.9119,42.4475 8.0169,40.5525 8.0169,38.2245 C8.0169,36.7755 8.7649,35.4405 9.9649,34.6715 C9.8219,34.2455 9.7489,33.8095 9.7489,33.3685 C9.7489,31.0395 11.6439,29.1455 13.9719,29.1455 C14.1369,29.1455 14.3009,29.1565 14.4729,29.1795 C15.1829,27.7685 16.6289,26.8535 18.2299,26.8535 Z M30.6507,9.1986 C31.2367,8.1416 32.3467,7.5776 33.5467,7.7276 C34.7467,7.8776 35.6837,8.6966 35.9927,9.8656 L35.9927,9.8656 L39.9607,24.8686 C40.2077,25.8016 39.9757,26.7926 39.3407,27.5196 C38.7857,28.1556 37.9887,28.5126 37.1567,28.5126 C37.0377,28.5126 36.9167,28.5046 36.7967,28.4896 L36.7967,28.4896 L31.9807,27.8896 C31.8677,31.6746 31.8947,35.5156 31.9187,38.6206 C31.9277,39.7866 31.9357,40.8576 31.9357,41.7976 L31.9357,41.7976 L30.6357,41.7976 C30.6357,40.8606 30.6277,39.7926 30.6187,38.6306 C30.5947,35.4786 30.5677,31.5786 30.6857,27.7276 L30.6857,27.7276 L25.2977,27.0566 C24.3397,26.9366 23.5067,26.3516 23.0697,25.4906 C22.6327,24.6296 22.6507,23.6126 23.1197,22.7686 L23.1197,22.7686 Z M36.2362,35.1489 L37.2622,35.9469 C35.7612,37.8769 35.4462,40.1939 35.4462,41.7969 L35.4462,41.7969 L34.1462,41.7969 C34.1462,39.9899 34.5092,37.3699 36.2362,35.1489 L36.2362,35.1489 Z M38.4475,38.0304 L38.6445,39.3154 C38.0865,39.4014 37.3995,40.7694 37.3995,41.7974 L37.3995,41.7974 L36.0995,41.7974 C36.0995,40.4084 37.0145,38.2504 38.4475,38.0304 L38.4475,38.0304 Z M18.2299,28.1535 C16.9919,28.1535 15.8859,28.9485 15.4779,30.1325 L15.4779,30.1325 L15.2829,30.7005 L14.7009,30.5505 C14.4239,30.4785 14.1919,30.4445 13.9719,30.4445 C12.3599,30.4445 11.0489,31.7565 11.0489,33.3685 C11.0489,33.8085 11.1579,34.2465 11.3719,34.6705 L11.3719,34.6705 L11.6779,35.2795 L11.0549,35.5575 C9.9989,36.0275 9.3169,37.0745 9.3169,38.2245 C9.3169,39.8355 10.6279,41.1475 12.2409,41.1475 L12.2409,41.1475 L23.9769,41.1475 C25.5889,41.1475 26.8999,39.8355 26.8999,38.2245 C26.8999,37.0405 26.1929,35.9815 25.0989,35.5255 L25.0989,35.5255 L24.6639,35.3445 L24.7169,34.7305 C24.7269,33.0385 23.4149,31.7275 21.8029,31.7275 L21.8029,31.7275 L21.1529,31.7275 L21.1529,31.0775 C21.1529,29.4645 19.8419,28.1535 18.2299,28.1535 Z M33.3857,9.0176 C32.8657,8.9536 32.1747,9.1326 31.7867,9.8296 L31.7867,9.8296 L24.2567,23.3986 C23.9937,23.8726 23.9837,24.4196 24.2287,24.9016 C24.4737,25.3846 24.9217,25.6986 25.4587,25.7666 L25.4587,25.7666 L30.7317,26.4236 C30.8077,24.5176 30.9237,22.6446 31.1007,20.9086 L31.1007,20.9086 L28.4757,18.4746 L29.3597,17.5206 L31.2897,19.3106 C31.4547,18.0626 31.6557,16.9056 31.9057,15.8926 L31.9057,15.8926 L33.1677,16.2036 C32.7597,17.8606 32.4817,19.9226 32.2897,22.1716 L32.2897,22.1716 L34.2717,20.6626 L35.0597,21.6976 L32.1597,23.9046 C32.1037,24.7816 32.0607,25.6796 32.0257,26.5846 L32.0257,26.5846 L36.9577,27.1996 C37.4937,27.2676 38.0057,27.0716 38.3617,26.6646 C38.7177,26.2576 38.8417,25.7236 38.7037,25.2016 L38.7037,25.2016 L34.7367,10.1976 C34.5317,9.4266 33.9047,9.0826 33.3857,9.0176 Z"
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

export default Garden;
