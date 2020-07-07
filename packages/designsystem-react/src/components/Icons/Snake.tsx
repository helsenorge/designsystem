import React from 'react';
import {IconRawProps} from './Icon';

const Snake = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M20.007,10.3128 C21.851,8.6568 24.661,7.9018 27.715,8.2248 C33.363,8.8338 38.202,15.3828 38.202,16.7958 C38.202,17.5658 37.158,18.6508 35.651,19.4458 C36.081,19.6228 36.536,19.8638 36.98,20.1698 C37.718,19.8238 38.579,20.0138 38.7,20.0458 L38.7,20.0458 L38.541,20.6758 L38.386,21.3068 C38.155,21.2518 37.584,21.2108 37.393,21.4478 C37.074,21.8428 37.267,22.2608 37.291,22.3068 L37.291,22.3068 L36.143,22.9178 C35.948,22.5588 35.775,21.8458 36.087,21.1278 C35.082,20.4838 34.009,20.2668 33.676,20.2128 C33.025,20.3828 32.346,20.4878 31.661,20.4878 C30.248,20.4878 28.915,20.0458 27.741,19.4578 C27.989,20.2908 28.462,21.0358 28.991,21.8568 C29.874,23.2268 30.853,24.7718 30.85,27.0418 L30.85,27.0418 L34.798,27.0418 C36.541,27.0418 37.958,28.4598 37.958,30.2028 L37.958,30.2028 L37.958,32.1168 C37.958,32.8148 37.724,33.4528 37.34,33.9768 L37.34,33.9768 L38.077,33.9768 C39.819,33.9768 41.237,35.3948 41.237,37.1368 L41.237,37.1368 L41.237,39.0518 C41.237,40.7938 39.819,42.2118 38.077,42.2118 L38.077,42.2118 L9.923,42.2118 C8.181,42.2118 6.763,40.7938 6.763,39.0518 L6.763,39.0518 L6.763,37.1368 C6.763,35.3948 8.181,33.9768 9.923,33.9768 L9.923,33.9768 L10.66,33.9768 C10.276,33.4528 10.042,32.8148 10.042,32.1168 L10.042,32.1168 L10.042,30.2028 C10.042,28.5768 11.28,27.2498 12.859,27.0758 C11.897,25.7378 10.184,24.2768 7.807,22.7938 C7.117,22.3638 6.835,21.5588 7.107,20.7898 C7.38,20.0188 8.109,19.5698 8.918,19.6658 C12.73,20.1358 17.674,21.8128 19.912,27.0418 L19.912,27.0418 L21.382,27.0418 C21.382,25.5508 20.652,24.3138 19.815,22.9058 C18.769,21.1488 17.584,19.1558 17.584,16.2308 C17.584,13.7818 18.422,11.7358 20.007,10.3128 Z M38.077,35.2778 L9.923,35.2778 C8.898,35.2778 8.063,36.1118 8.063,37.1368 L8.063,37.1368 L8.063,39.0518 C8.063,40.0768 8.898,40.9108 9.923,40.9108 L9.923,40.9108 L38.077,40.9108 C39.103,40.9108 39.937,40.0768 39.937,39.0518 L39.937,39.0518 L39.937,37.1368 C39.937,36.1118 39.103,35.2778 38.077,35.2778 L38.077,35.2778 Z M34.798,28.3428 L13.202,28.3428 C12.176,28.3428 11.342,29.1768 11.342,30.2028 L11.342,30.2028 L11.342,32.1168 C11.342,33.1428 12.176,33.9768 13.202,33.9768 L13.202,33.9768 L34.798,33.9768 C35.824,33.9768 36.658,33.1428 36.658,32.1168 L36.658,32.1168 L36.658,30.2028 C36.658,29.1768 35.824,28.3428 34.798,28.3428 L34.798,28.3428 Z M8.76,20.9568 C8.471,20.9098 8.365,21.1308 8.333,21.2228 C8.301,21.3138 8.253,21.5398 8.495,21.6908 C11.454,23.5348 13.421,25.3338 14.378,27.0418 L14.378,27.0418 L18.495,27.0418 C16.395,22.7718 12.1,21.3678 8.76,20.9568 Z M27.576,9.5178 C24.888,9.2268 22.446,9.8698 20.875,11.2798 C19.554,12.4658 18.884,14.1318 18.884,16.2308 C18.884,18.7988 19.925,20.5488 20.932,22.2418 C21.835,23.7598 22.689,25.2048 22.684,27.0418 L22.684,27.0418 L26.024,27.0418 C26.054,24.7098 25.033,22.9608 24.111,21.4118 C22.958,19.4748 21.87,17.6448 23.476,15.4588 L23.476,15.4588 L23.949,14.8158 L24.483,15.4088 C24.518,15.4478 27.928,19.1868 31.661,19.1868 C34.486,19.1868 36.778,17.2438 36.905,16.7578 C36.775,15.9948 32.646,10.0648 27.576,9.5178 Z M24.136,16.9048 C23.678,18.0368 24.238,19.0818 25.229,20.7468 C26.19,22.3648 27.353,24.3548 27.323,27.0418 L27.323,27.0418 L29.5520232,27.0418 C29.557,25.1558 28.754,23.8888 27.898,22.5608 C27.149,21.3978 26.384,20.1918 26.277,18.6138 C25.36,17.9998 24.618,17.3608 24.136,16.9048 Z M29.9409,11.1904 C30.7889,11.1904 31.4789,11.8804 31.4789,12.7284 C31.4789,13.5764 30.7889,14.2664 29.9409,14.2664 C29.0919,14.2664 28.4019,13.5764 28.4019,12.7284 C28.4019,11.8804 29.0919,11.1904 29.9409,11.1904 Z M29.9409,12.1904 C29.6439,12.1904 29.4019,12.4314 29.4019,12.7284 C29.4019,13.0254 29.6439,13.2664 29.9409,13.2664 C30.2379,13.2664 30.4789,13.0254 30.4789,12.7284 C30.4789,12.4314 30.2379,12.1904 29.9409,12.1904 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M20.0012,10.3128 C21.8462,8.6568 24.6552,7.9018 27.7092,8.2248 C33.3572,8.8338 38.1962,15.3828 38.1962,16.7958 C38.1962,17.6138 37.0192,18.7828 35.3622,19.5858 C36.1412,19.8638 37.0602,20.0938 37.8672,20.0908 C37.9542,19.2948 38.5422,18.6658 38.6282,18.5778 L38.6282,18.5778 L39.0922,19.0338 L39.5572,19.4878 C39.3922,19.6588 39.0682,20.1298 39.1762,20.4158 C39.3552,20.8908 39.8132,20.9358 39.8652,20.9388 L39.8652,20.9388 L39.8102,22.2378 C39.4022,22.2238 38.6992,22.0118 38.2372,21.3768 C38.1122,21.3868 37.9872,21.4018 37.8592,21.4018 C36.1072,21.4018 34.2072,20.5538 33.5662,20.2408 C32.9472,20.3958 32.3032,20.4878 31.6552,20.4878 C30.2422,20.4878 28.9092,20.0458 27.7352,19.4578 C27.9842,20.2908 28.4572,21.0358 28.9852,21.8568 C29.8682,23.2268 30.8472,24.7718 30.8442,27.0418 L30.8442,27.0418 L34.7932,27.0418 C36.5352,27.0418 37.9522,28.4598 37.9522,30.2028 L37.9522,30.2028 L37.9522,32.1168 C37.9522,32.8148 37.7192,33.4528 37.3352,33.9768 L37.3352,33.9768 L38.0712,33.9768 C39.8142,33.9768 41.2312,35.3948 41.2312,37.1368 L41.2312,37.1368 L41.2312,39.0518 C41.2312,40.7938 39.8142,42.2118 38.0712,42.2118 L38.0712,42.2118 L9.9172,42.2118 C8.1752,42.2118 6.7582,40.7938 6.7582,39.0518 L6.7582,39.0518 L6.7582,37.1368 C6.7582,35.3948 8.1752,33.9768 9.9172,33.9768 L9.9172,33.9768 L10.6542,33.9768 C10.2702,33.4528 10.0362,32.8148 10.0362,32.1168 L10.0362,32.1168 L10.0362,30.2028 C10.0362,28.5768 11.2742,27.2498 12.8542,27.0758 C11.8912,25.7378 10.1782,24.2758 7.8012,22.7938 C7.1112,22.3638 6.8302,21.5588 7.1012,20.7898 C7.3742,20.0168 8.1022,19.5668 8.9132,19.6658 C12.7252,20.1358 17.6692,21.8128 19.9072,27.0418 L19.9072,27.0418 L21.3762,27.0418 C21.3772,25.5508 20.6462,24.3138 19.8092,22.9058 C18.7642,21.1488 17.5782,19.1558 17.5782,16.2308 C17.5782,13.7818 18.4162,11.7358 20.0012,10.3128 Z M38.0712,35.2778 L9.9172,35.2778 C8.8922,35.2778 8.0582,36.1118 8.0582,37.1368 L8.0582,37.1368 L8.0582,39.0518 C8.0582,40.0768 8.8922,40.9108 9.9172,40.9108 L9.9172,40.9108 L38.0712,40.9108 C39.0972,40.9108 39.9312,40.0768 39.9312,39.0518 L39.9312,39.0518 L39.9312,37.1368 C39.9312,36.1118 39.0972,35.2778 38.0712,35.2778 L38.0712,35.2778 Z M34.7932,28.3428 L13.1962,28.3428 C12.1712,28.3428 11.3362,29.1768 11.3362,30.2028 L11.3362,30.2028 L11.3362,32.1168 C11.3362,33.1428 12.1712,33.9768 13.1962,33.9768 L13.1962,33.9768 L34.7932,33.9768 C35.8182,33.9768 36.6532,33.1428 36.6532,32.1168 L36.6532,32.1168 L36.6532,30.2028 C36.6532,29.1768 35.8182,28.3428 34.7932,28.3428 L34.7932,28.3428 Z M8.7542,20.9568 C8.4662,20.9148 8.3602,21.1318 8.3272,21.2228 C8.2952,21.3138 8.2472,21.5398 8.4892,21.6908 C11.4482,23.5348 13.4152,25.3338 14.3722,27.0418 L14.3722,27.0418 L18.4892,27.0418 C16.3892,22.7718 12.0942,21.3678 8.7542,20.9568 Z M27.5702,9.5178 C24.8812,9.2238 22.4402,9.8688 20.8702,11.2798 C19.5492,12.4658 18.8782,14.1318 18.8782,16.2308 C18.8782,18.7988 19.9202,20.5488 20.9272,22.2418 C21.8292,23.7598 22.6832,25.2048 22.6782,27.0418 L22.6782,27.0418 L26.0182,27.0418 C26.0482,24.7098 25.0272,22.9608 24.1052,21.4118 C22.9532,19.4748 21.8652,17.6448 23.4712,15.4588 L23.4712,15.4588 L23.9442,14.8158 L24.4782,15.4088 C24.5122,15.4478 27.9232,19.1868 31.6552,19.1868 C34.4812,19.1868 36.7732,17.2438 36.8992,16.7578 C36.7692,15.9948 32.6402,10.0648 27.5702,9.5178 Z M24.1312,16.9048 C23.6722,18.0368 24.2322,19.0818 25.2232,20.7468 C26.1842,22.3648 27.3472,24.3548 27.3172,27.0418 L27.3172,27.0418 L29.5462232,27.0418 C29.5512,25.1558 28.7482,23.8888 27.8922,22.5608 C27.1432,21.3978 26.3792,20.1918 26.2722,18.6138 C25.3552,17.9998 24.6122,17.3608 24.1312,16.9048 Z M29.9351,11.1904 C30.7831,11.1904 31.4731,11.8804 31.4731,12.7284 C31.4731,13.5764 30.7831,14.2664 29.9351,14.2664 C29.0871,14.2664 28.3971,13.5764 28.3971,12.7284 C28.3971,11.8804 29.0871,11.1904 29.9351,11.1904 Z M29.9351,12.1904 C29.6381,12.1904 29.3971,12.4314 29.3971,12.7284 C29.3971,13.0254 29.6381,13.2664 29.9351,13.2664 C30.2321,13.2664 30.4731,13.0254 30.4731,12.7284 C30.4731,12.4314 30.2321,12.1904 29.9351,12.1904 Z"
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

export default Snake;
