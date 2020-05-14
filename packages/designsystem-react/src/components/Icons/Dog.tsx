import React from 'react';
import {IconRawProps} from './Icon';

const Dog = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M18.863,19.8748 C18.497,19.8748 18.201,20.1708 18.201,20.5368 C18.201,20.9018 18.497,21.1988 18.863,21.1988 C19.228,21.1988 19.524,20.9018 19.524,20.5368 C19.524,20.1708 19.228,19.8748 18.863,19.8748 M41.225,22.5908 C40.865,23.3248 40.393,23.7118 39.784,23.7758 C39.156,23.8388 38.568,23.6458 37.998,23.1788 C35.139,20.8418 33.961,13.0788 33.658,10.6708 C33.702,10.6258 33.737,10.5748 33.767,10.5168 C35.265,10.3088 38.82,10.1208 40.387,12.6568 C41.779,14.9088 42.435,20.1308 41.225,22.5908 M33.353,33.2868 C32.289,34.6288 30.843,35.3228 28.932,35.4078 C25.818,35.5558 24.807,34.0038 24.614,33.6188 L24.614,31.7668 C24.614,31.7608 24.611,31.7558 24.61,31.7508 C26.294,31.4398 27.632,29.9888 27.632,28.7708 C27.632,27.4198 26.02,26.3608 23.964,26.3608 C21.906,26.3608 20.295,27.4198 20.295,28.7708 C20.295,29.9888 21.634,31.4398 23.317,31.7508 C23.316,31.7558 23.313,31.7608 23.313,31.7668 L23.313,33.6178 C23.113,34.0148 22.13,35.5438 18.995,35.4078 C17.084,35.3228 15.638,34.6288 14.574,33.2868 C11.47,29.3718 12.923,21.3988 12.937,21.3188 C12.94,21.3018 12.934,21.2868 12.936,21.2708 C14.745,17.5468 15.479,12.1818 15.669,10.5468 C17.56,9.8088 23.842,7.8908 32.341,10.6378 C32.545,12.3508 33.268,17.4708 34.993,21.1178 C34.984,21.1838 34.977,21.2498 34.99,21.3188 C35.005,21.3988 36.457,29.3718 33.353,33.2868 M21.595,28.7708 C21.595,28.3178 22.517,27.6608 23.964,27.6608 C25.409,27.6608 26.331,28.3178 26.331,28.7708 C26.331,29.3538 25.307,30.5178 23.964,30.5178 C22.619,30.5178 21.595,29.3538 21.595,28.7708 M23.964,38.8108 C20.995,38.8108 20.055,37.5198 19.757,36.7018 C22.054,36.6118 23.317,35.6958 23.964,34.9458 C24.598,35.6828 25.827,36.5808 28.049,36.6978 C27.618,37.5468 26.544,38.8108 23.964,38.8108 M10.002,23.1798 C9.43,23.6458 8.842,23.8398 8.217,23.7758 C7.607,23.7118 7.135,23.3248 6.774,22.5908 C5.565,20.1308 6.221,14.9098 7.613,12.6568 C8.756,10.8068 10.969,10.4088 12.663,10.4088 C13.262,10.4088 13.789,10.4588 14.187,10.5118 C14.188,10.5138 14.187,10.5148 14.188,10.5168 C14.225,10.5918 14.278,10.6538 14.337,10.7068 C14.028,13.1538 12.846,20.8528 10.002,23.1798 M41.493,11.9738 C39.002,7.9418 33.028,9.3108 32.775,9.3718 C32.756,9.3758 32.741,9.3888 32.721,9.3948 C23.727,6.4918 17.17,8.5378 15.141,9.3528 C14.417,9.1938 8.884,8.1258 6.508,11.9738 C4.903,14.5708 4.173,20.2448 5.608,23.1648 C6.166,24.2998 7.022,24.9588 8.082,25.0688 C8.207,25.0818 8.331,25.0878 8.455,25.0878 C9.296,25.0878 10.092,24.7858 10.826,24.1858 C11.007,24.0368 11.18,23.8668 11.348,23.6868 C11.142,26.5718 11.251,31.1848 13.553,34.0918 C14.744,35.5938 16.377,36.4508 18.403,36.6588 C18.662,37.7858 19.712,40.1098 23.964,40.1098 C27.823,40.1098 29.087,37.7248 29.46,36.6648 C31.515,36.4678 33.171,35.6098 34.374,34.0918 C36.699,31.1568 36.787,26.4818 36.573,23.6028 C36.765,23.8158 36.966,24.0138 37.175,24.1848 C37.908,24.7858 38.704,25.0878 39.546,25.0878 C39.67,25.0878 39.794,25.0818 39.919,25.0688 C40.978,24.9588 41.834,24.2998 42.392,23.1648 C43.828,20.2448 43.097,14.5708 41.493,11.9738 M29.064,19.8748 C28.698,19.8748 28.402,20.1708 28.402,20.5368 C28.402,20.9018 28.698,21.1988 29.064,21.1988 C29.43,21.1988 29.726,20.9018 29.726,20.5368 C29.726,20.1708 29.43,19.8748 29.064,19.8748"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M41.225,22.5912 C40.865,23.3252 40.393,23.7122 39.784,23.7762 C39.153,23.8392 38.57,23.6462 37.998,23.1792 C35.141,20.8422 33.96,13.0812 33.658,10.6722 C33.702,10.6272 33.738,10.5752 33.767,10.5182 C35.267,10.3132 38.826,10.1292 40.387,12.6572 C41.779,14.9092 42.435,20.1312 41.225,22.5912 L41.225,22.5912 Z M33.353,33.2862 C32.288,34.6292 30.843,35.3222 28.932,35.4072 C25.781,35.5552 24.807,34.0042 24.614,33.6192 L24.614,31.7672 C24.614,31.7612 24.611,31.7562 24.611,31.7512 C26.294,31.4402 27.632,29.9892 27.632,28.7712 C27.632,27.4202 26.021,26.3612 23.963,26.3612 C21.907,26.3612 20.295,27.4202 20.295,28.7712 C20.295,29.9892 21.632,31.4402 23.316,31.7512 C23.316,31.7562 23.313,31.7612 23.313,31.7672 L23.313,33.6172 C23.114,34.0142 22.105,35.5542 18.995,35.4072 C17.083,35.3222 15.638,34.6292 14.574,33.2862 C11.47,29.3712 12.922,21.3992 12.937,21.3192 C12.94,21.3022 12.935,21.2872 12.937,21.2702 C14.745,17.5482 15.479,12.1842 15.669,10.5492 C17.566,9.8132 23.865,7.9002 32.341,10.6372 C32.544,12.3502 33.269,17.4692 34.993,21.1172 C34.984,21.1832 34.977,21.2502 34.99,21.3192 C35.004,21.3992 36.456,29.3712 33.353,33.2862 L33.353,33.2862 Z M27.922,38.1502 L27.779,36.6862 C28.017,36.7062 28.268,36.7162 28.532,36.7162 C28.679,36.7162 28.832,36.7132 28.99,36.7062 C28.799,37.1292 28.468,37.6602 27.922,38.1502 L27.922,38.1502 Z M21.596,28.7712 C21.596,28.3182 22.518,27.6612 23.963,27.6612 C25.41,27.6612 26.331,28.3182 26.331,28.7712 C26.331,29.3532 25.308,30.5172 23.963,30.5172 C22.62,30.5172 21.596,29.3532 21.596,28.7712 L21.596,28.7712 Z M26.044,41.6102 C24.986,42.7782 23.014,42.7782 21.955,41.6092 C21.425,41.0252 21.176,40.2712 21.252,39.4862 L21.552,36.4282 C22.478,36.1592 23.139,35.7382 23.6,35.3172 L23.6,39.5392 L24.401,39.5392 L24.401,35.3872 C24.871,35.7972 25.536,36.1992 26.451,36.4522 L26.747,39.4862 C26.824,40.2712 26.575,41.0252 26.044,41.6102 L26.044,41.6102 Z M20.051,38.4272 C19.288,37.8632 18.951,37.1842 18.807,36.6952 C18.851,36.6972 18.892,36.7042 18.936,36.7062 C19.093,36.7132 19.246,36.7162 19.395,36.7162 C19.688,36.7162 19.96,36.7002 20.223,36.6762 L20.051,38.4272 Z M10.001,23.1792 C9.43,23.6462 8.846,23.8402 8.216,23.7762 C7.607,23.7122 7.135,23.3252 6.775,22.5912 C5.565,20.1312 6.221,14.9092 7.613,12.6562 C8.755,10.8072 10.969,10.4092 12.663,10.4092 C13.263,10.4092 13.789,10.4592 14.188,10.5122 C14.189,10.5132 14.189,10.5142 14.189,10.5152 C14.227,10.5902 14.279,10.6532 14.337,10.7052 C14.029,13.1512 12.846,20.8522 10.001,23.1792 L10.001,23.1792 Z M41.493,11.9742 C39.002,7.9422 33.028,9.3102 32.775,9.3712 C32.755,9.3762 32.741,9.3882 32.722,9.3952 C23.728,6.4912 17.169,8.5372 15.142,9.3532 C14.415,9.1932 8.88,8.1282 6.507,11.9732 C4.903,14.5702 4.172,20.2452 5.608,23.1642 C6.166,24.3002 7.022,24.9592 8.081,25.0692 C8.206,25.0822 8.33,25.0882 8.454,25.0882 C9.295,25.0882 10.092,24.7852 10.826,24.1852 C11.007,24.0372 11.179,23.8672 11.349,23.6872 C11.142,26.5722 11.249,31.1852 13.553,34.0912 C14.548,35.3472 15.851,36.1532 17.433,36.5072 C17.556,37.2812 18.046,38.8942 19.963,39.9032 C19.998,40.8532 20.347,41.7712 20.993,42.4832 C21.76,43.3292 22.857,43.8152 24,43.8152 C25.143,43.8152 26.24,43.3302 27.007,42.4832 C27.704,41.7162 28.057,40.7082 28.038,39.6792 C29.662,38.6442 30.257,37.1732 30.444,36.5162 C32.048,36.1682 33.369,35.3602 34.373,34.0912 C36.699,31.1572 36.787,26.4822 36.573,23.6032 C36.765,23.8172 36.964,24.0142 37.174,24.1852 C37.909,24.7852 38.704,25.0882 39.546,25.0882 C39.669,25.0882 39.793,25.0822 39.918,25.0692 C40.978,24.9592 41.833,24.3002 42.392,23.1642 C43.828,20.2452 43.097,14.5702 41.493,11.9742 L41.493,11.9742 Z M29.064,19.8752 C28.699,19.8752 28.402,20.1712 28.402,20.5372 C28.402,20.9022 28.699,21.1982 29.064,21.1982 C29.43,21.1982 29.726,20.9022 29.726,20.5372 C29.726,20.1712 29.43,19.8752 29.064,19.8752 L29.064,19.8752 Z M18.863,19.8752 C18.497,19.8752 18.201,20.1712 18.201,20.5372 C18.201,20.9022 18.497,21.1982 18.863,21.1982 C19.228,21.1982 19.525,20.9022 19.525,20.5372 C19.525,20.1712 19.228,19.8752 18.863,19.8752 L18.863,19.8752 Z"
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

export default Dog;
