import React from 'react';
import {IconRawProps} from './Icon';

const Train = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M16.4663,24.1611 L16.4322507,17.4821 C16.4223,15.6111 17.9363,14.0811 19.8073,14.0711 L28.0963,14.0281 L28.1143,14.0281 C29.0143,14.0281 29.8613,14.3761 30.5013,15.0101 C31.1453,15.6471 31.5033,16.4981 31.5073,17.4031 L31.5423,24.0831 L16.4663,24.1611 Z M31.4153,14.0861 C30.5243,13.2021 29.3423,12.6851 28.0903,12.7271 L19.8003,12.7701 C17.2133,12.7841 15.1183,14.9011 15.1322302,17.4881 L15.1703,24.8171 C15.1713,24.9901 15.2403,25.1551 15.3623,25.2761 C15.4843,25.3961 15.6493,25.4651 15.8203,25.4651 L15.8233,25.4651 L32.1983,25.3801 C32.5573,25.3781 32.8473,25.0851 32.8453103,24.7261 L32.8073,17.3971 C32.8003,16.1431 32.3063,14.9681 31.4153,14.0861 L31.4153,14.0861 Z M20.5173,31.7141055 C20.1673,31.7151 19.8223,31.5791 19.5683,31.3271 C19.3143,31.0751 19.1733,30.7391 19.17128,30.3821 C19.1673,29.6431 19.7643,29.0401 20.5033,29.0361 L20.5103,29.0361 C20.8653,29.0361 21.1993,29.1731 21.4523,29.4231 C21.7063,29.6751 21.8473,30.0101 21.84932,30.3671 C21.8533,31.1061 21.2553,31.7101 20.5173,31.7141055 L20.5173,31.7141055 Z M20.5103,27.7351 L20.4963,27.7351 C19.0413,27.7431 17.8633,28.9331 17.870269,30.3881 C17.8743,31.0931 18.1523,31.7551 18.6533,32.2511 C19.1513,32.7431 19.8103,33.0151 20.5093,33.0151 L20.5243,33.0151 C21.9793,33.0071 23.1563,31.8161 23.1493311,30.3611 C23.1463,29.6561 22.8673,28.9941 22.3663,28.4991 C21.8693,28.0071 21.2103,27.7351 20.5103,27.7351 L20.5103,27.7351 Z M28.4073,35.8811 L19.7233,35.9261 L19.6893,35.9261 C19.4223,35.9261 19.1613,35.9051 18.9033,35.8741 L18.6393,35.7881 L18.6253,35.8321 C15.5113,35.3231 13.1163,32.6291 13.0993,29.3711 L13.0372113,17.3021 C13.0283,15.5411 13.7043,13.8831 14.9433,12.6321 C16.1813,11.3811 17.8323,10.6871 19.5923,10.6791 L28.2773,10.6341 C28.2893,10.6341 28.3013,10.6331 28.3133,10.6331 C30.0593,10.6331 31.7033,11.3091 32.9463,12.5391 C34.1973,13.7761 34.8913,15.4281 34.9003,17.1871 L34.9633886,29.2571 C34.9723,31.0171 34.2953,32.6761 33.0573,33.9281 C31.8193,35.1791 30.1673,35.8721 28.4073,35.8811 L28.4073,35.8811 Z M19.0263,38.7841 L19.5393,37.2191 C19.5893,37.2201 19.6383,37.2261 19.6893,37.2261 L19.7303,37.2261 L28.4143,37.1821 C28.5913,37.1811 28.7663,37.1661 28.9423,37.1531 L29.4763,38.7301 L19.0263,38.7841 Z M36.2624313,29.2511 L36.2003,17.1821 C36.1893,15.0741 35.3583,13.0971 33.8613,11.6141 C32.3623,10.1331 30.3783,9.3571 28.2703,9.3331 L19.5853,9.3781 C17.4783,9.3891 15.5013,10.2201 14.0193,11.7181 C12.5363,13.2161 11.7263,15.2011 11.7371894,17.3071 L11.7993,29.3771 C11.8203,33.2091 14.5843,36.3931 18.2153,37.0841 L16.6093,41.9871 L17.8443,42.3911 L18.5993,40.0881 L29.9173,40.0291 L30.6953,42.3251 L31.9263,41.9071 L30.2463,36.9501 C31.6503,36.6091 32.9393,35.8941 33.9813,34.8421 C35.4633,33.3441 36.2743,31.3581 36.2624313,29.2511 L36.2624313,29.2511 Z M27.5703,31.6771 C27.2163,31.6821 26.8753,31.5421 26.6213,31.2901 C26.3663,31.0381 26.2263,30.7031 26.22428,30.3461 C26.2203,29.6061 26.8183,29.0031 27.5563,28.9991 L27.5633,28.9991 C27.9183,28.9991 28.2523,29.1361 28.5053,29.3861 C28.7593,29.6381 28.9013,29.9731 28.90232,30.3311 C28.9063,31.0691 28.3083,31.6731 27.5703,31.6771 L27.5703,31.6771 Z M27.5493,27.6981 C26.0943,27.7061 24.9163,28.8961 24.9242595,30.3511 C24.9273,31.0571 25.2053,31.7191 25.7063,32.2141 C26.2043,32.7061 26.8623,32.9771 27.5623,32.9771 L27.5763,32.9771 C29.0323,32.9701 30.2103,31.7791 30.2023405,30.3251 C30.1983,29.6201 29.9213,28.9581 29.4203,28.4621 C28.9183,27.9671 28.2493,27.7231 27.5493,27.6981 L27.5493,27.6981 Z M26.3373,7.72410703 C26.8663,7.7221 27.2923,7.2911 27.2893157,6.7631 C27.2863,6.2341 26.8563,5.8081 26.3273,5.81009299 C25.7993,5.8131 25.3733,6.2441 25.3762843,6.7721 C25.3793,7.3011 25.8093,7.7261 26.3373,7.72410703 L26.3373,7.72410703 Z M21.7453,7.74210701 C22.2743,7.7391 22.7003,7.3081 22.6973157,6.7801 C22.6953,6.2521 22.2643,5.8261 21.7363,5.82809299 C21.2073,5.8311 20.7813,6.2621 20.7842843,6.7901 C20.7863,7.3181 21.2173,7.7441 21.7453,7.74210701 L21.7453,7.74210701 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M28.7397,32.0195 C28.4707,32.2905 28.1137,32.4415 27.7317,32.4435 L27.7237,32.4435 C26.9397,32.4435 26.2997,31.8075 26.2956797,31.0225 C26.2937,30.6405 26.4397,30.2805 26.7087,30.0085 C26.9767,29.7385 27.3357,29.5875 27.7167,29.5855 L27.7237,29.5855 C28.5087,29.5855 29.1487,30.2215 29.1537201,31.0065 C29.1557,31.3885 29.0087,31.7485 28.7397,32.0195 L28.7397,32.0195 Z M27.7237,28.2855 L27.7107,28.2855 C26.9817,28.2895 26.2977,28.5765 25.7847,29.0945 C25.2717,29.6135 24.9917,30.2995 24.9956577,31.0285 C25.0037,32.5285 26.2257,33.7445 27.7237,33.7445 L27.7387,33.7445 C28.4677,33.7405 29.1517,33.4525 29.6637,32.9335 C30.1767,32.4155 30.4567,31.7295 30.4527423,31.0005 C30.4457,29.5005 29.2227,28.2855 27.7237,28.2855 L27.7237,28.2855 Z M21.3687,32.0585 C21.1007,32.3295 20.7427,32.4795 20.3607,32.4815 L20.3537,32.4815 C19.5687,32.4815 18.9277,31.8455 18.9246799,31.0605 C18.9227,30.6785 19.0697,30.3185 19.3377,30.0465 C19.6057,29.7765 19.9647,29.6255 20.3457,29.6235 L20.3527,29.6235 C21.1377,29.6235 21.7787,30.2595 21.7817201,31.0445 C21.7837,31.4265 21.6367,31.7875 21.3687,32.0585 L21.3687,32.0585 Z M20.3537,28.3235 L20.3397,28.3235 C19.6107,28.3275 18.9267,28.6145 18.4137,29.1325 C17.9007,29.6515 17.6207,30.3375 17.6246577,31.0665 C17.6327,32.5665 18.8547,33.7825 20.3527,33.7825 L20.3677,33.7825 C21.0957,33.7785 21.7807,33.4905 22.2927,32.9725 C22.8057,32.4545 23.0857,31.7675 23.0827239,31.0395 C23.0747,29.5395 21.8517,28.3235 20.3537,28.3235 L20.3537,28.3235 Z M16.0977,24.5885 L16.0616497,17.5795 C16.0567,16.6235 16.4247,15.7235 17.0957,15.0445 C17.7677,14.3665 18.6637,13.9895 19.6187,13.9855 L28.2817,13.9405 L28.2997,13.9405 C30.2627,13.9405 31.8657,15.5325 31.8757,17.4975 L31.9117,24.5065 L16.0977,24.5885 Z M28.2997,12.6395 L28.2747,12.6395 L19.6117,12.6845 C18.3097,12.6915 17.0877,13.2055 16.1717,14.1305 C15.2567,15.0555 14.7557,16.2835 14.7616467,17.5845 L14.8017,25.2455 C14.8027,25.4175 14.8717,25.5825 14.9947,25.7045 C15.1157,25.8245 15.2807,25.8925 15.4517,25.8925 L15.4547,25.8925 L32.5687,25.8035 C32.9277,25.8015 33.2177,25.5085 33.2157103,25.1505 L33.1757,17.4915 C33.1617,14.8105 30.9767,12.6395 28.2997,12.6395 L28.2997,12.6395 Z M28.6067,36.8355 L19.5307,36.8825 C17.6927,36.8615 15.9437,36.1825 14.6307,34.8835 C13.3177,33.5835 12.5897,31.8505 12.5797,30.0035 L12.5136156,17.3905 C12.5047,15.5425 13.2157,13.8025 14.5137,12.4905 C15.8137,11.1765 17.5467,10.4485 19.3937,10.4395 L28.4697,10.3925 C28.4817,10.3925 28.4937,10.3915 28.5057,10.3915 C32.3027,10.3915 35.4017,13.4705 35.4217,17.2715 L35.4868041,29.8845 C35.4967,31.7325 34.7857,33.4725 33.4867,34.7865 C32.1867,36.0985 30.4537,36.8275 28.6067,36.8355 L28.6067,36.8355 Z M19.0267,38.7845 L19.2267,38.1705 C19.3157,38.1735 19.4037,38.1835 19.4917,38.1835 L19.5377,38.1835 L28.6137,38.1365 C28.8317,38.1355 29.0487,38.1195 29.2637,38.1015 L29.4767,38.7305 L19.0267,38.7845 Z M36.7868261,29.8785 L36.7207,17.2655 C36.6977,12.7485 33.0167,9.0915 28.5067,9.0915 L28.4637,9.0915 L19.3867,9.1385 C17.1927,9.1505 15.1347,10.0155 13.5907,11.5755 C12.0467,13.1355 11.2027,15.2035 11.2145738,17.3965 L11.2797,30.0095 C11.2907,32.2055 12.1567,34.2635 13.7167,35.8075 C14.8817,36.9605 16.3317,37.7235 17.9057,38.0305 L16.6097,41.9875 L17.8447,42.3915 L18.5987,40.0875 L29.9167,40.0295 L30.6957,42.3255 L31.9267,41.9075 L30.5627,37.8845 C32.0087,37.5255 33.3357,36.7865 34.4107,35.7005 C35.9537,34.1405 36.7987,32.0735 36.7868261,29.8785 L36.7868261,29.8785 Z M21.6447,7.39951508 C22.1967,7.3965 22.6417,6.9475 22.6387151,6.3945 C22.6357,5.8415 22.1867,5.3965 21.6347,5.4005 C21.0817,5.4025 20.6367,5.8525 20.6396849,6.4045 C20.6427,6.9575 21.0927,7.4025 21.6447,7.39951508 L21.6447,7.39951508 Z M26.4437,7.38051508 C26.9957,7.3785 27.4407,6.9275 27.4377151,6.3755 C27.4347,5.8245 26.9857,5.3785 26.4327,5.38148495 C25.8807,5.3845 25.4357,5.8335 25.4386849,6.3865 C25.4417,6.9385 25.8907,7.3835 26.4437,7.38051508 L26.4437,7.38051508 Z"
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

export default Train;
