import React from 'react';
import {IconRawProps} from './Icon';

const HandWaving = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const hasHover = true;
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered || !hasHover ? (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M35.7753,35.722 C34.0203,37.495 31.6803,38.479 29.1853,38.4931726 C26.6853,38.508 24.3393,37.545 22.5673,35.79 L14.0673,27.379 C13.5763,26.893 13.5693,26.101 14.0523,25.613 C14.2863,25.376 14.5983,25.246 14.9313,25.245 L14.9343,25.245 C15.2673,25.245 15.5813,25.374 15.8183,25.61 L20.2753,30.021 L21.1903,29.097 L14.6533,22.627 C14.4163,22.392 14.2853,22.078 14.2843,21.743 C14.2833,21.407 14.4133,21.088 14.6513,20.848 C15.1413,20.354 15.9393,20.347 16.4303,20.832 L21.5953,25.944 L22.5093,25.02 L15.4563,18.038 C15.2263,17.811 15.1073,17.494 15.1223,17.146 C15.1373,16.775 15.2993,16.414 15.5783,16.133 C15.8573,15.852 16.2143,15.686 16.5863,15.666 C16.9343,15.656 17.2533,15.764 17.4823,15.991 L19.3703,17.86 C19.3713,17.86 19.3713,17.86 19.3723,17.861 L24.9153,23.347 L25.8303,22.423 L20.2863,16.937 C19.7953,16.451 19.7943,15.652 20.2843,15.157 C20.7733,14.661 21.5713,14.653 22.0643,15.142 L30.8283,23.776 C30.3273,24.097 29.8623,24.475 29.4873,24.943 C28.1013,26.669 27.8843,29.043 28.9333,30.993 L30.0783,30.375 C29.2763,28.888 29.4423,27.075 30.5013,25.757 C30.9393,25.212 31.5083,24.783 32.1473,24.515 C32.4023,24.408 32.5623,24.152 32.5453,23.875 L32.2393,18.952 C32.1943,18.335 32.3613,17.819 32.7363,17.416 C33.1023,17.025 33.6623,16.762 34.2873,16.678 L37.8043,26.865 C38.8733,29.984 38.0953,33.378 35.7753,35.722 M39.0343,26.442 L35.3543,15.787 C35.2643,15.526 35.0193,15.351 34.7433,15.349 L34.7233,15.349 C33.5563,15.349 32.4863,15.779 31.7863,16.53 C31.1633,17.198 30.8713,18.069 30.9423,19.04 L31.1423,22.26 L22.9773,14.217 C21.9773,13.227 20.3543,13.239 19.3593,14.243 C19.0353,14.571 18.8283,14.967 18.7163,15.383 L18.3973,15.067 C17.9033,14.578 17.2353,14.325 16.5183,14.368 C15.8233,14.405 15.1613,14.706 14.6543,15.219 C14.1473,15.731 13.8523,16.396 13.8233,17.091 C13.7933,17.81 14.0483,18.475 14.5413,18.962 L14.8613,19.28 C14.4463,19.395 14.0523,19.606 13.7273,19.934 C13.2463,20.42 12.9823,21.064 12.9843,21.746 C12.9853,22.43 13.2543,23.071 13.7393,23.551 L14.2453,24.051 C13.8273,24.169 13.4413,24.382 13.1283,24.699 C12.1413,25.696 12.1523,27.313 13.1533,28.303 L21.6523,36.714 C23.6593,38.701 26.3143,39.792 29.1353,39.792 L29.1923,39.792 C32.0343,39.778 34.7003,38.657 36.6993,36.636 C39.3693,33.939 40.2633,30.034 39.0343,26.442 M14.4033,37.261 C12.4533,37.261 10.7783,36.669 9.5553,35.548 C8.2843,34.384 7.6013,32.726 7.5803,30.751 L6.5803,30.763 C6.6053,33.02 7.4003,34.93 8.8793,36.285 C10.2913,37.579 12.1983,38.261 14.4033,38.261 C14.4423,38.261 14.4823,38.26 14.5213,38.26 L14.5103,37.26 C14.4743,37.26 14.4393,37.261 14.4033,37.261 M28.2033,8.377 C29.6463,9.319 30.5903,10.844 30.9333,12.788 L31.9183,12.615 C31.5263,10.391 30.4303,8.636 28.7503,7.539 C27.1183,6.475 25.0833,6.12 22.8623,6.51 L23.0353,7.494 C25.0013,7.145 26.7883,7.452 28.2033,8.377 M23.2463,8.69 L23.4203,9.674 C25.6213,9.288 28.2853,10.515 28.7533,13.173 L29.7383,12.999 C29.1623,9.734 25.9213,8.212 23.2463,8.69 M10.6553,34.66 C11.7033,35.544 13.0783,36.047 14.4363,36.047 L14.4973,36.047 L14.4863,35.047 C13.3413,35.046 12.1823,34.64 11.2993,33.896 C10.6223,33.326 9.8113,32.312 9.7943,30.727 L8.7943,30.739 C8.8103,32.271 9.4713,33.663 10.6553,34.66"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 48 48" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M36.2464,36.8011 C32.0764,39.8221 26.2254,38.8871 23.2034,34.7171 L16.1884,25.0331 C15.7834,24.4731 15.9054,23.6901 16.4604,23.2871 C17.0164,22.8871 17.7964,23.0151 18.2024,23.5701 L21.8834,28.6501 L22.9354,27.8881 L19.2564,22.8091 C19.2554,22.8071 19.2544,22.8071 19.2534,22.8051 L17.5404,20.4411 C17.1354,19.8801 17.2644,19.0931 17.8274,18.6841 C18.3914,18.2771 19.1804,18.3991 19.5854,18.9571 L23.8494,24.8421 L24.9014,24.0801 L20.6384,18.1951 C20.6374,18.1941 20.6364,18.1921 20.6354,18.1911 L19.0794,16.0431 C18.8904,15.7801 18.8244,15.4481 18.8954,15.1081 C18.9714,14.7431 19.1894,14.4151 19.5114,14.1831 C20.1544,13.7171 21.0074,13.7931 21.4124,14.3521 L22.9704,16.5021 L22.9724,16.5051 L27.5484,22.8221 L28.6004,22.0601 L24.0234,15.7401 C23.6204,15.1801 23.7494,14.3951 24.3124,13.9871 C24.5864,13.7871 24.9194,13.7041 25.2524,13.7601 C25.5844,13.8121 25.8744,13.9891 26.0714,14.2621 L33.3114,24.2091 C32.7654,24.4441 32.2454,24.7411 31.7984,25.1411 C30.1494,26.6171 29.5484,28.9251 30.2674,31.0201 L31.4964,30.5981 C30.9484,28.9991 31.4074,27.2371 32.6654,26.1101 C33.1864,25.6441 33.8184,25.3131 34.4934,25.1531 C34.7624,25.0881 34.9614,24.8611 34.9894,24.5861 L35.4904,19.6801 C35.5464,19.0631 35.7954,18.5801 36.2304,18.2451 C36.6554,17.9181 37.2514,17.7531 37.8804,17.7691 L39.6914,28.3921 C40.2374,31.6441 38.9174,34.8661 36.2464,36.8011 M40.9744,28.1751 L39.0794,17.0641 C39.0334,16.7911 38.8194,16.5781 38.5474,16.5321 C37.3894,16.3341 36.2554,16.5841 35.4374,17.2151 C34.7134,17.7731 34.2844,18.5841 34.1964,19.5551 L33.8684,22.7641 L27.1234,13.4981 C26.7234,12.9451 26.1304,12.5821 25.4544,12.4761 C24.7804,12.3721 24.1034,12.5321 23.5494,12.9341 C23.1764,13.2041 22.9074,13.5621 22.7294,13.9541 L22.4654,13.5891 C21.6394,12.4481 19.9714,12.2421 18.7484,13.1301 C18.1644,13.5521 17.7654,14.1601 17.6224,14.8421 C17.4764,15.5461 17.6194,16.2431 18.0264,16.8051 L18.2904,17.1701 C17.8624,17.2171 17.4384,17.3611 17.0654,17.6311 C15.9214,18.4601 15.6624,20.0631 16.4874,21.2031 L16.9044,21.7801 C16.4824,21.8261 16.0654,21.9671 15.6984,22.2351 C14.5624,23.0581 14.3094,24.6551 15.1354,25.7951 L22.1504,35.4801 C24.2294,38.3491 27.4824,39.8731 30.7814,39.8731 C32.9444,39.8731 35.1274,39.2171 37.0094,37.8541 C40.0824,35.6271 41.6014,31.9191 40.9744,28.1751 M11.4254,27.6401 L10.4374,27.4881 C10.2044,29.0021 10.6294,30.4851 11.6354,31.6611 C12.5384,32.7191 13.8374,33.4461 15.1994,33.6551 L15.3514,32.6661 C14.2234,32.4921 13.1454,31.8901 12.3954,31.0111 C11.8194,30.3381 11.1844,29.2061 11.4254,27.6401 M33.2304,8.5871 C34.5014,9.7511 35.1844,11.4101 35.2054,13.3851 L36.2054,13.3731 C36.1814,11.1161 35.3864,9.2061 33.9064,7.8501 C32.4704,6.5341 30.5254,5.8841 28.2654,5.8751 L28.2754,6.8751 C30.2694,6.9041 31.9844,7.4461 33.2304,8.5871 M28.3474,8.0881 L28.2894,8.0881 L28.3004,9.0881 C30.5054,9.1031 32.9624,10.7081 32.9924,13.4081 L33.9924,13.3971 C33.9564,10.1041 31.0454,8.0881 28.3474,8.0881 M10.4054,32.3581 C9.3414,31.0021 8.9374,29.2541 9.2374,27.3031 L8.2494,27.1511 C7.9064,29.3821 8.3794,31.3961 9.6184,32.9751 C10.8214,34.5081 12.6344,35.4991 14.8624,35.8421 L15.0154,34.8541 C13.0424,34.5501 11.4484,33.6871 10.4054,32.3581"
      />
    </svg>
  );
});

export default HandWaving;
