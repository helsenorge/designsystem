import React from 'react';
import {SvgPathProps} from './Icon';

const Dizzy: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.27,20.8076 L27.906,20.8296 L27.895,22.1296 L25.259,22.1076 L25.27,20.8076 Z M20.739,12.7626 L19.086,14.1096 L20.434,15.7616 L19.659,16.3936 L17.68,13.9656 L20.107,11.9866 L20.739,12.7626 Z M21.727,5.7916 L23.314,4.3696 L21.891,2.7826 L22.635,2.1146 L24.726,4.4466 L22.394,6.5366 L21.727,5.7916 Z M34.499,26.8076 C34.342,27.0536 34.085,27.1946 33.793,27.1946 L31.937,27.1946 L31.937,29.2336 C31.937,32.1566 29.56,34.5346 26.638,34.5346 L25.987,34.5346 L25.987,39.7186 L13.846,39.7186 L13.846,34.3216 C13.846,31.7206 12.929,29.9066 11.957,27.9856 C10.879,25.8526 9.765,23.6466 9.765,20.0146 C9.765,17.6516 10.559,15.2086 12.01,13.1956 C13.231,13.7276 14.724,14.1526 16.436,14.4266 L16.594,13.4386 C15.092,13.1986 13.757,12.8316 12.654,12.3836 C14.565,10.1796 17.351,8.6626 20.808,8.6626 C23.835,8.6626 26.969,9.9406 29.137,12.3896 C27.199,13.1686 24.535,13.6876 21.598,13.7596 L21.622,14.7596 C24.856,14.6806 27.697,14.0956 29.773,13.1876 C31.102,15.0146 31.937,17.3716 31.937,20.2356 L31.937,20.3786 L34.553,26.0026 C34.676,26.2676 34.656,26.5606 34.499,26.8076 L34.499,26.8076 Z M35.731,25.4546 L33.237,20.0906 C33.21,17.0666 32.336,14.5586 30.952,12.5856 C32.439,11.7016 33.314,10.6096 33.314,9.4136 C33.314,7.2116 30.444,5.3236 25.824,4.4856 L25.645,5.4696 C29.634,6.1926 32.314,7.7776 32.314,9.4136 C32.314,10.2876 31.583,11.1146 30.352,11.8096 C27.925,8.8956 24.307,7.3636 20.808,7.3636 C17.059,7.3636 13.701,9.0916 11.435,11.8046 C10.181,11.0956 9.45,10.2596 9.45,9.4136 C9.45,7.3106 14.043,5.0586 20.882,5.0586 L20.882,4.0586 C13.911,4.0586 8.45,6.4116 8.45,9.4136 C8.45,10.6006 9.315,11.7036 10.829,12.5986 C9.349,14.6846 8.464,17.2436 8.464,20.0146 C8.464,23.9566 9.704,26.4086 10.797,28.5716 C11.735,30.4276 12.546,32.0306 12.546,34.3216 L12.546,41.0186 L27.288,41.0186 L27.288,35.8026 C30.623,35.4746 33.238,32.6536 33.238,29.2336 L33.238,28.4946 L33.793,28.4946 C34.527,28.4946 35.201,28.1246 35.595,27.5066 C35.99,26.8876 36.041,26.1206 35.731,25.4546 L35.731,25.4546 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M25.27,20.8076 L27.906,20.8296 L27.895,22.1296 L25.259,22.1076 L25.27,20.8076 Z M18.687,12.7286 L16.975,13.9986 L18.245,15.7116 L17.442,16.3076 L15.575,13.7916 L18.09,11.9256 L18.687,12.7286 Z M24.299,6.1906 L26.092,5.0376 L24.939,3.2446 L25.78,2.7036 L27.474,5.3386 L24.839,7.0316 L24.299,6.1906 Z M34.499,26.8076 C34.342,27.0536 34.085,27.1946 33.793,27.1946 L31.937,27.1946 L31.937,29.2336 C31.937,32.1566 29.56,34.5346 26.638,34.5346 L25.987,34.5346 L25.987,39.7186 L13.846,39.7186 L13.846,34.3216 C13.846,31.7206 12.929,29.9066 11.957,27.9856 C10.879,25.8526 9.765,23.6466 9.765,20.0146 C9.765,17.6526 10.558,15.2106 12.008,13.1986 C12.716,13.5056 13.513,13.7796 14.402,14.0076 L14.651,13.0386 C13.915,12.8496 13.251,12.6286 12.652,12.3866 C14.563,10.1816 17.349,8.6626 20.808,8.6626 C23.835,8.6626 26.968,9.9406 29.136,12.3896 C27.134,13.2096 24.287,13.7676 20.882,13.7676 C20.307,13.7676 19.742,13.7516 19.189,13.7196 L19.131,14.7176 C19.703,14.7506 20.287,14.7676 20.882,14.7676 C24.401,14.7676 27.532,14.1676 29.773,13.1876 C31.102,15.0146 31.937,17.3716 31.937,20.2356 L31.937,20.3786 L34.553,26.0026 C34.676,26.2676 34.656,26.5606 34.499,26.8076 L34.499,26.8076 Z M35.731,25.4546 L33.237,20.0906 C33.21,17.0656 32.335,14.5566 30.95,12.5826 C32.436,11.7006 33.314,10.6106 33.314,9.4136 C33.314,7.7286 31.604,6.1896 28.623,5.1906 L28.305,6.1396 C30.815,6.9806 32.314,8.2046 32.314,9.4136 C32.314,10.2346 31.605,11.0766 30.344,11.8006 C27.918,8.8926 24.304,7.3636 20.808,7.3636 C17.058,7.3636 13.7,9.0916 11.435,11.8046 C10.175,11.0926 9.45,10.2586 9.45,9.4136 C9.45,7.3546 13.652,5.4686 19.016,5.1196 C20.358,5.0316 21.8,5.0386 23.164,5.1496 C23.428,5.1706 23.688,5.1956 23.945,5.2236 L24.055,4.2296 C23.788,4.2006 23.518,4.1746 23.244,4.1526 C21.832,4.0386 20.339,4.0306 18.951,4.1216 C12.768,4.5236 8.45,6.6996 8.45,9.4136 C8.45,10.5986 9.302,11.7036 10.826,12.6026 C9.347,14.6886 8.464,17.2446 8.464,20.0146 C8.464,23.9566 9.704,26.4086 10.797,28.5716 C11.735,30.4276 12.546,32.0306 12.546,34.3216 L12.546,41.0186 L27.288,41.0186 L27.288,35.8026 C30.623,35.4746 33.237,32.6536 33.237,29.2336 L33.237,28.4946 L33.793,28.4946 C34.527,28.4946 35.201,28.1246 35.595,27.5056 C35.99,26.8876 36.041,26.1206 35.731,25.4546 L35.731,25.4546 Z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Dizzy;
