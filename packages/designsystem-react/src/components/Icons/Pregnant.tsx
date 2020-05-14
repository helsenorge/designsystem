import React from 'react';
import {IconRawProps} from './Icon';

const Pregnant = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.6426,16.8561 C25.9206,16.8561 26.1446,16.6301 26.1446,16.3531 C26.1446,16.0761 25.9206,15.8511 25.6426,15.8511 C25.3656,15.8511 25.1406,16.0761 25.1406,16.3531 C25.1406,16.6301 25.3656,16.8561 25.6426,16.8561 L25.6426,16.8561 Z M20.3496,16.8561 C20.6266,16.8561 20.8516,16.6301 20.8516,16.3531 C20.8516,16.0761 20.6266,15.8511 20.3496,15.8511 C20.0726,15.8511 19.8476,16.0761 19.8476,16.3531 C19.8476,16.6301 20.0726,16.8561 20.3496,16.8561 L20.3496,16.8561 Z M25.8256,35.9281 C26.3346,35.9281 26.7496,36.3421 26.7496,36.8521 C26.7496,37.3621 26.3346,37.7761 25.8256,37.7761 L23.5786,37.7761 L23.5786,34.8251 L24.4266,34.8251 C24.6766,34.8251 24.8796,35.0281 24.8796,35.2781 L24.8796,35.9281 L25.8256,35.9281 Z M24.8226,44.3541 C19.9736,44.3541 16.0266,41.0441 15.9766,36.9621 C17.5906,38.2011 19.7436,38.9441 22.2776,39.0521 L22.2776,39.0771 L25.8256,39.0771 C27.0516,39.0771 28.0496,38.0791 28.0496,36.8521 C28.0496,35.7051 27.1766,34.7571 26.0596,34.6401 C25.8046,33.9881 25.1686,33.5241 24.4266,33.5241 L22.9276,33.5241 C19.9196,33.5241 18.3296,32.4011 18.3296,30.2751 C18.3296,29.7971 18.3936,29.3941 18.5266,29.0441 L17.3106,28.5841 C17.1216,29.0841 17.0296,29.6361 17.0296,30.2751 C17.0296,31.5851 17.5566,34.5581 22.2776,34.8081 L22.2776,37.7591 C18.3566,37.5591 14.0776,35.5201 14.0776,30.2751 C14.0776,27.6431 15.1806,25.5681 17.2756,24.2441 C18.8216,25.5141 20.7516,26.2091 22.7616,26.2091 L23.1596,26.2091 C25.1236,26.2091 27.0206,25.5411 28.5506,24.3201 C30.5796,25.5971 31.7776,27.5161 31.7776,29.5251 C31.7776,29.8291 31.7496,30.1301 31.6976,30.4291 C30.8286,29.7411 29.8146,29.1731 28.6776,28.7701 L28.2426,29.9951 C31.5406,31.1641 33.6716,33.8691 33.6716,36.8851 C33.6716,41.0031 29.7026,44.3541 24.8226,44.3541 L24.8226,44.3541 Z M32.7746,31.4261 C32.9636,30.8051 33.0776,30.1691 33.0776,29.5251 C33.0776,26.9161 31.4796,24.4601 28.8036,22.9591 L28.3996,22.7311 L28.0526,23.0401 C26.7026,24.2451 24.9646,24.9081 23.1596,24.9081 L22.7616,24.9081 C20.9606,24.9081 19.2356,24.2521 17.8886,23.0581 L17.6566,22.5291 L17.0316,22.8771 C14.2886,24.4051 12.7776,27.0321 12.7776,30.2751 C12.7776,32.4661 13.4936,34.3521 14.7556,35.8141 C14.7056,36.1691 14.6716,36.5271 14.6716,36.8851 C14.6716,41.7201 19.2256,45.6551 24.8226,45.6551 C30.4186,45.6551 34.9726,41.7201 34.9726,36.8851 C34.9726,34.8501 34.1696,32.9431 32.7746,31.4261 L32.7746,31.4261 Z M15.1186,14.0561 L15.3796,14.0561 L15.3796,15.5971 L15.1186,15.5971 C14.6926,15.5971 14.3476,15.2521 14.3476,14.8271 C14.3476,14.4021 14.6926,14.0561 15.1186,14.0561 L15.1186,14.0561 Z M16.6796,14.0561 L17.4076,14.0561 C18.9266,14.0561 20.2546,13.2151 20.9486,11.9751 C21.6566,13.2161 22.9936,14.0561 24.5216,14.0561 L29.2426,14.0561 L29.2426,16.0491 C29.2426,19.4031 26.5136,22.1311 23.1596,22.1311 L22.7616,22.1311 C19.4086,22.1311 16.6796,19.4031 16.6796,16.0491 L16.6796,14.0561 Z M16.6796,12.7461 C16.6796,9.3921 19.4086,6.6641 22.7616,6.6641 L23.1596,6.6641 C26.5136,6.6641 29.2426,9.3921 29.2426,12.7461 L29.2426,13.0051 L24.5216,13.0051 C22.8346,13.0051 21.4626,11.6331 21.4626,9.9471 L21.4626,9.7331 L20.4126,9.7331 L20.4126,10.0011 C20.4126,11.6581 19.0646,13.0051 17.4076,13.0051 L16.6796,13.0051 L16.6796,12.7461 Z M22.9606,3.3951 C24.2466,3.3951 25.2896,4.4181 25.3376,5.6921 C24.6486,5.4781 23.9176,5.3631 23.1596,5.3631 L22.7616,5.3631 C22.0036,5.3631 21.2726,5.4781 20.5836,5.6921 C20.6316,4.4181 21.6756,3.3951 22.9606,3.3951 L22.9606,3.3951 Z M30.5416,14.0561 L30.8036,14.0561 C31.2286,14.0561 31.5746,14.4021 31.5746,14.8271 C31.5746,15.2521 31.2286,15.5971 30.8036,15.5971 L30.5416,15.5971 L30.5416,14.0561 Z M15.1186,16.6481 L15.4096,16.6481 C15.7166,20.4391 18.8926,23.4321 22.7616,23.4321 L23.1596,23.4321 C27.0286,23.4321 30.2056,20.4391 30.5116,16.6481 L30.8036,16.6481 C31.8076,16.6481 32.6246,15.8311 32.6246,14.8271 C32.6246,13.8231 31.8076,13.0051 30.8036,13.0051 L30.5416,13.0051 L30.5416,12.7461 C30.5416,9.9361 28.9636,7.4891 26.6466,6.2421 L26.6466,5.7811 C26.6466,3.7491 24.9936,2.0951 22.9606,2.0951 C20.9286,2.0951 19.2746,3.7491 19.2746,5.7811 L19.2746,6.2421 C16.9576,7.4891 15.3796,9.9361 15.3796,12.7461 L15.3796,13.0051 L15.1186,13.0051 C14.1136,13.0051 13.2966,13.8231 13.2966,14.8271 C13.2966,15.8311 14.1136,16.6481 15.1186,16.6481 L15.1186,16.6481 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.6427,18.3561 C25.9197,18.3561 26.1447,18.1301 26.1447,17.8531 C26.1447,17.5761 25.9197,17.3511 25.6427,17.3511 C25.3657,17.3511 25.1407,17.5761 25.1407,17.8531 C25.1407,18.1301 25.3657,18.3561 25.6427,18.3561 L25.6427,18.3561 Z M20.3497,18.3561 C20.6267,18.3561 20.8517,18.1301 20.8517,17.8531 C20.8517,17.5761 20.6267,17.3511 20.3497,17.3511 C20.0727,17.3511 19.8477,17.5761 19.8477,17.8531 C19.8477,18.1301 20.0727,18.3561 20.3497,18.3561 L20.3497,18.3561 Z M15.1177,15.5561 L15.3797,15.5561 L15.3797,16.0491 C15.3797,16.0671 15.3817,16.0851 15.3817,16.1021 L15.3817,17.0971 L15.1177,17.0971 C14.6927,17.0971 14.3477,16.7521 14.3477,16.3271 C14.3477,15.9021 14.6927,15.5561 15.1177,15.5561 L15.1177,15.5561 Z M16.6797,15.5561 L17.4077,15.5561 C18.9267,15.5561 20.2547,14.7151 20.9487,13.4751 C21.6567,14.7161 22.9937,15.5561 24.5217,15.5561 L29.2427,15.5561 L29.2427,16.0491 C29.2427,19.4031 26.5137,22.1311 23.1597,22.1311 L22.7617,22.1311 C19.4087,22.1311 16.6797,19.4031 16.6797,16.0491 L16.6797,15.5561 Z M16.6797,12.7461 C16.6797,9.3921 19.4087,6.6641 22.7617,6.6641 L23.1597,6.6641 C26.5137,6.6641 29.2427,9.3921 29.2427,12.7461 L29.2427,14.5051 L24.5217,14.5051 C22.8347,14.5051 21.4627,13.1331 21.4627,11.4471 L21.4627,11.2331 L20.4127,11.2331 L20.4127,11.5011 C20.4127,13.1581 19.0647,14.5051 17.4077,14.5051 L16.6797,14.5051 L16.6797,12.7461 Z M22.9607,4.4931 C23.8037,4.4931 24.5417,4.9341 24.9657,5.5951 C24.3867,5.4491 23.7837,5.3631 23.1597,5.3631 L22.7617,5.3631 C22.1377,5.3631 21.5347,5.4491 20.9557,5.5951 C21.3797,4.9341 22.1187,4.4931 22.9607,4.4931 L22.9607,4.4931 Z M30.5397,16.1001 C30.5397,16.0831 30.5417,16.0661 30.5417,16.0491 L30.5417,15.5561 L30.8037,15.5561 C31.2287,15.5561 31.5747,15.9021 31.5747,16.3271 C31.5747,16.7521 31.2287,17.0971 30.8037,17.0971 L30.5397,17.0971 L30.5397,16.1001 Z M15.1177,18.1481 L15.6877,18.1481 C16.5947,21.1991 19.4207,23.4321 22.7617,23.4321 L23.1597,23.4321 C26.5007,23.4321 29.3277,21.1991 30.2337,18.1481 L30.8037,18.1481 C31.8077,18.1481 32.6247,17.3311 32.6247,16.3271 C32.6247,15.3231 31.8077,14.5051 30.8037,14.5051 L30.5417,14.5051 L30.5417,12.7461 C30.5417,9.9101 28.9317,7.4451 26.5797,6.2091 C26.2627,4.4961 24.7637,3.1921 22.9607,3.1921 C21.1577,3.1921 19.6597,4.4961 19.3427,6.2091 C16.9897,7.4451 15.3797,9.9101 15.3797,12.7461 L15.3797,14.5051 L15.1177,14.5051 C14.1137,14.5051 13.2967,15.3231 13.2967,16.3271 C13.2967,17.3311 14.1137,18.1481 15.1177,18.1481 L15.1177,18.1481 Z M25.8257,35.9281 C26.3347,35.9281 26.7497,36.3421 26.7497,36.8521 C26.7497,37.3621 26.3347,37.7761 25.8257,37.7761 L23.5787,37.7761 L23.5787,34.8251 L24.4267,34.8251 C24.6767,34.8251 24.8797,35.0281 24.8797,35.2781 L24.8797,35.9281 L25.8257,35.9281 Z M25.1637,44.3541 C20.0417,44.3541 16.0267,41.1141 15.9767,36.9621 C17.5907,38.2011 19.7437,38.9441 22.2777,39.0521 L22.2777,39.0771 L25.8257,39.0771 C27.0517,39.0771 28.0497,38.0791 28.0497,36.8521 C28.0497,35.7051 27.1767,34.7571 26.0597,34.6401 C25.8047,33.9881 25.1687,33.5241 24.4267,33.5241 L22.9277,33.5241 C19.9197,33.5241 18.3297,32.4011 18.3297,30.2751 C18.3297,29.7971 18.3937,29.3941 18.5267,29.0441 L17.3107,28.5841 C17.1217,29.0841 17.0297,29.6361 17.0297,30.2751 C17.0297,31.5851 17.5567,34.5581 22.2777,34.8081 L22.2777,37.7591 C18.3567,37.5591 14.0777,35.5201 14.0777,30.2751 C14.0777,27.6431 15.1807,25.5681 17.2757,24.2441 C18.8217,25.5141 20.7517,26.2091 22.7617,26.2091 L23.1597,26.2091 C25.1237,26.2091 27.0207,25.5411 28.5507,24.3201 C30.5797,25.5971 31.7777,27.5161 31.7777,29.5251 C31.7777,29.6731 31.7637,29.8201 31.7507,29.9681 C30.8297,29.4871 29.7917,29.0781 28.6337,28.7561 L28.2867,30.0081 C32.7427,31.2441 35.1967,33.6861 35.1967,36.8851 C35.1967,40.4831 32.0577,44.3541 25.1637,44.3541 L25.1637,44.3541 Z M32.9597,30.6931 C33.0307,30.3071 33.0777,29.9181 33.0777,29.5251 C33.0777,26.9161 31.4797,24.4601 28.8037,22.9591 L28.3997,22.7311 L28.0527,23.0401 C26.7027,24.2451 24.9647,24.9081 23.1597,24.9081 L22.7617,24.9081 C20.9557,24.9081 19.2247,24.2481 17.8757,23.0461 L17.6247,22.5461 L17.0317,22.8771 C14.2887,24.4051 12.7777,27.0331 12.7777,30.2751 C12.7777,32.4691 13.4947,34.3581 14.7617,35.8211 C14.7077,36.1731 14.6717,36.5281 14.6717,36.8851 C14.6717,41.8021 19.2807,45.6551 25.1637,45.6551 C32.6037,45.6551 36.4967,41.2431 36.4967,36.8851 C36.4967,34.3911 35.2427,32.2561 32.9597,30.6931 L32.9597,30.6931 Z"
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

export default Pregnant;
