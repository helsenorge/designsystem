import React from 'react';
import {IconRawProps} from './Icon';

const Cigarette = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M41.301,28.569 L41.301,36.443 L5.653,36.443 L5.653,28.569 L41.301,28.569 Z M16.245,29.87 L6.953,29.87 L6.953,35.144 L16.245,35.144 L16.245,29.87 Z M40.001,29.87 L35.773,29.87 L35.773,35.144 L40.001,35.144 L40.001,29.87 Z M34.473,29.87 L17.545,29.87 L17.545,35.144 L34.473,35.144 L34.473,29.87 Z M41.2622,8.1669 L42.2592,8.2469 C42.1952,9.0359 42.3292,9.6059 42.4582,10.1579 C42.5932,10.7299 42.7202,11.2699 42.5632,11.8909 C42.2202,13.2559 41.4242,13.9719 40.7852,14.5479 C40.2572,15.0239 39.9822,15.2899 39.9912,15.6789 C40.0102,16.4959 40.3762,16.9199 40.8012,17.4109 C41.2472,17.9259 41.7522,18.5109 41.7522,19.5219 C41.7522,20.7079 41.1722,21.2389 40.7072,21.6669 C40.2442,22.0909 39.8442,22.4589 39.8442,23.5409 C39.8442,24.3529 39.9972,24.8639 40.1462,25.3579 C40.2792,25.7989 40.4162,26.2559 40.4162,26.8559 L40.4162,26.8559 L39.4162,26.8559 C39.4162,26.4029 39.3112,26.0519 39.1882,25.6449 C39.0272,25.1089 38.8442,24.5009 38.8442,23.5409 C38.8442,22.0189 39.5022,21.4159 40.0312,20.9299 C40.4652,20.5309 40.7522,20.2679 40.7522,19.5219 C40.7522,18.8829 40.4402,18.5219 40.0452,18.0649 C39.5872,17.5359 39.0182,16.8779 38.9912,15.7019 C38.9712,14.8369 39.5532,14.3119 40.1162,13.8049 C40.7102,13.2699 41.3252,12.7159 41.5942,11.6469 C41.6902,11.2619 41.6042,10.8949 41.4852,10.3859 C41.3522,9.8189 41.1862,9.1119 41.2622,8.1669 L41.2622,8.1669 Z M38.7287,11.4525 C38.7287,12.5545 38.0067,13.3345 37.3697,14.0235 C36.9087,14.5215 36.4737,14.9925 36.4737,15.4365 C36.4737,16.3605 36.8667,16.8425 37.3217,17.3995 C37.7587,17.9345 38.2537,18.5405 38.2547,19.5215 C38.2557,20.5185 37.7377,21.0285 37.2807,21.4785 C36.7797,21.9725 36.3467,22.3985 36.3467,23.5405 C36.3467,24.3525 36.5007,24.8635 36.6487,25.3575 C36.7817,25.7995 36.9187,26.2555 36.9187,26.8555 L36.9187,26.8555 L35.9187,26.8555 C35.9187,26.4025 35.8137,26.0515 35.6907,25.6445 C35.5297,25.1085 35.3467,24.5005 35.3467,23.5405 C35.3467,21.9795 36.0297,21.3075 36.5787,20.7665 C36.9857,20.3645 37.2547,20.0995 37.2547,19.5225 C37.2537,18.8975 36.9417,18.5155 36.5477,18.0315 C36.0687,17.4465 35.4737,16.7175 35.4737,15.4365 C35.4737,14.6015 36.0647,13.9625 36.6367,13.3445 C37.1977,12.7365 37.7287,12.1625 37.7287,11.4525 L37.7287,11.4525 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M41.302,28.569 L41.302,36.443 L5.653,36.443 L5.653,28.569 L41.302,28.569 Z M16.245,29.87 L6.953,29.87 L6.953,35.144 L16.245,35.144 L16.245,29.87 Z M40.001,29.87 L35.773,29.87 L35.773,35.144 L40.001,35.144 L40.001,29.87 Z M34.473,29.87 L17.545,29.87 L17.545,35.144 L34.473,35.144 L34.473,29.87 Z M37.7552,9.2975 C37.7642,9.3115 38.7262,10.7555 38.7292096,11.4505 C38.7322,12.4705 38.0282,13.2515 37.4072,13.9405 C36.9272,14.4735 36.4742,14.9765 36.4742,15.4365 C36.4742,16.3605 36.8672,16.8425 37.3222,17.3995 C37.7592,17.9345 38.2542,18.5405 38.2552,19.5215 C38.2552,20.5185 37.7372,21.0285 37.2802,21.4785 C36.7792,21.9725 36.3472,22.3985 36.3472,23.5405 C36.3472,23.7785 36.3812,23.9885 36.4112,24.1805 C36.4442,24.3875 36.4712,24.5795 36.4712,24.7615 L36.4712,24.7615 L35.4712,24.7615 C35.4712,24.6275 35.4472,24.4865 35.4232,24.3335 C35.3862,24.0965 35.3472,23.8355 35.3472,23.5405 C35.3472,21.9795 36.0302,21.3075 36.5782,20.7665 C36.9862,20.3645 37.2552,20.0995 37.2552,19.5225 C37.2542,18.8975 36.9422,18.5155 36.5472,18.0315 C36.0692,17.4465 35.4742,16.7175 35.4742,15.4365 C35.4742,14.5925 36.0792,13.9215 36.6642,13.2715 C37.2122,12.6625 37.7312,12.0875 37.7292,11.4535 C37.7142,11.2345 37.2892,10.3865 36.9302,9.8635 L36.9302,9.8635 Z M42.25,6.3568 L42.942,7.0778 C42.706,7.3048 42.306,8.0128 42.252,8.2988 C42.13,8.9518 42.278,9.5428 42.422,10.1138 C42.567,10.6888 42.717,11.2828 42.564,11.8908 C42.22,13.2558 41.425,13.9718 40.786,14.5478 C40.257,15.0238 39.982,15.2898 39.991,15.6788 C40.01,16.4958 40.377,16.9198 40.802,17.4108 C41.247,17.9258 41.752,18.5108 41.752,19.5218 C41.752,20.7078 41.173,21.2388 40.708,21.6668 C40.244,22.0908 39.844,22.4588 39.844,23.5408 C39.844,23.7108 39.862,23.9578 39.878,24.1888 C39.894,24.4168 39.907,24.6318 39.907,24.7608 L39.907,24.7608 L38.907,24.7608 C38.907,24.6468 38.894,24.4578 38.88,24.2568 C38.862,24.0018 38.844,23.7278 38.844,23.5408 C38.844,22.0188 39.502,21.4158 40.031,20.9298 C40.465,20.5308 40.752,20.2678 40.752,19.5218 C40.752,18.8828 40.44,18.5218 40.045,18.0648 C39.588,17.5358 39.019,16.8778 38.991,15.7018 C38.972,14.8368 39.554,14.3118 40.116,13.8048 C40.71,13.2698 41.325,12.7158 41.594,11.6468 C41.686,11.2828 41.577,10.8548 41.453,10.3578 C41.29,9.7138 41.106,8.9828 41.27,8.1148 C41.37,7.5788 41.893,6.6998 42.25,6.3568 L42.25,6.3568 Z"
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

export default Cigarette;