import React from 'react';
import {IconRawProps} from './Icon';

const Football = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M30.1777,38.8818 L31.6097,34.4748 L36.2247,34.4748 C34.5907,36.3788 32.5277,37.9028 30.1777,38.8818 L30.1777,38.8818 Z M19.3667,39.4318 L17.5867,33.9508 L20.7357,29.9018 L27.2637,29.9018 L30.4127,33.9518 L28.6327,39.4318 C27.1637,39.8738 25.6107,40.1178 23.9997,40.1178 C22.3887,40.1178 20.8357,39.8738 19.3667,39.4318 L19.3667,39.4318 Z M11.7747,34.4748 L16.3897,34.4748 L17.8217,38.8818 C15.4717,37.9028 13.4087,36.3788 11.7747,34.4748 L11.7747,34.4748 Z M18.6877,8.8008 L23.3497,12.1878 L23.3497,17.8968 L18.1067,21.7058 L12.9727,19.7508 L11.1887,14.2598 C13.0847,11.7718 15.6807,9.8548 18.6877,8.8008 L18.6877,8.8008 Z M27.7377,8.3378 L23.9997,11.0528 L20.2617,8.3378 C21.4647,8.0508 22.7117,7.8828 23.9997,7.8828 C25.2877,7.8828 26.5347,8.0508 27.7377,8.3378 L27.7377,8.3378 Z M36.8107,14.2598 L35.0267,19.7508 L29.8927,21.7058 L24.6497,17.8968 L24.6497,12.1878 L29.3117,8.8008 C32.3187,9.8548 34.9147,11.7728 36.8107,14.2598 L36.8107,14.2598 Z M36.3127,19.9998 L37.7377,15.6148 C39.0257,17.7158 39.8467,20.1278 40.0527,22.7158 L36.3127,19.9998 Z M20.8897,28.6018 L18.9687,22.6868 L23.9997,19.0318 L29.0307,22.6868 L27.1097,28.6018 L20.8897,28.6018 Z M7.9477,22.7158 C8.1527,20.1278 8.9737,17.7158 10.2617,15.6148 L11.6867,19.9998 L7.9477,22.7158 Z M16.5437,33.1748 L10.7647,33.1748 C9.0167,30.6598 7.9727,27.6278 7.9007,24.3568 L12.5477,20.9808 L17.6817,22.9358 L19.6937,29.1248 L16.5437,33.1748 Z M31.4557,33.1748 L28.3057,29.1248 L30.3167,22.9358 L35.4517,20.9808 L40.0987,24.3568 C40.0267,27.6278 38.9827,30.6598 37.2347,33.1748 L31.4557,33.1748 Z M23.9997,6.5828 C14.3957,6.5828 6.5827,14.3958 6.5827,23.9998 C6.5827,33.6048 14.3957,41.4178 23.9997,41.4178 C33.6037,41.4178 41.4177,33.6048 41.4177,23.9998 C41.4177,14.3958 33.6037,6.5828 23.9997,6.5828 L23.9997,6.5828 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M37.3271,35.4458 L31.6471,34.3858 L29.2941,29.8268 L32.4061,24.1118 L37.8111,23.1318 L41.7611,27.3028 C41.0901,30.5058 39.5071,33.2948 37.3271,35.4458 L37.3271,35.4458 Z M36.0961,36.5388 C34.1411,38.1108 31.8331,39.2308 29.3451,39.7618 L31.5601,35.6928 L36.0961,36.5388 Z M23.0441,39.8448 C21.4611,39.5498 19.9791,39.0248 18.6161,38.3208 L17.8701,32.6068 L21.7091,29.2028 L28.1261,30.3998 L30.4791,34.9588 L27.7241,40.0198 C26.2001,40.1848 24.6271,40.1398 23.0441,39.8448 L23.0441,39.8448 Z M12.0611,32.0548 L16.5981,32.9018 L17.1981,37.4968 C15.0671,36.1038 13.3191,34.2268 12.0611,32.0548 L12.0611,32.0548 Z M10.1081,21.3988 L15.2961,18.9318 L19.9851,21.7948 L20.8271,28.2478 L16.9881,31.6518 L11.3071,30.5918 C10.0501,27.7998 9.5791,24.6278 10.1081,21.3988 L10.1081,21.3988 Z M14.0311,13.2248 L14.6291,17.8088 L10.4521,19.7958 C11.1161,17.3278 12.3421,15.0938 14.0311,13.2248 L14.0311,13.2248 Z M16.8861,10.7068 C18.9151,9.3158 21.1831,8.4248 23.5451,8.0628 L27.5271,12.2688 L26.4801,17.8818 L20.6281,20.6648 L15.9391,17.8008 L15.1911,12.0648 C15.7251,11.5828 16.2821,11.1208 16.8861,10.7068 L16.8861,10.7068 Z M25.9661,7.8778 C26.9581,7.8778 27.9591,7.9698 28.9551,8.1558 C30.2221,8.3918 31.4171,8.7858 32.5461,9.2888 L28.3741,11.2728 L25.1881,7.9068 C25.4471,7.8948 25.7061,7.8778 25.9661,7.8778 L25.9661,7.8778 Z M28.2131,29.0938 L22.0991,27.9528 L21.2951,21.7868 L26.9111,19.1158 L31.1861,23.6318 L28.2131,29.0938 Z M40.3801,16.7748 L37.6191,21.8448 L32.2131,22.8258 L27.7581,18.1198 L28.8051,12.5078 L34.0091,10.0328 C36.7711,11.6208 38.9721,13.9808 40.3801,16.7748 L40.3801,16.7748 Z M42.0151,25.6818 L38.8381,22.3248 L41.0431,18.2758 C41.9231,20.5778 42.2881,23.0998 42.0151,25.6818 L42.0151,25.6818 Z M40.3661,14.1518 C37.7351,10.3148 33.7671,7.7318 29.1941,6.8778 C24.6211,6.0248 19.9891,7.0038 16.1511,9.6348 C12.3141,12.2648 9.7311,16.2328 8.8781,20.8058 C7.1171,30.2468 13.3651,39.3618 22.8061,41.1218 C23.8811,41.3228 24.9511,41.4198 26.0071,41.4198 C34.2261,41.4198 41.5611,35.5598 43.1221,27.1948 C43.9751,22.6208 42.9961,17.9888 40.3661,14.1518 L40.3661,14.1518 Z"
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

export default Football;
