import React from 'react';
import {IconRawProps} from './Icon';

const LawBook = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M35.9461,34.9484 L16.6331,34.9484 L16.6331,8.7314 L35.1811,8.7314 C35.6031,8.7314 35.9461,9.0744 35.9461,9.4964 L35.9461,34.9484 Z M35.9461,37.4264 L12.4711,37.4264 C12.6861,36.7464 13.3151,36.2494 14.0641,36.2494 L35.9461,36.2494 L35.9461,37.4264 Z M35.9461,38.8374 C35.9461,39.2594 35.6031,39.6014 35.1811,39.6014 L14.0641,39.6014 C13.3151,39.6014 12.6861,39.1044 12.4721,38.4264 L35.9461,38.4264 L35.9461,38.8374 Z M12.3871,10.4064 C12.3871,9.4824 13.1381,8.7314 14.0621,8.7314 L15.3331,8.7314 L15.3331,34.9484 L14.0641,34.9484 C13.4421,34.9484 12.8651,35.1414 12.3871,35.4694 L12.3871,10.4064 Z M35.1811,7.4304 L14.0621,7.4304 C12.4221,7.4304 11.0871,8.7654 11.0871,10.4064 L11.0871,37.5934 L11.1211,37.5934 C11.1081,37.7034 11.0871,37.8114 11.0871,37.9264 C11.0871,39.5664 12.4231,40.9024 14.0641,40.9024 L35.1811,40.9024 C36.3201,40.9024 37.2461,39.9754 37.2461,38.8374 L37.2461,9.4964 C37.2461,8.3574 36.3201,7.4304 35.1811,7.4304 L35.1811,7.4304 Z M28.3801,22.9264 C28.2271,23.1904 27.9811,23.3804 27.6861,23.4584 C27.3921,23.5364 27.0841,23.4984 26.8201,23.3444 L24.8211,22.1904 C24.5771,22.0374 24.3971,21.8064 24.3221,21.5264 C24.2431,21.2314 24.2841,20.9244 24.4361,20.6604 C24.7501,20.1144 25.4501,19.9264 25.9961,20.2424 L27.0711,20.8634 L27.0761,20.8554 L27.9621,21.3674 C28.2261,21.5194 28.4151,21.7654 28.4941,22.0594 C28.5721,22.3544 28.5321,22.6624 28.3801,22.9264 L28.3801,22.9264 Z M29.3331,23.4764 C29.6321,22.9584 29.7111,22.3534 29.5561,21.7754 C29.4021,21.1974 29.0301,20.7144 28.5121,20.4144 L24.9951,18.3844 C24.4501,18.0694 24.2621,17.3694 24.5761,16.8244 C24.8911,16.2774 25.5901,16.0914 26.0981,16.3824 L27.5721,17.4024 L28.1981,16.4984 L26.6861,15.4534 C25.6161,14.8364 24.2421,15.2054 23.6241,16.2744 C23.0261,17.3114 23.3601,18.6274 24.3541,19.2714 C24.0041,19.4614 23.6971,19.7404 23.4841,20.1094 C23.1841,20.6294 23.1051,21.2324 23.2601,21.8104 C23.4051,22.3554 23.7481,22.8084 24.2191,23.1114 L24.2181,23.1124 L24.2351,23.1224 C24.2591,23.1364 24.2791,23.1574 24.3041,23.1724 L27.8211,25.2034 C28.0861,25.3554 28.2751,25.6014 28.3531,25.8964 C28.4321,26.1904 28.3921,26.4984 28.2391,26.7614 C27.9251,27.3064 27.2271,27.4964 26.7031,27.1944 L24.2531,25.6114 L23.6561,26.5354 L26.1301,28.1334 C26.4821,28.3364 26.8671,28.4324 27.2471,28.4324 C28.0231,28.4324 28.7781,28.0304 29.1931,27.3124 C29.4911,26.7944 29.5711,26.1894 29.4161,25.6114 C29.2711,25.0704 28.9311,24.6194 28.4651,24.3164 C28.8221,24.1214 29.1241,23.8384 29.3331,23.4764 L29.3331,23.4764 Z"
    />
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(10.15 5.18)">
      <path d="M18.7129,16.7593 C18.5609,17.0243 18.3149,17.2133 18.0199,17.2913 C17.7249,17.3683 17.4169,17.3313 17.1529,17.1773 L15.1549,16.0233 C14.6399,15.6983 14.4629,15.0253 14.7699,14.4933 C15.0849,13.9463 15.7839,13.7583 16.3299,14.0753 L17.4049,14.6963 L17.4099,14.6893 L18.2959,15.2003 C18.5599,15.3533 18.7489,15.5993 18.8269,15.8943 C18.9059,16.1883 18.8659,16.4953 18.7129,16.7593 M19.6659,17.3103 C19.9649,16.7913 20.0449,16.1873 19.8899,15.6093 C19.7349,15.0303 19.3639,14.5473 18.8449,14.2473 L15.3289,12.2173 C14.7829,11.9033 14.5959,11.2023 14.9109,10.6573 C15.2249,10.1113 15.9229,9.9233 16.4319,10.2153 L17.9059,11.2363 L18.5319,10.3313 L17.0199,9.2863 C15.9489,8.6683 14.5759,9.0363 13.9579,10.1073 C13.3589,11.1443 13.6919,12.4603 14.6869,13.1053 C14.3379,13.2953 14.0299,13.5733 13.8169,13.9443 C13.2169,14.9843 13.5529,16.3033 14.5529,16.9453 L14.5519,16.9463 L14.5679,16.9543 C14.5919,16.9703 14.6119,16.9903 14.6379,17.0053 L18.1549,19.0363 C18.4199,19.1893 18.6079,19.4353 18.6869,19.7293 C18.7659,20.0243 18.7259,20.3313 18.5729,20.5953 C18.2579,21.1413 17.5609,21.3313 17.0369,21.0283 L14.5859,19.4453 L13.9889,20.3683 L16.4629,21.9663 C16.8159,22.1693 17.2009,22.2663 17.5809,22.2663 C18.3559,22.2663 19.1109,21.8633 19.5259,21.1463 C19.8249,20.6273 19.9039,20.0233 19.7499,19.4453 C19.6049,18.9043 19.2649,18.4523 18.7979,18.1503 C19.1549,17.9543 19.4569,17.6713 19.6659,17.3103" />
      <path d="M27.1948,27.8403 L6.4658,29.5683 L6.4658,3.3393 L26.4298,1.5703 C26.8518,1.5703 27.1948,1.9133 27.1948,2.3353 L27.1948,27.8403 Z M25.0138,34.4353 L3.8968,34.4353 C3.1478,34.4353 2.5198,33.9383 2.3048,33.2593 L25.7798,33.2593 L25.7798,33.6703 C25.7798,34.0923 25.4358,34.4353 25.0138,34.4353 L25.0138,34.4353 Z M25.7798,32.2593 L2.3048,32.2593 C2.5208,31.5793 3.1578,31.0813 3.9508,31.0793 L25.7798,29.2623 L25.7798,32.2593 Z M2.2198,5.2393 C2.2198,4.3163 2.9718,3.5653 3.9528,3.5623 L5.1658,3.4543 L5.1658,29.6753 L3.8968,29.7813 C3.2758,29.7813 2.6978,29.9733 2.2198,30.3003 L2.2198,5.2393 Z M26.3778,0.2733 L26.3728,0.2733 L3.8958,2.2643 C2.2548,2.2643 0.9208,3.5993 0.9208,5.2393 L0.9208,32.4263 L0.9388,32.4263 C0.9268,32.5353 0.9208,32.6473 0.9208,32.7593 C0.9208,34.4003 2.2558,35.7363 3.8968,35.7363 L25.0138,35.7363 C26.1528,35.7363 27.0798,34.8093 27.0798,33.6703 L27.0798,29.1533 L27.8988,29.0853 C28.2358,29.0583 28.4948,28.7763 28.4948,28.4383 L28.4948,2.3353 C28.4948,1.1983 27.5708,0.2733 26.3778,0.2733 L26.3778,0.2733 Z" />
    </g>
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

export default LawBook;
