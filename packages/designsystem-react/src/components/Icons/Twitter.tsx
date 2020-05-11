import React from 'react';
import {IconRawProps} from './Icon';

const Twitter = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M9.697,35.689 C18.567,38.814 25.016,35.564 28.223,33.177 C33.627,29.155 37.087,22.195 36.27,16.987 C36.229,16.72 36.356,16.456 36.591,16.322 L39.707,14.541 L37.668,14.319 C37.454,14.296 37.265,14.168 37.164,13.978 C37.063,13.788 37.062,13.56 37.163,13.37 L37.874,12.025 L35.259,13.35 C35.002,13.476 34.696,13.426 34.498,13.222 C33.379,12.068 31.807,11.389 29.828,11.202 C28.338,11.061 27.061,11.428 26.034,12.292 C23.586,14.35 23.231,18.53 23.228,18.572 C23.206,18.856 23.001,19.092 22.723,19.155 C17.817,20.262 11.425,15.746 8.99,13.827 C8.648,20.645 10.558,24.922 12.28,27.35 C14.251,30.127 16.407,31.152 16.428,31.162 C16.599,31.241 16.728,31.392 16.78,31.573 C16.832,31.755 16.803,31.95 16.7,32.108 C15.093,34.562 12.027,35.411 9.697,35.689 M16.884,38.2840011 C13.802,38.285 10.29,37.586 6.399,35.723 C6.117,35.588 5.97,35.271 6.051,34.969 C6.133,34.667 6.403,34.462 6.73,34.489 C6.789,34.492 12.576,34.901 15.184,31.956 C13.004,30.608 6.646,25.516 7.781,12.467 C7.802,12.223 7.959,12.011 8.186,11.92 C8.412,11.828 8.672,11.872 8.857,12.034 C8.935,12.103 16.592,18.744 21.99,17.969 C22.171,16.684 22.857,13.264 25.197,11.297 C26.502,10.201 28.099,9.734 29.951,9.908 C32.053,10.106 33.777,10.803 35.083,11.981 L39.109,9.942 C39.364,9.815 39.67,9.865 39.867,10.066 C40.065,10.268 40.11,10.575 39.978,10.826 L38.759,13.13 L41.84,13.465 C42.12,13.496 42.348,13.703 42.406,13.979 C42.463,14.254 42.337,14.536 42.092,14.676 L37.616,17.233 C38.267,22.905 34.706,29.973 28.999,34.22 C26.58,36.021 22.432,38.2840011 16.884,38.2840011"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M39.1093,9.9418 C39.3623,9.8148 39.6693,9.8648 39.8663,10.0668 C40.0653,10.2678 40.1103,10.5748 39.9783,10.8258 L39.9783,10.8258 L38.7593,13.1308 L41.8393,13.4658 C42.1193,13.4958 42.3483,13.7028 42.4053,13.9788 C42.4623,14.2548 42.3363,14.5358 42.0913,14.6758 L42.0913,14.6758 L37.6153,17.2338 C38.2673,22.9048 34.7053,29.9728 28.9983,34.2198 C26.5793,36.0208 22.4323,38.2838011 16.8843,38.2838011 C13.8023,38.2848 10.2893,37.5868 6.3993,35.7228 C6.1163,35.5878 5.9703,35.2708 6.0513,34.9688 C6.1333,34.6668 6.4163,34.4618 6.7303,34.4888 C6.7863,34.4918 12.5763,34.9008 15.1843,31.9558 C13.0033,30.6078 6.6463,25.5158 7.7803,12.4668 C7.8023,12.2228 7.9583,12.0108 8.1863,11.9198 C8.4103,11.8278 8.6713,11.8718 8.8573,12.0338 C8.9363,12.1028 16.5883,18.7438 21.9893,17.9688 C22.1703,16.6838 22.8573,13.2638 25.1963,11.2968 C26.5013,10.2008 28.1023,9.7338 29.9503,9.9078 C32.0533,10.1058 33.7773,10.8028 35.0823,11.9808 L35.0823,11.9808 Z M29.8273,11.2018 C28.3383,11.0608 27.0613,11.4278 26.0333,12.2918 C23.5853,14.3498 23.2313,18.5298 23.2283,18.5718 C23.2053,18.8558 23.0003,19.0928 22.7233,19.1548 C17.8163,20.2618 11.4243,15.7458 8.9893,13.8268 C8.6483,20.6448 10.5583,24.9228 12.2793,27.3498 C14.2503,30.1278 16.4063,31.1518 16.4283,31.1618 C16.5993,31.2408 16.7283,31.3918 16.7793,31.5728 C16.8313,31.7548 16.8033,31.9498 16.6993,32.1088 C15.0923,34.5618 12.0273,35.4108 9.6963,35.6888 C18.5673,38.8138 25.0163,35.5648 28.2233,33.1768 C33.6263,29.1548 37.0863,22.1948 36.2703,16.9868 C36.2293,16.7198 36.3563,16.4558 36.5903,16.3218 L36.5903,16.3218 L39.7063,14.5408 L37.6673,14.3198 C37.4533,14.2968 37.2653,14.1688 37.1633,13.9778 C37.0633,13.7878 37.0623,13.5598 37.1623,13.3698 L37.1623,13.3698 L37.8733,12.0248 L35.2583,13.3498 C35.0023,13.4758 34.6953,13.4258 34.4973,13.2218 C33.3783,12.0688 31.8073,11.3888 29.8273,11.2018 Z M29.4419,14.4141 C30.0799,14.4141 30.5969,14.9321 30.5969,15.5701 C30.5969,16.2081 30.0799,16.7261 29.4419,16.7261 C28.8039,16.7261 28.2869,16.2081 28.2869,15.5701 C28.2869,14.9321 28.8039,14.4141 29.4419,14.4141 Z"
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

export default Twitter;
